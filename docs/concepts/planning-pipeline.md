---
title: Planning pipeline
---

# Planning pipeline

LongTAMP avoids one global constraint graph containing every grasp combination. `GraspSequencePlanner` instead builds a graph for the current phase, solves it, updates grasp state, and advances.

```text
YAML → scene + constraints → phase-local graph → target configuration
     → HPP solve → optimize → time-parameterize → log → next phase
```

For a sequence of `N` manipulation phases, this makes graph construction scale linearly with `N` rather than with the factorial number of grasp combinations. Each phase still sees the complete shared scene, so robot-robot, robot-object, and environment collisions remain part of planning.

The key components are:

| Component | Responsibility |
| --- | --- |
| `SceneBuilder` | Loads robots, objects, and the environment |
| `ConstraintBuilder` | Creates geometric and kinematic constraints |
| `SequentialConstraintGraphFactory` | Builds the minimal graph for one phase |
| `GraspStateTracker` | Tracks which gripper currently holds which handle |
| `ConfigGenerator` | Projects feasible targets through graph edges |
| `PathRecorder` | Captures paths and phase metadata for replay |

Every planning run can emit structured events for phase starts, edge attempts, solver outcomes, target configurations, and saved paths. This makes a failure inspectable at the transition where it occurred.
