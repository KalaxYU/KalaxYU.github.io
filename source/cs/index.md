---
title: Computer Science
date: 2026-05-27 01:05:28
comments: false
---

<div class="module-page">
<p class="hub-kicker">CS</p>
<h2>Computer Science</h2>
<p class="hub-intro">Python、算法、数据结构、系统、工具和项目记录。</p>

<div class="note-list">
<a class="note-row" href="/notes/cs-python-index-0ffafc34/">
<strong>Python 总目录</strong>
<span>Python 总目录 这个文件夹是一套「从零基础到能独立做项目」的 Python 知识地图。不要把它当成一次性读完的教材，而要当成 Obsidian 里的长期索引：先建立全局结构，再不断把代码、报错、项目经验补进去。 推荐学习顺序 1. 学习路线图 2. 基础语法与运行方式 3. 数据类型与容器 4</span>
</a>
<a class="note-row" href="/notes/cs-python-10_type_hints_datamodel-977490f0/">
<strong>类型注解与数据模型</strong>
<span>类型注解与数据模型 类型注解不会让 Python 变成静态语言，但能让代码更清楚、更容易被工具检查。 基础类型注解 常见写法： Optional 与 Union A B 表示值可以是 A 或 B。 类型别名 用于提高可读性。 TypedDict 适合描述结构固定的字典。 Protocol Proto</span>
</a>
<a class="note-row" href="/notes/cs-python-11_testing_debugging_logging-e4d36020/">
<strong>测试、调试与日志</strong>
<span>测试、调试与日志 会测试和调试，才算真正能写项目。 测试的价值 - 防止改代码时破坏旧功能。 - 迫使你写更清晰的函数。 - 给未来的自己留下可运行文档。 - 让重构更有底气。 pytest 基础 运行： 测试命名 常见结构： pytest 默认发现： - test .py - test.py - </span>
</a>
<a class="note-row" href="/notes/cs-python-12_code_quality_project_structure-e0da07ef/">
<strong>代码质量与项目结构</strong>
<span>代码质量与项目结构 代码质量的目标不是「看起来高级」，而是让代码容易读、容易改、容易运行。 可读性原则 - 名字表达意图。 - 函数短小且职责单一。 - 复杂条件拆成有名字的变量。 - 避免过深嵌套。 - 重复出现三次以上再考虑抽象。 命名习惯 - 变量和函数： snake case - 类： Pa</span>
</a>
<a class="note-row" href="/notes/cs-python-13_concurrency_async_performance-2a0d0b44/">
<strong>并发、异步与性能</strong>
<span>并发、异步与性能 先写正确，再写清楚，最后再优化性能。 性能判断 优化前先回答： - 程序慢在哪里？ - 是 CPU 计算慢，还是 I/O 等待慢？ - 数据量会增长到多大？ - 有没有简单算法改进？ 计时 更系统可以用： - timeit - cProfile - line profiler GI</span>
</a>
<a class="note-row" href="/notes/cs-python-14_web_api-1d365c52/">
<strong>网络、Web 与 API</strong>
<span>网络、Web 与 API Web 方向的核心是理解 HTTP、数据格式、接口设计和后端框架。 HTTP 基础 必须掌握： - 请求方法： GET 、 POST 、 PUT 、 PATCH 、 DELETE - 状态码： 200 、 201 、 400 、 401 、 403 、 404 、 500 </span>
</a>
<a class="note-row" href="/notes/cs-python-15_database_persistence-54b79e4a/">
<strong>数据库与持久化</strong>
<span>数据库与持久化 持久化就是让数据在程序结束后仍然存在。 选择存储方式 - 少量配置：JSON、TOML、YAML。 - 表格数据：CSV、Excel。 - 结构化查询：SQLite、PostgreSQL、MySQL。 - 缓存和队列：Redis。 - 文档数据：MongoDB。 SQL 基础 必须掌</span>
</a>
<a class="note-row" href="/notes/cs-python-16_data_analysis_visualization-a25a0e0e/">
<strong>数据分析与可视化</strong>
<span>数据分析与可视化 数据分析方向的核心是：读取数据、清洗数据、理解数据、展示结论。 常用工具 - Jupyter：交互式分析。 - NumPy：数组和数值计算。 - Pandas：表格数据处理。 - Matplotlib：基础绘图。 - Seaborn：统计图表。 - Plotly：交互式图表。 - </span>
</a>
<a class="note-row" href="/notes/cs-python-17_automation_cli-8136e934/">
<strong>自动化脚本与命令行工具</strong>
<span>自动化脚本与命令行工具 自动化是 Python 最容易立刻产生价值的方向。 适合自动化的任务 - 批量重命名文件。 - 整理下载目录。 - 处理 CSV、Excel、JSON。 - 定时生成报告。 - 调用 API 同步数据。 - 批量压缩、复制、移动文件。 - 自动发送提醒。 脚本基本结构 命令行</span>
</a>
<a class="note-row" href="/notes/cs-python-18_packaging_deployment_security-a40504d9/">
<strong>打包、部署与安全</strong>
<span>打包、部署与安全 当代码要给别人用、放到服务器上、或长期运行时，就需要打包、部署和安全意识。 打包基础 现代 Python 项目通常使用 pyproject.toml 描述项目。 应该理解： - 项目名称和版本。 - 依赖。 - 可选依赖。 - 命令行入口。 - 构建 wheel。 版本号 常见语义</span>
</a>
<a class="note-row" href="/notes/cs-python-19_projects_practice-eee1b958/">
<strong>项目实战与复习清单</strong>
<span>项目实战与复习清单 真正掌握 Python 的标志是能独立完成小项目，并能解释自己的设计选择。 初级项目 1. 命令行计算器 要求： - 支持加减乘除。 - 处理除零错误。 - 支持循环输入。 - 写 5 个测试。 对应知识： - 基础语法与运行方式 - 函数、参数与作用域 - 测试、调试与日志 2</span>
</a>
<a class="note-row" href="/notes/cs-python-99_glossary-9716811d/">
<strong>Python 术语表</strong>
<span>Python 术语表 A API：应用程序接口，程序之间约定好的调用方式。 Argument：调用函数时传入的实际值。 Attribute：对象上的属性或方法。 B Boolean：布尔值， True 或 False 。 Built-in：Python 内置对象或函数，例如 len 、 sum 。 </span>
</a>
<a class="note-row" href="/notes/cs-python-00_learning_plan-4e9d8f54/">
<strong>Python 学习路线图</strong>
<span>Python 学习路线图 Python 的学习目标不是「背完语法」，而是获得三种能力：能快速写脚本，能组织项目，能在具体方向里解决实际问题。 第一阶段：能写小程序 目标：看懂并写出 50 行以内的小脚本。 必须掌握： - 安装 Python、运行 .py 文件、使用 REPL 或 Jupyter。 </span>
</a>
<a class="note-row" href="/notes/cs-python-01_syntax_basics-7dd2bdf7/">
<strong>基础语法与运行方式</strong>
<span>基础语法与运行方式 必须掌握 - Python 文件通常以 .py 结尾。 - 代码靠缩进表示层级，常用 4 个空格。 - 一行通常写一个语句。 - 后面是单行注释。 - 三引号字符串常用于文档字符串。 - Python 是动态类型语言：变量名可以绑定到不同类型的对象。 运行方式 常见运行方式： -</span>
</a>
<a class="note-row" href="/notes/cs-python-02_types_collections-da6fb66d/">
<strong>数据类型与容器</strong>
<span>数据类型与容器 基本类型 类型 例子 用途 --- --- --- int 42 整数 float 3.14 小数 bool True 真假 str "hello" 文本 NoneType None 空值 字符串 必须掌握： - 索引从 0 开始。 - 切片格式是 start:stop:step ，</span>
</a>
<a class="note-row" href="/notes/cs-python-03_control_flow_comprehensions-93a73354/">
<strong>流程控制与推导式</strong>
<span>流程控制与推导式 条件判断 重点： - 条件表达式最终会被转换成真假。 - 多分支从上到下判断，命中后停止。 - 复杂条件要拆变量，让代码更可读。 for 循环 常用组合： while 循环 适合： - 不确定循环次数。 - 等待条件变化。 - 交互式输入。 break、continue、else </span>
</a>
<a class="note-row" href="/notes/cs-python-04_functions_scope-f3d9a16d/">
<strong>函数、参数与作用域</strong>
<span>函数、参数与作用域 为什么需要函数 函数用于： - 封装重复逻辑。 - 给代码命名。 - 缩小复杂度。 - 方便测试。 参数类型 位置参数： 默认参数： 关键字参数： 可变位置参数： 可变关键字参数： 返回值 没有显式 return 时，函数返回 None 。 作用域 LEGB Python 查找名</span>
</a>
<a class="note-row" href="/notes/cs-python-05_oop-906bafbb/">
<strong>面向对象编程</strong>
<span>面向对象编程 核心概念 - 类：对象的模板。 - 对象：类创建出来的实例。 - 属性：对象保存的数据。 - 方法：对象能执行的行为。 self self 表示当前实例。调用方法时，Python 会自动把实例传进去。 等价于： 实例属性与类属性 实例属性属于单个对象，类属性属于类本身。 datacla</span>
</a>
<a class="note-row" href="/notes/cs-python-06_modules_packages_env-007f70aa/">
<strong>模块、包与虚拟环境</strong>
<span>模块、包与虚拟环境 模块 一个 .py 文件就是一个模块。 包 包是包含 Python 模块的文件夹，通常包含 init .py 。 导入方式 建议： - 标准库导入放上面。 - 第三方库导入放中间。 - 本项目导入放下面。 - 避免 from module import 。 name == " m</span>
</a>
<a class="note-row" href="/notes/cs-python-07_files_exceptions_context-69516238/">
<strong>文件、异常与上下文管理</strong>
<span>文件、异常与上下文管理 pathlib 优先使用 pathlib.Path 处理路径。 读写文本文件 使用 encoding="utf-8" 可以减少中文乱码。 使用 open 模式： - r ：读取。 - w ：写入并覆盖。 - a ：追加。 - rb ：二进制读取。 - wb ：二进制写入。 J</span>
</a>
<a class="note-row" href="/notes/cs-python-08_stdlib-b20082b6/">
<strong>常用标准库</strong>
<span>常用标准库 标准库是 Python 自带的工具箱。先熟悉标准库，可以少装很多不必要的第三方包。 路径与系统 - pathlib ：现代路径处理。 - os ：操作系统相关功能。 - sys ：解释器参数、退出码、导入路径。 - subprocess ：调用外部命令。 - shutil ：复制、移动、</span>
</a>
<a class="note-row" href="/notes/cs-python-09_iterators_generators_decorators-dcb4a495/">
<strong>迭代器、生成器与装饰器</strong>
<span>迭代器、生成器与装饰器 可迭代对象 可以被 for 循环遍历的对象就是可迭代对象。 常见可迭代对象： - list - tuple - dict - set - str - 文件对象 - 生成器 迭代器 迭代器实现了： - iter () - next () 生成器函数 使用 yield 的函数会返</span>
</a>
</div>
</div>
