---
title: "函数、参数与作用域"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-04_functions_scope-f3d9a16d/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "functions"
description: "函数、参数与作用域 为什么需要函数 函数用于： - 封装重复逻辑。 - 给代码命名。 - 缩小复杂度。 - 方便测试。 参数类型 位置参数： 默认参数： 关键字参数： 可变位置参数： 可变关键字参数： 返回值 没有显式 return 时，函数返回 None 。 作用域 LEGB Python 查找名"
---
# 函数、参数与作用域

## 为什么需要函数

函数用于：

- 封装重复逻辑。
- 给代码命名。
- 缩小复杂度。
- 方便测试。

```python
def greet(name):
    return f"Hello, {name}"
```

## 参数类型

位置参数：

```python
def add(a, b):
    return a + b
```

默认参数：

```python
def greet(name, prefix="Hello"):
    return f"{prefix}, {name}"
```

关键字参数：

```python
greet(name="Ada", prefix="Hi")
```

可变位置参数：

```python
def total(*numbers):
    return sum(numbers)
```

可变关键字参数：

```python
def build_user(**fields):
    return fields
```

## 返回值

```python
def divide(a, b):
    if b == 0:
        return None
    return a / b
```

没有显式 `return` 时，函数返回 `None`。

## 作用域 LEGB

Python 查找名字的顺序：

- Local：当前函数内部。
- Enclosing：外层函数。
- Global：模块全局。
- Built-in：内置命名空间。

```python
x = "global"

def outer():
    x = "outer"

    def inner():
        return x

    return inner()
```

## 闭包

```python
def make_multiplier(factor):
    def multiply(x):
        return x * factor

    return multiply

double = make_multiplier(2)
print(double(10))
```

## lambda

```python
items = [("a", 3), ("b", 1)]
items.sort(key=lambda item: item[1])
```

适合短小匿名函数。复杂逻辑应该写普通函数。

## 可变默认参数陷阱

不要这样写：

```python
def add_item(item, items=[]):
    items.append(item)
    return items
```

应该这样写：

```python
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
```

## 好函数的标准

- 名字清楚。
- 只做一件事。
- 参数数量适中。
- 返回值稳定。
- 容易写测试。
- 不偷偷依赖全局状态。

## 练习

- 写一个判断质数的函数。
- 写一个统计文本词频的函数。
- 写一个接收任意数量分数并返回平均值的函数。
- 把一个长脚本拆成 3 到 5 个函数。