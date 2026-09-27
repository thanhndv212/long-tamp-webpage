---
title: BehaviorTree.CPP host
---

# BehaviorTree.CPP host: mission execution without ROS

The behavior-tree example turns a declarative, validated TaskPlan into executable BehaviorTree.CPP XML and runs it from a standalone C++ process. Python planning stays in-process through embedded CPython, avoiding a ROS service or network boundary.

## Compilation pipeline

```mermaid
flowchart LR
  J[TaskPlan JSON] --> N[Normalize and validate]
  N --> C[CapabilityRegistry policy]
  C --> F[Semantic fingerprint]
  F --> X[Deterministic BT XML]
  X --> H[C++ host]
  H --> P[Embedded Python session]
  P --> T[LongTAMP task]
```

Supported IR node types are `sequence`, `fallback`, `retry`, `condition`, `operation`, and `transaction`. Node IDs are unique and schema-constrained. Capability descriptors define parameter types, timeout ceilings, retry limits, and whether an operation can restart safely.

## Determinism and policy

The plan is normalized to canonical JSON and hashed together with a capability-registry snapshot. Equivalent documents therefore produce the same semantic fingerprint, while a policy change affects the fingerprint even if the plan text does not.

A `retry` cannot exceed the child capability’s attempt limit. A `transaction` must contain exactly one restartable operation and declares the state needed to resume. These rules are checked before the behavior tree executes.

## Runtime bridge

The C++ host embeds CPython, constructs a planning session, and invokes registered operations directly. This retains BehaviorTree.CPP’s execution semantics while reusing the Python planning library in one process. It also keeps the open-source execution path independent of the proprietary dynamic behavior-tree engine used by the Agimus SpaceLab predecessor.

## Build

```bash
cmake -S . -B build-bt -DBUILD_BEHAVIORTREE_EXAMPLES=ON
cmake --build build-bt
```

The [integration reference](https://github.com/thanhndv212/long-tamp/blob/main/docs/usage/behaviortree-integration.md) documents node mappings, blackboard ports, session setup, checkpoint behavior, and how to add a capability.

## Evidence

The host was run again on 27 September 2026. It compiled the sample move-home transaction, executed it, and returned `SUCCESS` with the completed operation `move-home` and plan fingerprint `5d6b6ff46b1429c5438ede43eda4013a056841695de8143e3d7d75f88e5d57dd`.

```text
task-plan-root
   setup-task-plan
   Move home transaction
      Move home complete
      Move home ready
         Move home precondition
         Move home retry
            Move home
   finalize-task-plan

Task plan status: SUCCESS
Session report: {"completed":["move-home"],"status":"success"}
```

The repository also contains unit tests for IR validation, deterministic compilation, capabilities, and task-planning sessions. It does not yet publish an end-to-end timing benchmark comparing embedded execution with an external middleware bridge.
