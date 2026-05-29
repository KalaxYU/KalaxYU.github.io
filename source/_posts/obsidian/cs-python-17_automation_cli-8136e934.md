---
title: "自动化脚本与命令行工具"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-17_automation_cli-8136e934/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "automation"
  - "cli"
description: "自动化脚本与命令行工具 自动化是 Python 最容易立刻产生价值的方向。 适合自动化的任务 - 批量重命名文件。 - 整理下载目录。 - 处理 CSV、Excel、JSON。 - 定时生成报告。 - 调用 API 同步数据。 - 批量压缩、复制、移动文件。 - 自动发送提醒。 脚本基本结构 命令行"
---
# 自动化脚本与命令行工具

自动化是 Python 最容易立刻产生价值的方向。

## 适合自动化的任务

- 批量重命名文件。
- 整理下载目录。
- 处理 CSV、Excel、JSON。
- 定时生成报告。
- 调用 API 同步数据。
- 批量压缩、复制、移动文件。
- 自动发送提醒。

## 脚本基本结构

```python
from pathlib import Path

def main():
    root = Path(".")
    for path in root.glob("*.txt"):
        print(path)

if __name__ == "__main__":
    main()
```

## 命令行参数

```python
import argparse

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("path")
    parser.add_argument("--dry-run", action="store_true")
    return parser.parse_args()
```

## dry run

危险操作前先支持预览模式。

```python
if dry_run:
    print(f"would move {source} -> {target}")
else:
    source.rename(target)
```

## 文件自动化

核心工具：

- `pathlib`
- `shutil`
- `os`
- `zipfile`
- `tarfile`

## 表格自动化

常见工具：

- `csv`：标准 CSV。
- `openpyxl`：Excel。
- `pandas`：复杂表格处理。

## Web 自动化

常见工具：

- `requests` 或 `httpx`：API 请求。
- BeautifulSoup：HTML 解析。
- Playwright 或 Selenium：浏览器自动化。

## 稳定性

自动化脚本要考虑：

- 路径不存在。
- 文件已存在。
- 权限不足。
- 网络失败。
- 重试机制。
- 日志记录。
- 备份和回滚。

## 常见坑

- 直接删除或覆盖文件，没有备份。
- 路径写死，只能在自己电脑运行。
- 没有日志，失败后不知道发生什么。
- 没有参数，脚本只能改源码使用。

## 练习

- 写一个整理下载文件夹的脚本。
- 写一个批量重命名图片的脚本。
- 写一个 CSV 合并工具。
- 写一个命令行待办事项工具。