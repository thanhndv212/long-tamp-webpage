---
title: Architecture
---

# Architecture

The dependency direction is deliberate: task scripts orchestrate reusable task objects, planning stays independent of a concrete HPP binding, and backends own native API calls.

```text
script/  →  tasks/  →  planning/  →  backends/
                ↘ config · logging · visualization · cli
```

| Layer | Purpose |
| --- | --- |
| `script/` | Robot- and mission-specific entry points |
| `tasks/` | Lifecycle orchestration and grasp-sequence planning |
| `planning/` | Scenes, constraints, graphs, configuration generation, replay |
| `backends/` | Abstract backend and PyHPP implementation |
| Support layers | Config loading, JSONL logging, viewers, CLI utilities |

The package itself has no ROS 2 dependency. ROS can consume it downstream, but task definition, planning, visualization, logging, and standalone behavior-tree execution work as ordinary Python and C++ processes.

Read the maintained [architecture reference](https://github.com/thanhndv212/long-tamp/blob/main/ARCHITECTURE.md) for class-level boundaries and current data flows.
