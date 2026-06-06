---
title: "抽代笔记整理"
date: 2026-06-05 21:07:34
updated: 2026-06-05 21:07:34
permalink: notes/数学-abstract-algebra-抽代笔记整理.backup-20260605-前置补充前-46a75360/
categories:
  - "数学"
  - "Abstract algebra"
tags:
  - "obsidian"
  - "数学"
  - "Abstract algebra"
  - "abstract-algebra"
  - "ring-theory"
  - "group-theory"
  - "modules"
  - "fields"
description: "抽代笔记整理 说明：以下内容按原 PDF 的出现顺序整理，并把手写笔记中的定义、定理、例子与证明改写为较接近数学书的排版。明显划掉、重复或笔误的地方已按上下文修正。 1. 素理想与极大理想 定义：素理想 设 R 为交换环， P subseteq R 为理想。若 1. P ne R ； 2. 对任意 "
mathjax: true
---
# 抽代笔记整理

> 说明：以下内容按原 PDF 的出现顺序整理，并把手写笔记中的定义、定理、例子与证明改写为较接近数学书的排版。明显划掉、重复或笔误的地方已按上下文修正。

## 1. 素理想与极大理想

### 定义：素理想

设 <span class="kalax-inline-math">R</span> 为交换环，<span class="kalax-inline-math">P\subseteq R</span> 为理想。若

1. <span class="kalax-inline-math">P\ne R</span>；
2. 对任意 <span class="kalax-inline-math">x,y\in R</span>，若 <span class="kalax-inline-math">xy\in P</span>，则 <span class="kalax-inline-math">x\in P</span> 或 <span class="kalax-inline-math">y\in P</span>，

则称 <span class="kalax-inline-math">P</span> 是 <span class="kalax-inline-math">R</span> 的一个**素理想**。

等价地，

<div class="kalax-display-math">P \text{ 是素理想}
\iff
R/P \text{ 是整环}.</div>

### 例

1. 在 <span class="kalax-inline-math">R=\mathbb Z</span> 中，<span class="kalax-inline-math">(p)</span> 是素理想当且仅当 <span class="kalax-inline-math">p</span> 是素数；<span class="kalax-inline-math">(0)</span> 也是素理想，因为 <span class="kalax-inline-math">\mathbb Z</span> 是整环。
2. 在 <span class="kalax-inline-math">R=\mathbb F_2[x]</span> 中，<span class="kalax-inline-math">(x^2+1)</span> 不是素理想，因为

   <div class="kalax-display-math">x^2+1=(x+1)^2</div>
   

   在 <span class="kalax-inline-math">\mathbb F_2[x]</span> 中可约。
3. 在 <span class="kalax-inline-math">R=\mathbb C[x]/(x^2)</span> 中，<span class="kalax-inline-math">(0)</span> 不是素理想，因为 <span class="kalax-inline-math">[x]^2=0</span>，但 <span class="kalax-inline-math">[x]\ne 0</span>。

### 定理：素理想的乘积判别

设 <span class="kalax-inline-math">R</span> 为交换环，<span class="kalax-inline-math">P\subseteq R</span> 为真理想。以下命题等价：

1. <span class="kalax-inline-math">P</span> 是素理想；
2. 对任意理想 <span class="kalax-inline-math">A,B\subseteq R</span>，若 <span class="kalax-inline-math">AB\subseteq P</span>，则 <span class="kalax-inline-math">A\subseteq P</span> 或 <span class="kalax-inline-math">B\subseteq P</span>。

**证明。**

若 <span class="kalax-inline-math">P</span> 是素理想，且 <span class="kalax-inline-math">AB\subseteq P</span>。若 <span class="kalax-inline-math">A\nsubseteq P</span> 且 <span class="kalax-inline-math">B\nsubseteq P</span>，取

<div class="kalax-display-math">a\in A\setminus P,\qquad b\in B\setminus P.</div>

则 <span class="kalax-inline-math">ab\in AB\subseteq P</span>，与 <span class="kalax-inline-math">P</span> 为素理想矛盾。

反过来，若对理想乘积有上述性质，取 <span class="kalax-inline-math">a,b\in R</span> 且 <span class="kalax-inline-math">ab\in P</span>，则

<div class="kalax-display-math">(a)(b)\subseteq P.</div>

于是 <span class="kalax-inline-math">(a)\subseteq P</span> 或 <span class="kalax-inline-math">(b)\subseteq P</span>，即 <span class="kalax-inline-math">a\in P</span> 或 <span class="kalax-inline-math">b\in P</span>。

### 定理：商环刻画素理想

设 <span class="kalax-inline-math">R</span> 为交换环，<span class="kalax-inline-math">P\subseteq R</span> 为真理想，则

<div class="kalax-display-math">P \text{ 是素理想}
\iff
R/P \text{ 是整环}.</div>

**证明。**

在 <span class="kalax-inline-math">R/P</span> 中，

<div class="kalax-display-math">\overline{x}\,\overline{y}=0
\iff
xy\in P.</div>

若 <span class="kalax-inline-math">P</span> 是素理想，则 <span class="kalax-inline-math">xy\in P</span> 推出 <span class="kalax-inline-math">x\in P</span> 或 <span class="kalax-inline-math">y\in P</span>，即 <span class="kalax-inline-math">\overline{x}=0</span> 或 <span class="kalax-inline-math">\overline{y}=0</span>，所以 <span class="kalax-inline-math">R/P</span> 无零因子。

反过来，若 <span class="kalax-inline-math">R/P</span> 是整环，则由 <span class="kalax-inline-math">\overline{x}\,\overline{y}=0</span> 得 <span class="kalax-inline-math">\overline{x}=0</span> 或 <span class="kalax-inline-math">\overline{y}=0</span>，即 <span class="kalax-inline-math">x\in P</span> 或 <span class="kalax-inline-math">y\in P</span>。

### 定义：偏序集与 Zorn 引理

设 <span class="kalax-inline-math">A</span> 为集合，关系 <span class="kalax-inline-math">\leq</span> 若满足：

1. 自反性：<span class="kalax-inline-math">a\leq a</span>；
2. 传递性：<span class="kalax-inline-math">a\leq b,\ b\leq c\Rightarrow a\leq c</span>；
3. 反对称性：<span class="kalax-inline-math">a\leq b,\ b\leq a\Rightarrow a=b</span>，

则称 <span class="kalax-inline-math">(A,\leq)</span> 为一个**偏序集**。若 <span class="kalax-inline-math">a\leq b</span> 或 <span class="kalax-inline-math">b\leq a</span>，称 <span class="kalax-inline-math">a,b</span> 可比较。

若 <span class="kalax-inline-math">B\subseteq A</span>，元素 <span class="kalax-inline-math">u\in A</span> 满足对任意 <span class="kalax-inline-math">b\in B</span> 都有 <span class="kalax-inline-math">b\leq u</span>，则称 <span class="kalax-inline-math">u</span> 为 <span class="kalax-inline-math">B</span> 的上界。

**Zorn 引理。** 设 <span class="kalax-inline-math">(A,\leq)</span> 是非空偏序集。若 <span class="kalax-inline-math">A</span> 中每条链都有上界，则 <span class="kalax-inline-math">A</span> 含有极大元。

### 定理：极大理想存在

设 <span class="kalax-inline-math">R</span> 为有单位的交换环，且 <span class="kalax-inline-math">R\ne 0</span>。则 <span class="kalax-inline-math">R</span> 至少有一个极大理想。更强地，任意真理想都包含在某个极大理想中。

