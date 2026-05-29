---
title: "数据库与持久化"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-15_database_persistence-54b79e4a/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "database"
description: "数据库与持久化 持久化就是让数据在程序结束后仍然存在。 选择存储方式 - 少量配置：JSON、TOML、YAML。 - 表格数据：CSV、Excel。 - 结构化查询：SQLite、PostgreSQL、MySQL。 - 缓存和队列：Redis。 - 文档数据：MongoDB。 SQL 基础 必须掌"
---
# 数据库与持久化

持久化就是让数据在程序结束后仍然存在。

## 选择存储方式

- 少量配置：JSON、TOML、YAML。
- 表格数据：CSV、Excel。
- 结构化查询：SQLite、PostgreSQL、MySQL。
- 缓存和队列：Redis。
- 文档数据：MongoDB。

## SQL 基础

必须掌握：

- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`
- `WHERE`
- `JOIN`
- `GROUP BY`
- `ORDER BY`
- `LIMIT`

## SQLite

SQLite 适合本地小项目和学习。

```python
import sqlite3

with sqlite3.connect("app.db") as conn:
    conn.execute(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)"
    )
    conn.execute("INSERT INTO users (name) VALUES (?)", ("Ada",))
    rows = conn.execute("SELECT id, name FROM users").fetchall()
```

## 参数化查询

不要手动拼 SQL。

```python
name = "Ada"
conn.execute("SELECT * FROM users WHERE name = ?", (name,))
```

这样可以降低 SQL 注入风险。

## 事务

事务保证一组操作要么全部成功，要么全部失败。

```python
with sqlite3.connect("app.db") as conn:
    conn.execute("INSERT INTO orders (id) VALUES (?)", (1,))
    conn.execute("INSERT INTO logs (message) VALUES (?)", ("created",))
```

## ORM

ORM 把数据库表映射成 Python 对象。

常见选择：

- SQLAlchemy。
- Django ORM。
- SQLModel。

优点：

- 减少重复 SQL。
- 更接近业务对象。
- 方便迁移和组合查询。

代价：

- 需要理解底层 SQL。
- 复杂查询可能不直观。

## 迁移

数据库结构会变化，需要迁移工具记录变化。

常见工具：

- Alembic。
- Django migrations。

## 常见坑

- 字符串拼接 SQL。
- 没有唯一约束，导致重复数据。
- 忘记索引，查询变慢。
- 连接没有正确关闭。
- 开发和生产数据库结构不一致。

## 练习

- 用 SQLite 写一个联系人管理器。
- 给联系人增加唯一邮箱约束。
- 写 5 条 SQL 查询。
- 用事务实现转账操作。