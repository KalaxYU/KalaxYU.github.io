---
title: "打包、部署与安全"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-18_packaging_deployment_security-a40504d9/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "deployment"
  - "security"
description: "打包、部署与安全 当代码要给别人用、放到服务器上、或长期运行时，就需要打包、部署和安全意识。 打包基础 现代 Python 项目通常使用 pyproject.toml 描述项目。 应该理解： - 项目名称和版本。 - 依赖。 - 可选依赖。 - 命令行入口。 - 构建 wheel。 版本号 常见语义"
---
# 打包、部署与安全

当代码要给别人用、放到服务器上、或长期运行时，就需要打包、部署和安全意识。

## 打包基础

现代 Python 项目通常使用 `pyproject.toml` 描述项目。

应该理解：

- 项目名称和版本。
- 依赖。
- 可选依赖。
- 命令行入口。
- 构建 wheel。

## 版本号

常见语义化版本：

- `MAJOR`：不兼容变更。
- `MINOR`：新增兼容功能。
- `PATCH`：兼容修复。

例子：`1.4.2`

## 命令行入口

项目可以暴露命令。

```toml
[project.scripts]
my-tool = "my_package.cli:main"
```

安装后可以运行：

```powershell
my-tool
```

## 部署方式

常见方式：

- 直接在服务器上运行。
- 使用 Docker。
- 部署到云函数。
- 部署为 Web 服务。
- 用任务调度器定时运行。

## Docker 概念

需要理解：

- 镜像。
- 容器。
- Dockerfile。
- 环境变量。
- 端口映射。
- volume。

## CI/CD

自动化流程通常包括：

- 安装依赖。
- 运行格式化检查。
- 运行测试。
- 构建包或镜像。
- 部署。

## 安全基础

必须养成：

- 不提交密钥、密码、token。
- 使用环境变量或密钥管理。
- 校验用户输入。
- 不拼接 SQL。
- 处理文件上传路径。
- 给网络请求设置超时。
- 定期更新依赖。

## 环境变量

```python
import os

api_key = os.environ["API_KEY"]
```

如果变量可选：

```python
debug = os.getenv("DEBUG", "false").lower() == "true"
```

## 常见坑

- 本地能跑，服务器缺依赖。
- 把 `.env` 提交到 Git。
- 日志里打印敏感信息。
- 部署没有健康检查。
- 没有备份数据。

## 练习

- 给一个项目添加 `pyproject.toml`。
- 把脚本打包成命令行工具。
- 用环境变量读取 API key。
- 给项目添加 GitHub Actions 测试流程。