**证明。**

给定真理想 <span class="kalax-inline-math">I\subsetneq R</span>。令

<div class="kalax-display-math">\mathcal A=\{J\subseteq R:J\text{ 是理想且 } I\subseteq J\subsetneq R\}.</div>

按包含关系排序。若 <span class="kalax-inline-math">\mathcal C=\{C_i\}</span> 是一条链，令

<div class="kalax-display-math">M=\bigcup_i C_i.</div>

则 <span class="kalax-inline-math">M</span> 是理想，并且 <span class="kalax-inline-math">I\subseteq M</span>。若 <span class="kalax-inline-math">M=R</span>，则 <span class="kalax-inline-math">1\in M</span>，于是 <span class="kalax-inline-math">1\in C_i</span> 对某个 <span class="kalax-inline-math">i</span> 成立，矛盾。因此 <span class="kalax-inline-math">M\in\mathcal A</span>。由 Zorn 引理，<span class="kalax-inline-math">\mathcal A</span> 有极大元，即包含 <span class="kalax-inline-math">I</span> 的极大理想。

### 定义：极大理想

设 <span class="kalax-inline-math">R</span> 为环，<span class="kalax-inline-math">M\subseteq R</span> 为理想。若

1. <span class="kalax-inline-math">M\ne R</span>；
2. 对任意理想 <span class="kalax-inline-math">I</span>，若 <span class="kalax-inline-math">M\subseteq I\subseteq R</span>，则 <span class="kalax-inline-math">I=M</span> 或 <span class="kalax-inline-math">I=R</span>，

则称 <span class="kalax-inline-math">M</span> 为**极大理想**。

### 定理：极大理想的商环刻画

设 <span class="kalax-inline-math">R</span> 为有单位交换环，<span class="kalax-inline-math">M\subseteq R</span> 为真理想。则

<div class="kalax-display-math">M \text{ 是极大理想}
\iff
R/M \text{ 是域}.</div>

**证明。**

若 <span class="kalax-inline-math">M</span> 极大。取非零元 <span class="kalax-inline-math">\overline a\in R/M</span>，则 <span class="kalax-inline-math">a\notin M</span>。由极大性，

<div class="kalax-display-math">M+(a)=R.</div>

于是存在 <span class="kalax-inline-math">m\in M,\ r\in R</span>，使得

<div class="kalax-display-math">m+ra=1.</div>

故 <span class="kalax-inline-math">\overline r\,\overline a=\overline 1</span>，所以 <span class="kalax-inline-math">\overline a</span> 可逆。

反过来，若 <span class="kalax-inline-math">R/M</span> 是域，设 <span class="kalax-inline-math">M\subsetneq N\subseteq R</span> 为理想。取 <span class="kalax-inline-math">x\in N\setminus M</span>，则 <span class="kalax-inline-math">\overline x\ne 0</span>。由于 <span class="kalax-inline-math">R/M</span> 是域，存在 <span class="kalax-inline-math">\overline y</span> 使

<div class="kalax-display-math">\overline x\,\overline y=\overline 1.</div>

即 <span class="kalax-inline-math">xy+m=1</span> 对某个 <span class="kalax-inline-math">m\in M</span> 成立。因 <span class="kalax-inline-math">xy\in N</span> 且 <span class="kalax-inline-math">m\in N</span>，得 <span class="kalax-inline-math">1\in N</span>，故 <span class="kalax-inline-math">N=R</span>。

### 推论：极大理想是素理想

若 <span class="kalax-inline-math">R</span> 为交换环，<span class="kalax-inline-math">M</span> 是极大理想，则 <span class="kalax-inline-math">M</span> 是素理想。

**理由。** <span class="kalax-inline-math">R/M</span> 是域，域一定是整环，因此 <span class="kalax-inline-math">M</span> 是素理想。

### 定理：域的等价刻画

设 <span class="kalax-inline-math">R</span> 为非零交换环。以下命题等价：

1. <span class="kalax-inline-math">R</span> 是域；
2. <span class="kalax-inline-math">R</span> 没有非平凡真理想；
3. <span class="kalax-inline-math">(0)</span> 是极大理想；
4. 任意非零环同态 <span class="kalax-inline-math">f:R\to S</span> 都是单射。

**说明。** 若 <span class="kalax-inline-math">R</span> 是域，则任何非零理想含有非零元 <span class="kalax-inline-math">a</span>，而 <span class="kalax-inline-math">a</span> 可逆，所以 <span class="kalax-inline-math">1=a^{-1}a</span> 属于该理想。

## 2. 商环与理想对应

### 回忆：环同态与核

若 <span class="kalax-inline-math">f:R\to S</span> 是环同态，则

<div class="kalax-display-math">R/\ker f \cong \operatorname{Im} f.</div>

若 <span class="kalax-inline-math">\ker f=R</span>，则 <span class="kalax-inline-math">f=0</span>；若 <span class="kalax-inline-math">\ker f=\{0\}</span>，则 <span class="kalax-inline-math">f</span> 单射。

### 理想对应定理

设 <span class="kalax-inline-math">I\subseteq R</span> 为理想。则有双射

<div class="kalax-display-math">\left\{\text{$R/I$ 的理想}\right\}
\longleftrightarrow
\left\{\text{$R$ 中包含 $I$ 的理想}\right\}.</div>

具体地，

<div class="kalax-display-math">J/I\subseteq R/I
\quad\leftrightarrow\quad
J\subseteq R,\ I\subseteq J.</div>

特别地，若 <span class="kalax-inline-math">I\subseteq J</span>，则

<div class="kalax-display-math">(R/I)/(J/I)\cong R/J.</div>

## 3. 有限直积与中国剩余定理

### 定理：环的直积

设 <span class="kalax-inline-math">\{R_i\}_{i\in I}</span> 是一族环，则

<div class="kalax-display-math">\prod_{i\in I} R_i</div>

在逐点加法和乘法下仍为环。

### 理想的直积

设 <span class="kalax-inline-math">R=R_1\times\cdots\times R_n</span>。若 <span class="kalax-inline-math">I_i\subseteq R_i</span> 是理想，则

<div class="kalax-display-math">I_1\times\cdots\times I_n</div>

是 <span class="kalax-inline-math">R</span> 的理想。反过来，<span class="kalax-inline-math">R</span> 的任意理想 <span class="kalax-inline-math">I</span> 都可写成

<div class="kalax-display-math">I=I_1\times\cdots\times I_n,</div>

其中

<div class="kalax-display-math">I_i=\pi_i(I)\subseteq R_i.</div>

证明关键是：若 <span class="kalax-inline-math">x=(x_1,\dots,x_n)\in I</span>，则通过乘以标准幂等元

<div class="kalax-display-math">e_i=(0,\dots,0,1,0,\dots,0)</div>

可得 <span class="kalax-inline-math">(0,\dots,x_i,\dots,0)\in I</span>，从而 <span class="kalax-inline-math">I</span> 由各坐标部分生成。

### 例：<span class="kalax-inline-math">\mathbb Z\times\mathbb Z</span> 中的素理想

在 <span class="kalax-inline-math">R=\mathbb Z\times\mathbb Z</span> 中，理想形如 <span class="kalax-inline-math">(a)\times(b)</span>。商环为

<div class="kalax-display-math">R/\bigl((a)\times(b)\bigr)
\cong
\mathbb Z/(a)\times\mathbb Z/(b).</div>

该商环为整环时，只能其中一个因子为零环，另一个为整环。因此素理想形如

