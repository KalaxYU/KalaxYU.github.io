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

设 \(R\) 为交换环，\(P\subseteq R\) 为理想。若

1. \(P\ne R\)；
2. 对任意 \(x,y\in R\)，若 \(xy\in P\)，则 \(x\in P\) 或 \(y\in P\)，

则称 \(P\) 是 \(R\) 的一个**素理想**。

等价地，

\[
P \text{ 是素理想}
\iff
R/P \text{ 是整环}.
\]

### 例

1. 在 \(R=\mathbb Z\) 中，\((p)\) 是素理想当且仅当 \(p\) 是素数；\((0)\) 也是素理想，因为 \(\mathbb Z\) 是整环。
2. 在 \(R=\mathbb F_2[x]\) 中，\((x^2+1)\) 不是素理想，因为

   \[
x^2+1=(x+1)^2
\]
   

   在 \(\mathbb F_2[x]\) 中可约。
3. 在 \(R=\mathbb C[x]/(x^2)\) 中，\((0)\) 不是素理想，因为 \([x]^2=0\)，但 \([x]\ne 0\)。

### 定理：素理想的乘积判别

设 \(R\) 为交换环，\(P\subseteq R\) 为真理想。以下命题等价：

1. \(P\) 是素理想；
2. 对任意理想 \(A,B\subseteq R\)，若 \(AB\subseteq P\)，则 \(A\subseteq P\) 或 \(B\subseteq P\)。

**证明。**

若 \(P\) 是素理想，且 \(AB\subseteq P\)。若 \(A\nsubseteq P\) 且 \(B\nsubseteq P\)，取

\[
a\in A\setminus P,\qquad b\in B\setminus P.
\]

则 \(ab\in AB\subseteq P\)，与 \(P\) 为素理想矛盾。

反过来，若对理想乘积有上述性质，取 \(a,b\in R\) 且 \(ab\in P\)，则

\[
(a)(b)\subseteq P.
\]

于是 \((a)\subseteq P\) 或 \((b)\subseteq P\)，即 \(a\in P\) 或 \(b\in P\)。

### 定理：商环刻画素理想

设 \(R\) 为交换环，\(P\subseteq R\) 为真理想，则

\[
P \text{ 是素理想}
\iff
R/P \text{ 是整环}.
\]

**证明。**

在 \(R/P\) 中，

\[
\overline{x}\,\overline{y}=0
\iff
xy\in P.
\]

若 \(P\) 是素理想，则 \(xy\in P\) 推出 \(x\in P\) 或 \(y\in P\)，即 \(\overline{x}=0\) 或 \(\overline{y}=0\)，所以 \(R/P\) 无零因子。

反过来，若 \(R/P\) 是整环，则由 \(\overline{x}\,\overline{y}=0\) 得 \(\overline{x}=0\) 或 \(\overline{y}=0\)，即 \(x\in P\) 或 \(y\in P\)。

### 定义：偏序集与 Zorn 引理

设 \(A\) 为集合，关系 \(\leq\) 若满足：

1. 自反性：\(a\leq a\)；
2. 传递性：\(a\leq b,\ b\leq c\Rightarrow a\leq c\)；
3. 反对称性：\(a\leq b,\ b\leq a\Rightarrow a=b\)，

则称 \((A,\leq)\) 为一个**偏序集**。若 \(a\leq b\) 或 \(b\leq a\)，称 \(a,b\) 可比较。

若 \(B\subseteq A\)，元素 \(u\in A\) 满足对任意 \(b\in B\) 都有 \(b\leq u\)，则称 \(u\) 为 \(B\) 的上界。

**Zorn 引理。** 设 \((A,\leq)\) 是非空偏序集。若 \(A\) 中每条链都有上界，则 \(A\) 含有极大元。

### 定理：极大理想存在

设 \(R\) 为有单位的交换环，且 \(R\ne 0\)。则 \(R\) 至少有一个极大理想。更强地，任意真理想都包含在某个极大理想中。

**证明。**

给定真理想 \(I\subsetneq R\)。令

\[
\mathcal A=\{J\subseteq R:J\text{ 是理想且 } I\subseteq J\subsetneq R\}.
\]

按包含关系排序。若 \(\mathcal C=\{C_i\}\) 是一条链，令

\[
M=\bigcup_i C_i.
\]

则 \(M\) 是理想，并且 \(I\subseteq M\)。若 \(M=R\)，则 \(1\in M\)，于是 \(1\in C_i\) 对某个 \(i\) 成立，矛盾。因此 \(M\in\mathcal A\)。由 Zorn 引理，\(\mathcal A\) 有极大元，即包含 \(I\) 的极大理想。

### 定义：极大理想

设 \(R\) 为环，\(M\subseteq R\) 为理想。若

1. \(M\ne R\)；
2. 对任意理想 \(I\)，若 \(M\subseteq I\subseteq R\)，则 \(I=M\) 或 \(I=R\)，

则称 \(M\) 为**极大理想**。

### 定理：极大理想的商环刻画

