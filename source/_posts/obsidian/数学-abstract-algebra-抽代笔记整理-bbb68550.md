---
title: "抽代笔记整理"
date: 2026-06-05 23:17:36
updated: 2026-06-05 23:17:36
permalink: notes/数学-abstract-algebra-抽代笔记整理-bbb68550/
categories:
  - "数学"
  - "Abstract algebra"
tags:
  - "obsidian"
  - "数学"
  - "Abstract algebra"
  - "abstract-algebra"
  - "group-theory"
  - "ring-theory"
  - "modules"
  - "fields"
description: "抽代笔记整理 说明：以下内容按两份 PDF 的内容整理，并把手写笔记中的定义、定理、例子与证明改写为较接近数学书的排版。明显划掉、重复或笔误的地方已按上下文修正。前置补充已并入正文，并按“群论基础与作用 - 环与理想 - 分解与多项式 - 模 - 域扩张”的顺序重排。 1. 群论前置补充 生成子群 "
mathjax: true
---
# 抽代笔记整理

> 说明：以下内容按两份 PDF 的内容整理，并把手写笔记中的定义、定理、例子与证明改写为较接近数学书的排版。明显划掉、重复或笔误的地方已按上下文修正。前置补充已并入正文，并按“群论基础与作用 -> 环与理想 -> 分解与多项式 -> 模 -> 域扩张”的顺序重排。

## 1. 群论前置补充

### 生成子群

设 \(G\) 为群，\(S\subseteq G\)。由 \(S\) 生成的子群记作

\[
\langle S\rangle.
\]

它可以刻画为包含 \(S\) 的所有子群的交：

\[
\langle S\rangle=\bigcap_{S\subseteq H\le G}H.
\]

等价地，\(\langle S\rangle\) 由 \(S\) 中元素及其逆元的有限乘积组成。若 \(S=\{x_1,\dots,x_n\}\)，常写作

\[
\langle x_1,\dots,x_n\rangle.
\]

### 换位子与换位子子群

对 \(g,h\in G\)，定义换位子

\[
[g,h]=ghg^{-1}h^{-1}.
\]

若 \(H,K\le G\)，则定义

\[
[H,K]=\langle [h,k]:h\in H,\ k\in K\rangle.
\]

特别地，

\[
[G,G]
\]

称为 \(G\) 的换位子子群。

### 命题：换位子子群正规

对任意群 \(G\)，\([G,G]\) 是 \(G\) 的正规子群。

**证明。** 首先 \([G,G]\) 由所有换位子生成，故是子群。对任意 \(x,g,h\in G\)，有

\[
x[g,h]x^{-1}
=xghg^{-1}h^{-1}x^{-1}
=(xgx^{-1})(xhx^{-1})(xgx^{-1})^{-1}(xhx^{-1})^{-1},
\]

仍为换位子。因此 \(x[G,G]x^{-1}\subseteq [G,G]\)，反向包含同理，故 \([G,G]\triangleleft G\)。

### 命题：商群的交换化

商群

\[
G/[G,G]
\]

是交换群。并且若 \(N\triangleleft G\) 且 \(G/N\) 是交换群，则

\[
[G,G]\subseteq N.
\]

因此 \(G/[G,G]\) 可看作 \(G\) 的最大交换商群。

**证明。** 在 \(G/[G,G]\) 中，任意 \(g,h\in G\) 满足

\[
gh[G,G]=hg[G,G],
\]

因为 \(gh(hg)^{-1}=ghg^{-1}h^{-1}\in [G,G]\)。若 \(G/N\) 交换，则所有换位子在商群中为单位元，所以 \([G,G]\subseteq N\)。

## 2. 群作用

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

良定义且为双射。具体地，若

\[
gG_x=hG_x,
\]

则 \(h^{-1}g\in G_x\)，所以 \((h^{-1}g)x=x\)，从而 \(gx=hx\)，映射良定义。若 \(gx=hx\)，则 \(h^{-1}gx=x\)，所以 \(h^{-1}g\in G_x\)，即 \(gG_x=hG_x\)，故单射。任意轨道元素都形如 \(gx\)，所以满射。

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

## 3. Sylow 定理

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

## 4. 环的基本概念与同态

### 环的定义

环是一个非空集合 \(R\)，配备两个二元运算 \(+\) 与 \(\cdot\)，满足：

1. \((R,+)\) 是交换群，其单位元记作 \(0_R\)；
2. 乘法满足结合律：

   \[
(ab)c=a(bc);
\]

3. 乘法对加法满足左右分配律：

   \[
a(b+c)=ab+ac,
   \qquad
   (a+b)c=ac+bc;
\]

4. 若存在元素 \(1_R\in R\) 使得

   \[
1_Ra=a1_R=a,
\]

   则称 \(R\) 为有单位环，\(1_R\) 称为乘法单位元。

若乘法交换，即 \(ab=ba\) 对任意 \(a,b\in R\) 成立，则称 \(R\) 为交换环。

### 基本例子

1. \(\mathbb Z\) 是有单位交换环。
2. 对任意环 \(R\)，多项式集合

   \[
R[x]=\left\{\sum_{i=0}^n a_ix^i:a_i\in R\right\}
\]

   是环。
3. 矩阵环 \(M_n(\mathbb C)\) 是有单位环，其单位元为 \(I_n\)，零元为零矩阵；当 \(n\ge 2\) 时它不是交换环。
4. 一般线性群 \(GL_n(\mathbb C)\) 在矩阵乘法下是群，但不是环，因为它对加法不封闭。

### 零因子与消去律

设 \(R\) 为环。若存在非零元 \(b\in R\) 使得 \(ab=0\)，则称 \(a\) 为左零因子；若存在非零元 \(c\in R\) 使得 \(ca=0\)，则称 \(a\) 为右零因子。若两者都成立，则称 \(a\) 为零因子。

若 \(R\) 中没有非零左零因子，则左消去律成立：

\[
ax=ay\Rightarrow x=y.
\]

右消去律类似。

### 可逆元与单位

元素 \(a\in R\) 称为左可逆，若存在 \(c\in R\) 使 \(ca=1\)；称为右可逆，若存在 \(b\in R\) 使 \(ab=1\)。若 \(a\) 同时左、右可逆，则称 \(a\) 可逆，或称 \(a\) 是单位。

若 \(a\) 可逆，则其左逆与右逆唯一且相同。记 \(a^{-1}\) 为 \(a\) 的逆元。

### 整环、除环与域

