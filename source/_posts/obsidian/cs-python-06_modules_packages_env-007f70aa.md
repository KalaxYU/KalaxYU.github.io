---
title: "模块、包与虚拟环境"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-06_modules_packages_env-007f70aa/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "environment"
  - "packaging"
description: "模块、包与虚拟环境 模块 一个 .py 文件就是一个模块。 包 包是包含 Python 模块的文件夹，通常包含 init .py 。 导入方式 建议： - 标准库导入放上面。 - 第三方库导入放中间。 - 本项目导入放下面。 - 避免 from module import 。 name == \" m"
---
# 模块、包与虚拟环境

## 模块

一个 `.py` 文件就是一个模块。

```python
# math_tools.py
def add(a, b):
    return a + b
```

```python
# main.py
from math_tools import add

print(add(1, 2))
```

## 包

包是包含 Python 模块的文件夹，通常包含 `__init__.py`。

```text
my_project/
  app/
    __init__.py
    main.py
    utils.py
```

## 导入方式

```python
import pathlib
from pathlib import Path
import collections as col
```

建议：

- 标准库导入放上面。
- 第三方库导入放中间。
- 本项目导入放下面。
- 避免 `from module import *`。

## `__name__ == "__main__"`

```python
def main():
    print("run")

if __name__ == "__main__":
    main()
```

作用：

- 直接运行文件时执行 `main()`。
- 被别的文件导入时不自动执行。

## 虚拟环境

虚拟环境用于隔离项目依赖。

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install requests
```

退出：

```powershell
deactivate
```

## 依赖记录

简单项目可以用：

```powershell
python -m pip freeze > requirements.txt
python -m pip install -r requirements.txt
```

现代项目常见核心文件：

- `pyproject.toml`
- `README.md`
- `src/`
- `tests/`
- `.gitignore`

## 导入路径常见问题

常见原因：

- 当前工作目录不是项目根目录。
- 文件名和标准库重名。
- 包没有正确安装。
- 试图用相对导入运行单个包内文件。

排查方式：

```python
import sys
print(sys.path)
```

## 好习惯

- 每个项目一个虚拟环境。
- 不把 `.venv` 提交到 Git。
- 不在全局 Python 环境里乱装包。
- 把脚本入口集中在 `main()`。
- 项目复杂后使用 `pyproject.toml` 管理配置。

## 练习

- 创建一个包 `calculator`，包含加减乘除模块。
- 创建虚拟环境并安装一个第三方库。
- 写一个 `main.py` 调用包内函数。
- 故意制造一次导入错误，并记录解决过程。