设 \(R\) 为有单位交换环，\(M\subseteq R\) 为真理想。则

\[
M \text{ 是极大理想}
\iff
R/M \text{ 是域}.
\]

**证明。**

若 \(M\) 极大。取非零元 \(\overline a\in R/M\)，则 \(a\notin M\)。由极大性，

\[
M+(a)=R.
\]

于是存在 \(m\in M,\ r\in R\)，使得

\[
m+ra=1.
\]

故 \(\overline r\,\overline a=\overline 1\)，所以 \(\overline a\) 可逆。

反过来，若 \(R/M\) 是域，设 \(M\subsetneq N\subseteq R\) 为理想。取 \(x\in N\setminus M\)，则 \(\overline x\ne 0\)。由于 \(R/M\) 是域，存在 \(\overline y\) 使

\[
\overline x\,\overline y=\overline 1.
\]

即 \(xy+m=1\) 对某个 \(m\in M\) 成立。因 \(xy\in N\) 且 \(m\in N\)，得 \(1\in N\)，故 \(N=R\)。

### 推论：极大理想是素理想

若 \(R\) 为交换环，\(M\) 是极大理想，则 \(M\) 是素理想。

**理由。** \(R/M\) 是域，域一定是整环，因此 \(M\) 是素理想。

### 定理：域的等价刻画

设 \(R\) 为非零交换环。以下命题等价：

1. \(R\) 是域；
2. \(R\) 没有非平凡真理想；
3. \((0)\) 是极大理想；
4. 任意非零环同态 \(f:R\to S\) 都是单射。

**说明。** 若 \(R\) 是域，则任何非零理想含有非零元 \(a\)，而 \(a\) 可逆，所以 \(1=a^{-1}a\) 属于该理想。

## 2. 商环与理想对应

### 回忆：环同态与核

若 \(f:R\to S\) 是环同态，则

\[
R/\ker f \cong \operatorname{Im} f.
\]

若 \(\ker f=R\)，则 \(f=0\)；若 \(\ker f=\{0\}\)，则 \(f\) 单射。

### 理想对应定理

设 \(I\subseteq R\) 为理想。则有双射

\[
\left\{\text{$R/I$ 的理想}\right\}
\longleftrightarrow
\left\{\text{$R$ 中包含 $I$ 的理想}\right\}.
\]

具体地，

\[
J/I\subseteq R/I
\quad\leftrightarrow\quad
J\subseteq R,\ I\subseteq J.
\]

特别地，若 \(I\subseteq J\)，则

\[
(R/I)/(J/I)\cong R/J.
\]

## 3. 有限直积与中国剩余定理

### 定理：环的直积

设 \(\{R_i\}_{i\in I}\) 是一族环，则

\[
\prod_{i\in I} R_i
\]

在逐点加法和乘法下仍为环。

### 理想的直积

设 \(R=R_1\times\cdots\times R_n\)。若 \(I_i\subseteq R_i\) 是理想，则

\[
I_1\times\cdots\times I_n
\]

是 \(R\) 的理想。反过来，\(R\) 的任意理想 \(I\) 都可写成

\[
I=I_1\times\cdots\times I_n,
\]

其中

\[
I_i=\pi_i(I)\subseteq R_i.
\]

证明关键是：若 \(x=(x_1,\dots,x_n)\in I\)，则通过乘以标准幂等元

\[
e_i=(0,\dots,0,1,0,\dots,0)
\]

可得 \((0,\dots,x_i,\dots,0)\in I\)，从而 \(I\) 由各坐标部分生成。

### 例：\(\mathbb Z\times\mathbb Z\) 中的素理想

在 \(R=\mathbb Z\times\mathbb Z\) 中，理想形如 \((a)\times(b)\)。商环为

\[
R/\bigl((a)\times(b)\bigr)
\cong
\mathbb Z/(a)\times\mathbb Z/(b).
\]

该商环为整环时，只能其中一个因子为零环，另一个为整环。因此素理想形如

\[
(p)\times \mathbb Z
\quad\text{或}\quad
\mathbb Z\times(p),
\]

其中 \(p=0\) 或 \(p\) 为素数。

### 定理：中国剩余定理的存在唯一形式

设 \(A_1,\dots,A_n\subseteq R\) 为理想，且两两互素：

\[
A_i+A_j=R,\qquad i\ne j.
\]

则对任意 \(b_1,\dots,b_n\in R\)，存在 \(b\in R\)，使得

\[
b\equiv b_i\pmod {A_i},\qquad i=1,\dots,n.
\]

并且这样的 \(b\) 模

\[
\bigcap_{i=1}^n A_i
\]

唯一。

### 中国剩余定理的商环形式

若 \(A_1,\dots,A_n\) 两两互素，则自然同态

\[
\varphi:R\longrightarrow \prod_{i=1}^n R/A_i,\qquad
x\longmapsto (x+A_1,\dots,x+A_n)
\]

诱导同构

\[
R/\bigcap_{i=1}^n A_i
\cong
\prod_{i=1}^n R/A_i.
\]

