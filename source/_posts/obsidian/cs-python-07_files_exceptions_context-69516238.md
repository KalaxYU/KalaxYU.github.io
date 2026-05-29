---
title: "文件、异常与上下文管理"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-07_files_exceptions_context-69516238/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "files"
  - "exceptions"
description: "文件、异常与上下文管理 pathlib 优先使用 pathlib.Path 处理路径。 读写文本文件 使用 encoding=\"utf-8\" 可以减少中文乱码。 使用 open 模式： - r ：读取。 - w ：写入并覆盖。 - a ：追加。 - rb ：二进制读取。 - wb ：二进制写入。 J"
---
# 文件、异常与上下文管理

## pathlib

优先使用 `pathlib.Path` 处理路径。

```python
from pathlib import Path

path = Path("data") / "users.txt"
print(path.exists())
print(path.suffix)
```

## 读写文本文件

```python
from pathlib import Path

path = Path("note.txt")
path.write_text("hello", encoding="utf-8")
content = path.read_text(encoding="utf-8")
```

使用 `encoding="utf-8"` 可以减少中文乱码。

## 使用 open

```python
with open("note.txt", "r", encoding="utf-8") as file:
    content = file.read()
```

模式：

- `r`：读取。
- `w`：写入并覆盖。
- `a`：追加。
- `rb`：二进制读取。
- `wb`：二进制写入。

## JSON

```python
import json

user = {"name": "Ada", "age": 18}

with open("user.json", "w", encoding="utf-8") as file:
    json.dump(user, file, ensure_ascii=False, indent=2)
```

```python
with open("user.json", "r", encoding="utf-8") as file:
    data = json.load(file)
```

## CSV

```python
import csv

with open("users.csv", "w", encoding="utf-8", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["name", "age"])
    writer.writeheader()
    writer.writerow({"name": "Ada", "age": 18})
```

## 异常处理

```python
try:
    number = int(input("Number: "))
except ValueError:
    print("请输入数字")
else:
    print(number * 2)
finally:
    print("done")
```

原则：

- 只捕获你能处理的异常。
- 不要裸写 `except:`。
- 异常信息要能帮助定位问题。

## 自定义异常

```python
class InsufficientBalanceError(Exception):
    pass
```

适合表达业务规则错误。

## 上下文管理器

`with` 用于确保资源正确释放。

```python
from contextlib import contextmanager

@contextmanager
def managed_resource():
    print("open")
    try:
        yield
    finally:
        print("close")
```

## 常见坑

- 写文件忘记指定编码。
- Windows 路径里手写反斜杠导致转义问题。
- 捕获异常后什么都不做。
- 用 `w` 模式误覆盖文件。

## 练习

- 写一个读取文本并统计行数的脚本。
- 写一个 JSON 配置读取器。
- 写一个 CSV 联系人导入脚本。
- 给文件操作增加异常处理和日志。