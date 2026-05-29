---
title: "常用标准库"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-08_stdlib-b20082b6/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "standard-library"
description: "常用标准库 标准库是 Python 自带的工具箱。先熟悉标准库，可以少装很多不必要的第三方包。 路径与系统 - pathlib ：现代路径处理。 - os ：操作系统相关功能。 - sys ：解释器参数、退出码、导入路径。 - subprocess ：调用外部命令。 - shutil ：复制、移动、"
---
# 常用标准库

标准库是 Python 自带的工具箱。先熟悉标准库，可以少装很多不必要的第三方包。

## 路径与系统

- `pathlib`：现代路径处理。
- `os`：操作系统相关功能。
- `sys`：解释器参数、退出码、导入路径。
- `subprocess`：调用外部命令。
- `shutil`：复制、移动、删除文件树。

```python
from pathlib import Path

for path in Path(".").glob("*.md"):
    print(path.name)
```

## 时间与日期

- `datetime`：日期和时间。
- `zoneinfo`：时区。
- `time`：时间戳和睡眠。

```python
from datetime import datetime
from zoneinfo import ZoneInfo

now = datetime.now(ZoneInfo("Asia/Shanghai"))
```

## 数据格式

- `json`：JSON 读写。
- `csv`：CSV 读写。
- `configparser`：INI 配置。
- `tomllib`：读取 TOML。
- `sqlite3`：轻量数据库。

## 文本处理

- `re`：正则表达式。
- `textwrap`：文本换行。
- `string`：字符串常量。
- `difflib`：文本差异。

## 容器与算法

- `collections`：`Counter`、`defaultdict`、`deque`、`namedtuple`。
- `itertools`：迭代工具。
- `functools`：缓存、偏函数、归约。
- `heapq`：堆。
- `bisect`：二分查找。

```python
from collections import Counter

counts = Counter("banana")
print(counts.most_common(2))
```

## 数学与随机

- `math`：数学函数。
- `statistics`：基础统计。
- `decimal`：精确小数。
- `random`：随机数。
- `secrets`：安全随机数。

## 调试与质量

- `logging`：日志。
- `pdb`：调试器。
- `traceback`：异常堆栈。
- `timeit`：小片段性能测试。
- `unittest`：标准单元测试。

## 网络与互联网

- `urllib`：基础 URL 请求与解析。
- `http.server`：本地简单 HTTP 服务。
- `email`：邮件格式处理。

## 并发

- `threading`：线程。
- `multiprocessing`：进程。
- `concurrent.futures`：统一的线程池和进程池接口。
- `asyncio`：异步 I/O。

## 学习建议

- 不需要背完整 API。
- 先记住每个库解决什么问题。
- 遇到需求时优先查标准库。
- 把常用代码片段整理到本笔记。

## 练习

- 用 `Counter` 统计词频。
- 用 `pathlib` 批量列出某目录下所有图片。
- 用 `datetime` 计算距离生日还有多少天。
- 用 `argparse` 写一个带命令行参数的小工具。