### 例

求整数 \(b\) 使

\[
b\equiv 2\pmod 5,\qquad b\equiv 3\pmod 6.
\]

由于 \((5,6)=1\)，解模 \(30\) 唯一。可取

\[
b\equiv 27\pmod {30}.
\]

## 4. 交换环中的因子分解

### 定义：整除与相伴

设 \(R\) 为交换环，\(a,b\in R\)。

1. 若存在 \(x\in R\) 使 \(ax=b\)，则称 \(a\) 整除 \(b\)，记作 \(a\mid b\)。
2. 若 \(a\mid b\) 且 \(b\mid a\)，则称 \(a,b\) **相伴**，记作 \(a\sim b\)。

在有单位整环中，

\[
a\sim b
\iff
(a)=(b)
\iff
a=ub\text{ for some }u\in R^\times.
\]

### 定义：不可约元、素元、可约元

设 \(R\) 为整环。

1. 非零非单位元 \(c\in R\) 称为**不可约元**，若 \(c=ab\) 推出 \(a\) 或 \(b\) 是单位。
2. 非零非单位元 \(p\in R\) 称为**素元**，若

   \[
p\mid ab\Rightarrow p\mid a\text{ 或 }p\mid b.
\]

3. 非零非单位元 \(c\) 称为**可约元**，若 \(c=ab\)，其中 \(a,b\) 都不是单位。

### 例

1. 在 \(\mathbb Z\) 中，不可约元等价于素元。
2. 在 \(\mathbb Z/6\mathbb Z\) 中，\(\overline 2\) 是素元的直观判别会失效，因为环有零因子；因此素元概念通常放在整环中使用。
3. 在

   \[
R=\mathbb Z[\sqrt{-3}]
   =
   \{a+b\sqrt{-3}:a,b\in\mathbb Z\}
\]

   中，\(1+\sqrt{-3}\) 可为不可约元，但不是素元。因为

   \[
1+\sqrt{-3}\mid 4=(1+\sqrt{-3})(1-\sqrt{-3}),
\]

   但它不整除 \(2\)。

### 定理：素元与素理想

设 \(R\) 为整环，\(x\in R\) 非零非单位。则

\[
x \text{ 是素元}
\iff
(x) \text{ 是素理想}.
\]

### 定理：不可约元与主理想的极大性

设 \(R\) 为整环，\(x\in R\) 非零非单位。若主理想 \((x)\) 在所有真主理想中极大，则 \(x\) 不可约。

若 \(R\) 是 PID，则反过来也成立。因此在 PID 中，

\[
x\text{ 不可约}
\iff
(x)\text{ 是真主理想中的极大元}.
\]

进一步，在 PID 中不可约元都是素元。

### 定义：唯一分解整环

整环 \(R\) 称为**唯一分解整环**（UFD），若任意非零非单位元 \(x\in R\) 都可写成

\[
x=p_1p_2\cdots p_n,
\]

其中 \(p_i\) 为不可约元；并且若

\[
x=q_1q_2\cdots q_m
\]

也是不可约分解，则 \(m=n\)，且在重排后 \(p_i\sim q_i\)。

### 例

\[
\mathbb Z,\quad \mathbb C[x],\quad \mathbb F[x]
\]

都是 UFD。\(\mathbb Z[\sqrt{-3}]\) 不是 UFD。

### 引理：PID 中主理想升链稳定

若 \(R\) 是 PID，且

\[
(a_1)\subseteq(a_2)\subseteq\cdots
\]

是一条主理想升链，则存在 \(n\)，使得对所有 \(i\ge n\)，

\[
(a_i)=(a_n).
\]

**证明。** 令

\[
A=\bigcup_i (a_i).
\]

则 \(A\) 是理想。因 \(R\) 是 PID，存在 \(a\in R\) 使 \(A=(a)\)。于是 \(a\in(a_n)\) 对某个 \(n\) 成立，从而

\[
A=(a)\subseteq(a_n)\subseteq A.
\]

故 \((a_i)=(a_n)\) 对 \(i\ge n\) 成立。

### 定理：PID 是 UFD

若 \(R\) 是 PID，则 \(R\) 是 UFD。

**证明思路。**

1. **存在性。** 若 \(x\) 不可约则结束。若 \(x=ab\) 且 \(a,b\) 都非单位，则继续分解。若该过程不停止，会得到严格升链

   \[
(x)\subsetneq(a_1)\subsetneq(a_2)\subsetneq\cdots,
\]

   与升链稳定引理矛盾。

2. **唯一性。** 在 PID 中不可约元为素元。若

   \[
p_1\cdots p_m=q_1\cdots q_n
\]

   是两种不可约分解，则 \(p_1\) 整除某个 \(q_j\)。因 \(q_j\) 不可约，得 \(p_1\sim q_j\)。约去后归纳。

## 5. Euclidean Domain 与最大公因子

### 定义：Euclidean Domain

整环 \(R\) 称为**欧几里得整环**，若存在函数