<div class="kalax-display-math">(p)\times \mathbb Z
\quad\text{或}\quad
\mathbb Z\times(p),</div>

其中 <span class="kalax-inline-math">p=0</span> 或 <span class="kalax-inline-math">p</span> 为素数。

### 定理：中国剩余定理的存在唯一形式

设 <span class="kalax-inline-math">A_1,\dots,A_n\subseteq R</span> 为理想，且两两互素：

<div class="kalax-display-math">A_i+A_j=R,\qquad i\ne j.</div>

则对任意 <span class="kalax-inline-math">b_1,\dots,b_n\in R</span>，存在 <span class="kalax-inline-math">b\in R</span>，使得

<div class="kalax-display-math">b\equiv b_i\pmod {A_i},\qquad i=1,\dots,n.</div>

并且这样的 <span class="kalax-inline-math">b</span> 模

<div class="kalax-display-math">\bigcap_{i=1}^n A_i</div>

唯一。

### 中国剩余定理的商环形式

若 <span class="kalax-inline-math">A_1,\dots,A_n</span> 两两互素，则自然同态

<div class="kalax-display-math">\varphi:R\longrightarrow \prod_{i=1}^n R/A_i,\qquad
x\longmapsto (x+A_1,\dots,x+A_n)</div>

诱导同构

<div class="kalax-display-math">R/\bigcap_{i=1}^n A_i
\cong
\prod_{i=1}^n R/A_i.</div>

### 例

求整数 <span class="kalax-inline-math">b</span> 使

<div class="kalax-display-math">b\equiv 2\pmod 5,\qquad b\equiv 3\pmod 6.</div>

由于 <span class="kalax-inline-math">(5,6)=1</span>，解模 <span class="kalax-inline-math">30</span> 唯一。可取

<div class="kalax-display-math">b\equiv 27\pmod {30}.</div>

## 4. 交换环中的因子分解

### 定义：整除与相伴

设 <span class="kalax-inline-math">R</span> 为交换环，<span class="kalax-inline-math">a,b\in R</span>。

1. 若存在 <span class="kalax-inline-math">x\in R</span> 使 <span class="kalax-inline-math">ax=b</span>，则称 <span class="kalax-inline-math">a</span> 整除 <span class="kalax-inline-math">b</span>，记作 <span class="kalax-inline-math">a\mid b</span>。
2. 若 <span class="kalax-inline-math">a\mid b</span> 且 <span class="kalax-inline-math">b\mid a</span>，则称 <span class="kalax-inline-math">a,b</span> **相伴**，记作 <span class="kalax-inline-math">a\sim b</span>。

在有单位整环中，

<div class="kalax-display-math">a\sim b
\iff
(a)=(b)
\iff
a=ub\text{ for some }u\in R^\times.</div>

### 定义：不可约元、素元、可约元

设 <span class="kalax-inline-math">R</span> 为整环。

1. 非零非单位元 <span class="kalax-inline-math">c\in R</span> 称为**不可约元**，若 <span class="kalax-inline-math">c=ab</span> 推出 <span class="kalax-inline-math">a</span> 或 <span class="kalax-inline-math">b</span> 是单位。
2. 非零非单位元 <span class="kalax-inline-math">p\in R</span> 称为**素元**，若

   <div class="kalax-display-math">p\mid ab\Rightarrow p\mid a\text{ 或 }p\mid b.</div>

3. 非零非单位元 <span class="kalax-inline-math">c</span> 称为**可约元**，若 <span class="kalax-inline-math">c=ab</span>，其中 <span class="kalax-inline-math">a,b</span> 都不是单位。

### 例

1. 在 <span class="kalax-inline-math">\mathbb Z</span> 中，不可约元等价于素元。
2. 在 <span class="kalax-inline-math">\mathbb Z/6\mathbb Z</span> 中，<span class="kalax-inline-math">\overline 2</span> 是素元的直观判别会失效，因为环有零因子；因此素元概念通常放在整环中使用。
3. 在

   <div class="kalax-display-math">R=\mathbb Z[\sqrt{-3}]
   =
   \{a+b\sqrt{-3}:a,b\in\mathbb Z\}</div>

   中，<span class="kalax-inline-math">1+\sqrt{-3}</span> 可为不可约元，但不是素元。因为

   <div class="kalax-display-math">1+\sqrt{-3}\mid 4=(1+\sqrt{-3})(1-\sqrt{-3}),</div>

   但它不整除 <span class="kalax-inline-math">2</span>。

### 定理：素元与素理想

设 <span class="kalax-inline-math">R</span> 为整环，<span class="kalax-inline-math">x\in R</span> 非零非单位。则

<div class="kalax-display-math">x \text{ 是素元}
\iff
(x) \text{ 是素理想}.</div>

### 定理：不可约元与主理想的极大性

设 <span class="kalax-inline-math">R</span> 为整环，<span class="kalax-inline-math">x\in R</span> 非零非单位。若主理想 <span class="kalax-inline-math">(x)</span> 在所有真主理想中极大，则 <span class="kalax-inline-math">x</span> 不可约。

若 <span class="kalax-inline-math">R</span> 是 PID，则反过来也成立。因此在 PID 中，

<div class="kalax-display-math">x\text{ 不可约}
\iff
(x)\text{ 是真主理想中的极大元}.</div>

进一步，在 PID 中不可约元都是素元。

### 定义：唯一分解整环

整环 <span class="kalax-inline-math">R</span> 称为**唯一分解整环**（UFD），若任意非零非单位元 <span class="kalax-inline-math">x\in R</span> 都可写成

<div class="kalax-display-math">x=p_1p_2\cdots p_n,</div>

其中 <span class="kalax-inline-math">p_i</span> 为不可约元；并且若

<div class="kalax-display-math">x=q_1q_2\cdots q_m</div>

也是不可约分解，则 <span class="kalax-inline-math">m=n</span>，且在重排后 <span class="kalax-inline-math">p_i\sim q_i</span>。

### 例

<div class="kalax-display-math">\mathbb Z,\quad \mathbb C[x],\quad \mathbb F[x]</div>

都是 UFD。<span class="kalax-inline-math">\mathbb Z[\sqrt{-3}]</span> 不是 UFD。

### 引理：PID 中主理想升链稳定

若 <span class="kalax-inline-math">R</span> 是 PID，且

<div class="kalax-display-math">(a_1)\subseteq(a_2)\subseteq\cdots</div>

是一条主理想升链，则存在 <span class="kalax-inline-math">n</span>，使得对所有 <span class="kalax-inline-math">i\ge n</span>，

<div class="kalax-display-math">(a_i)=(a_n).</div>

**证明。** 令

<div class="kalax-display-math">A=\bigcup_i (a_i).</div>

则 <span class="kalax-inline-math">A</span> 是理想。因 <span class="kalax-inline-math">R</span> 是 PID，存在 <span class="kalax-inline-math">a\in R</span> 使 <span class="kalax-inline-math">A=(a)</span>。于是 <span class="kalax-inline-math">a\in(a_n)</span> 对某个 <span class="kalax-inline-math">n</span> 成立，从而

<div class="kalax-display-math">A=(a)\subseteq(a_n)\subseteq A.</div>

故 <span class="kalax-inline-math">(a_i)=(a_n)</span> 对 <span class="kalax-inline-math">i\ge n</span> 成立。

### 定理：PID 是 UFD

若 <span class="kalax-inline-math">R</span> 是 PID，则 <span class="kalax-inline-math">R</span> 是 UFD。

