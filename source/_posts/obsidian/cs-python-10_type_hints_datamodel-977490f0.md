---
title: "类型注解与数据模型"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-10_type_hints_datamodel-977490f0/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "typing"
description: "类型注解与数据模型 类型注解不会让 Python 变成静态语言，但能让代码更清楚、更容易被工具检查。 基础类型注解 常见写法： Optional 与 Union A B 表示值可以是 A 或 B。 类型别名 用于提高可读性。 TypedDict 适合描述结构固定的字典。 Protocol Proto"
---
# 类型注解与数据模型

类型注解不会让 Python 变成静态语言，但能让代码更清楚、更容易被工具检查。

## 基础类型注解

```python
def add(a: int, b: int) -> int:
    return a + b
```

常见写法：

```python
name: str = "Ada"
age: int = 18
scores: list[int] = [90, 95]
profile: dict[str, str] = {"city": "Beijing"}
```

## Optional 与 Union

```python
def find_user(user_id: int) -> dict[str, str] | None:
    if user_id == 1:
        return {"name": "Ada"}
    return None
```

`A | B` 表示值可以是 A 或 B。

## 类型别名

```python
UserId = int
JsonDict = dict[str, object]
```

用于提高可读性。

## TypedDict

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    age: int

def greet(user: User) -> str:
    return f"Hello, {user['name']}"
```

适合描述结构固定的字典。

## Protocol

```python
from typing import Protocol

class SupportsClose(Protocol):
    def close(self) -> None:
        ...

def close_resource(resource: SupportsClose) -> None:
    resource.close()
```

`Protocol` 描述「只要长得像就能用」的接口。

## dataclass 与数据对象

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class User:
    name: str
    age: int
```

适合：

- 配置对象。
- 返回结果。
- 领域模型。
- 测试数据。

## Enum

```python
from enum import Enum

class Status(Enum):
    TODO = "todo"
    DONE = "done"
```

避免到处散落魔法字符串。

## 数据模型与魔术方法

Python 对象行为由特殊方法控制。

```python
class Playlist:
    def __init__(self, songs):
        self.songs = songs

    def __len__(self):
        return len(self.songs)

    def __iter__(self):
        return iter(self.songs)
```

掌握这些方法有助于写出像内置对象一样自然的类。

## 类型检查工具

常见工具：

- Pyright
- mypy
- Ruff 的部分类型相关规则

学习重点：

- 先给函数签名加注解。
- 再给复杂数据结构建模。
- 不要为了通过类型检查而把代码写得更难懂。

## 常见坑

- 注解和真实返回值不一致。
- 滥用 `Any`。
- 把运行时校验和静态注解混为一谈。
- 复杂嵌套类型让代码可读性下降。

## 练习

- 给已有函数补全类型注解。
- 用 `TypedDict` 描述 API 返回数据。
- 用 `dataclass` 重写一个字典结构。
- 用 `Protocol` 写一个可替换的存储接口。