\[
N:R\setminus\{0\}\to\mathbb Z_{\ge 0}
\]

使得对任意 \(a,b\in R\)，\(b\ne 0\)，存在 \(q,r\in R\) 满足

\[
a=qb+r,\qquad r=0\text{ 或 }N(r)<N(b).
\]

其中 \(q,r\) 分别称为商和余数。

### 例

1. \(\mathbb Z\) 是欧几里得整环，取 \(N(n)=|n|\)。
2. Gaussian integers

   \[
\mathbb Z[i]=\{a+bi:a,b\in\mathbb Z\}
\]

   是欧几里得整环，可取

   \[
N(a+bi)=a^2+b^2.
\]

### 定理：欧几里得整环是 PID

若 \(R\) 是欧几里得整环，则 \(R\) 是 PID。

**证明。**

令 \(I\subseteq R\) 为非零理想。取 \(a\in I\)，使得 \(N(a)\) 在 \(I\setminus\{0\}\) 中最小。任取 \(b\in I\)，由带余除法

\[
b=qa+r,\qquad r=0\text{ 或 }N(r)<N(a).
\]

因为 \(r=b-qa\in I\)，由 \(N(a)\) 的极小性得 \(r=0\)。故 \(b\in(a)\)，所以 \(I=(a)\)。

### 最大公因子

设 \(R\) 为交换环，\(X\subseteq R\)。若 \(d\in R\) 满足：

1. \(d\mid x\) 对所有 \(x\in X\) 成立；
2. 若 \(c\mid x\) 对所有 \(x\in X\) 成立，则 \(c\mid d\)，

则称 \(d\) 为 \(X\) 的一个**最大公因子**，记作 \(\gcd(X)\)。在一般环中最大公因子不一定存在。

若 \(R\) 是 PID，则任意有限集合 \(\{a_1,\dots,a_n\}\) 的最大公因子存在，并且可写成线性组合：

\[
d=r_1a_1+\cdots+r_na_n.
\]

若 \(R\) 是 UFD，则最大公因子也存在：把各 \(a_i\) 分解成不可约元的乘积，取各不可约元指数的最小值即可。

## 6. 分式域

### 分式域的构造

设 \(R\) 是整环。考虑集合

\[
R\times(R\setminus\{0\}).
\]

定义等价关系

\[
(r,s)\sim(r',s')
\iff
rs'=r's.
\]

记 \((r,s)\) 的等价类为

\[
\frac r s.
\]

所有等价类构成 \(R\) 的**分式域**，记作 \(\operatorname{Frac}(R)\)。

加法与乘法定义为

\[
\frac a b+\frac c d=\frac{ad+bc}{bd},
\qquad
\frac a b\cdot \frac c d=\frac{ac}{bd}.
\]

### 定理

若 \(R\) 是整环，则 \(\operatorname{Frac}(R)\) 是域，并且 \(R\) 可自然嵌入其中：

\[
R\hookrightarrow \operatorname{Frac}(R),\qquad
r\mapsto \frac r1.
\]

### 例

\[
\operatorname{Frac}(\mathbb Z)=\mathbb Q,
\qquad
\operatorname{Frac}(\mathbb Z[i])=\mathbb Q(i).
\]

## 7. 多项式环与形式幂级数

### 多项式环

设 \(R\) 为环，

\[
R[x]=\left\{\sum_{i=0}^n a_ix^i:a_i\in R,\ n\ge 0\right\}.
\]

若

\[
f=\sum_{i=0}^n a_ix^i,\qquad a_n\ne 0,
\]

则 \(a_n\) 称为首项系数，\(a_0\) 称为常数项，\(n\) 称为次数，记作 \(\deg f=n\)。

若 \(R\) 为交换环，则 \(R[x]\) 也是交换环。

多元多项式环可迭代定义：

\[
R[x_1,\dots,x_n]\cong R[x_1,\dots,x_{n-1}][x_n].
\]

### 代入同态

设 \(\varphi:R\to S\) 是环同态，且 \(s_1,\dots,s_n\in S\) 与 \(\varphi(R)\) 中元素可交换，则存在唯一环同态

\[
\overline\varphi:R[x_1,\dots,x_n]\to S
\]

满足

\[
\overline\varphi|_R=\varphi,\qquad
\overline\varphi(x_i)=s_i.
\]

### 形式幂级数

形式幂级数环定义为

\[
Rx
=
\left\{\sum_{i=0}^{\infty}a_ix^i:a_i\in R\right\}.
\]

命题：

1. 若

   \[
f=\sum_{i=0}^{\infty}a_ix^i\in Rx,
\]

   则

   \[
f\in Rx^\times
   \iff
   a_0\in R^\times.
\]

2. 若 \(a_0\) 在 \(R\) 中不可约，则 \(f\) 在 \(Rx\) 中不可约。

注意：\(a_0\) 不是单位并不必然推出 \(f\) 不可约；例如 \(1+x\) 在 \(\mathbb Zx\) 中是单位。

