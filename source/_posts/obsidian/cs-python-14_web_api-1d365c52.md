---
title: "网络、Web 与 API"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-14_web_api-1d365c52/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "web"
  - "api"
description: "网络、Web 与 API Web 方向的核心是理解 HTTP、数据格式、接口设计和后端框架。 HTTP 基础 必须掌握： - 请求方法： GET 、 POST 、 PUT 、 PATCH 、 DELETE - 状态码： 200 、 201 、 400 、 401 、 403 、 404 、 500 "
---
# 网络、Web 与 API

Web 方向的核心是理解 HTTP、数据格式、接口设计和后端框架。

## HTTP 基础

必须掌握：

- 请求方法：`GET`、`POST`、`PUT`、`PATCH`、`DELETE`
- 状态码：`200`、`201`、`400`、`401`、`403`、`404`、`500`
- 请求头：`Content-Type`、`Authorization`
- 查询参数、路径参数、请求体。
- JSON 数据格式。

## 调用 API

```python
import requests

response = requests.get("https://api.example.com/items", timeout=10)
response.raise_for_status()
data = response.json()
```

要点：

- 设置超时。
- 检查状态码。
- 处理异常。
- 不把密钥写死在代码里。

## Web 框架

常见选择：

- FastAPI：现代 API 服务，类型注解友好。
- Flask：轻量灵活。
- Django：全功能框架，适合复杂业务系统。

## FastAPI 最小例子

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}
```

## API 设计

好的 API：

- 路径表达资源。
- 状态码准确。
- 错误返回结构稳定。
- 输入校验清楚。
- 文档可读。
- 认证和权限边界明确。

## 数据校验

Web 输入永远不可信。

常见校验：

- 类型。
- 长度。
- 枚举值。
- 数字范围。
- 日期格式。
- 必填字段。

## 认证与权限

常见概念：

- Cookie 与 Session。
- Token。
- JWT。
- OAuth。
- RBAC。

先理解概念，再套框架。

## 爬虫基础

爬虫也是 HTTP 客户端。

要点：

- 遵守网站规则和频率限制。
- 设置合理 User-Agent。
- 处理重试和失败。
- 解析 HTML 可以用 BeautifulSoup。
- 动态网页可能需要浏览器自动化。

## 常见坑

- 忽略超时导致程序卡死。
- 不处理分页。
- 不处理 API 限流。
- 后端直接信任前端输入。
- 把密码或 API key 提交到仓库。

## 练习

- 写一个调用天气 API 的脚本。
- 写一个 FastAPI 待办事项接口。
- 给 API 增加输入校验和错误处理。
- 把 API 返回数据保存到 SQLite。