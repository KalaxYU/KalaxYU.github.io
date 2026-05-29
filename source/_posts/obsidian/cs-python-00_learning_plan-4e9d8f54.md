---
title: "Python 学习路线图"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-00_learning_plan-4e9d8f54/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "roadmap"
description: "Python 学习路线图 Python 的学习目标不是「背完语法」，而是获得三种能力：能快速写脚本，能组织项目，能在具体方向里解决实际问题。 第一阶段：能写小程序 目标：看懂并写出 50 行以内的小脚本。 必须掌握： - 安装 Python、运行 .py 文件、使用 REPL 或 Jupyter。 "
---
# Python 学习路线图

Python 的学习目标不是「背完语法」，而是获得三种能力：能快速写脚本，能组织项目，能在具体方向里解决实际问题。

## 第一阶段：能写小程序

目标：看懂并写出 50 行以内的小脚本。

必须掌握：

- 安装 Python、运行 `.py` 文件、使用 REPL 或 Jupyter。
- 变量、表达式、注释、缩进、输入输出。
- 数字、字符串、列表、字典、集合、元组。
- `if`、`for`、`while`、`break`、`continue`。
- 函数定义、返回值、参数。
- 常见报错：`SyntaxError`、`NameError`、`TypeError`、`IndexError`、`KeyError`。

对应笔记：

- [基础语法与运行方式](/notes/cs-python-01_syntax_basics-7dd2bdf7/)
- [数据类型与容器](/notes/cs-python-02_types_collections-da6fb66d/)
- [流程控制与推导式](/notes/cs-python-03_control_flow_comprehensions-93a73354/)
- [函数、参数与作用域](/notes/cs-python-04_functions_scope-f3d9a16d/)

## 第二阶段：能写稳定脚本

目标：能处理文件、异常、第三方包，并把代码拆成多个文件。

必须掌握：

- `pathlib`、文本文件、CSV、JSON。
- `try/except/else/finally` 与自定义异常。
- `with` 上下文管理。
- 模块、包、导入路径、虚拟环境、依赖管理。
- 常用标准库：`datetime`、`collections`、`itertools`、`functools`、`re`、`argparse`、`logging`。

对应笔记：

- [模块、包与虚拟环境](/notes/cs-python-06_modules_packages_env-007f70aa/)
- [文件、异常与上下文管理](/notes/cs-python-07_files_exceptions_context-69516238/)
- [常用标准库](/notes/cs-python-08_stdlib-b20082b6/)

## 第三阶段：能写可维护项目

目标：代码可以给别人运行、测试和继续维护。

必须掌握：

- 面向对象、组合、继承、`dataclass`。
- 迭代器、生成器、装饰器。
- 类型注解、`Protocol`、`TypedDict`。
- 单元测试、调试、日志、格式化、静态检查。
- 项目目录结构、配置文件、README、Git。

对应笔记：

- [面向对象编程](/notes/cs-python-05_oop-906bafbb/)
- [迭代器、生成器与装饰器](/notes/cs-python-09_iterators_generators_decorators-dcb4a495/)
- [类型注解与数据模型](/notes/cs-python-10_type_hints_datamodel-977490f0/)
- [测试、调试与日志](/notes/cs-python-11_testing_debugging_logging-e4d36020/)
- [代码质量与项目结构](/notes/cs-python-12_code_quality_project_structure-e0da07ef/)

## 第四阶段：按方向深入

选择一个主方向，同时保留通用工程能力。

方向：

- 自动化：文件整理、表格处理、批量任务、命令行工具。
- Web 后端：HTTP、API、FastAPI、Django、数据库、认证。
- 数据分析：NumPy、Pandas、可视化、统计、Jupyter。
- AI/机器学习：数据处理、模型训练、评估、部署。
- 爬虫与数据采集：请求、解析、反爬礼仪、存储。
- 工程平台：打包、部署、Docker、CI/CD、监控。

对应笔记：

- [并发、异步与性能](/notes/cs-python-13_concurrency_async_performance-2a0d0b44/)
- [网络、Web 与 API](/notes/cs-python-14_web_api-1d365c52/)
- [数据库与持久化](/notes/cs-python-15_database_persistence-54b79e4a/)
- [数据分析与可视化](/notes/cs-python-16_data_analysis_visualization-a25a0e0e/)
- [自动化脚本与命令行工具](/notes/cs-python-17_automation_cli-8136e934/)
- [打包、部署与安全](/notes/cs-python-18_packaging_deployment_security-a40504d9/)

## 每周节奏

- 周一到周三：学一个主题并写 5 个小例子。
- 周四：整理报错、坑点、术语。
- 周五到周日：做一个能运行的小项目。

## 最小作品集

完成这些项目，说明你已经具备 Python 实战基础：

- 命令行待办清单。
- 自动整理下载文件夹。
- CSV/Excel 数据清洗脚本。
- 天气或汇率 API 查询工具。
- SQLite 记账本。
- FastAPI 小服务。
- Pandas 数据分析报告。
- 带测试、日志和配置的完整小项目。