---
title: "项目实战与复习清单"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-19_projects_practice-eee1b958/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "projects"
  - "practice"
description: "项目实战与复习清单 真正掌握 Python 的标志是能独立完成小项目，并能解释自己的设计选择。 初级项目 1. 命令行计算器 要求： - 支持加减乘除。 - 处理除零错误。 - 支持循环输入。 - 写 5 个测试。 对应知识： - 基础语法与运行方式 - 函数、参数与作用域 - 测试、调试与日志 2"
---
# 项目实战与复习清单

真正掌握 Python 的标志是能独立完成小项目，并能解释自己的设计选择。

## 初级项目

### 1. 命令行计算器

要求：

- 支持加减乘除。
- 处理除零错误。
- 支持循环输入。
- 写 5 个测试。

对应知识：

- [基础语法与运行方式](/notes/cs-python-01_syntax_basics-7dd2bdf7/)
- [函数、参数与作用域](/notes/cs-python-04_functions_scope-f3d9a16d/)
- [测试、调试与日志](/notes/cs-python-11_testing_debugging_logging-e4d36020/)

### 2. 猜数字游戏

要求：

- 随机生成数字。
- 给出过大或过小提示。
- 记录尝试次数。
- 支持重新开始。

### 3. 联系人管理器

要求：

- 新增联系人。
- 查询联系人。
- 删除联系人。
- 保存到 JSON。

对应知识：

- [数据类型与容器](/notes/cs-python-02_types_collections-da6fb66d/)
- [文件、异常与上下文管理](/notes/cs-python-07_files_exceptions_context-69516238/)

## 中级项目

### 4. 下载目录整理器

要求：

- 按文件扩展名分类。
- 支持 dry run。
- 遇到重名文件不覆盖。
- 记录日志。

对应知识：

- [常用标准库](/notes/cs-python-08_stdlib-b20082b6/)
- [自动化脚本与命令行工具](/notes/cs-python-17_automation_cli-8136e934/)

### 5. CSV 数据清洗工具

要求：

- 读取 CSV。
- 标准化列名。
- 处理缺失值。
- 输出清洗后的文件和报告。

### 6. SQLite 记账本

要求：

- 添加收入和支出。
- 按月份统计。
- 支持分类。
- 提供命令行参数。

对应知识：

- [数据库与持久化](/notes/cs-python-15_database_persistence-54b79e4a/)
- [自动化脚本与命令行工具](/notes/cs-python-17_automation_cli-8136e934/)

## 进阶项目

### 7. FastAPI 待办事项服务

要求：

- CRUD 接口。
- 输入校验。
- SQLite 存储。
- 自动生成文档。
- 测试接口。

对应知识：

- [网络、Web 与 API](/notes/cs-python-14_web_api-1d365c52/)
- [数据库与持久化](/notes/cs-python-15_database_persistence-54b79e4a/)

### 8. 数据分析报告

要求：

- 读取真实 CSV 数据。
- 清洗和聚合。
- 生成 3 张图。
- 写出结论和局限性。

对应知识：

- [数据分析与可视化](/notes/cs-python-16_data_analysis_visualization-a25a0e0e/)

### 9. API 数据同步器

要求：

- 定时调用 API。
- 处理分页、失败和重试。
- 存入数据库。
- 记录日志。

对应知识：

- [并发、异步与性能](/notes/cs-python-13_concurrency_async_performance-2a0d0b44/)
- [网络、Web 与 API](/notes/cs-python-14_web_api-1d365c52/)
- [测试、调试与日志](/notes/cs-python-11_testing_debugging_logging-e4d36020/)

## 综合项目

### 10. 个人知识库辅助工具

要求：

- 扫描 Obsidian Markdown 文件。
- 统计标签、链接和未链接笔记。
- 生成索引页面。
- 支持命令行参数。

### 11. 个人财务分析系统

要求：

- 导入账单 CSV。
- 分类和去重。
- SQLite 存储。
- 生成月度图表。
- 输出 Markdown 报告。

### 12. 小型 Web 后端

要求：

- 用户登录。
- 数据库模型。
- REST API。
- 测试。
- Docker 部署。

## 复习清单

基础：

- [ ] 我能解释变量绑定和可变对象。
- [ ] 我能熟练使用列表、字典、集合。
- [ ] 我能写函数并处理参数和返回值。
- [ ] 我能读写 JSON、CSV 和文本文件。

工程：

- [ ] 我能创建虚拟环境并安装依赖。
- [ ] 我能把脚本拆成模块和包。
- [ ] 我能写测试并运行测试。
- [ ] 我能使用日志定位问题。
- [ ] 我能整理项目结构和 README。

进阶：

- [ ] 我能使用生成器处理大数据。
- [ ] 我能写简单装饰器。
- [ ] 我能用类型注解表达接口。
- [ ] 我能理解线程、进程和异步的适用场景。

应用：

- [ ] 我能调用 API 并处理错误。
- [ ] 我能设计简单 Web 接口。
- [ ] 我能使用 SQLite 保存数据。
- [ ] 我能用 Pandas 完成基础数据分析。
- [ ] 我能把 Python 用到自己的真实任务里。