**证明思路。**

1. **存在性。** 若 <span class="kalax-inline-math">x</span> 不可约则结束。若 <span class="kalax-inline-math">x=ab</span> 且 <span class="kalax-inline-math">a,b</span> 都非单位，则继续分解。若该过程不停止，会得到严格升链

   <div class="kalax-display-math">(x)\subsetneq(a_1)\subsetneq(a_2)\subsetneq\cdots,</div>

   与升链稳定引理矛盾。

2. **唯一性。** 在 PID 中不可约元为素元。若

   <div class="kalax-display-math">p_1\cdots p_m=q_1\cdots q_n</div>

   是两种不可约分解，则 <span class="kalax-inline-math">p_1</span> 整除某个 <span class="kalax-inline-math">q_j</span>。因 <span class="kalax-inline-math">q_j</span> 不可约，得 <span class="kalax-inline-math">p_1\sim q_j</span>。约去后归纳。

## 5. Euclidean Domain 与最大公因子

### 定义：Euclidean Domain

整环 <span class="kalax-inline-math">R</span> 称为**欧几里得整环**，若存在函数

<div class="kalax-display-math">N:R\setminus\{0\}\to\mathbb Z_{\ge 0}</div>

使得对任意 <span class="kalax-inline-math">a,b\in R</span>，<span class="kalax-inline-math">b\ne 0</span>，存在 <span class="kalax-inline-math">q,r\in R</span> 满足

<div class="kalax-display-math">a=qb+r,\qquad r=0\text{ 或 }N(r)&lt;N(b).</div>

其中 <span class="kalax-inline-math">q,r</span> 分别称为商和余数。

### 例

1. <span class="kalax-inline-math">\mathbb Z</span> 是欧几里得整环，取 <span class="kalax-inline-math">N(n)=|n|</span>。
2. Gaussian integers

   <div class="kalax-display-math">\mathbb Z[i]=\{a+bi:a,b\in\mathbb Z\}</div>

   是欧几里得整环，可取

   <div class="kalax-display-math">N(a+bi)=a^2+b^2.</div>

### 定理：欧几里得整环是 PID

若 <span class="kalax-inline-math">R</span> 是欧几里得整环，则 <span class="kalax-inline-math">R</span> 是 PID。

**证明。**

令 <span class="kalax-inline-math">I\subseteq R</span> 为非零理想。取 <span class="kalax-inline-math">a\in I</span>，使得 <span class="kalax-inline-math">N(a)</span> 在 <span class="kalax-inline-math">I\setminus\{0\}</span> 中最小。任取 <span class="kalax-inline-math">b\in I</span>，由带余除法

<div class="kalax-display-math">b=qa+r,\qquad r=0\text{ 或 }N(r)&lt;N(a).</div>

因为 <span class="kalax-inline-math">r=b-qa\in I</span>，由 <span class="kalax-inline-math">N(a)</span> 的极小性得 <span class="kalax-inline-math">r=0</span>。故 <span class="kalax-inline-math">b\in(a)</span>，所以 <span class="kalax-inline-math">I=(a)</span>。

### 最大公因子

设 <span class="kalax-inline-math">R</span> 为交换环，<span class="kalax-inline-math">X\subseteq R</span>。若 <span class="kalax-inline-math">d\in R</span> 满足：

1. <span class="kalax-inline-math">d\mid x</span> 对所有 <span class="kalax-inline-math">x\in X</span> 成立；
2. 若 <span class="kalax-inline-math">c\mid x</span> 对所有 <span class="kalax-inline-math">x\in X</span> 成立，则 <span class="kalax-inline-math">c\mid d</span>，

则称 <span class="kalax-inline-math">d</span> 为 <span class="kalax-inline-math">X</span> 的一个**最大公因子**，记作 <span class="kalax-inline-math">\gcd(X)</span>。在一般环中最大公因子不一定存在。

若 <span class="kalax-inline-math">R</span> 是 PID，则任意有限集合 <span class="kalax-inline-math">\{a_1,\dots,a_n\}</span> 的最大公因子存在，并且可写成线性组合：

<div class="kalax-display-math">d=r_1a_1+\cdots+r_na_n.</div>

若 <span class="kalax-inline-math">R</span> 是 UFD，则最大公因子也存在：把各 <span class="kalax-inline-math">a_i</span> 分解成不可约元的乘积，取各不可约元指数的最小值即可。

## 6. 分式域

### 分式域的构造

设 <span class="kalax-inline-math">R</span> 是整环。考虑集合

<div class="kalax-display-math">R\times(R\setminus\{0\}).</div>

定义等价关系

<div class="kalax-display-math">(r,s)\sim(r',s')
\iff
rs'=r's.</div>

记 <span class="kalax-inline-math">(r,s)</span> 的等价类为

<div class="kalax-display-math">\frac r s.</div>

所有等价类构成 <span class="kalax-inline-math">R</span> 的**分式域**，记作 <span class="kalax-inline-math">\operatorname{Frac}(R)</span>。

加法与乘法定义为

<div class="kalax-display-math">\frac a b+\frac c d=\frac{ad+bc}{bd},
\qquad
\frac a b\cdot \frac c d=\frac{ac}{bd}.</div>

### 定理

若 <span class="kalax-inline-math">R</span> 是整环，则 <span class="kalax-inline-math">\operatorname{Frac}(R)</span> 是域，并且 <span class="kalax-inline-math">R</span> 可自然嵌入其中：

<div class="kalax-display-math">R\hookrightarrow \operatorname{Frac}(R),\qquad
r\mapsto \frac r1.</div>

### 例

<div class="kalax-display-math">\operatorname{Frac}(\mathbb Z)=\mathbb Q,
\qquad
\operatorname{Frac}(\mathbb Z[i])=\mathbb Q(i).</div>

## 7. 多项式环与形式幂级数

### 多项式环

设 <span class="kalax-inline-math">R</span> 为环，

<div class="kalax-display-math">R[x]=\left\{\sum_{i=0}^n a_ix^i:a_i\in R,\ n\ge 0\right\}.</div>

若

<div class="kalax-display-math">f=\sum_{i=0}^n a_ix^i,\qquad a_n\ne 0,</div>

则 <span class="kalax-inline-math">a_n</span> 称为首项系数，<span class="kalax-inline-math">a_0</span> 称为常数项，<span class="kalax-inline-math">n</span> 称为次数，记作 <span class="kalax-inline-math">\deg f=n</span>。

若 <span class="kalax-inline-math">R</span> 为交换环，则 <span class="kalax-inline-math">R[x]</span> 也是交换环。

多元多项式环可迭代定义：

<div class="kalax-display-math">R[x_1,\dots,x_n]\cong R[x_1,\dots,x_{n-1}][x_n].</div>

### 代入同态

设 <span class="kalax-inline-math">\varphi:R\to S</span> 是环同态，且 <span class="kalax-inline-math">s_1,\dots,s_n\in S</span> 与 <span class="kalax-inline-math">\varphi(R)</span> 中元素可交换，则存在唯一环同态

<div class="kalax-display-math">\overline\varphi:R[x_1,\dots,x_n]\to S</div>

满足

<div class="kalax-display-math">\overline\varphi|_R=\varphi,\qquad
\overline\varphi(x_i)=s_i.</div>

### 形式幂级数

形式幂级数环定义为

<div class="kalax-display-math">Rx
=
\left\{\sum_{i=0}^{\infty}a_ix^i:a_i\in R\right\}.</div>