## 8. 多项式环中的因子分解

### 单项式与次数

在多元多项式环 \(R[x_1,\dots,x_n]\) 中，单项式形如

\[
x_1^{k_1}\cdots x_n^{k_n}.
\]

总次数定义为

\[
k_1+\cdots+k_n.
\]

零多项式次数约定为 \(-\infty\)；非零常数次数为 \(0\)。

若 \(R\) 是整环，则 \(R[x_1,\dots,x_n]\) 也是整环，并且

\[
\deg(fg)=\deg f+\deg g.
\]

### 一元多项式的带余除法

设 \(R\) 为交换环，\(g\in R[x]\) 的首项系数为单位。则对任意 \(f\in R[x]\)，存在唯一 \(q,r\in R[x]\)，使得

\[
f=qg+r,\qquad \deg r<\deg g.
\]

特别地，若 \(F\) 是域，则 \(F[x]\) 是欧几里得整环，因此是 PID。

### 推论

若 \(F\) 是域，则

\[
F[x]^\times=F^\times.
\]

即 \(F[x]\) 的单位正是非零常数多项式。

但 \(F[x,y]\) 不是 PID，例如 \((x,y)\) 不是主理想。因此 \(F[x,y]\) 不是欧几里得整环。不过

\[
F[x_1,\dots,x_n]
\]

仍然是 UFD。

### 根与因式定理

设 \(f\in R[x]\)，\(c\in R\)。若 \(f(c)=0\)，则称 \(c\) 为 \(f\) 在 \(R\) 中的根。

若 \(R\) 为交换环，则

\[
f(c)=0
\iff
x-c\mid f(x).
\]

### 根的个数

若 \(D\) 是整环，\(f\in D[x]\) 且 \(\deg f=n\)，则 \(f\) 在 \(D\) 中至多有 \(n\) 个根。

