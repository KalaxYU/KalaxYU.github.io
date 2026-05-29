---
title: "迭代器、生成器与装饰器"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-09_iterators_generators_decorators-dcb4a495/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "advanced"
description: "迭代器、生成器与装饰器 可迭代对象 可以被 for 循环遍历的对象就是可迭代对象。 常见可迭代对象： - list - tuple - dict - set - str - 文件对象 - 生成器 迭代器 迭代器实现了： - iter () - next () 生成器函数 使用 yield 的函数会返"
---
# 迭代器、生成器与装饰器

## 可迭代对象

可以被 `for` 循环遍历的对象就是可迭代对象。

```python
for item in [1, 2, 3]:
    print(item)
```

常见可迭代对象：

- `list`
- `tuple`
- `dict`
- `set`
- `str`
- 文件对象
- 生成器

## 迭代器

迭代器实现了：

- `__iter__()`
- `__next__()`

```python
numbers = iter([1, 2, 3])
print(next(numbers))
print(next(numbers))
```

## 生成器函数

使用 `yield` 的函数会返回生成器。

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for value in countdown(3):
    print(value)
```

优点：

- 惰性计算。
- 节省内存。
- 适合处理大文件和流水线。

## 生成器表达式

```python
total = sum(x * x for x in range(1_000_000))
```

列表推导式会立即创建列表，生成器表达式按需产生值。

## 装饰器

装饰器本质上是接收函数并返回新函数的函数。

```python
from functools import wraps

def log_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"calling {func.__name__}")
        return func(*args, **kwargs)

    return wrapper

@log_call
def add(a, b):
    return a + b
```

常见用途：

- 日志。
- 权限检查。
- 缓存。
- 计时。
- 参数校验。

## 带参数的装饰器

```python
from functools import wraps

def repeat(times):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = None
            for _ in range(times):
                result = func(*args, **kwargs)
            return result

        return wrapper

    return decorator
```

## 常见坑

- 忘记 `functools.wraps`，导致函数元信息丢失。
- 生成器只能消费一次。
- 把生成器转成列表可能占用大量内存。
- 装饰器里吞掉异常，导致问题难以定位。

## 练习

- 写一个读取大文件每次返回一行的生成器。
- 写一个计时装饰器。
- 写一个简单缓存装饰器。
- 用生成器表达式处理 100 万个数字并比较内存差异。