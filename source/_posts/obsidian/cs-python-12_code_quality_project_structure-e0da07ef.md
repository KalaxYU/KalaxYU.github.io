---
title: "代码质量与项目结构"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-12_code_quality_project_structure-e0da07ef/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "code-quality"
  - "project"
description: "代码质量与项目结构 代码质量的目标不是「看起来高级」，而是让代码容易读、容易改、容易运行。 可读性原则 - 名字表达意图。 - 函数短小且职责单一。 - 复杂条件拆成有名字的变量。 - 避免过深嵌套。 - 重复出现三次以上再考虑抽象。 命名习惯 - 变量和函数： snake case - 类： Pa"
---
# 代码质量与项目结构

代码质量的目标不是「看起来高级」，而是让代码容易读、容易改、容易运行。

## 可读性原则

- 名字表达意图。
- 函数短小且职责单一。
- 复杂条件拆成有名字的变量。
- 避免过深嵌套。
- 重复出现三次以上再考虑抽象。

## 命名习惯

- 变量和函数：`snake_case`
- 类：`PascalCase`
- 常量：`UPPER_CASE`
- 私有约定：`_leading_underscore`

## 项目结构

常见结构：

```text
project/
  README.md
  pyproject.toml
  src/
    my_app/
      __init__.py
      main.py
  tests/
    test_main.py
```

小脚本可以简单，项目复杂后再引入 `src/` 布局。

## README 应该包含

- 项目做什么。
- 如何安装。
- 如何运行。
- 如何测试。
- 主要配置。
- 示例输入输出。

## 格式化与检查

常见工具：

- Ruff：快速 lint 和格式化。
- Black：自动格式化。
- isort：导入排序。
- Pyright 或 mypy：类型检查。
- pre-commit：提交前自动检查。

学习重点：

- 先理解规则，再自动化执行。
- 项目里统一风格，不要每个文件一种写法。

## 配置与常量

不要把配置散落在代码里。

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Settings:
    data_dir: str
    debug: bool = False
```

敏感信息不要写进代码仓库。

## Git 基础

必须掌握：

- `git status`
- `git add`
- `git commit`
- `git diff`
- `git log`
- `.gitignore`

## 重构

重构前最好先有测试。

常见重构：

- 提取函数。
- 提取类。
- 改名。
- 删除重复逻辑。
- 分离 I/O 和纯计算。

## 常见坏味道

- 一个函数几百行。
- 全局变量到处改。
- 函数同时读文件、解析、计算、打印。
- 异常被吞掉。
- 没有 README 和运行说明。

## 练习

- 把一个脚本整理成 `main()` 加多个函数。
- 给项目补 README。
- 配置 Ruff 或 Black。
- 给项目加 `.gitignore`。