1. 交换环 \(R\) 若没有非零零因子，则称为整环。
2. 有单位环 \(R\) 若任意非零元都是单位，则称为除环。
3. 交换除环称为域。

例：\(\mathbb Z\) 是整环；\(\mathbb Z/n\mathbb Z\) 是整环当且仅当 \(n\) 为素数；此时 \(\mathbb Z/n\mathbb Z\) 是有限域，常记作 \(\mathbb F_p\)。

### 四元数

实四元数环

\[
\mathbb H=\{a_0+a_1i+a_2j+a_3k:a_i\in\mathbb R\}
\]

按坐标加法，并由关系

\[
i^2=j^2=k^2=-1,
\qquad
ij=k,
\quad jk=i,
\quad ki=j,
\]

以及

\[
ji=-k,
\quad kj=-i,
\quad ik=-j
\]

定义乘法。它是非交换除环。若

\[
q=a_0+a_1i+a_2j+a_3k\ne 0,
\]

则

\[
q^{-1}=\frac{a_0-a_1i-a_2j-a_3k}{a_0^2+a_1^2+a_2^2+a_3^2}.
\]

### 函数环、矩阵环与群环

若 \(A\) 为交换群，则

\[
\operatorname{End}(A)=\{f:A\to A:f\text{ 是群同态}\}
\]

在逐点加法和复合乘法下成为环，乘法单位元为恒等映射。

若 \(G\) 是群，\(R\) 是环，则群环定义为

\[
R[G]=\left\{\sum_{g\in G}r_g g:r_g\in R,
\text{且仅有限多个 }r_g\ne 0\right\}.
\]

加法逐项定义，乘法由 \(G\) 中乘法线性扩张得到。

### 环同态

设 \(R,S\) 为环。映射 \(f:R\to S\) 称为环同态，若

\[
f(a+b)=f(a)+f(b),
\qquad
f(ab)=f(a)f(b).
\]

若要求保单位，则还需 \(f(1_R)=1_S\)。在某些教材中，环同态默认保单位；需要按语境判断。

环同态的核与像为

\[
\ker f=f^{-1}(0_S),
\qquad
\operatorname{Im}f=f(R).
\]

其中 \(\ker f\) 是 \(R\) 的理想，\(\operatorname{Im}f\) 是 \(S\) 的子环。

例：自然投影

\[
\mathbb Z\to\mathbb Z/n\mathbb Z,
\qquad
m\mapsto \overline m
\]

是环同态。映射 \(\mathbb Z\to 2\mathbb Z,\ n\mapsto 2n\) 是加法群同态，但不是环同态。

### 环的特征

设 \(R\) 为有单位环。若存在最小正整数 \(n\) 使得

\[
n1_R=0,
\]

则称 \(R\) 的特征为 \(n\)，记作 \(\operatorname{char}R=n\)。若不存在这样的正整数，则称 \(R\) 的特征为 \(0\)。

若 \(R\) 是整环且 \(\operatorname{char}R=n>0\)，则 \(n\) 必为素数。证明如下：若 \(n=ab\) 且 \(a,b>1\)，则

\[
(a1_R)(b1_R)=n1_R=0,
\]

而 \(a1_R,b1_R\ne0\)，这会产生零因子。

**详细证明。** 先说明为什么 \(a1_R,b1_R\) 非零。因为 \(n\) 是使 \(n1_R=0\) 的最小正整数，而 \(1\le a,b<n\)，所以

\[
a1_R\ne0,\qquad b1_R\ne0.
\]

但

\[
(a1_R)(b1_R)=ab1_R=n1_R=0.
\]

这说明两个非零元乘积为零，和整环无零因子矛盾。因此 \(n\) 不能分解为两个大于 \(1\) 的整数，只能是素数。

反过来，若 \(F\) 是域且 \(\operatorname{char}F=n>0\)，同样可知 \(n\) 是素数；因为域一定是整环。

## 5. 理想、主理想与商环基础

### 左理想、右理想与双边理想

设 \(R\) 为环，\(I\subseteq R\)。若 \(I\) 对加法封闭，且对任意 \(r\in R\)、\(x\in I\) 都有

\[
rx\in I,
\]

则称 \(I\) 为左理想；若总有 \(xr\in I\)，则称 \(I\) 为右理想。若二者都成立，则称 \(I\) 为双边理想，通常简称理想。

在交换环中，左理想、右理想与双边理想相同。

### 核是理想，像是子环

设 \(f:R\to S\) 是环同态。则

\[
\ker f=\{r\in R:f(r)=0\}
\]

是 \(R\) 的理想。

**证明。** 先看加法。若 \(x,y\in\ker f\)，则

\[
f(x-y)=f(x)-f(y)=0-0=0,
\]

所以 \(x-y\in\ker f\)。因此 \(\ker f\) 是 \((R,+)\) 的子群。再看吸收性。若 \(r\in R\) 且 \(x\in\ker f\)，则

\[
f(rx)=f(r)f(x)=f(r)\cdot0=0,
\]

所以 \(rx\in\ker f\)。同理

\[
f(xr)=f(x)f(r)=0\cdot f(r)=0,
\]

所以 \(xr\in\ker f\)。故 \(\ker f\) 是双边理想。

另一方面，

\[
\operatorname{Im}f=f(R)
\]

是 \(S\) 的子环：若 \(a=f(x),b=f(y)\)，则

\[
a-b=f(x-y),\qquad ab=f(xy),
\]

仍在像中。但 \(\operatorname{Im}f\) 一般不必是 \(S\) 的理想。例如包含映射 \(\mathbb Z\hookrightarrow \mathbb Q\) 的像是 \(\mathbb Z\)，它不是 \(\mathbb Q\) 的理想，因为

\[
\frac12\cdot 1=\frac12\notin\mathbb Z.
\]

### 例

1. \(n\mathbb Z\subseteq\mathbb Z\) 是理想。
2. 在矩阵环中，某些矩阵子集可以是左理想但不是右理想。
3. 若 \(f:R\to S\) 是环同态，则 \(\ker f\) 是 \(R\) 的理想；但 \(\operatorname{Im}f\) 一般只是子环，不一定是 \(S\) 的理想。
4. \(0=\{0_R\}\) 和 \(R\) 本身都是理想。真理想指不等于 \(R\) 的理想。

### 由集合生成的理想

若 \(X\subseteq R\)，记 \((X)\) 为包含 \(X\) 的最小理想，即

