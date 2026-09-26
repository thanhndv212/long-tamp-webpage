---
title: Task planning
---

# Task planning and execution

The task-planning layer represents mission logic as a versioned JSON intermediate representation. Plans can compose `sequence`, `fallback`, `retry`, `condition`, `operation`, and `transaction` nodes.

Before compilation, a `CapabilityRegistry` checks that every requested operation is known and allowed. The compiler then produces deterministic BehaviorTree.CPP XML. A standalone C++ host executes the tree and calls LongTAMP through embedded CPython in the same process.

This boundary lets a person, scheduler, or future learned model propose high-level operations while the registry and motion planner remain responsible for executable capabilities and geometric feasibility.

Long missions can checkpoint after completed blocks. A resumed run validates the saved block label against the current mission definition before restoring configuration and held-grasp state.

See the [BehaviorTree.CPP integration reference](https://github.com/thanhndv212/long-tamp/blob/main/docs/usage/behaviortree-integration.md) for the schema, compiler mapping, build flags, and host integration.
