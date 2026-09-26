---
title: Installation
---

# Installation

LongTAMP has a pure-Python layer and an optional native HPP planning layer. Linux is the direct path for a complete planner installation.

```bash
git clone https://github.com/thanhndv212/long-tamp.git
cd long-tamp
python -m venv .venv
source .venv/bin/activate
pip install -e ".[hpp,toppra]"
```

Use `pip install -e .` when you only need configuration, task-plan compilation, logging, or tests that do not invoke HPP.

| Platform | Pure Python | Native HPP bindings |
| --- | --- | --- |
| Linux x86_64 / aarch64 | PyPI | PyPI |
| macOS | PyPI | Use Linux or Docker |
| Windows | Untested | Use Linux or WSL2 |

The HPP wheels use NumPy 2.x. A robotpkg installation generally expects NumPy 1.x, so keep those installation routes in separate environments. See the [full installation reference](https://github.com/thanhndv212/long-tamp/blob/main/docs/INSTALL.md) for robotpkg, source builds, Docker, and backend detection.