\[
(X)=\bigcap_{X\subseteq I\triangleleft R}I.
\]

若 $X=\{x_1,
\dots,x_n\}$，写作

\[
(x_1,
\dots,x_n).
\]

若 \(X=\{x\}\)，则称 \((x)\) 为主理想。

在交换环中，

\[
(a)=Ra=\{ra:r\in R\},
\]

且

\[
(x_1,\dots,x_n)=\left\{\sum_{i=1}^n r_ix_i:r_i\in R\right\}.
\]

**证明。** 记右侧集合为 \(J\)。显然 \(x_i\in J\)，所以任何包含 \(x_1,\dots,x_n\) 的理想都必须包含所有有限线性组合

\[
\sum_{i=1}^n r_ix_i.
\]

因此 \(J\) 包含在 \((x_1,\dots,x_n)\) 中。反过来，\(J\) 对加减封闭；若 \(s\in R\)，则

\[
s\sum_i r_ix_i=\sum_i (sr_i)x_i\in J,
\]

交换环中右乘也一样。因此 \(J\) 本身就是包含 \(x_1,\dots,x_n\) 的理想。由最小性，

\[
(x_1,\dots,x_n)=J.
\]

### 主理想整环

整环 \(R\) 称为主理想整环（PID），若 \(R\) 的每个理想都是主理想。

例：\(\mathbb Z\) 是 PID；若 \(F\) 是域，则 \(F[x]\) 是 PID；但 \(\mathbb Z[x]\) 和 \(F[x,y]\) 一般不是 PID。

例如在 \(F[x,y]\) 中，理想 \((x,y)\) 不是主理想。

### 理想的和与积

设 \(A,B\subseteq R\) 为理想。定义

\[
A+B=\{a+b:a\in A,
\ b\in B\},
\]

以及

\[
AB=\left\{\sum_{i=1}^n a_ib_i:a_i\in A,
\ b_i\in B\right\}.
\]

若 \(A,B\) 是双边理想，则 \(A+B\) 与 \(AB\) 仍是双边理想。

对理想 \(A,B,C\)，有

\[
(A+B)+C=A+(B+C),
\qquad
(AB)C=A(BC),
\]

并且

\[
C(A+B)=CA+CB,
\qquad
(A+B)C=AC+BC.
\]

**证明补充。** 以 \(AB\) 为例。若

\[
x=\sum_i a_ib_i,\qquad y=\sum_j a'_jb'_j
\]

属于 \(AB\)，则

\[
x+y=\sum_i a_ib_i+\sum_j a'_jb'_j\in AB,
\]

且 \(-x=\sum_i (-a_i)b_i\in AB\)。若 \(r\in R\)，则

\[
rx=\sum_i (ra_i)b_i\in AB,
\]

因为 \(A\) 是左理想；同时

\[
xr=\sum_i a_i(b_ir)\in AB,
\]

因为 \(B\) 是右理想。所以 \(AB\) 是双边理想。\(A+B\) 的证明类似但更直接。

### 商环

设 \(I\triangleleft R\) 为双边理想。商群 \(R/I\) 上定义乘法

\[
(a+I)(b+I)=ab+I.
\]

该定义良好，并使 \(R/I\) 成为环，称为 \(R\) 关于 \(I\) 的商环。

**良定义证明。** 商环乘法最需要检查的是：如果换了代表元，结果不变。设

\[
a+I=a'+I,\qquad b+I=b'+I.
\]

这等价于

\[
a-a'\in I,\qquad b-b'\in I.
\]

要证

\[
ab+I=a'b'+I,
\]

即证 \(ab-a'b'\in I\)。计算：

