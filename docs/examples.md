---
title: Examples
---

# Examples

The examples are working engineering references rather than screenshots of isolated planner calls. Each exercises a different boundary: bimanual closed-chain motion, long-horizon recovery, asset conversion, or an external mission executive.

| Example | What it demonstrates |
| --- | --- |
| Article | Scale | What it demonstrates | Evidence today |
| --- | --- | --- | --- |
| [Screw assembly](examples/screw-assembly) | 2 UR10s, 4 plates, drill, fixture | Lookahead, recovery, checkpointing, replay | 10-seed benchmark, 10/10 complete |
| [TWIN lift ball](examples/twin-lift-ball) | 2 Panda arms, shared ball | Dual rigid grasps and constrained cooperative lift | Current run stops at second-arm collision |
| [IKEA table](examples/ikea-table) | 2 UR10s, tabletop, 4 legs | Real mesh ingestion and repeated docking | Scene verified; first socket lookahead times out |
| [BehaviorTree host](examples/behaviortree-host) | C++ host + embedded Python | Validated TaskPlan IR and restartable execution | Compiler/session tests; host example |

Start with TWIN to understand a compact manipulation sequence. Read screw assembly for the complete system: scene generation, mission decomposition, failure recovery, metrics, and replay. The IKEA article is deliberately candid about unfinished phases so it can serve as an implementation log rather than a polished claim.
