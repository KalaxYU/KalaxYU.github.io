---
title: "基础语法与运行方式"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-01_syntax_basics-7dd2bdf7/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "basics"
description: "基础语法与运行方式 必须掌握 - Python 文件通常以 .py 结尾。 - 代码靠缩进表示层级，常用 4 个空格。 - 一行通常写一个语句。 - 后面是单行注释。 - 三引号字符串常用于文档字符串。 - Python 是动态类型语言：变量名可以绑定到不同类型的对象。 运行方式 常见运行方式： -"
---
# 基础语法与运行方式

## 必须掌握

- Python 文件通常以 `.py` 结尾。
- 代码靠缩进表示层级，常用 4 个空格。
- 一行通常写一个语句。
- `#` 后面是单行注释。
- 三引号字符串常用于文档字符串。
- Python 是动态类型语言：变量名可以绑定到不同类型的对象。

## 运行方式

```python
print("Hello, Python")
```

常见运行方式：

- 终端运行：`python main.py`
- 交互式运行：输入 `python` 后逐行测试。
- 笔记本运行：Jupyter 适合数据分析和探索。
- IDE 运行：PyCharm、VS Code 等适合项目开发。

## 变量与对象

变量不是盒子，而是名字绑定到对象。

```python
x = [1, 2, 3]
y = x
y.append(4)
print(x)  # [1, 2, 3, 4]
```

重点：

- `=` 是绑定，不是复制。
- 可变对象被多个变量引用时，修改会互相影响。
- `id(obj)` 可以观察对象身份。

## 常用字面量

```python
age = 18
price = 19.9
name = "Ada"
is_active = True
empty = None
items = [1, 2, 3]
user = {"name": "Ada", "age": 18}
```

## 运算符

- 算术：`+`、`-`、`*`、`/`、`//`、`%`、`**`
- 比较：`==`、`!=`、`>`、`>=`、`<`、`<=`
- 逻辑：`and`、`or`、`not`
- 身份：`is`、`is not`
- 成员：`in`、`not in`

## 真值判断

这些值通常被当作 `False`：

- `False`
- `None`
- `0`
- `""`
- `[]`
- `{}`
- `set()`

其他大多数对象为 `True`。

## 输入输出

```python
name = input("Name: ")
print(f"Hello, {name}")
```

注意：`input()` 返回的一定是字符串，需要手动转换。

```python
age = int(input("Age: "))
```

## 常见坑

- 把 `=` 写成 `==`，或反过来。
- 忘记缩进。
- 使用中文标点。
- 文件名命名为 `random.py`、`json.py`，导致遮蔽标准库。
- 浮点数不能用来表示精确金额。

## 练习

- 写一个 BMI 计算器。
- 写一个摄氏度与华氏度转换脚本。
- 写一个输入姓名和年龄后输出自我介绍的脚本。
- 用 `id()` 观察列表赋值与复制的区别。