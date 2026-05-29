---
title: "流程控制与推导式"
date: 2026-05-29 15:00:39
updated: 2026-05-29 15:00:39
permalink: notes/cs-python-03_control_flow_comprehensions-93a73354/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "control-flow"
description: "流程控制与推导式 条件判断 重点： - 条件表达式最终会被转换成真假。 - 多分支从上到下判断，命中后停止。 - 复杂条件要拆变量，让代码更可读。 for 循环 常用组合： while 循环 适合： - 不确定循环次数。 - 等待条件变化。 - 交互式输入。 break、continue、else "
---
# 流程控制与推导式

## 条件判断

```python
score = 86

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"
```

重点：

- 条件表达式最终会被转换成真假。
- 多分支从上到下判断，命中后停止。
- 复杂条件要拆变量，让代码更可读。

## for 循环

```python
for char in "Python":
    print(char)
```

常用组合：

```python
names = ["Ada", "Bob", "Cathy"]

for index, name in enumerate(names, start=1):
    print(index, name)
```

```python
names = ["Ada", "Bob"]
scores = [95, 80]

for name, score in zip(names, scores):
    print(name, score)
```

## while 循环

```python
count = 3
while count > 0:
    print(count)
    count -= 1
```

适合：

- 不确定循环次数。
- 等待条件变化。
- 交互式输入。

## break、continue、else

```python
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            break
    else:
        print(n, "is prime")
```

循环的 `else` 在没有被 `break` 打断时执行。

## 推导式

列表推导式：

```python
squares = [x * x for x in range(10)]
```

带条件：

```python
even_squares = [x * x for x in range(10) if x % 2 == 0]
```

字典推导式：

```python
lengths = {word: len(word) for word in ["python", "java"]}
```

集合推导式：

```python
unique_lengths = {len(word) for word in ["hi", "to", "python"]}
```

## match 语句

```python
command = "start"

match command:
    case "start":
        print("starting")
    case "stop":
        print("stopping")
    case _:
        print("unknown")
```

适合处理结构清晰的多分支逻辑。

## 常见坑

- 在循环中修改正在遍历的列表。
- 推导式写得太复杂，反而难读。
- `range(10)` 是 0 到 9，不包含 10。
- 忘记 `while` 循环的退出条件。

## 练习

- 打印九九乘法表。
- 找出 1 到 100 的所有质数。
- 把列表中的负数过滤掉。
- 用推导式把英文单词列表转换成长度字典。