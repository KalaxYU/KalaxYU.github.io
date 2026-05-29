---
title: "数据分析与可视化"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-16_data_analysis_visualization-a25a0e0e/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "data-analysis"
description: "数据分析与可视化 数据分析方向的核心是：读取数据、清洗数据、理解数据、展示结论。 常用工具 - Jupyter：交互式分析。 - NumPy：数组和数值计算。 - Pandas：表格数据处理。 - Matplotlib：基础绘图。 - Seaborn：统计图表。 - Plotly：交互式图表。 - "
---
# 数据分析与可视化

数据分析方向的核心是：读取数据、清洗数据、理解数据、展示结论。

## 常用工具

- Jupyter：交互式分析。
- NumPy：数组和数值计算。
- Pandas：表格数据处理。
- Matplotlib：基础绘图。
- Seaborn：统计图表。
- Plotly：交互式图表。
- scikit-learn：机器学习基础。

## NumPy 核心

```python
import numpy as np

arr = np.array([1, 2, 3])
print(arr.mean())
```

必须掌握：

- `ndarray`
- shape
- dtype
- broadcasting
- 向量化计算
- 布尔索引

## Pandas 核心

```python
import pandas as pd

df = pd.read_csv("data.csv")
print(df.head())
print(df.describe())
```

必须掌握：

- `Series`
- `DataFrame`
- 读取 CSV、Excel、JSON。
- 选择行列。
- 缺失值处理。
- 分组聚合。
- 合并表。
- 时间序列基础。

## 数据清洗

常见任务：

- 去重。
- 处理缺失值。
- 类型转换。
- 标准化列名。
- 过滤异常值。
- 拆分或合并字段。

## 可视化

选择图表：

- 趋势：折线图。
- 分布：直方图、箱线图。
- 比较：柱状图。
- 关系：散点图。
- 占比：饼图谨慎使用。

```python
import matplotlib.pyplot as plt

df["score"].hist()
plt.show()
```

## 分析报告结构

- 背景问题。
- 数据来源。
- 清洗步骤。
- 关键指标。
- 图表。
- 结论。
- 局限性。
- 下一步建议。

## 机器学习入门

先掌握：

- 训练集和测试集。
- 特征与标签。
- 过拟合与欠拟合。
- 分类、回归、聚类。
- 评估指标。

不要一上来追复杂模型，先把数据理解清楚。

## 常见坑

- 没检查缺失值。
- 把数据泄露到测试集。
- 只画图不解释。
- 相关性当因果。
- 忽略单位和采样偏差。

## 练习

- 分析一份成绩 CSV，输出平均分和排名。
- 清洗一份含缺失值的表格。
- 画出销售额随时间变化的折线图。
- 写一份 Markdown 数据分析报告。