命题：

1. 若

   <div class="kalax-display-math">f=\sum_{i=0}^{\infty}a_ix^i\in Rx,</div>

   则

   <div class="kalax-display-math">f\in Rx^\times
   \iff
   a_0\in R^\times.</div>

2. 若 <span class="kalax-inline-math">a_0</span> 在 <span class="kalax-inline-math">R</span> 中不可约，则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">Rx</span> 中不可约。

注意：<span class="kalax-inline-math">a_0</span> 不是单位并不必然推出 <span class="kalax-inline-math">f</span> 不可约；例如 <span class="kalax-inline-math">1+x</span> 在 <span class="kalax-inline-math">\mathbb Zx</span> 中是单位。

## 8. 多项式环中的因子分解

### 单项式与次数

在多元多项式环 <span class="kalax-inline-math">R[x_1,\dots,x_n]</span> 中，单项式形如

<div class="kalax-display-math">x_1^{k_1}\cdots x_n^{k_n}.</div>

总次数定义为

<div class="kalax-display-math">k_1+\cdots+k_n.</div>

零多项式次数约定为 <span class="kalax-inline-math">-\infty</span>；非零常数次数为 <span class="kalax-inline-math">0</span>。

若 <span class="kalax-inline-math">R</span> 是整环，则 <span class="kalax-inline-math">R[x_1,\dots,x_n]</span> 也是整环，并且

<div class="kalax-display-math">\deg(fg)=\deg f+\deg g.</div>

### 一元多项式的带余除法

设 <span class="kalax-inline-math">R</span> 为交换环，<span class="kalax-inline-math">g\in R[x]</span> 的首项系数为单位。则对任意 <span class="kalax-inline-math">f\in R[x]</span>，存在唯一 <span class="kalax-inline-math">q,r\in R[x]</span>，使得

<div class="kalax-display-math">f=qg+r,\qquad \deg r&lt;\deg g.</div>

特别地，若 <span class="kalax-inline-math">F</span> 是域，则 <span class="kalax-inline-math">F[x]</span> 是欧几里得整环，因此是 PID。

### 推论

若 <span class="kalax-inline-math">F</span> 是域，则

<div class="kalax-display-math">F[x]^\times=F^\times.</div>

即 <span class="kalax-inline-math">F[x]</span> 的单位正是非零常数多项式。

但 <span class="kalax-inline-math">F[x,y]</span> 不是 PID，例如 <span class="kalax-inline-math">(x,y)</span> 不是主理想。因此 <span class="kalax-inline-math">F[x,y]</span> 不是欧几里得整环。不过

<div class="kalax-display-math">F[x_1,\dots,x_n]</div>

仍然是 UFD。

### 根与因式定理

设 <span class="kalax-inline-math">f\in R[x]</span>，<span class="kalax-inline-math">c\in R</span>。若 <span class="kalax-inline-math">f(c)=0</span>，则称 <span class="kalax-inline-math">c</span> 为 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">R</span> 中的根。

若 <span class="kalax-inline-math">R</span> 为交换环，则

<div class="kalax-display-math">f(c)=0
\iff
x-c\mid f(x).</div>

### 根的个数

若 <span class="kalax-inline-math">D</span> 是整环，<span class="kalax-inline-math">f\in D[x]</span> 且 <span class="kalax-inline-math">\deg f=n</span>，则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">D</span> 中至多有 <span class="kalax-inline-math">n</span> 个根。

**证明思路。** 对次数归纳。若 <span class="kalax-inline-math">c</span> 是根，则 <span class="kalax-inline-math">f=(x-c)g</span>，且 <span class="kalax-inline-math">\deg g=n-1</span>。若 <span class="kalax-inline-math">c'\ne c</span> 也是根，则

<div class="kalax-display-math">0=f(c')=(c'-c)g(c').</div>

因 <span class="kalax-inline-math">D</span> 是整环且 <span class="kalax-inline-math">c'-c\ne 0</span>，得 <span class="kalax-inline-math">g(c')=0</span>。

### 多重根与导数

设 <span class="kalax-inline-math">D</span> 为整环，<span class="kalax-inline-math">f\in D[x]</span>。若

<div class="kalax-display-math">f(x)=(x-c)^m g(x),\qquad g(c)\ne 0,</div>

则称 <span class="kalax-inline-math">m</span> 为根 <span class="kalax-inline-math">c</span> 的重数。<span class="kalax-inline-math">m=1</span> 时称单根，<span class="kalax-inline-math">m&gt;1</span> 时称重根。

形式导数定义为

<div class="kalax-display-math">\left(\sum_{i=0}^n a_ix^i\right)'
=
\sum_{i=1}^n ia_ix^{i-1}.</div>

若 <span class="kalax-inline-math">D</span> 是整环，则

<div class="kalax-display-math">c \text{ 是 } f \text{ 的重根}
\iff
f(c)=0\text{ 且 } f'(c)=0.</div>

若 <span class="kalax-inline-math">D</span> 是域，则 <span class="kalax-inline-math">f</span> 无重根等价于 <span class="kalax-inline-math">f</span> 与 <span class="kalax-inline-math">f'</span> 互素：

