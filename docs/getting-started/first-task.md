---
title: Your first task
---

# Your first task

New tasks usually begin with the YAML template and a small Python entry point.

```bash
cp script/templates/task_config_template.yaml script/my_task.yaml
cp script/templates/task_my_task.py script/my_task.py
```

Fill in the robot URDF/SRDF, object models, grippers, handles, joint bounds, and valid grasp pairs. The task lifecycle then follows a stable contract:

1. load robots and objects into a shared scene;
2. create placement, pre-grasp, and motion constraints;
3. build the manipulation graph;
4. construct the measured initial configuration;
5. generate targets and plan the sequence.

```python
task = MyTask.from_yaml("script/my_task.yaml")
task.setup()
result = task.run()
```

Use the bimanual `script/twin/task_lift_ball.py` example as the smallest real reference. The [standalone usage guide](https://github.com/thanhndv212/long-tamp/blob/main/docs/usage/standalone-usage.md) covers backend selection, interactive sequence building, replay, and checkpoints.
