---
title: "面向对象编程"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-05_oop-906bafbb/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "oop"
description: "面向对象编程 核心概念 - 类：对象的模板。 - 对象：类创建出来的实例。 - 属性：对象保存的数据。 - 方法：对象能执行的行为。 self self 表示当前实例。调用方法时，Python 会自动把实例传进去。 等价于： 实例属性与类属性 实例属性属于单个对象，类属性属于类本身。 datacla"
---
# 面向对象编程

## 核心概念

- 类：对象的模板。
- 对象：类创建出来的实例。
- 属性：对象保存的数据。
- 方法：对象能执行的行为。

```python
class User:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, {self.name}"

user = User("Ada")
print(user.greet())
```

## self

`self` 表示当前实例。调用方法时，Python 会自动把实例传进去。

```python
user.greet()
```

等价于：

```python
User.greet(user)
```

## 实例属性与类属性

```python
class Counter:
    total = 0

    def __init__(self):
        Counter.total += 1
```

实例属性属于单个对象，类属性属于类本身。

## dataclass

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int
```

适合主要用于保存数据的类。

## property

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def area(self):
        return 3.14159 * self.radius ** 2
```

`property` 可以把方法伪装成只读属性。

## 继承

```python
class Animal:
    def speak(self):
        raise NotImplementedError

class Dog(Animal):
    def speak(self):
        return "woof"
```

继承适合表达「是一种」关系。

## 组合优先

很多时候，组合比继承更清晰。

```python
class Engine:
    def start(self):
        return "engine started"

class Car:
    def __init__(self, engine):
        self.engine = engine

    def start(self):
        return self.engine.start()
```

组合适合表达「有一个」关系。

## 魔术方法

```python
class Money:
    def __init__(self, amount):
        self.amount = amount

    def __repr__(self):
        return f"Money({self.amount})"

    def __add__(self, other):
        return Money(self.amount + other.amount)
```

常见魔术方法：

- `__init__`
- `__repr__`
- `__str__`
- `__len__`
- `__iter__`
- `__eq__`
- `__lt__`

## 常见坑

- 把所有东西都写成类。
- 继承层级太深。
- 类属性误当实例属性使用。
- 方法偷偷修改太多外部状态。

## 练习

- 写一个 `BankAccount` 类，支持存款、取款、查询余额。
- 用 `dataclass` 表示一本书。
- 写一个 `ShoppingCart`，支持添加商品和计算总价。
- 把一个字典列表重构成类和对象。