<div class="kalax-display-math">\gcd(f,f')=1.</div>

例：在 <span class="kalax-inline-math">\mathbb Q[x]</span> 中，<span class="kalax-inline-math">f(x)=x^2+1</span> 的导数为 <span class="kalax-inline-math">2x</span>，故无重根。

### 有理根判别

设 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">F=\operatorname{Frac}(D)</span>。若

<div class="kalax-display-math">f(x)=a_nx^n+\cdots+a_0\in D[x]</div>

且 <span class="kalax-inline-math">c/d\in F</span> 是 <span class="kalax-inline-math">f</span> 的根，其中 <span class="kalax-inline-math">\gcd(c,d)=1</span>，则

<div class="kalax-display-math">c\mid a_0,\qquad d\mid a_n.</div>

### 例

对

<div class="kalax-display-math">f(x)=x^4+3x^3-6x^2-11x-6\in\mathbb Z[x],</div>

有理根只能从

<div class="kalax-display-math">\pm1,\ \pm2,\ \pm3,\ \pm6</div>

中寻找。

## 9. Gauss 引理与 Eisenstein 判别法

### 内容与本原多项式

设 <span class="kalax-inline-math">D</span> 是 UFD，

<div class="kalax-display-math">f(x)=\sum_{i=0}^n a_ix^i\in D[x].</div>

系数 <span class="kalax-inline-math">a_0,\dots,a_n</span> 的最大公因子称为 <span class="kalax-inline-math">f</span> 的**内容**，记作 <span class="kalax-inline-math">c(f)</span>。若 <span class="kalax-inline-math">c(f)</span> 是单位，则称 <span class="kalax-inline-math">f</span> 为**本原多项式**。

### Gauss 引理

若 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">f,g\in D[x]</span>，则

<div class="kalax-display-math">c(fg)\sim c(f)c(g).</div>

特别地，本原多项式的乘积仍是本原多项式。

### Gauss 引理的推论

设 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">F=\operatorname{Frac}(D)</span>。若 <span class="kalax-inline-math">f,g\in D[x]</span> 均为本原多项式，则

<div class="kalax-display-math">f\sim g\text{ in }D[x]
\iff
f\sim g\text{ in }F[x].</div>

若 <span class="kalax-inline-math">f\in D[x]</span> 为本原多项式，则

<div class="kalax-display-math">f\text{ 在 }D[x]\text{ 中不可约}
\iff
f\text{ 在 }F[x]\text{ 中不可约}.</div>

### 定理：<span class="kalax-inline-math">D[x]</span> 是 UFD

若 <span class="kalax-inline-math">D</span> 是 UFD，则 <span class="kalax-inline-math">D[x]</span> 也是 UFD。

因此反复归纳可得：

<div class="kalax-display-math">D[x_1,\dots,x_n]</div>

也是 UFD。

### Eisenstein 判别法

设 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">F=\operatorname{Frac}(D)</span>，

<div class="kalax-display-math">f(x)=a_nx^n+\cdots+a_0\in D[x],
\qquad \deg f\ge 1.</div>

若存在素元 <span class="kalax-inline-math">p\in D</span> 满足：

1. <span class="kalax-inline-math">p\nmid a_n</span>；
2. <span class="kalax-inline-math">p\mid a_i</span> 对所有 <span class="kalax-inline-math">0\le i\le n-1</span> 成立；
3. <span class="kalax-inline-math">p^2\nmid a_0</span>，

则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">F[x]</span> 中不可约。若 <span class="kalax-inline-math">f</span> 本原，则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">D[x]</span> 中也不可约。

### 例

令

<div class="kalax-display-math">f(x)=2x^3-6x^2+9x-15\in\mathbb Z[x].</div>

取 <span class="kalax-inline-math">p=3</span>，有 <span class="kalax-inline-math">3\nmid 2</span>，<span class="kalax-inline-math">3\mid -6,9,-15</span>，且 <span class="kalax-inline-math">9\nmid -15</span>。故 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">\mathbb Q[x]</span> 中不可约。

## 10. 群作用

### 定义：群作用

设 <span class="kalax-inline-math">G</span> 为群，<span class="kalax-inline-math">S</span> 为集合。<span class="kalax-inline-math">G</span> 在 <span class="kalax-inline-math">S</span> 上的一个左作用是映射

<div class="kalax-display-math">G\times S\to S,\qquad (g,x)\mapsto gx</div>

满足：

1. <span class="kalax-inline-math">ex=x</span>；
2. <span class="kalax-inline-math">g_1(g_2x)=(g_1g_2)x</span>。

记作

<div class="kalax-display-math">G\curvearrowright S.</div>

### 例

1. <span class="kalax-inline-math">S_n</span> 作用在 <span class="kalax-inline-math">\{1,2,\dots,n\}</span> 上：

   <div class="kalax-display-math">(\sigma,i)\mapsto \sigma(i).</div>

2. <span class="kalax-inline-math">G</span> 作用在自身上：

   - 左平移：<span class="kalax-inline-math">(h,g)\mapsto hg</span>；
   - 右平移：<span class="kalax-inline-math">(h,g)\mapsto gh^{-1}</span>；
   - 共轭作用：<span class="kalax-inline-math">(h,g)\mapsto hgh^{-1}</span>。

3. 若 <span class="kalax-inline-math">H\le G</span>，则 <span class="kalax-inline-math">H</span> 作用在 <span class="kalax-inline-math">G</span> 上：

   <div class="kalax-display-math">(h,g)\mapsto hg</div>

   其轨道为左陪集。

4. 若 <span class="kalax-inline-math">H\le G</span>，<span class="kalax-inline-math">H</span> 作用在 <span class="kalax-inline-math">G</span> 上：

   <div class="kalax-display-math">(h,g)\mapsto gh^{-1}</div>

   可看作右平移。

5. 若 <span class="kalax-inline-math">H\le G</span>，<span class="kalax-inline-math">H</span> 作用在子群集合上：

   <div class="kalax-display-math">(h,K)\mapsto hKh^{-1},</div>

   称为共轭作用。

### 轨道与稳定子

设 <span class="kalax-inline-math">G\curvearrowright S</span>。定义关系

<div class="kalax-display-math">x\sim y
\iff
\exists g\in G,\ gx=y.</div>

这是等价关系。

元素 <span class="kalax-inline-math">x</span> 的轨道为

<div class="kalax-display-math">Gx=\{gx:g\in G\}.</div>

稳定子为

<div class="kalax-display-math">G_x=\{g\in G:gx=x\}.</div>

稳定子 <span class="kalax-inline-math">G_x</span> 是 <span class="kalax-inline-math">G</span> 的子群。

### 轨道-稳定子定理

若 <span class="kalax-inline-math">G\curvearrowright S</span>，则

<div class="kalax-display-math">|Gx|=[G:G_x].</div>

**证明。** 映射

<div class="kalax-display-math">G/G_x\to Gx,\qquad gG_x\mapsto gx</div>

良定义且为双射。

### 共轭类、中心化子、正规化子

若 <span class="kalax-inline-math">G</span> 作用在自身上：

<div class="kalax-display-math">h\cdot g=hgh^{-1},</div>

则 <span class="kalax-inline-math">g</span> 的轨道称为 <span class="kalax-inline-math">g</span> 的**共轭类**：

<div class="kalax-display-math">\operatorname{Cl}(g)=\{hgh^{-1}:h\in G\}.</div>

稳定子称为 <span class="kalax-inline-math">g</span> 的**中心化子**：

<div class="kalax-display-math">C_G(g)=\{h\in G:hg=gh\}.</div>

若 <span class="kalax-inline-math">K\le G</span>，共轭作用在子群集合上：

<div class="kalax-display-math">h\cdot K=hKh^{-1}.</div>

其稳定子为 <span class="kalax-inline-math">K</span> 的**正规化子**：

<div class="kalax-display-math">N_G(K)=\{g\in G:gKg^{-1}=K\}.</div>

有

<div class="kalax-display-math">K\triangleleft N_G(K)\le G.</div>

### 类方程

设 <span class="kalax-inline-math">G</span> 为有限群，<span class="kalax-inline-math">x_1,\dots,x_r</span> 为所有非中心元素的共轭类代表，则

<div class="kalax-display-math">|G|
=
|Z(G)|+\sum_{i=1}^r [G:C_G(x_i)].</div>

若 <span class="kalax-inline-math">K\le G</span>，则 <span class="kalax-inline-math">K</span> 的共轭子群个数为

<div class="kalax-display-math">[G:N_G(K)].</div>

### 群作用诱导置换表示

若 <span class="kalax-inline-math">G\curvearrowright S</span>，则得到群同态

<div class="kalax-display-math">\theta:G\to A(S),</div>

其中 <span class="kalax-inline-math">A(S)</span> 是 <span class="kalax-inline-math">S</span> 上所有双射构成的群，且

<div class="kalax-display-math">\theta(g)(s)=gs.</div>

### Cayley 定理

任意群 <span class="kalax-inline-math">G</span> 都同构于某个置换群。若 <span class="kalax-inline-math">|G|=n</span>，则

<div class="kalax-display-math">G\hookrightarrow S_n.</div>

**证明。** 取 <span class="kalax-inline-math">G</span> 对自身的左平移作用，得到同态

<div class="kalax-display-math">G\to A(G).</div>

若 <span class="kalax-inline-math">g_1\ne g_2</span>，则 <span class="kalax-inline-math">\theta(g_1)(e)=g_1\ne g_2=\theta(g_2)(e)</span>，故该同态单射。

### 自同构与内自同构

记

<div class="kalax-display-math">\operatorname{Aut}(G)=\{f:G\to G:f\text{ 是同构}\}.</div>

共轭作用给出同态

<div class="kalax-display-math">G\to \operatorname{Aut}(G),\qquad
g\mapsto \bigl(h\mapsto ghg^{-1}\bigr).</div>

其核为中心：

<div class="kalax-display-math">\ker=Z(G).</div>

因此

<div class="kalax-display-math">G/Z(G)\cong \operatorname{Inn}(G)\le \operatorname{Aut}(G).</div>

## 11. Sylow 定理

### 引理：有限 <span class="kalax-inline-math">p</span>-群作用的固定点

设 <span class="kalax-inline-math">H</span> 为 <span class="kalax-inline-math">p</span>-群，<span class="kalax-inline-math">H\curvearrowright S</span>，且 <span class="kalax-inline-math">S</span> 有限。令

<div class="kalax-display-math">S_0=\{x\in S:hx=x\text{ for all }h\in H\}.</div>

则

<div class="kalax-display-math">|S_0|\equiv |S|\pmod p.</div>

**理由。** <span class="kalax-inline-math">S</span> 分解为若干轨道。轨道大小为

<div class="kalax-display-math">|\mathcal O_x|=[H:H_x].</div>

若轨道不是单点，则其大小被 <span class="kalax-inline-math">p</span> 整除。

### Cauchy 定理

若 <span class="kalax-inline-math">G</span> 为有限群，素数 <span class="kalax-inline-math">p</span> 满足 <span class="kalax-inline-math">p\mid |G|</span>，则存在 <span class="kalax-inline-math">a\in G</span>，使得

<div class="kalax-display-math">|a|=p.</div>

证明可考虑集合

<div class="kalax-display-math">S=\{(a_1,\dots,a_p)\in G^p:a_1a_2\cdots a_p=e\},</div>

并令 <span class="kalax-inline-math">\mathbb Z/p\mathbb Z</span> 通过循环移位作用在 <span class="kalax-inline-math">S</span> 上。固定点给出阶为 <span class="kalax-inline-math">p</span> 的元素。

### 定义：<span class="kalax-inline-math">p</span>-群与 Sylow <span class="kalax-inline-math">p</span>-子群

若有限群 <span class="kalax-inline-math">G</span> 满足

<div class="kalax-display-math">|G|=p^n</div>

则称 <span class="kalax-inline-math">G</span> 为 <span class="kalax-inline-math">p</span>-群。

若 <span class="kalax-inline-math">|G|=p^n m</span>，其中 <span class="kalax-inline-math">(p,m)=1</span>，则 <span class="kalax-inline-math">G</span> 的阶为 <span class="kalax-inline-math">p^n</span> 的子群称为 **Sylow <span class="kalax-inline-math">p</span>-子群**。

### <span class="kalax-inline-math">p</span>-群的中心

若 <span class="kalax-inline-math">G</span> 是有限 <span class="kalax-inline-math">p</span>-群，则

<div class="kalax-display-math">|Z(G)|&gt;1.</div>

**证明。** 令 <span class="kalax-inline-math">G</span> 对自身作共轭作用。类方程为

<div class="kalax-display-math">|G|=|Z(G)|+\sum_i |\operatorname{Cl}(x_i)|.</div>

非中心元素的共轭类大小都被 <span class="kalax-inline-math">p</span> 整除，且 <span class="kalax-inline-math">p\mid |G|</span>，故 <span class="kalax-inline-math">p\mid |Z(G)|</span>。由于 <span class="kalax-inline-math">e\in Z(G)</span>，得 <span class="kalax-inline-math">|Z(G)|&gt;1</span>。

### 正规化子引理

若 <span class="kalax-inline-math">G</span> 为有限群，<span class="kalax-inline-math">H&lt;G</span> 为 <span class="kalax-inline-math">p</span>-子群，则

<div class="kalax-display-math">N_G(H)\ne H.</div>

更精确地，在合适假设下

<div class="kalax-display-math">[N_G(H):H]\equiv [G:H]\pmod p.</div>

因此若 <span class="kalax-inline-math">p\mid [G:H]</span>，则 <span class="kalax-inline-math">N_G(H)</span> 严格大于 <span class="kalax-inline-math">H</span>。

### 第一 Sylow 定理

设

<div class="kalax-display-math">|G|=p^n m,\qquad (p,m)=1.</div>

则 <span class="kalax-inline-math">G</span> 含有阶为 <span class="kalax-inline-math">p^i</span> 的子群，对所有 <span class="kalax-inline-math">0\le i\le n</span> 成立。特别地，<span class="kalax-inline-math">G</span> 含有 Sylow <span class="kalax-inline-math">p</span>-子群。

并且可构造链

<div class="kalax-display-math">H_1\triangleleft H_2\triangleleft\cdots\triangleleft H_n,
\qquad |H_i|=p^i.</div>

### 第二 Sylow 定理

设 <span class="kalax-inline-math">|G|=p^n m</span>，<span class="kalax-inline-math">(p,m)=1</span>。

1. 任意 Sylow <span class="kalax-inline-math">p</span>-子群的共轭仍是 Sylow <span class="kalax-inline-math">p</span>-子群；
2. 任意两个 Sylow <span class="kalax-inline-math">p</span>-子群彼此共轭；
3. 若 Sylow <span class="kalax-inline-math">p</span>-子群唯一，则它在 <span class="kalax-inline-math">G</span> 中正规。

### 第三 Sylow 定理

设 <span class="kalax-inline-math">n_p</span> 为 <span class="kalax-inline-math">G</span> 的 Sylow <span class="kalax-inline-math">p</span>-子群个数。若

<div class="kalax-display-math">|G|=p^n m,\qquad (p,m)=1,</div>

则

<div class="kalax-display-math">n_p\mid m,\qquad n_p\equiv 1\pmod p.</div>

### 例：阶为 28 的群

若 <span class="kalax-inline-math">|G|=28=2^2\cdot 7</span>，则 Sylow <span class="kalax-inline-math">7</span>-子群个数 <span class="kalax-inline-math">n_7</span> 满足

<div class="kalax-display-math">n_7\mid 4,\qquad n_7\equiv 1\pmod 7.</div>

故 <span class="kalax-inline-math">n_7=1</span>，所以 <span class="kalax-inline-math">G</span> 含有正规 Sylow <span class="kalax-inline-math">7</span>-子群。

### 例：<span class="kalax-inline-math">S_4</span> 的 Sylow <span class="kalax-inline-math">3</span>-子群

因为

<div class="kalax-display-math">|S_4|=24=2^3\cdot 3,</div>

Sylow <span class="kalax-inline-math">3</span>-子群个数 <span class="kalax-inline-math">n_3</span> 满足

<div class="kalax-display-math">n_3\mid 8,\qquad n_3\equiv 1\pmod 3.</div>

故 <span class="kalax-inline-math">n_3=1</span> 或 <span class="kalax-inline-math">4</span>。事实上 <span class="kalax-inline-math">S_4</span> 中的 Sylow <span class="kalax-inline-math">3</span>-子群由 <span class="kalax-inline-math">3</span>-循环生成，共有四个：

<div class="kalax-display-math">\langle(123)\rangle,\quad
\langle(124)\rangle,\quad
\langle(134)\rangle,\quad
\langle(234)\rangle.</div>

## 12. 模

### 定义：左模

设 <span class="kalax-inline-math">R</span> 为环，<span class="kalax-inline-math">A</span> 为交换群。若有映射

<div class="kalax-display-math">R\times A\to A,\qquad (r,a)\mapsto ra</div>

满足：

1. <span class="kalax-inline-math">r(a+b)=ra+rb</span>；
2. <span class="kalax-inline-math">(r+s)a=ra+sa</span>；
3. <span class="kalax-inline-math">(rs)a=r(sa)</span>；
4. <span class="kalax-inline-math">1a=a</span>，

则称 <span class="kalax-inline-math">A</span> 为一个左 <span class="kalax-inline-math">R</span>-模。

### 例

1. 当 <span class="kalax-inline-math">R=\mathbb Z</span> 时，<span class="kalax-inline-math">\mathbb Z</span>-模恰好是交换群。
2. 若 <span class="kalax-inline-math">R=k</span> 是域，则 <span class="kalax-inline-math">k</span>-模就是 <span class="kalax-inline-math">k</span> 上的向量空间。
3. 若 <span class="kalax-inline-math">f:R\to S</span> 是环同态，则 <span class="kalax-inline-math">S</span> 可看作 <span class="kalax-inline-math">R</span>-模，标量作用为

   <div class="kalax-display-math">r\cdot s=f(r)s.</div>

4. 左理想正是 <span class="kalax-inline-math">R</span> 的左 <span class="kalax-inline-math">R</span>-子模。

### 零模

对任意 <span class="kalax-inline-math">a\in A</span> 和 <span class="kalax-inline-math">r\in R</span>，

<div class="kalax-display-math">0_Ra=0_A,\qquad r0_A=0_A.</div>

通常记零子模为 <span class="kalax-inline-math">0</span> 或 <span class="kalax-inline-math">\{0\}</span>。

### 模同态

设 <span class="kalax-inline-math">A,B</span> 为 <span class="kalax-inline-math">R</span>-模。映射 <span class="kalax-inline-math">f:A\to B</span> 称为 <span class="kalax-inline-math">R</span>-模同态，若

1. <span class="kalax-inline-math">f(x+y)=f(x)+f(y)</span>；
2. <span class="kalax-inline-math">f(ra)=rf(a)</span>。

即

<div class="kalax-display-math">f(rx+sy)=rf(x)+sf(y).</div>

单同态、满同态、同构按通常方式定义。

### 核与像

若 <span class="kalax-inline-math">f:A\to B</span> 是 <span class="kalax-inline-math">R</span>-模同态，则

<div class="kalax-display-math">\ker f=\{a\in A:f(a)=0\}</div>

是 <span class="kalax-inline-math">A</span> 的子模，

<div class="kalax-display-math">\operatorname{Im}f=f(A)</div>

是 <span class="kalax-inline-math">B</span> 的子模。

### 生成子模

若 <span class="kalax-inline-math">X\subseteq A</span>，则由 <span class="kalax-inline-math">X</span> 生成的子模记作

<div class="kalax-display-math">\langle X\rangle.</div>

若 <span class="kalax-inline-math">X=\{a_1,\dots,a_n\}</span>，则

<div class="kalax-display-math">\langle a_1,\dots,a_n\rangle
=
\left\{\sum_{i=1}^n r_ia_i:r_i\in R\right\}.</div>

特别地，

<div class="kalax-display-math">\langle a\rangle=Ra=\{ra:r\in R\}.</div>

### 商模与第一同构定理

若 <span class="kalax-inline-math">N\subseteq M</span> 是子 <span class="kalax-inline-math">R</span>-模，则

<div class="kalax-display-math">M/N</div>

在

<div class="kalax-display-math">r(m+N)=rm+N</div>

下成为 <span class="kalax-inline-math">R</span>-模，称为商模。

若 <span class="kalax-inline-math">f:A\to B</span> 是 <span class="kalax-inline-math">R</span>-模同态，则

<div class="kalax-display-math">A/\ker f\cong \operatorname{Im}f.</div>

### 第二、第三同构定理

若 <span class="kalax-inline-math">B,C\subseteq A</span> 是子模，则

<div class="kalax-display-math">B/(B\cap C)\cong (B+C)/C.</div>

若 <span class="kalax-inline-math">B\subseteq C\subseteq A</span>，则

<div class="kalax-display-math">(A/B)/(C/B)\cong A/C.</div>

### 正合列

模同态列

<div class="kalax-display-math">A\xrightarrow{f}B\xrightarrow{g}C</div>

称在 <span class="kalax-inline-math">B</span> 处正合，若

<div class="kalax-display-math">\operatorname{Im}f=\ker g.</div>

短正合列是形如

<div class="kalax-display-math">0\longrightarrow A\xrightarrow{f}B\xrightarrow{g}C\longrightarrow 0</div>

的正合列。此时 <span class="kalax-inline-math">f</span> 单射，<span class="kalax-inline-math">g</span> 满射，并且

<div class="kalax-display-math">B/\operatorname{Im}f\cong C.</div>

### 短五引理

考虑交换图

<div class="kalax-display-math">\begin{array}{ccccccccc}
0&amp;\longrightarrow&amp;A&amp;\xrightarrow{f}&amp;B&amp;\xrightarrow{g}&amp;C&amp;\longrightarrow&amp;0\\
&amp;&amp;\downarrow\alpha&amp;&amp;\downarrow\beta&amp;&amp;\downarrow\gamma&amp;&amp;\\
0&amp;\longrightarrow&amp;A'&amp;\xrightarrow{f'}&amp;B'&amp;\xrightarrow{g'}&amp;C'&amp;\longrightarrow&amp;0
\end{array}</div>

