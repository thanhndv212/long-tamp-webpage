---
title: Project status
---

# Project status

LongTAMP is an active open-source extraction of a long-horizon manipulation planning stack. The public interface is still evolving toward its first stable release.

Implemented today:

- phase-local multi-grasp planning on HPP;
- multi-arm and multi-object scene composition;
- Python task lifecycle and YAML configuration;
- viser and gepetto-viewer visualization;
- structured run logs, replay, and mission checkpoints;
- versioned task-plan IR and BehaviorTree.CPP compilation.

Treat scripts and internal APIs as pre-1.0 interfaces. Pin a commit for experiments that need reproducibility and consult the source repository’s changelog before upgrading.
