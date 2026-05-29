---
title: "测试、调试与日志"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-11_testing_debugging_logging-e4d36020/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "testing"
  - "debugging"
description: "测试、调试与日志 会测试和调试，才算真正能写项目。 测试的价值 - 防止改代码时破坏旧功能。 - 迫使你写更清晰的函数。 - 给未来的自己留下可运行文档。 - 让重构更有底气。 pytest 基础 运行： 测试命名 常见结构： pytest 默认发现： - test .py - test.py - "
---
# 测试、调试与日志

会测试和调试，才算真正能写项目。

## 测试的价值

- 防止改代码时破坏旧功能。
- 迫使你写更清晰的函数。
- 给未来的自己留下可运行文档。
- 让重构更有底气。

## pytest 基础

```python
def add(a, b):
    return a + b

def test_add():
    assert add(1, 2) == 3
```

运行：

```powershell
pytest
```

## 测试命名

常见结构：

```text
project/
  src/
    app/
  tests/
    test_app.py
```

pytest 默认发现：

- `test_*.py`
- `*_test.py`
- `test_*` 函数

## fixture

```python
import pytest

@pytest.fixture
def sample_user():
    return {"name": "Ada", "age": 18}

def test_user_name(sample_user):
    assert sample_user["name"] == "Ada"
```

适合复用测试准备工作。

## mock

当代码依赖网络、时间、文件系统或数据库时，可以使用 mock。

```python
from unittest.mock import Mock

sender = Mock()
sender.send("hello")
sender.send.assert_called_once_with("hello")
```

## 调试方式

最直接：

```python
print(value)
```

更强：

```python
breakpoint()
```

进入调试器后常用命令：

- `n`：下一行。
- `s`：进入函数。
- `c`：继续运行。
- `p name`：打印变量。
- `q`：退出。

## 日志

```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

logger.info("started")
logger.warning("something looks odd")
```

日志级别：

- `DEBUG`
- `INFO`
- `WARNING`
- `ERROR`
- `CRITICAL`

## 异常日志

```python
try:
    risky()
except Exception:
    logger.exception("risky failed")
```

`logger.exception` 会记录堆栈，适合在异常处理里使用。

## 常见坑

- 测试只覆盖正常路径，不覆盖异常路径。
- 测试依赖真实网络，导致不稳定。
- 到处 `print`，项目变大后难以控制输出。
- 捕获异常后没有日志。

## 练习

- 给计算器函数写测试。
- 给文件读取函数写成功和失败测试。
- 用 `breakpoint()` 调试一个循环。
- 把脚本里的 `print` 改成 `logging`。