若两行短正合，则：

1. 若 <span class="kalax-inline-math">\alpha,\gamma</span> 单射，则 <span class="kalax-inline-math">\beta</span> 单射；
2. 若 <span class="kalax-inline-math">\alpha,\gamma</span> 满射，则 <span class="kalax-inline-math">\beta</span> 满射；
3. 若 <span class="kalax-inline-math">\alpha,\gamma</span> 是同构，则 <span class="kalax-inline-math">\beta</span> 是同构。

证明方法是 diagram chasing。

## 13. 域扩张

### 动机

二次方程

<div class="kalax-display-math">ax^2+bx+c=0</div>

有通用求根公式；三次、四次方程也有根式公式。但五次及以上一般没有根式公式。这推动我们研究域扩张与多项式方程的根。

### 定义：域扩张

若 <span class="kalax-inline-math">K\subseteq F</span> 且 <span class="kalax-inline-math">K,F</span> 都是域，并且 <span class="kalax-inline-math">K</span> 的运算与 <span class="kalax-inline-math">F</span> 中继承的运算一致，则称 <span class="kalax-inline-math">F</span> 是 <span class="kalax-inline-math">K</span> 的一个**域扩张**，记作

<div class="kalax-display-math">F/K.</div>

此时 <span class="kalax-inline-math">F</span> 自然是 <span class="kalax-inline-math">K</span> 上的向量空间。其维数称为扩张次数，记作

<div class="kalax-display-math">[F:K]=\dim_K F.</div>

若 <span class="kalax-inline-math">[F:K]&lt;\infty</span>，称 <span class="kalax-inline-math">F/K</span> 为有限扩张。

### 例

1. <span class="kalax-inline-math">\mathbb C/\mathbb R</span> 是次数为 <span class="kalax-inline-math">2</span> 的扩张：

   <div class="kalax-display-math">[\mathbb C:\mathbb R]=2.</div>

2. <span class="kalax-inline-math">\mathbb R/\mathbb Q</span> 不是有限扩张：

   <div class="kalax-display-math">[\mathbb R:\mathbb Q]=\infty.</div>

### 备注

域扩张中的“次数”类似群论中子群指数的概念，但要注意：选取不同基底只改变表示方式，不改变维数。