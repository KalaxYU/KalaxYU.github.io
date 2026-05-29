---
title: "数据类型与容器"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-02_types_collections-da6fb66d/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "data-structures"
description: "数据类型与容器 基本类型 类型 例子 用途 --- --- --- int 42 整数 float 3.14 小数 bool True 真假 str \"hello\" 文本 NoneType None 空值 字符串 必须掌握： - 索引从 0 开始。 - 切片格式是 start:stop:step ，"
---
# 数据类型与容器

## 基本类型

| 类型 | 例子 | 用途 |
| --- | --- | --- |
| `int` | `42` | 整数 |
| `float` | `3.14` | 小数 |
| `bool` | `True` | 真假 |
| `str` | `"hello"` | 文本 |
| `NoneType` | `None` | 空值 |

## 字符串

```python
name = "Python"
print(name.lower())
print(name.upper())
print(name[0])
print(name[1:4])
print(f"I learn {name}")
```

必须掌握：

- 索引从 `0` 开始。
- 切片格式是 `start:stop:step`，不包含 `stop`。
- 字符串不可变，修改会产生新字符串。
- `split()`、`join()`、`strip()`、`replace()` 很常用。

## 列表

```python
nums = [3, 1, 2]
nums.append(4)
nums.sort()
print(nums)
```

适合：

- 有顺序的数据。
- 需要频繁追加。
- 允许重复元素。

常用操作：

- `append`
- `extend`
- `insert`
- `pop`
- `remove`
- `sort`
- `reverse`

## 元组

```python
point = (3, 4)
x, y = point
```

适合：

- 固定结构的数据。
- 函数返回多个值。
- 作为字典键的一部分。

## 字典

```python
user = {"name": "Ada", "age": 18}
user["city"] = "Beijing"
print(user.get("email", "unknown"))
```

必须掌握：

- 键必须可哈希。
- 查询、插入、删除通常很快。
- `get()` 可以避免部分 `KeyError`。
- 遍历时常用 `items()`。

```python
for key, value in user.items():
    print(key, value)
```

## 集合

```python
tags = {"python", "web", "python"}
print(tags)  # 重复项会被去掉
```

适合：

- 去重。
- 判断成员是否存在。
- 集合运算：交集、并集、差集。

```python
a = {1, 2, 3}
b = {3, 4}
print(a & b)
print(a | b)
print(a - b)
```

## 可变与不可变

不可变：

- `int`
- `float`
- `bool`
- `str`
- `tuple`

可变：

- `list`
- `dict`
- `set`

核心影响：

- 可变对象作为函数默认参数容易出问题。
- 复制容器时要区分浅拷贝和深拷贝。

## 排序

```python
users = [
    {"name": "Ada", "score": 95},
    {"name": "Bob", "score": 80},
]

top = sorted(users, key=lambda user: user["score"], reverse=True)
```

## 练习

- 用列表保存 10 个分数并求平均值。
- 用字典统计一段文本里每个词出现的次数。
- 用集合找出两个列表中的共同元素。
- 写一个联系人字典，支持新增、查询、删除。