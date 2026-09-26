---
title: System architecture
---

# System architecture

LongTAMP is the layer between a mission description and HPP’s geometric planner. It does not replace HPP’s sampling-based algorithms. It supplies scene composition, constraint construction, phase decomposition, target generation, bounded recovery, and evidence capture around them.

```mermaid
flowchart TB
  U[Mission author / scheduler / model] --> IR[TaskPlan IR or Python task]
  IR --> T[tasks: lifecycle, sequences, recovery]
  T --> P[planning: scenes, constraints, graphs, targets, paths]
  P --> B[backends: BackendBase → PyHPPBackend]
  B --> H[HPP + Pinocchio + collision checking]
  T -. events .-> L[JSONL logs + checkpoints]
  P -. paths .-> V[viser / gepetto-viewer / replay]
  IR -. compile .-> BT[BehaviorTree.CPP host]
  BT --> T
```

## Dependency boundaries

```mermaid
flowchart LR
  S[script/] --> T[tasks/]
  T --> P[planning/]
  P --> B[backends/]
  C[config/] -. data .-> S
  C -. data .-> T
  T -. events .-> L[logging/]
  T -. display .-> V[visualization/]
  CLI[cli/] -. arguments .-> S
```

| Layer | Owns | Must not own |
| --- | --- | --- |
| `script/` | Robot assets, mission order, application policy | Reusable planner mechanics |
| `tasks/` | Lifecycle, phase sequencing, recovery, checkpoint coordination | Native HPP calls |
| `planning/` | Scene/constraint/graph builders, target projection, path capture | Robot-specific missions |
| `backends/` | HPP loading, solving, validation, path I/O | Mission policy |
| `config/` | YAML normalization and typed task data | Planner state |
| `logging/` | Stable event schema and serialization | Control flow |

Only `backends/` imports the native HPP interface. Pure-Python plan validation, compilation, configuration, and log inspection remain importable without native bindings.

## Runtime data flow

```mermaid
sequenceDiagram
  participant Script as Task script
  participant Task as ManipulationTask
  participant Seq as GraspSequencePlanner
  participant Graph as Phase graph factory
  participant HPP as PyHPP backend
  participant Log as RunLogger
  Script->>Task: setup(YAML, assets, bounds)
  Task->>HPP: load shared scene
  Script->>Seq: plan_sequence(phases, q_init)
  loop each grasp/release phase
    Seq->>Graph: build minimal legal graph
    Seq->>HPP: project target through edge
    Seq->>HPP: solve, optimize, parameterize
    HPP-->>Seq: path or classified failure
    Seq->>Log: phase/edge result and artifacts
  end
  Seq-->>Script: final configuration and ordered paths
```

## Configuration model

YAML declares robots, fixed environments, free objects, grippers, handles, legal gripper-handle pairs, initial poses, joint bounds, and planner parameters. `YamlTaskLoader` turns this into file paths, a bounds class, and task configuration. Robot-specific values stay at the application boundary while builders consume a uniform shape.

The complete source-level architecture is maintained in [LongTAMP’s architecture reference](https://github.com/thanhndv212/long-tamp/blob/main/ARCHITECTURE.md).
