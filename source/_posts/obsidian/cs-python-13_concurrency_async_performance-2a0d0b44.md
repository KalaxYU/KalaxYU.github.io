---
title: "并发、异步与性能"
date: 2026-05-29 15:03:20
updated: 2026-05-29 15:03:20
permalink: notes/cs-python-13_concurrency_async_performance-2a0d0b44/
categories:
  - "CS"
  - "Python"
tags:
  - "obsidian"
  - "CS"
  - "Python"
  - "python"
  - "concurrency"
  - "performance"
description: "并发、异步与性能 先写正确，再写清楚，最后再优化性能。 性能判断 优化前先回答： - 程序慢在哪里？ - 是 CPU 计算慢，还是 I/O 等待慢？ - 数据量会增长到多大？ - 有没有简单算法改进？ 计时 更系统可以用： - timeit - cProfile - line profiler GI"
---
# 并发、异步与性能

先写正确，再写清楚，最后再优化性能。

## 性能判断

优化前先回答：

- 程序慢在哪里？
- 是 CPU 计算慢，还是 I/O 等待慢？
- 数据量会增长到多大？
- 有没有简单算法改进？

## 计时

```python
from time import perf_counter

start = perf_counter()
run()
elapsed = perf_counter() - start
print(elapsed)
```

更系统可以用：

- `timeit`
- `cProfile`
- `line_profiler`

## GIL

Python 的全局解释器锁会影响多线程执行 CPU 密集任务。

简单理解：

- I/O 密集：线程或异步通常有效。
- CPU 密集：考虑多进程、向量化、C 扩展或换算法。

## threading

适合：

- 网络请求。
- 文件 I/O。
- 等待外部服务。

```python
from threading import Thread

def worker(name):
    print(name)

thread = Thread(target=worker, args=("task",))
thread.start()
thread.join()
```

## concurrent.futures

更推荐的统一接口。

```python
from concurrent.futures import ThreadPoolExecutor

with ThreadPoolExecutor(max_workers=5) as executor:
    results = list(executor.map(fetch, urls))
```

进程池：

```python
from concurrent.futures import ProcessPoolExecutor
```

## asyncio

适合大量 I/O 等待任务。

```python
import asyncio

async def main():
    await asyncio.sleep(1)
    print("done")

asyncio.run(main())
```

关键词：

- `async def`
- `await`
- `asyncio.gather`
- `asyncio.create_task`
- event loop

## 锁与队列

并发共享状态时要谨慎。

常见工具：

- `Lock`
- `Queue`
- `Semaphore`
- `Event`

## 性能常见方向

- 换更好的算法。
- 减少重复 I/O。
- 使用缓存。
- 批量处理。
- 使用生成器节省内存。
- 用 NumPy/Pandas 向量化。
- 把热点代码交给成熟库。

## 常见坑

- 以为多线程一定更快。
- 忘记等待任务结束。
- 异步函数里调用阻塞 I/O。
- 多进程传输大对象导致额外开销。
- 没有测量就优化。

## 练习

- 用线程池并发请求多个 URL。
- 用进程池计算一批 CPU 密集任务。
- 用 `asyncio.gather` 并发等待多个任务。
- 用 `cProfile` 找出脚本最慢的函数。