\[
ab-a'b'
=ab-a'b+a'b-a'b'
=(a-a')b+a'(b-b').
\]

因为 \(I\) 是双边理想，\((a-a')b\in I\)，且 \(a'(b-b')\in I\)，所以 \(ab-a'b'\in I\)。因此乘法定义良好。加法的良定义同理，由

\[
(a+b)-(a'+b')=(a-a')+(b-b')\in I
\]

得到。

环公理从 \(R\) 中继承。例如结合律：

\[
((a+I)(b+I))(c+I)=(ab)c+I=a(bc)+I=(a+I)((b+I)(c+I)).
\]

分配律也类似。

例：

\[
\mathbb Z/n\mathbb Z,
\qquad
\mathbb C[x]/(x),
\qquad
\mathbb Z[x]/(x-1)
\]

都是商环。

有同构

\[
\mathbb C[x]/(x)\cong\mathbb C,
\qquad
\mathbb Z[x]/(x-1)\cong\mathbb Z,
\]

其中同构由代入 \(x=0\) 或 \(x=1\) 给出。

### 商映射与第一同构定理

若 \(I\triangleleft R\)，自然投影

\[
\pi:R\to R/I,
\qquad
r\mapsto r+I
\]

是满环同态，且 \(\ker\pi=I\)。

若 \(f:R\to S\) 是环同态，则

\[
R/\ker f\cong\operatorname{Im}f.
\]

**证明。** 定义

\[
\overline f:R/\ker f\to\operatorname{Im}f,\qquad
r+\ker f\mapsto f(r).
\]

若 \(r+\ker f=r'+\ker f\)，则 \(r-r'\in\ker f\)，所以

\[
f(r)-f(r')=f(r-r')=0,
\]

即 \(f(r)=f(r')\)，故 \(\overline f\) 良定义。它是环同态，因为

\[
\overline f((r+\ker f)+(s+\ker f))=f(r+s)=f(r)+f(s),
\]

且

\[
\overline f((r+\ker f)(s+\ker f))=f(rs)=f(r)f(s).
\]

它满到 \(\operatorname{Im}f\)。若 \(\overline f(r+\ker f)=0\)，则 \(f(r)=0\)，所以 \(r\in\ker f\)，即 \(r+\ker f=0\)。故 \(\overline f\) 单射，从而是同构。

更一般地，若 \(I\subseteq\ker f\)，则存在唯一同态

\[
\overline f:R/I\to S
\]

使得

\[
\overline f(r+I)=f(r).
\]

### 商环的同构定理

若 \(I\subseteq J\) 是 \(R\) 的理想，则

\[
(R/I)/(J/I)\cong R/J.
\]

**证明。** 定义

\[
\psi:R/I\to R/J,\qquad r+I\mapsto r+J.
\]

先检查良定义。若 \(r+I=r'+I\)，则 \(r-r'\in I\)。由于 \(I\subseteq J\)，有 \(r-r'\in J\)，所以 \(r+J=r'+J\)。

显然 \(\psi\) 是满同态。它的核为

\[
\ker\psi
=\{r+I:r+J=J\}
=\{r+I:r\in J\}
=J/I.
\]

由第一同构定理，

\[
(R/I)/(J/I)\cong R/J.
\]

若 \(I,J\) 是理想，则

\[
I/(I\cap J)\cong (I+J)/J.
\]

**证明。** 定义

\[
\varphi:I\to (I+J)/J,\qquad x\mapsto x+J.
\]

这是同态。其像为整个 \((I+J)/J\)：因为任意元素可写为

\[
i+j+J=i+J,
\]

其中 \(i\in I,j\in J\)。其核为

\[
\ker\varphi
=\{x\in I:x+J=J\}
=I\cap J.
\]

由第一同构定理，

\[
I/(I\cap J)\cong (I+J)/J.
\]

若 \(I\triangleleft R\)，则 \(R/I\) 的理想与 \(R\) 中包含 \(I\) 的理想一一对应：

\[
\{J:J\triangleleft R,
\ I\subseteq J\}
\longleftrightarrow
\{\text{$R/I$ 的理想}\},
\qquad
J\longmapsto J/I.
\]

**证明补充。** 若 \(J\) 是 \(R\) 的理想且 \(I\subseteq J\)，则

\[
J/I=\{j+I:j\in J\}
\]

是 \(R/I\) 的理想。因为若 \(j,j'\in J\)，则

\[
(j+I)-(j'+I)=j-j'+I\in J/I,
\]

而对任意 \(r\in R\)，

\[
(r+I)(j+I)=rj+I\in J/I.
\]

反过来，若 \(\mathfrak a\) 是 \(R/I\) 的理想，令

\[
J=\pi^{-1}(\mathfrak a)
=\{r\in R:r+I\in\mathfrak a\},
\]

其中 \(\pi:R\to R/I\) 为自然投影。环同态的理想原像仍是理想，所以 \(J\) 是 \(R\) 的理想；并且 \(I\subseteq J\)，因为 \(i+I=0\in\mathfrak a\)。

两种构造互为逆：

\[
\pi^{-1}(J/I)=J,
\qquad
\pi(\pi^{-1}(\mathfrak a))=\mathfrak a
\]

后一式用到 \(\pi\) 是满射。

## 6. 商环与理想对应

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

**证明说明。** 这一结论由映射

\[
R/I\to R/J,\qquad r+I\mapsto r+J
\]

诱导。它的核正是 \(J/I\)，所以由第一同构定理得到同构。

## 7. 素理想与极大理想

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

## 8. 有限直积与中国剩余定理

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

**详细证明。** 先证明 \(I_1\times\cdots\times I_n\) 是理想。若

\[
x=(x_1,\dots,x_n),\qquad y=(y_1,\dots,y_n)
\]

属于 \(I_1\times\cdots\times I_n\)，则每个 \(x_i-y_i\in I_i\)，所以 \(x-y\in I_1\times\cdots\times I_n\)。若

\[
r=(r_1,\dots,r_n)\in R_1\times\cdots\times R_n,
\]

则

\[
rx=(r_1x_1,\dots,r_nx_n)\in I_1\times\cdots\times I_n,
\]

因为每个 \(I_i\) 是 \(R_i\) 的理想。

反过来，设 \(I\triangleleft R_1\times\cdots\times R_n\)。令

\[
I_i=\pi_i(I)=\{x_i:\exists (x_1,\dots,x_n)\in I\}.
\]

容易验证 \(I_i\) 是 \(R_i\) 的理想。显然 \(I\subseteq I_1\times\cdots\times I_n\)。为了证明反向包含，取任意

\[
(a_1,\dots,a_n)\in I_1\times\cdots\times I_n.
\]

对每个 \(i\)，由 \(a_i\in I_i\)，存在 \(u^{(i)}\in I\)，其第 \(i\) 个坐标为 \(a_i\)。用标准幂等元

\[
e_i=(0,\dots,0,1,0,\dots,0)
\]

相乘得

\[
e_i u^{(i)}=(0,\dots,0,a_i,0,\dots,0)\in I.
\]

将这些元素相加，得到

\[
(a_1,\dots,a_n)\in I.
\]

所以

\[
I=I_1\times\cdots\times I_n.
\]

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

**证明。** 先处理 \(n=2\)。若 \(A_1+A_2=R\)，则存在

\[
u\in A_1,\qquad v\in A_2
\]

使得

\[
u+v=1.
\]

给定 \(b_1,b_2\in R\)，令

\[
b=b_1v+b_2u.
\]

因为 \(u\in A_1\)，且 \(v=1-u\equiv1\pmod{A_1}\)，所以

\[
b=b_1v+b_2u\equiv b_1\pmod{A_1}.
\]

同理，\(v\in A_2\) 且 \(u=1-v\equiv1\pmod{A_2}\)，所以

\[
b\equiv b_2\pmod{A_2}.
\]

一般的 \(n\) 情形可归纳。也可显式构造：对每个 \(i\)，由两两互素可得

\[
A_i+\bigcap_{j\ne i}A_j=R.
\]

于是取

\[
e_i\in\bigcap_{j\ne i}A_j,\qquad e_i\equiv1\pmod{A_i}.
\]

令

\[
b=\sum_{i=1}^n b_i e_i.
\]

模 \(A_k\) 时，除 \(i=k\) 项外，其他 \(e_i\in A_k\)，而 \(e_k\equiv1\pmod{A_k}\)，所以

\[
b\equiv b_k\pmod{A_k}.
\]

唯一性：若 \(b,b'\) 都满足这些同余，则对所有 \(i\)，

\[
b-b'\in A_i.
\]

故

\[
b-b'\in\bigcap_i A_i.
\]

也就是说 \(b\) 模 \(\bigcap_iA_i\) 唯一。

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

**证明。** 自然同态

\[
\varphi:R\to\prod_i R/A_i,\qquad
x\mapsto (x+A_1,\dots,x+A_n)
\]

的核为

\[
\ker\varphi=\bigcap_i A_i.
\]

由中国剩余定理的存在性，\(\varphi\) 是满射：任意给定

\[
(b_1+A_1,\dots,b_n+A_n)
\]

都可找到 \(b\in R\)，使 \(b\equiv b_i\pmod{A_i}\)，所以 \(\varphi(b)\) 正是该元素。由第一同构定理，

\[
R/\ker\varphi\cong \operatorname{Im}\varphi
=\prod_iR/A_i.
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

## 9. 交换环中的因子分解

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

**证明。** 若 \(a\sim b\)，则 \(a\mid b\) 且 \(b\mid a\)。由 \(a\mid b\) 得 \(b=ra\)，所以 \((b)\subseteq(a)\)；由 \(b\mid a\) 得 \(a=sb\)，所以 \((a)\subseteq(b)\)，故 \((a)=(b)\)。

若 \((a)=(b)\)，则 \(a\in(b)\) 且 \(b\in(a)\)，所以存在 \(r,s\in R\) 使

\[
a=rb,\qquad b=sa.
\]

代入得

\[
a=rsa.
\]

若 \(a\ne0\)，因 \(R\) 是整环可消去 \(a\)，得到 \(rs=1\)，所以 \(r\) 是单位，\(a=rb\)。若 \(a=0\)，则 \((a)=(b)\) 推出 \(b=0\)，结论也成立。

若 \(a=ub\) 且 \(u\) 是单位，则 \(a\mid b\) 与 \(b\mid a\) 都成立。

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

**证明。** 设 \(x\) 是素元。若 \(ab\in(x)\)，则 \(x\mid ab\)。由素元定义，\(x\mid a\) 或 \(x\mid b\)，即 \(a\in(x)\) 或 \(b\in(x)\)。又因为 \(x\) 非单位，所以 \((x)\ne R\)，故 \((x)\) 是素理想。

反过来，设 \((x)\) 是素理想。若 \(x\mid ab\)，则 \(ab\in(x)\)。由素理想定义，\(a\in(x)\) 或 \(b\in(x)\)，即 \(x\mid a\) 或 \(x\mid b\)。所以 \(x\) 是素元。

### 定理：不可约元与主理想的极大性

设 \(R\) 为整环，\(x\in R\) 非零非单位。若主理想 \((x)\) 在所有真主理想中极大，则 \(x\) 不可约。

若 \(R\) 是 PID，则反过来也成立。因此在 PID 中，

\[
x\text{ 不可约}
\iff
(x)\text{ 是真主理想中的极大元}.
\]

进一步，在 PID 中不可约元都是素元。

**证明。** 先证一般方向。若 \((x)\) 在所有真主理想中极大，且

\[
x=ab.
\]

则 \((x)\subseteq(a)\)，因为 \(x=ab\in(a)\)。若 \(a\) 不是单位，则 \((a)\ne R\)；由极大性，\((a)=(x)\)。于是 \(a=ux\) 对某个 \(u\in R\) 成立。代入 \(x=ab\) 得

\[
x=uxb.
\]

由于 \(R\) 是整环且 \(x\ne0\)，消去 \(x\) 得 \(1=ub\)，所以 \(b\) 是单位。因此 \(x\) 不可约。

现在设 \(R\) 是 PID 且 \(x\) 不可约。若

\[
(x)\subseteq(a)\subsetneq R,
\]

则 \(x=ab\) 对某个 \(b\in R\) 成立。因为 \(x\) 不可约，\(a\) 或 \(b\) 是单位。若 \(a\) 是单位，则 \((a)=R\)，与 \((a)\subsetneq R\) 矛盾；故 \(b\) 是单位，于是 \((a)=(x)\)。因此 \((x)\) 在真主理想中极大。

最后说明 PID 中不可约元是素元。若 \(x\) 不可约，则 \((x)\) 在真理想中极大；PID 中所有理想都是主理想，所以 \((x)\) 是极大理想。极大理想是素理想，因此由上一条定理，\(x\) 是素元。

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

**详细证明。**

1. **存在性。** 若 \(x\) 不可约则结束。若 \(x=ab\) 且 \(a,b\) 都非单位，则继续分解。若该过程不停止，会得到严格升链

   \[
(x)\subsetneq(a_1)\subsetneq(a_2)\subsetneq\cdots,
\]

   与升链稳定引理矛盾。

   更具体地，取非零非单位元 \(x\)。若 \(x\) 不可约，已经得到分解。若可约，则

   \[
x=a_1b_1
\]

   且 \(a_1,b_1\) 都非单位。若 \(a_1,b_1\) 都能分解成不可约元，则 \(x\) 也能分解。否则选一个仍可约的因子，例如 \(a_1\)，继续写

   \[
a_1=a_2b_2.
\]

   因为 \(b_2\) 非单位，所以

   \[
(a_1)\subsetneq(a_2).
\]

   若这个过程无限继续，就得到严格升链

   \[
(x)\subsetneq(a_1)\subsetneq(a_2)\subsetneq\cdots,
\]

   这和 PID 中主理想升链稳定矛盾。所以分解过程必须停止，存在不可约分解。

2. **唯一性。** 在 PID 中不可约元为素元。若

   \[
p_1\cdots p_m=q_1\cdots q_n
\]

   是两种不可约分解，则 \(p_1\) 整除右边乘积。因为 \(p_1\) 是素元，\(p_1\) 整除某个 \(q_j\)。重排后设 \(p_1\mid q_1\)。由于 \(q_1\) 不可约，且 \(p_1\) 非单位，得

   \[
q_1=u p_1
\]

   对某个单位 \(u\) 成立，即 \(q_1\sim p_1\)。将等式中的 \(p_1\) 消去，得到

   \[
p_2\cdots p_m=(u q_2)\cdots q_n
\]

   或等价地继续比较剩余因子。对因子个数归纳，得到 \(m=n\)，且重排后 \(p_i\sim q_i\)。

## 10. Euclidean Domain 与最大公因子

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

## 11. 分式域

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

**证明。** 先验证 \(\sim\) 是等价关系。自反性和对称性直接成立。若

\[
(r,s)\sim(r',s'),\qquad (r',s')\sim(r'',s''),
\]

则

\[
rs'=r's,\qquad r's''=r''s'.
\]

两式分别乘以 \(s''\) 和 \(s\)，得到

\[
rs's''=r'ss'',\qquad r'ss''=r''s's.
\]

所以 \(rs's''=r''s's\)。由于 \(s'\ne0\) 且 \(R\) 是整环，可消去 \(s'\)，得

\[
rs''=r''s.
\]

因此 \((r,s)\sim(r'',s'')\)。

再验证运算良定义。若

\[
\frac a b=\frac {a'}{b'},\qquad
\frac c d=\frac {c'}{d'},
\]

即 \(ab'=a'b\) 且 \(cd'=c'd\)，则

\[
(ad+bc)b'd'
=adb'd'+bcb'd'
=a'bd d'+bb'c'd
=(a'd'+b'c')bd.
\]

所以

\[
\frac{ad+bc}{bd}
=
\frac{a'd'+b'c'}{b'd'}.
\]

乘法良定义类似：

\[
acb'd'=a'c'bd.
\]

域公理中的结合律、交换律和分配律都由 \(R\) 中相应性质推出。若 \(\frac a b\ne0\)，则 \(a\ne0\)，故

\[
\left(\frac a b\right)^{-1}=\frac b a.
\]

因此 \(\operatorname{Frac}(R)\) 是域。映射 \(r\mapsto r/1\) 是环同态；若 \(r/1=0/1\)，则 \(r=0\)，故该映射单射。

### 例

\[
\operatorname{Frac}(\mathbb Z)=\mathbb Q,
\qquad
\operatorname{Frac}(\mathbb Z[i])=\mathbb Q(i).
\]

## 12. 多项式环与形式幂级数

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

**证明。** 对多项式

\[
f=\sum a_{k_1,\dots,k_n}x_1^{k_1}\cdots x_n^{k_n}
\]

定义

\[
\overline\varphi(f)
=
\sum \varphi(a_{k_1,\dots,k_n})s_1^{k_1}\cdots s_n^{k_n}.
\]

多项式只有有限多项，所以该和有意义。\(s_i\) 与 \(\varphi(R)\) 中元素可交换，保证乘法展开时不因换序出错。逐项检查可得

\[
\overline\varphi(f+g)=\overline\varphi(f)+\overline\varphi(g),
\qquad
\overline\varphi(fg)=\overline\varphi(f)\overline\varphi(g).
\]

唯一性来自多项式环由 \(R\) 和 \(x_1,\dots,x_n\) 生成：同态在 \(R\) 和各 \(x_i\) 上的值确定后，所有单项式和有限和的值都被迫确定。

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

**证明。**

1. 若 \(f\) 是单位，存在

   \[
g=\sum_{i=0}^{\infty}b_ix^i
\]

   使 \(fg=1\)。比较常数项得

   \[
a_0b_0=1,
\]

   所以 \(a_0\) 是单位。

   反过来，若 \(a_0\) 是单位，递归构造逆元。令 \(b_0=a_0^{-1}\)。要使

   \[
\left(\sum a_ix^i\right)\left(\sum b_ix^i\right)=1,
\]

   对每个 \(n\ge1\)，\(x^n\) 的系数必须为 \(0\)：

   \[
a_0b_n+a_1b_{n-1}+\cdots+a_nb_0=0.
\]

   因 \(a_0\) 可逆，可解出

   \[
b_n=-a_0^{-1}(a_1b_{n-1}+\cdots+a_nb_0).
\]

   于是得到 \(f^{-1}=g\)。

2. 若 \(a_0\) 不可约且 \(f=gh\)，比较常数项得

   \[
a_0=g(0)h(0).
\]

   因 \(a_0\) 不可约，\(g(0)\) 或 \(h(0)\) 是单位。由上一条，对应的形式幂级数 \(g\) 或 \(h\) 是单位。所以 \(f\) 不可约。

## 13. 多项式环中的因子分解

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

**证明。** 设

\[
g=b_mx^m+\cdots+b_0,\qquad b_m\in R^\times.
\]

若 \(\deg f<m\)，取 \(q=0,r=f\)。若

\[
f=a_nx^n+\cdots,\qquad n\ge m,
\]

则用

\[
a_nb_m^{-1}x^{n-m}g
\]

消去 \(f\) 的最高次项。令

\[
f_1=f-a_nb_m^{-1}x^{n-m}g.
\]

则 \(\deg f_1<\deg f\)。不断重复，次数每步下降，有限步后得到

\[
f=qg+r,\qquad \deg r<\deg g.
\]

唯一性：若

\[
f=qg+r=q'g+r',
\qquad \deg r,\deg r'<\deg g,
\]

则

\[
(q-q')g=r'-r.
\]

若 \(q\ne q'\)，因为 \(g\) 的首项系数是单位，左边次数至少为 \(\deg g\)；但右边次数小于 \(\deg g\)，矛盾。所以 \(q=q'\)，进而 \(r=r'\)。

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

**证明。** 用 \(x-c\) 除 \(f\)，存在 \(q\in R[x]\) 和常数 \(r\in R\)，使得

\[
f(x)=q(x)(x-c)+r.
\]

代入 \(x=c\) 得

\[
f(c)=r.
\]

因此 \(f(c)=0\) 当且仅当 \(r=0\)，即当且仅当 \(x-c\) 整除 \(f\)。

### 根的个数

若 \(D\) 是整环，\(f\in D[x]\) 且 \(\deg f=n\)，则 \(f\) 在 \(D\) 中至多有 \(n\) 个根。

**证明。** 对次数 \(n\) 归纳。若 \(n=0\)，非零常数多项式没有根。设结论对次数小于 \(n\) 的多项式成立。若 \(f\) 没有根，结论显然；若 \(c\) 是一个根，则由因式定理

\[
f=(x-c)g,\qquad \deg g=n-1.
\]

若 \(c'\ne c\) 也是 \(f\) 的根，则

\[
0=f(c')=(c'-c)g(c').
\]

因 \(D\) 是整环且 \(c'-c\ne0\)，得 \(g(c')=0\)。所以除 \(c\) 外，\(f\) 的其他根都是 \(g\) 的根。由归纳假设，\(g\) 至多有 \(n-1\) 个根，因此 \(f\) 至多有 \(n\) 个根。

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

**证明。** 若 \(c\) 是重根，则

\[
f=(x-c)^m g,\qquad m\ge2,\quad g(c)\ne0.
\]

求导得

\[
f'=m(x-c)^{m-1}g+(x-c)^m g',
\]

所以 \(f(c)=0\) 且 \(f'(c)=0\)。

反过来，若 \(f(c)=0\)，则由因式定理

\[
f=(x-c)g.
\]

求导得

\[
f'=g+(x-c)g'.
\]

代入 \(x=c\)，得到

\[
f'(c)=g(c).
\]

若 \(f'(c)=0\)，则 \(g(c)=0\)。再次用因式定理，\(x-c\mid g\)，所以

\[
(x-c)^2\mid f,
\]

即 \(c\) 是重根。

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

**证明。** 因 \(f(c/d)=0\)，乘以 \(d^n\) 得

\[
a_nc^n+a_{n-1}c^{n-1}d+\cdots+a_1cd^{n-1}+a_0d^n=0.
\]

把第一项移到另一边：

\[
a_nc^n=-d(a_{n-1}c^{n-1}+\cdots+a_0d^{n-1}).
\]

所以 \(d\mid a_nc^n\)。由于 \(\gcd(c,d)=1\)，在 UFD 中 \(d\) 与 \(c^n\) 也互素，因此

\[
d\mid a_n.
\]

同理，把最后一项移到另一边：

\[
a_0d^n=-c(a_nc^{n-1}+a_{n-1}c^{n-2}d+\cdots+a_1d^{n-1}),
\]

可得 \(c\mid a_0d^n\)。又 \(\gcd(c,d)=1\)，所以

\[
c\mid a_0.
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

## 14. Gauss 引理与 Eisenstein 判别法

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

**证明。** 先证本原多项式乘积仍本原。设 \(f,g\) 本原。若 \(fg\) 不是本原，则存在素元 \(p\in D\) 整除 \(fg\) 的每个系数。

在商环

\[
\overline D=D/(p)
\]

中，因为 \((p)\) 是素理想，\(\overline D\) 是整环。把 \(f,g\) 的系数模 \(p\)，得到

\[
\overline f,\overline g\in \overline D[x].
\]

\(p\) 整除 \(fg\) 的每个系数等价于

\[
\overline f\,\overline g=0.
\]

由于 \(\overline D\) 是整环，\(\overline D[x]\) 也是整环，所以

\[
\overline f=0\quad\text{或}\quad \overline g=0.
\]

这意味着 \(p\) 整除 \(f\) 或 \(g\) 的每个系数，矛盾于 \(f,g\) 本原。因此 \(fg\) 本原。

一般情形中，写

\[
f=c(f)f_1,\qquad g=c(g)g_1,
\]

其中 \(f_1,g_1\) 本原。则

\[
fg=c(f)c(g)f_1g_1.
\]

由刚才所证，\(f_1g_1\) 本原，所以

\[
c(fg)\sim c(f)c(g).
\]

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

**证明。** 若 \(f\) 在 \(D[x]\) 中可约，则当然在 \(F[x]\) 中可约。

反过来，若 \(f\) 在 \(F[x]\) 中可约，写

\[
f=gh,\qquad g,h\in F[x],
\]

且 \(g,h\) 都不是单位。把 \(g,h\) 的系数通分，可写作

\[
g=\frac a b g_1,\qquad h=\frac c d h_1,
\]

其中 \(a,b,c,d\in D\)，\(g_1,h_1\in D[x]\) 本原。于是

\[
f=\frac{ac}{bd}g_1h_1.
\]

因为 \(f\) 本原，且 \(g_1h_1\) 本原，由内容比较可知标量 \(\frac{ac}{bd}\) 实际上是 \(D\) 中的单位。因此 \(f\) 在 \(D[x]\) 中也分解为两个非常数因子，矛盾于不可约。故 \(f\) 在 \(F[x]\) 中不可约。

### 定理：\(D[x]\) 是 UFD

若 \(D\) 是 UFD，则 \(D[x]\) 也是 UFD。

因此反复归纳可得：

\[
D[x_1,\dots,x_n]
\]

也是 UFD。

**证明。** 任取非零多项式 \(f\in D[x]\)，写

\[
f=c(f)f_1,
\]

其中 \(f_1\) 本原。因为 \(D\) 是 UFD，\(c(f)\) 可分解为 \(D\) 中不可约元的乘积。另一方面，\(F=\operatorname{Frac}(D)\) 是域，所以 \(F[x]\) 是 PID，因而是 UFD；于是 \(f_1\) 在 \(F[x]\) 中可分解为不可约多项式乘积。利用 Gauss 引理的推论，可把这些不可约因子取成本原的 \(D[x]\) 中多项式，并且它们在 \(D[x]\) 中仍不可约。这样得到 \(f\) 在 \(D[x]\) 中的不可约分解。

唯一性也由 \(F[x]\) 中唯一性和内容唯一性推出：若 \(D[x]\) 中有两种分解，把它们看作 \(F[x]\) 中分解，因子在 \(F[x]\) 中相伴；再用本原性把相伴常数限制回 \(D\) 的单位。

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

**证明。** 只需证明本原情形在 \(D[x]\) 中不可约。若

\[
f=gh,\qquad g,h\in D[x],
\]

且 \(g,h\) 都非常数。写

\[
g=b_rx^r+\cdots+b_0,\qquad
h=c_sx^s+\cdots+c_0.
\]

由 \(p\mid a_0\) 且 \(p^2\nmid a_0\)，可知 \(a_0=b_0c_0\) 中恰有一个因子被 \(p\) 整除。不妨设

\[
p\mid b_0,\qquad p\nmid c_0.
\]

因为 \(p\nmid a_n=b_rc_s\)，所以 \(p\nmid b_r\)。于是存在最小的 \(k\)，使得

\[
p\nmid b_k.
\]

注意 \(k\ge1\)。考察 \(x^k\) 的系数：

\[
a_k=b_kc_0+b_{k-1}c_1+\cdots+b_0c_k.
\]

当 \(i<k\) 时，\(p\mid b_i\)，所以除第一项外其余项都被 \(p\) 整除。又条件给出 \(p\mid a_k\)，因此

\[
p\mid b_kc_0.
\]

但 \(p\nmid b_k\) 且 \(p\nmid c_0\)，与 \(p\) 为素元矛盾。因此 \(f\) 不可约。

若 \(f\) 不一定本原，则先取本原部分；若本原部分在 \(F[x]\) 中不可约，则 \(f\) 在 \(F[x]\) 中不可约。若 \(f\) 本原，再由 Gauss 引理得到它在 \(D[x]\) 中也不可约。

### 例

令

\[
f(x)=2x^3-6x^2+9x-15\in\mathbb Z[x].
\]

取 \(p=3\)，有 \(3\nmid 2\)，\(3\mid -6,9,-15\)，且 \(9\nmid -15\)。故 \(f\) 在 \(\mathbb Q[x]\) 中不可约。

## 15. 模

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

**证明。** 因为 \(0_R=0_R+0_R\)，所以

\[
0_Ra=(0_R+0_R)a=0_Ra+0_Ra.
\]

在交换群 \(A\) 中两边加上 \(-(0_Ra)\)，得 \(0_Ra=0_A\)。同理，因为 \(0_A=0_A+0_A\)，

\[
r0_A=r(0_A+0_A)=r0_A+r0_A,
\]

所以 \(r0_A=0_A\)。

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

**证明。** 对核，若 \(x,y\in\ker f\)，则

\[
f(x-y)=f(x)-f(y)=0-0=0,
\]

所以 \(x-y\in\ker f\)。若 \(r\in R\)，则

\[
f(rx)=rf(x)=r0=0,
\]

所以 \(rx\in\ker f\)。故 \(\ker f\) 是子模。

对像，若 \(u=f(x),v=f(y)\)，则

\[
u-v=f(x)-f(y)=f(x-y)\in\operatorname{Im}f.
\]

若 \(r\in R\)，则

\[
ru=r f(x)=f(rx)\in\operatorname{Im}f.
\]

故 \(\operatorname{Im}f\) 是子模。

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

**证明。** 有限线性组合集合

\[
L=\left\{\sum_{i=1}^n r_ia_i:r_i\in R\right\}
\]

显然包含 \(a_1,\dots,a_n\)，并且对加减与 \(R\) 的标量乘法封闭，因此是子模。任何包含 \(a_1,\dots,a_n\) 的子模都必须包含所有这样的线性组合，所以 \(L\) 正是由这些元素生成的最小子模。

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

**良定义证明。** 商群 \(M/N\) 已经有加法。需要检查标量乘法不依赖代表元。若

\[
m+N=m'+N,
\]

则 \(m-m'\in N\)。因为 \(N\) 是子模，

\[
r(m-m')=rm-rm'\in N,
\]

所以

\[
rm+N=rm'+N.
\]

故 \(r(m+N)=rm+N\) 良定义。

模公理从 \(M\) 中继承。例如

\[
(r+s)(m+N)=(r+s)m+N=rm+sm+N
=r(m+N)+s(m+N).
\]

若 \(f:A\to B\) 是 \(R\)-模同态，则

\[
A/\ker f\cong \operatorname{Im}f.
\]

**证明。** 定义

\[
\overline f:A/\ker f\to\operatorname{Im}f,\qquad
a+\ker f\mapsto f(a).
\]

先看良定义。若 \(a+\ker f=a'+\ker f\)，则 \(a-a'\in\ker f\)，所以

\[
f(a)-f(a')=f(a-a')=0,
\]

即 \(f(a)=f(a')\)。映射 \(\overline f\) 显然是 \(R\)-模同态，并且满射到 \(\operatorname{Im}f\)。若

\[
\overline f(a+\ker f)=0,
\]

则 \(f(a)=0\)，即 \(a\in\ker f\)，所以 \(a+\ker f=0\)。故 \(\overline f\) 单射，从而是同构。

### 第二、第三同构定理

若 \(B,C\subseteq A\) 是子模，则

\[
B/(B\cap C)\cong (B+C)/C.
\]

**证明。** 定义

\[
\phi:B\to (B+C)/C,\qquad b\mapsto b+C.
\]

这是 \(R\)-模同态。它是满射，因为任意 \((b+c)+C\) 都等于 \(b+C\)。其核为

\[
\ker\phi
=\{b\in B:b+C=C\}
=B\cap C.
\]

由第一同构定理，

\[
B/(B\cap C)\cong (B+C)/C.
\]

若 \(B\subseteq C\subseteq A\)，则

\[
(A/B)/(C/B)\cong A/C.
\]

**证明。** 定义

\[
\psi:A/B\to A/C,\qquad a+B\mapsto a+C.
\]

若 \(a+B=a'+B\)，则 \(a-a'\in B\subseteq C\)，所以 \(a+C=a'+C\)，故良定义。\(\psi\) 是满同态。其核为

\[
\ker\psi
=\{a+B:a+C=C\}
=\{a+B:a\in C\}
=C/B.
\]

由第一同构定理，

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

**解释。** 在短正合列

\[
0\to A\xrightarrow{f}B\xrightarrow{g}C\to0
\]

中，左端正合表示

\[
\ker f=\operatorname{Im}(0\to A)=0,
\]

所以 \(f\) 单射。右端正合表示

\[
\operatorname{Im}g=\ker(C\to0)=C,
\]

所以 \(g\) 满射。中间正合表示

\[
\operatorname{Im}f=\ker g.
\]

于是由第一同构定理，

\[
B/\operatorname{Im}f
=B/\ker g
\cong\operatorname{Im}g
=C.
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

**证明。** 这是一次典型的 diagram chasing。

1. 先证单射部分。设 \(b\in B\) 且 \(\beta(b)=0\)。要证 \(b=0\)。由交换性，

   \[
\gamma(g(b))=g'(\beta(b))=g'(0)=0.
\]

   因 \(\gamma\) 单射，得 \(g(b)=0\)。上排正合给出

   \[
b\in\ker g=\operatorname{Im}f,
\]

   所以存在 \(a\in A\) 使 \(f(a)=b\)。再用交换性：

   \[
f'(\alpha(a))=\beta(f(a))=\beta(b)=0.
\]

   下排中 \(f'\) 单射，因此 \(\alpha(a)=0\)。又 \(\alpha\) 单射，得 \(a=0\)，所以

   \[
b=f(a)=0.
\]

   故 \(\beta\) 单射。

2. 再证满射部分。任取 \(b'\in B'\)。令

   \[
c'=g'(b')\in C'.
\]

   因 \(\gamma\) 满射，存在 \(c\in C\) 使 \(\gamma(c)=c'\)。上排中 \(g\) 满射，所以存在 \(b\in B\) 使

   \[
g(b)=c.
\]

   于是

   \[
g'(\beta(b))=\gamma(g(b))=\gamma(c)=c'=g'(b').
\]

   因此

   \[
b'-\beta(b)\in\ker g'=\operatorname{Im}f'.
\]

   存在 \(a'\in A'\) 使

   \[
f'(a')=b'-\beta(b).
\]

   因 \(\alpha\) 满射，存在 \(a\in A\) 使 \(\alpha(a)=a'\)。于是

   \[
\beta(b+f(a))
   =
   \beta(b)+\beta(f(a))
   =
   \beta(b)+f'(\alpha(a))
   =
   \beta(b)+f'(a')
   =
   b'.
\]

   故 \(\beta\) 满射。

3. 若 \(\alpha,\gamma\) 都是同构，则它们既单又满，由前两步知 \(\beta\) 既单又满，因此是同构。

## 16. 域扩张

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