**证明思路。** 对次数归纳。若 \(c\) 是根，则 \(f=(x-c)g\)，且 \(\deg g=n-1\)。若 \(c'\ne c\) 也是根，则

\[
0=f(c')=(c'-c)g(c').
\]

因 \(D\) 是整环且 \(c'-c\ne 0\)，得 \(g(c')=0\)。

### 多重根与导数

设 \(D\) 为整环，\(f\in D[x]\)。若

\[
f(x)=(x-c)^m g(x),\qquad g(c)\ne 0,
\]

则称 \(m\) 为根 \(c\) 的重数。\(m=1\) 时称单根，\(m>1\) 时称重根。

形式导数定义为

\[
\left(\sum_{i=0}^n a_ix^i\right)'
=
\sum_{i=1}^n ia_ix^{i-1}.
\]

若 \(D\) 是整环，则

\[
c \text{ 是 } f \text{ 的重根}
\iff
f(c)=0\text{ 且 } f'(c)=0.
\]

若 \(D\) 是域，则 \(f\) 无重根等价于 \(f\) 与 \(f'\) 互素：

\[
\gcd(f,f')=1.
\]

例：在 \(\mathbb Q[x]\) 中，\(f(x)=x^2+1\) 的导数为 \(2x\)，故无重根。

### 有理根判别

设 \(D\) 是 UFD，\(F=\operatorname{Frac}(D)\)。若

\[
f(x)=a_nx^n+\cdots+a_0\in D[x]
\]

且 \(c/d\in F\) 是 \(f\) 的根，其中 \(\gcd(c,d)=1\)，则

\[
c\mid a_0,\qquad d\mid a_n.
\]

### 例

对

\[
f(x)=x^4+3x^3-6x^2-11x-6\in\mathbb Z[x],
\]

有理根只能从

\[
\pm1,\ \pm2,\ \pm3,\ \pm6
\]

中寻找。

## 9. Gauss 引理与 Eisenstein 判别法

### 内容与本原多项式

设 \(D\) 是 UFD，

\[
f(x)=\sum_{i=0}^n a_ix^i\in D[x].
\]

系数 \(a_0,\dots,a_n\) 的最大公因子称为 \(f\) 的**内容**，记作 \(c(f)\)。若 \(c(f)\) 是单位，则称 \(f\) 为**本原多项式**。

### Gauss 引理

若 \(D\) 是 UFD，\(f,g\in D[x]\)，则

\[
c(fg)\sim c(f)c(g).
\]

特别地，本原多项式的乘积仍是本原多项式。

### Gauss 引理的推论

设 \(D\) 是 UFD，\(F=\operatorname{Frac}(D)\)。若 \(f,g\in D[x]\) 均为本原多项式，则

\[
f\sim g\text{ in }D[x]
\iff
f\sim g\text{ in }F[x].
\]

若 \(f\in D[x]\) 为本原多项式，则

\[
f\text{ 在 }D[x]\text{ 中不可约}
\iff
f\text{ 在 }F[x]\text{ 中不可约}.
\]

### 定理：\(D[x]\) 是 UFD

若 \(D\) 是 UFD，则 \(D[x]\) 也是 UFD。

因此反复归纳可得：

\[
D[x_1,\dots,x_n]
\]

也是 UFD。

### Eisenstein 判别法

设 \(D\) 是 UFD，\(F=\operatorname{Frac}(D)\)，

\[
f(x)=a_nx^n+\cdots+a_0\in D[x],
\qquad \deg f\ge 1.
\]

若存在素元 \(p\in D\) 满足：

1. \(p\nmid a_n\)；
2. \(p\mid a_i\) 对所有 \(0\le i\le n-1\) 成立；
3. \(p^2\nmid a_0\)，

则 \(f\) 在 \(F[x]\) 中不可约。若 \(f\) 本原，则 \(f\) 在 \(D[x]\) 中也不可约。

### 例

令

\[
f(x)=2x^3-6x^2+9x-15\in\mathbb Z[x].
\]

取 \(p=3\)，有 \(3\nmid 2\)，\(3\mid -6,9,-15\)，且 \(9\nmid -15\)。故 \(f\) 在 \(\mathbb Q[x]\) 中不可约。

## 10. 群作用

### 定义：群作用

设 \(G\) 为群，\(S\) 为集合。\(G\) 在 \(S\) 上的一个左作用是映射

\[
G\times S\to S,\qquad (g,x)\mapsto gx
\]

满足：

1. \(ex=x\)；
2. \(g_1(g_2x)=(g_1g_2)x\)。

记作

\[
G\curvearrowright S.
\]

### 例

1. \(S_n\) 作用在 \(\{1,2,\dots,n\}\) 上：

   \[
(\sigma,i)\mapsto \sigma(i).
\]

2. \(G\) 作用在自身上：

   - 左平移：\((h,g)\mapsto hg\)；
   - 右平移：\((h,g)\mapsto gh^{-1}\)；
   - 共轭作用：\((h,g)\mapsto hgh^{-1}\)。

3. 若 \(H\le G\)，则 \(H\) 作用在 \(G\) 上：

   \[
(h,g)\mapsto hg
\]

   其轨道为左陪集。

4. 若 \(H\le G\)，\(H\) 作用在 \(G\) 上：

   \[
(h,g)\mapsto gh^{-1}
\]

   可看作右平移。

5. 若 \(H\le G\)，\(H\) 作用在子群集合上：

   \[
(h,K)\mapsto hKh^{-1},
\]

   称为共轭作用。

### 轨道与稳定子

设 \(G\curvearrowright S\)。定义关系

\[
x\sim y
\iff
\exists g\in G,\ gx=y.
\]

这是等价关系。

元素 \(x\) 的轨道为

\[
Gx=\{gx:g\in G\}.
\]

稳定子为

\[
G_x=\{g\in G:gx=x\}.
\]

稳定子 \(G_x\) 是 \(G\) 的子群。

### 轨道-稳定子定理

若 \(G\curvearrowright S\)，则

\[
|Gx|=[G:G_x].
\]

**证明。** 映射

\[
G/G_x\to Gx,\qquad gG_x\mapsto gx
\]

良定义且为双射。

### 共轭类、中心化子、正规化子

若 \(G\) 作用在自身上：

\[
h\cdot g=hgh^{-1},
\]

则 \(g\) 的轨道称为 \(g\) 的**共轭类**：

\[
\operatorname{Cl}(g)=\{hgh^{-1}:h\in G\}.
\]

稳定子称为 \(g\) 的**中心化子**：

\[
C_G(g)=\{h\in G:hg=gh\}.
\]

若 \(K\le G\)，共轭作用在子群集合上：

\[
h\cdot K=hKh^{-1}.
\]

其稳定子为 \(K\) 的**正规化子**：

\[
N_G(K)=\{g\in G:gKg^{-1}=K\}.
\]

有

\[
K\triangleleft N_G(K)\le G.
\]

### 类方程

设 \(G\) 为有限群，\(x_1,\dots,x_r\) 为所有非中心元素的共轭类代表，则

\[
|G|
=
|Z(G)|+\sum_{i=1}^r [G:C_G(x_i)].
\]

若 \(K\le G\)，则 \(K\) 的共轭子群个数为

\[
[G:N_G(K)].
\]

### 群作用诱导置换表示

若 \(G\curvearrowright S\)，则得到群同态

\[
\theta:G\to A(S),
\]

其中 \(A(S)\) 是 \(S\) 上所有双射构成的群，且

\[
\theta(g)(s)=gs.
\]

### Cayley 定理

任意群 \(G\) 都同构于某个置换群。若 \(|G|=n\)，则

\[
G\hookrightarrow S_n.
\]

**证明。** 取 \(G\) 对自身的左平移作用，得到同态

\[
G\to A(G).
\]

若 \(g_1\ne g_2\)，则 \(\theta(g_1)(e)=g_1\ne g_2=\theta(g_2)(e)\)，故该同态单射。

### 自同构与内自同构

记

\[
\operatorname{Aut}(G)=\{f:G\to G:f\text{ 是同构}\}.
\]

共轭作用给出同态

\[
G\to \operatorname{Aut}(G),\qquad
g\mapsto \bigl(h\mapsto ghg^{-1}\bigr).
\]

其核为中心：

\[
\ker=Z(G).
\]

因此

\[
G/Z(G)\cong \operatorname{Inn}(G)\le \operatorname{Aut}(G).
\]

## 11. Sylow 定理

### 引理：有限 \(p\)-群作用的固定点

设 \(H\) 为 \(p\)-群，\(H\curvearrowright S\)，且 \(S\) 有限。令

\[
S_0=\{x\in S:hx=x\text{ for all }h\in H\}.
\]

则

\[
|S_0|\equiv |S|\pmod p.
\]

**理由。** \(S\) 分解为若干轨道。轨道大小为

\[
|\mathcal O_x|=[H:H_x].
\]

若轨道不是单点，则其大小被 \(p\) 整除。

### Cauchy 定理

若 \(G\) 为有限群，素数 \(p\) 满足 \(p\mid |G|\)，则存在 \(a\in G\)，使得

\[
|a|=p.
\]

证明可考虑集合

\[
S=\{(a_1,\dots,a_p)\in G^p:a_1a_2\cdots a_p=e\},
\]

并令 \(\mathbb Z/p\mathbb Z\) 通过循环移位作用在 \(S\) 上。固定点给出阶为 \(p\) 的元素。

### 定义：\(p\)-群与 Sylow \(p\)-子群

若有限群 \(G\) 满足

\[
|G|=p^n
\]

则称 \(G\) 为 \(p\)-群。

若 \(|G|=p^n m\)，其中 \((p,m)=1\)，则 \(G\) 的阶为 \(p^n\) 的子群称为 **Sylow \(p\)-子群**。

### \(p\)-群的中心

若 \(G\) 是有限 \(p\)-群，则

\[
|Z(G)|>1.
\]

**证明。** 令 \(G\) 对自身作共轭作用。类方程为

\[
|G|=|Z(G)|+\sum_i |\operatorname{Cl}(x_i)|.
\]

非中心元素的共轭类大小都被 \(p\) 整除，且 \(p\mid |G|\)，故 \(p\mid |Z(G)|\)。由于 \(e\in Z(G)\)，得 \(|Z(G)|>1\)。

### 正规化子引理

若 \(G\) 为有限群，\(H<G\) 为 \(p\)-子群，则

\[
N_G(H)\ne H.
\]

更精确地，在合适假设下

\[
[N_G(H):H]\equiv [G:H]\pmod p.
\]

因此若 \(p\mid [G:H]\)，则 \(N_G(H)\) 严格大于 \(H\)。

### 第一 Sylow 定理

设

\[
|G|=p^n m,\qquad (p,m)=1.
\]

则 \(G\) 含有阶为 \(p^i\) 的子群，对所有 \(0\le i\le n\) 成立。特别地，\(G\) 含有 Sylow \(p\)-子群。

并且可构造链

\[
H_1\triangleleft H_2\triangleleft\cdots\triangleleft H_n,
\qquad |H_i|=p^i.
\]

### 第二 Sylow 定理

设 \(|G|=p^n m\)，\((p,m)=1\)。

1. 任意 Sylow \(p\)-子群的共轭仍是 Sylow \(p\)-子群；
2. 任意两个 Sylow \(p\)-子群彼此共轭；
3. 若 Sylow \(p\)-子群唯一，则它在 \(G\) 中正规。

### 第三 Sylow 定理

设 \(n_p\) 为 \(G\) 的 Sylow \(p\)-子群个数。若

\[
|G|=p^n m,\qquad (p,m)=1,
\]

则

\[
n_p\mid m,\qquad n_p\equiv 1\pmod p.
\]

### 例：阶为 28 的群

若 \(|G|=28=2^2\cdot 7\)，则 Sylow \(7\)-子群个数 \(n_7\) 满足

\[
n_7\mid 4,\qquad n_7\equiv 1\pmod 7.
\]

故 \(n_7=1\)，所以 \(G\) 含有正规 Sylow \(7\)-子群。

### 例：\(S_4\) 的 Sylow \(3\)-子群

因为

\[
|S_4|=24=2^3\cdot 3,
\]

Sylow \(3\)-子群个数 \(n_3\) 满足

\[
n_3\mid 8,\qquad n_3\equiv 1\pmod 3.
\]

故 \(n_3=1\) 或 \(4\)。事实上 \(S_4\) 中的 Sylow \(3\)-子群由 \(3\)-循环生成，共有四个：

\[
\langle(123)\rangle,\quad
\langle(124)\rangle,\quad
\langle(134)\rangle,\quad
\langle(234)\rangle.
\]

## 12. 模

### 定义：左模

设 \(R\) 为环，\(A\) 为交换群。若有映射

\[
R\times A\to A,\qquad (r,a)\mapsto ra
\]

满足：

1. \(r(a+b)=ra+rb\)；
2. \((r+s)a=ra+sa\)；
3. \((rs)a=r(sa)\)；
4. \(1a=a\)，

则称 \(A\) 为一个左 \(R\)-模。

### 例

1. 当 \(R=\mathbb Z\) 时，\(\mathbb Z\)-模恰好是交换群。
2. 若 \(R=k\) 是域，则 \(k\)-模就是 \(k\) 上的向量空间。
3. 若 \(f:R\to S\) 是环同态，则 \(S\) 可看作 \(R\)-模，标量作用为

   \[
r\cdot s=f(r)s.
\]

4. 左理想正是 \(R\) 的左 \(R\)-子模。

### 零模

对任意 \(a\in A\) 和 \(r\in R\)，

\[
0_Ra=0_A,\qquad r0_A=0_A.
\]

通常记零子模为 \(0\) 或 \(\{0\}\)。

### 模同态

设 \(A,B\) 为 \(R\)-模。映射 \(f:A\to B\) 称为 \(R\)-模同态，若

1. \(f(x+y)=f(x)+f(y)\)；
2. \(f(ra)=rf(a)\)。

即

\[
f(rx+sy)=rf(x)+sf(y).
\]

单同态、满同态、同构按通常方式定义。

### 核与像

若 \(f:A\to B\) 是 \(R\)-模同态，则

\[
\ker f=\{a\in A:f(a)=0\}
\]

是 \(A\) 的子模，

\[
\operatorname{Im}f=f(A)
\]

是 \(B\) 的子模。

### 生成子模

若 \(X\subseteq A\)，则由 \(X\) 生成的子模记作

\[
\langle X\rangle.
\]

若 \(X=\{a_1,\dots,a_n\}\)，则

\[
\langle a_1,\dots,a_n\rangle
=
\left\{\sum_{i=1}^n r_ia_i:r_i\in R\right\}.
\]

特别地，

\[
\langle a\rangle=Ra=\{ra:r\in R\}.
\]

### 商模与第一同构定理

若 \(N\subseteq M\) 是子 \(R\)-模，则

\[
M/N
\]

在

\[
r(m+N)=rm+N
\]

下成为 \(R\)-模，称为商模。

若 \(f:A\to B\) 是 \(R\)-模同态，则

\[
A/\ker f\cong \operatorname{Im}f.
\]

### 第二、第三同构定理

若 \(B,C\subseteq A\) 是子模，则

\[
B/(B\cap C)\cong (B+C)/C.
\]

若 \(B\subseteq C\subseteq A\)，则

\[
(A/B)/(C/B)\cong A/C.
\]

### 正合列

模同态列

\[
A\xrightarrow{f}B\xrightarrow{g}C
\]

称在 \(B\) 处正合，若

\[
\operatorname{Im}f=\ker g.
\]

短正合列是形如

\[
0\longrightarrow A\xrightarrow{f}B\xrightarrow{g}C\longrightarrow 0
\]

的正合列。此时 \(f\) 单射，\(g\) 满射，并且

\[
B/\operatorname{Im}f\cong C.
\]

### 短五引理

考虑交换图

\[
\begin{array}{ccccccccc}
0&\longrightarrow&A&\xrightarrow{f}&B&\xrightarrow{g}&C&\longrightarrow&0\\
&&\downarrow\alpha&&\downarrow\beta&&\downarrow\gamma&&\\
0&\longrightarrow&A'&\xrightarrow{f'}&B'&\xrightarrow{g'}&C'&\longrightarrow&0
\end{array}
\]

若两行短正合，则：

1. 若 \(\alpha,\gamma\) 单射，则 \(\beta\) 单射；
2. 若 \(\alpha,\gamma\) 满射，则 \(\beta\) 满射；
3. 若 \(\alpha,\gamma\) 是同构，则 \(\beta\) 是同构。

证明方法是 diagram chasing。

## 13. 域扩张

### 动机

二次方程

\[
ax^2+bx+c=0
\]

有通用求根公式；三次、四次方程也有根式公式。但五次及以上一般没有根式公式。这推动我们研究域扩张与多项式方程的根。

### 定义：域扩张

若 \(K\subseteq F\) 且 \(K,F\) 都是域，并且 \(K\) 的运算与 \(F\) 中继承的运算一致，则称 \(F\) 是 \(K\) 的一个**域扩张**，记作

\[
F/K.
\]

此时 \(F\) 自然是 \(K\) 上的向量空间。其维数称为扩张次数，记作

\[
[F:K]=\dim_K F.
\]

若 \([F:K]<\infty\)，称 \(F/K\) 为有限扩张。

### 例

1. \(\mathbb C/\mathbb R\) 是次数为 \(2\) 的扩张：

   \[
[\mathbb C:\mathbb R]=2.
\]

2. \(\mathbb R/\mathbb Q\) 不是有限扩张：

   \[
[\mathbb R:\mathbb Q]=\infty.
\]

### 备注

域扩张中的“次数”类似群论中子群指数的概念，但要注意：选取不同基底只改变表示方式，不改变维数。