---
title: "抽代笔记整理"
date: 2026-06-16 17:26:45
updated: 2026-06-16 17:26:45
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

设 <span class="kalax-inline-math">G</span> 为群，<span class="kalax-inline-math">S\subseteq G</span>。由 <span class="kalax-inline-math">S</span> 生成的子群记作

<div class="kalax-display-math">\langle S\rangle.</div>

它可以刻画为包含 <span class="kalax-inline-math">S</span> 的所有子群的交：

<div class="kalax-display-math">\langle S\rangle=\bigcap_{S\subseteq H\le G}H.</div>

等价地，<span class="kalax-inline-math">\langle S\rangle</span> 由 <span class="kalax-inline-math">S</span> 中元素及其逆元的有限乘积组成。若 <span class="kalax-inline-math">S=\{x_1,\dots,x_n\}</span>，常写作

<div class="kalax-display-math">\langle x_1,\dots,x_n\rangle.</div>

### 换位子与换位子子群

对 <span class="kalax-inline-math">g,h\in G</span>，定义换位子

<div class="kalax-display-math">[g,h]=ghg^{-1}h^{-1}.</div>

若 <span class="kalax-inline-math">H,K\le G</span>，则定义

<div class="kalax-display-math">[H,K]=\langle [h,k]:h\in H,\ k\in K\rangle.</div>

特别地，

<div class="kalax-display-math">[G,G]</div>

称为 <span class="kalax-inline-math">G</span> 的换位子子群。

### 命题：换位子子群正规

对任意群 <span class="kalax-inline-math">G</span>，<span class="kalax-inline-math">[G,G]</span> 是 <span class="kalax-inline-math">G</span> 的正规子群。

**证明。** 首先 <span class="kalax-inline-math">[G,G]</span> 由所有换位子生成，故是子群。对任意 <span class="kalax-inline-math">x,g,h\in G</span>，有

<div class="kalax-display-math">x[g,h]x^{-1}
=xghg^{-1}h^{-1}x^{-1}
=(xgx^{-1})(xhx^{-1})(xgx^{-1})^{-1}(xhx^{-1})^{-1},</div>

仍为换位子。因此 <span class="kalax-inline-math">x[G,G]x^{-1}\subseteq [G,G]</span>，反向包含同理，故 <span class="kalax-inline-math">[G,G]\triangleleft G</span>。

### 命题：商群的交换化

商群

<div class="kalax-display-math">G/[G,G]</div>

是交换群。并且若 <span class="kalax-inline-math">N\triangleleft G</span> 且 <span class="kalax-inline-math">G/N</span> 是交换群，则

<div class="kalax-display-math">[G,G]\subseteq N.</div>

因此 <span class="kalax-inline-math">G/[G,G]</span> 可看作 <span class="kalax-inline-math">G</span> 的最大交换商群。

**证明。** 在 <span class="kalax-inline-math">G/[G,G]</span> 中，任意 <span class="kalax-inline-math">g,h\in G</span> 满足

<div class="kalax-display-math">gh[G,G]=hg[G,G],</div>

因为 <span class="kalax-inline-math">gh(hg)^{-1}=ghg^{-1}h^{-1}\in [G,G]</span>。若 <span class="kalax-inline-math">G/N</span> 交换，则所有换位子在商群中为单位元，所以 <span class="kalax-inline-math">[G,G]\subseteq N</span>。

## 2. 群作用

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

良定义且为双射。具体地，若

<div class="kalax-display-math">gG_x=hG_x,</div>

则 <span class="kalax-inline-math">h^{-1}g\in G_x</span>，所以 <span class="kalax-inline-math">(h^{-1}g)x=x</span>，从而 <span class="kalax-inline-math">gx=hx</span>，映射良定义。若 <span class="kalax-inline-math">gx=hx</span>，则 <span class="kalax-inline-math">h^{-1}gx=x</span>，所以 <span class="kalax-inline-math">h^{-1}g\in G_x</span>，即 <span class="kalax-inline-math">gG_x=hG_x</span>，故单射。任意轨道元素都形如 <span class="kalax-inline-math">gx</span>，所以满射。

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

## 3. Sylow 定理

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

## 4. 环的基本概念与同态

### 环的定义

环是一个非空集合 <span class="kalax-inline-math">R</span>，配备两个二元运算 <span class="kalax-inline-math">+</span> 与 <span class="kalax-inline-math">\cdot</span>，满足：

1. <span class="kalax-inline-math">(R,+)</span> 是交换群，其单位元记作 <span class="kalax-inline-math">0_R</span>；
2. 乘法满足结合律：

   <div class="kalax-display-math">(ab)c=a(bc);</div>

3. 乘法对加法满足左右分配律：

   <div class="kalax-display-math">a(b+c)=ab+ac,
   \qquad
   (a+b)c=ac+bc;</div>

4. 若存在元素 <span class="kalax-inline-math">1_R\in R</span> 使得

   <div class="kalax-display-math">1_Ra=a1_R=a,</div>

   则称 <span class="kalax-inline-math">R</span> 为有单位环，<span class="kalax-inline-math">1_R</span> 称为乘法单位元。

若乘法交换，即 <span class="kalax-inline-math">ab=ba</span> 对任意 <span class="kalax-inline-math">a,b\in R</span> 成立，则称 <span class="kalax-inline-math">R</span> 为交换环。

### 基本例子

1. <span class="kalax-inline-math">\mathbb Z</span> 是有单位交换环。
2. 对任意环 <span class="kalax-inline-math">R</span>，多项式集合

   <div class="kalax-display-math">R[x]=\left\{\sum_{i=0}^n a_ix^i:a_i\in R\right\}</div>

   是环。
3. 矩阵环 <span class="kalax-inline-math">M_n(\mathbb C)</span> 是有单位环，其单位元为 <span class="kalax-inline-math">I_n</span>，零元为零矩阵；当 <span class="kalax-inline-math">n\ge 2</span> 时它不是交换环。
4. 一般线性群 <span class="kalax-inline-math">GL_n(\mathbb C)</span> 在矩阵乘法下是群，但不是环，因为它对加法不封闭。

### 零因子与消去律

设 <span class="kalax-inline-math">R</span> 为环。若存在非零元 <span class="kalax-inline-math">b\in R</span> 使得 <span class="kalax-inline-math">ab=0</span>，则称 <span class="kalax-inline-math">a</span> 为左零因子；若存在非零元 <span class="kalax-inline-math">c\in R</span> 使得 <span class="kalax-inline-math">ca=0</span>，则称 <span class="kalax-inline-math">a</span> 为右零因子。若两者都成立，则称 <span class="kalax-inline-math">a</span> 为零因子。

若 <span class="kalax-inline-math">R</span> 中没有非零左零因子，则左消去律成立：

<div class="kalax-display-math">ax=ay\Rightarrow x=y.</div>

右消去律类似。

### 可逆元与单位

元素 <span class="kalax-inline-math">a\in R</span> 称为左可逆，若存在 <span class="kalax-inline-math">c\in R</span> 使 <span class="kalax-inline-math">ca=1</span>；称为右可逆，若存在 <span class="kalax-inline-math">b\in R</span> 使 <span class="kalax-inline-math">ab=1</span>。若 <span class="kalax-inline-math">a</span> 同时左、右可逆，则称 <span class="kalax-inline-math">a</span> 可逆，或称 <span class="kalax-inline-math">a</span> 是单位。

若 <span class="kalax-inline-math">a</span> 可逆，则其左逆与右逆唯一且相同。记 <span class="kalax-inline-math">a^{-1}</span> 为 <span class="kalax-inline-math">a</span> 的逆元。

### 整环、除环与域

1. 交换环 <span class="kalax-inline-math">R</span> 若没有非零零因子，则称为整环。
2. 有单位环 <span class="kalax-inline-math">R</span> 若任意非零元都是单位，则称为除环。
3. 交换除环称为域。

例：<span class="kalax-inline-math">\mathbb Z</span> 是整环；<span class="kalax-inline-math">\mathbb Z/n\mathbb Z</span> 是整环当且仅当 <span class="kalax-inline-math">n</span> 为素数；此时 <span class="kalax-inline-math">\mathbb Z/n\mathbb Z</span> 是有限域，常记作 <span class="kalax-inline-math">\mathbb F_p</span>。

### 四元数

实四元数环

<div class="kalax-display-math">\mathbb H=\{a_0+a_1i+a_2j+a_3k:a_i\in\mathbb R\}</div>

按坐标加法，并由关系

<div class="kalax-display-math">i^2=j^2=k^2=-1,
\qquad
ij=k,
\quad jk=i,
\quad ki=j,</div>

以及

<div class="kalax-display-math">ji=-k,
\quad kj=-i,
\quad ik=-j</div>

定义乘法。它是非交换除环。若

<div class="kalax-display-math">q=a_0+a_1i+a_2j+a_3k\ne 0,</div>

则

<div class="kalax-display-math">q^{-1}=\frac{a_0-a_1i-a_2j-a_3k}{a_0^2+a_1^2+a_2^2+a_3^2}.</div>

### 函数环、矩阵环与群环

若 <span class="kalax-inline-math">A</span> 为交换群，则

<div class="kalax-display-math">\operatorname{End}(A)=\{f:A\to A:f\text{ 是群同态}\}</div>

在逐点加法和复合乘法下成为环，乘法单位元为恒等映射。

若 <span class="kalax-inline-math">G</span> 是群，<span class="kalax-inline-math">R</span> 是环，则群环定义为

<div class="kalax-display-math">R[G]=\left\{\sum_{g\in G}r_g g:r_g\in R,
\text{且仅有限多个 }r_g\ne 0\right\}.</div>

加法逐项定义，乘法由 <span class="kalax-inline-math">G</span> 中乘法线性扩张得到。

### 环同态

设 <span class="kalax-inline-math">R,S</span> 为环。映射 <span class="kalax-inline-math">f:R\to S</span> 称为环同态，若

<div class="kalax-display-math">f(a+b)=f(a)+f(b),
\qquad
f(ab)=f(a)f(b).</div>

若要求保单位，则还需 <span class="kalax-inline-math">f(1_R)=1_S</span>。在某些教材中，环同态默认保单位；需要按语境判断。

环同态的核与像为

<div class="kalax-display-math">\ker f=f^{-1}(0_S),
\qquad
\operatorname{Im}f=f(R).</div>

其中 <span class="kalax-inline-math">\ker f</span> 是 <span class="kalax-inline-math">R</span> 的理想，<span class="kalax-inline-math">\operatorname{Im}f</span> 是 <span class="kalax-inline-math">S</span> 的子环。

例：自然投影

<div class="kalax-display-math">\mathbb Z\to\mathbb Z/n\mathbb Z,
\qquad
m\mapsto \overline m</div>

是环同态。映射 <span class="kalax-inline-math">\mathbb Z\to 2\mathbb Z,\ n\mapsto 2n</span> 是加法群同态，但不是环同态。

### 环的特征

设 <span class="kalax-inline-math">R</span> 为有单位环。若存在最小正整数 <span class="kalax-inline-math">n</span> 使得

<div class="kalax-display-math">n1_R=0,</div>

则称 <span class="kalax-inline-math">R</span> 的特征为 <span class="kalax-inline-math">n</span>，记作 <span class="kalax-inline-math">\operatorname{char}R=n</span>。若不存在这样的正整数，则称 <span class="kalax-inline-math">R</span> 的特征为 <span class="kalax-inline-math">0</span>。

若 <span class="kalax-inline-math">R</span> 是整环且 <span class="kalax-inline-math">\operatorname{char}R=n&gt;0</span>，则 <span class="kalax-inline-math">n</span> 必为素数。证明如下：若 <span class="kalax-inline-math">n=ab</span> 且 <span class="kalax-inline-math">a,b&gt;1</span>，则

<div class="kalax-display-math">(a1_R)(b1_R)=n1_R=0,</div>

而 <span class="kalax-inline-math">a1_R,b1_R\ne0</span>，这会产生零因子。

**详细证明。** 先说明为什么 <span class="kalax-inline-math">a1_R,b1_R</span> 非零。因为 <span class="kalax-inline-math">n</span> 是使 <span class="kalax-inline-math">n1_R=0</span> 的最小正整数，而 <span class="kalax-inline-math">1\le a,b&lt;n</span>，所以

<div class="kalax-display-math">a1_R\ne0,\qquad b1_R\ne0.</div>

但

<div class="kalax-display-math">(a1_R)(b1_R)=ab1_R=n1_R=0.</div>

这说明两个非零元乘积为零，和整环无零因子矛盾。因此 <span class="kalax-inline-math">n</span> 不能分解为两个大于 <span class="kalax-inline-math">1</span> 的整数，只能是素数。

反过来，若 <span class="kalax-inline-math">F</span> 是域且 <span class="kalax-inline-math">\operatorname{char}F=n&gt;0</span>，同样可知 <span class="kalax-inline-math">n</span> 是素数；因为域一定是整环。

## 5. 理想、主理想与商环基础

### 左理想、右理想与双边理想

设 <span class="kalax-inline-math">R</span> 为环，<span class="kalax-inline-math">I\subseteq R</span>。若 <span class="kalax-inline-math">I</span> 对加法封闭，且对任意 <span class="kalax-inline-math">r\in R</span>、<span class="kalax-inline-math">x\in I</span> 都有

<div class="kalax-display-math">rx\in I,</div>

则称 <span class="kalax-inline-math">I</span> 为左理想；若总有 <span class="kalax-inline-math">xr\in I</span>，则称 <span class="kalax-inline-math">I</span> 为右理想。若二者都成立，则称 <span class="kalax-inline-math">I</span> 为双边理想，通常简称理想。

在交换环中，左理想、右理想与双边理想相同。

### 核是理想，像是子环

设 <span class="kalax-inline-math">f:R\to S</span> 是环同态。则

<div class="kalax-display-math">\ker f=\{r\in R:f(r)=0\}</div>

是 <span class="kalax-inline-math">R</span> 的理想。

**证明。** 先看加法。若 <span class="kalax-inline-math">x,y\in\ker f</span>，则

<div class="kalax-display-math">f(x-y)=f(x)-f(y)=0-0=0,</div>

所以 <span class="kalax-inline-math">x-y\in\ker f</span>。因此 <span class="kalax-inline-math">\ker f</span> 是 <span class="kalax-inline-math">(R,+)</span> 的子群。再看吸收性。若 <span class="kalax-inline-math">r\in R</span> 且 <span class="kalax-inline-math">x\in\ker f</span>，则

<div class="kalax-display-math">f(rx)=f(r)f(x)=f(r)\cdot0=0,</div>

所以 <span class="kalax-inline-math">rx\in\ker f</span>。同理

<div class="kalax-display-math">f(xr)=f(x)f(r)=0\cdot f(r)=0,</div>

所以 <span class="kalax-inline-math">xr\in\ker f</span>。故 <span class="kalax-inline-math">\ker f</span> 是双边理想。

另一方面，

<div class="kalax-display-math">\operatorname{Im}f=f(R)</div>

是 <span class="kalax-inline-math">S</span> 的子环：若 <span class="kalax-inline-math">a=f(x),b=f(y)</span>，则

<div class="kalax-display-math">a-b=f(x-y),\qquad ab=f(xy),</div>

仍在像中。但 <span class="kalax-inline-math">\operatorname{Im}f</span> 一般不必是 <span class="kalax-inline-math">S</span> 的理想。例如包含映射 <span class="kalax-inline-math">\mathbb Z\hookrightarrow \mathbb Q</span> 的像是 <span class="kalax-inline-math">\mathbb Z</span>，它不是 <span class="kalax-inline-math">\mathbb Q</span> 的理想，因为

<div class="kalax-display-math">\frac12\cdot 1=\frac12\notin\mathbb Z.</div>

### 例

1. <span class="kalax-inline-math">n\mathbb Z\subseteq\mathbb Z</span> 是理想。
2. 在矩阵环中，某些矩阵子集可以是左理想但不是右理想。
3. 若 <span class="kalax-inline-math">f:R\to S</span> 是环同态，则 <span class="kalax-inline-math">\ker f</span> 是 <span class="kalax-inline-math">R</span> 的理想；但 <span class="kalax-inline-math">\operatorname{Im}f</span> 一般只是子环，不一定是 <span class="kalax-inline-math">S</span> 的理想。
4. <span class="kalax-inline-math">0=\{0_R\}</span> 和 <span class="kalax-inline-math">R</span> 本身都是理想。真理想指不等于 <span class="kalax-inline-math">R</span> 的理想。

### 由集合生成的理想

若 <span class="kalax-inline-math">X\subseteq R</span>，记 <span class="kalax-inline-math">(X)</span> 为包含 <span class="kalax-inline-math">X</span> 的最小理想，即

<div class="kalax-display-math">(X)=\bigcap_{X\subseteq I\triangleleft R}I.</div>

若 $X=\{x_1,
\dots,x_n\}$，写作

<div class="kalax-display-math">(x_1,
\dots,x_n).</div>

若 <span class="kalax-inline-math">X=\{x\}</span>，则称 <span class="kalax-inline-math">(x)</span> 为主理想。

在交换环中，

<div class="kalax-display-math">(a)=Ra=\{ra:r\in R\},</div>

且

<div class="kalax-display-math">(x_1,\dots,x_n)=\left\{\sum_{i=1}^n r_ix_i:r_i\in R\right\}.</div>

**证明。** 记右侧集合为 <span class="kalax-inline-math">J</span>。显然 <span class="kalax-inline-math">x_i\in J</span>，所以任何包含 <span class="kalax-inline-math">x_1,\dots,x_n</span> 的理想都必须包含所有有限线性组合

<div class="kalax-display-math">\sum_{i=1}^n r_ix_i.</div>

因此 <span class="kalax-inline-math">J</span> 包含在 <span class="kalax-inline-math">(x_1,\dots,x_n)</span> 中。反过来，<span class="kalax-inline-math">J</span> 对加减封闭；若 <span class="kalax-inline-math">s\in R</span>，则

<div class="kalax-display-math">s\sum_i r_ix_i=\sum_i (sr_i)x_i\in J,</div>

交换环中右乘也一样。因此 <span class="kalax-inline-math">J</span> 本身就是包含 <span class="kalax-inline-math">x_1,\dots,x_n</span> 的理想。由最小性，

<div class="kalax-display-math">(x_1,\dots,x_n)=J.</div>

### 主理想整环

整环 <span class="kalax-inline-math">R</span> 称为主理想整环（PID），若 <span class="kalax-inline-math">R</span> 的每个理想都是主理想。

例：<span class="kalax-inline-math">\mathbb Z</span> 是 PID；若 <span class="kalax-inline-math">F</span> 是域，则 <span class="kalax-inline-math">F[x]</span> 是 PID；但 <span class="kalax-inline-math">\mathbb Z[x]</span> 和 <span class="kalax-inline-math">F[x,y]</span> 一般不是 PID。

例如在 <span class="kalax-inline-math">F[x,y]</span> 中，理想 <span class="kalax-inline-math">(x,y)</span> 不是主理想。

### 理想的和与积

设 <span class="kalax-inline-math">A,B\subseteq R</span> 为理想。定义

<div class="kalax-display-math">A+B=\{a+b:a\in A,
\ b\in B\},</div>

以及

<div class="kalax-display-math">AB=\left\{\sum_{i=1}^n a_ib_i:a_i\in A,
\ b_i\in B\right\}.</div>

若 <span class="kalax-inline-math">A,B</span> 是双边理想，则 <span class="kalax-inline-math">A+B</span> 与 <span class="kalax-inline-math">AB</span> 仍是双边理想。

对理想 <span class="kalax-inline-math">A,B,C</span>，有

<div class="kalax-display-math">(A+B)+C=A+(B+C),
\qquad
(AB)C=A(BC),</div>

并且

<div class="kalax-display-math">C(A+B)=CA+CB,
\qquad
(A+B)C=AC+BC.</div>

**证明补充。** 以 <span class="kalax-inline-math">AB</span> 为例。若

<div class="kalax-display-math">x=\sum_i a_ib_i,\qquad y=\sum_j a'_jb'_j</div>

属于 <span class="kalax-inline-math">AB</span>，则

<div class="kalax-display-math">x+y=\sum_i a_ib_i+\sum_j a'_jb'_j\in AB,</div>

且 <span class="kalax-inline-math">-x=\sum_i (-a_i)b_i\in AB</span>。若 <span class="kalax-inline-math">r\in R</span>，则

<div class="kalax-display-math">rx=\sum_i (ra_i)b_i\in AB,</div>

因为 <span class="kalax-inline-math">A</span> 是左理想；同时

<div class="kalax-display-math">xr=\sum_i a_i(b_ir)\in AB,</div>

因为 <span class="kalax-inline-math">B</span> 是右理想。所以 <span class="kalax-inline-math">AB</span> 是双边理想。<span class="kalax-inline-math">A+B</span> 的证明类似但更直接。

### 商环

设 <span class="kalax-inline-math">I\triangleleft R</span> 为双边理想。商群 <span class="kalax-inline-math">R/I</span> 上定义乘法

<div class="kalax-display-math">(a+I)(b+I)=ab+I.</div>

该定义良好，并使 <span class="kalax-inline-math">R/I</span> 成为环，称为 <span class="kalax-inline-math">R</span> 关于 <span class="kalax-inline-math">I</span> 的商环。

**良定义证明。** 商环乘法最需要检查的是：如果换了代表元，结果不变。设

<div class="kalax-display-math">a+I=a'+I,\qquad b+I=b'+I.</div>

这等价于

<div class="kalax-display-math">a-a'\in I,\qquad b-b'\in I.</div>

要证

<div class="kalax-display-math">ab+I=a'b'+I,</div>

即证 <span class="kalax-inline-math">ab-a'b'\in I</span>。计算：

<div class="kalax-display-math">ab-a'b'
=ab-a'b+a'b-a'b'
=(a-a')b+a'(b-b').</div>

因为 <span class="kalax-inline-math">I</span> 是双边理想，<span class="kalax-inline-math">(a-a')b\in I</span>，且 <span class="kalax-inline-math">a'(b-b')\in I</span>，所以 <span class="kalax-inline-math">ab-a'b'\in I</span>。因此乘法定义良好。加法的良定义同理，由

<div class="kalax-display-math">(a+b)-(a'+b')=(a-a')+(b-b')\in I</div>

得到。

环公理从 <span class="kalax-inline-math">R</span> 中继承。例如结合律：

<div class="kalax-display-math">((a+I)(b+I))(c+I)=(ab)c+I=a(bc)+I=(a+I)((b+I)(c+I)).</div>

分配律也类似。

例：

<div class="kalax-display-math">\mathbb Z/n\mathbb Z,
\qquad
\mathbb C[x]/(x),
\qquad
\mathbb Z[x]/(x-1)</div>

都是商环。

有同构

<div class="kalax-display-math">\mathbb C[x]/(x)\cong\mathbb C,
\qquad
\mathbb Z[x]/(x-1)\cong\mathbb Z,</div>

其中同构由代入 <span class="kalax-inline-math">x=0</span> 或 <span class="kalax-inline-math">x=1</span> 给出。

### 商映射与第一同构定理

若 <span class="kalax-inline-math">I\triangleleft R</span>，自然投影

<div class="kalax-display-math">\pi:R\to R/I,
\qquad
r\mapsto r+I</div>

是满环同态，且 <span class="kalax-inline-math">\ker\pi=I</span>。

若 <span class="kalax-inline-math">f:R\to S</span> 是环同态，则

<div class="kalax-display-math">R/\ker f\cong\operatorname{Im}f.</div>

**证明。** 定义

<div class="kalax-display-math">\overline f:R/\ker f\to\operatorname{Im}f,\qquad
r+\ker f\mapsto f(r).</div>

若 <span class="kalax-inline-math">r+\ker f=r'+\ker f</span>，则 <span class="kalax-inline-math">r-r'\in\ker f</span>，所以

<div class="kalax-display-math">f(r)-f(r')=f(r-r')=0,</div>

即 <span class="kalax-inline-math">f(r)=f(r')</span>，故 <span class="kalax-inline-math">\overline f</span> 良定义。它是环同态，因为

<div class="kalax-display-math">\overline f((r+\ker f)+(s+\ker f))=f(r+s)=f(r)+f(s),</div>

且

<div class="kalax-display-math">\overline f((r+\ker f)(s+\ker f))=f(rs)=f(r)f(s).</div>

它满到 <span class="kalax-inline-math">\operatorname{Im}f</span>。若 <span class="kalax-inline-math">\overline f(r+\ker f)=0</span>，则 <span class="kalax-inline-math">f(r)=0</span>，所以 <span class="kalax-inline-math">r\in\ker f</span>，即 <span class="kalax-inline-math">r+\ker f=0</span>。故 <span class="kalax-inline-math">\overline f</span> 单射，从而是同构。

更一般地，若 <span class="kalax-inline-math">I\subseteq\ker f</span>，则存在唯一同态

<div class="kalax-display-math">\overline f:R/I\to S</div>

使得

<div class="kalax-display-math">\overline f(r+I)=f(r).</div>

### 商环的同构定理

若 <span class="kalax-inline-math">I\subseteq J</span> 是 <span class="kalax-inline-math">R</span> 的理想，则

<div class="kalax-display-math">(R/I)/(J/I)\cong R/J.</div>

**证明。** 定义

<div class="kalax-display-math">\psi:R/I\to R/J,\qquad r+I\mapsto r+J.</div>

先检查良定义。若 <span class="kalax-inline-math">r+I=r'+I</span>，则 <span class="kalax-inline-math">r-r'\in I</span>。由于 <span class="kalax-inline-math">I\subseteq J</span>，有 <span class="kalax-inline-math">r-r'\in J</span>，所以 <span class="kalax-inline-math">r+J=r'+J</span>。

显然 <span class="kalax-inline-math">\psi</span> 是满同态。它的核为

<div class="kalax-display-math">\ker\psi
=\{r+I:r+J=J\}
=\{r+I:r\in J\}
=J/I.</div>

由第一同构定理，

<div class="kalax-display-math">(R/I)/(J/I)\cong R/J.</div>

若 <span class="kalax-inline-math">I,J</span> 是理想，则

<div class="kalax-display-math">I/(I\cap J)\cong (I+J)/J.</div>

**证明。** 定义

<div class="kalax-display-math">\varphi:I\to (I+J)/J,\qquad x\mapsto x+J.</div>

这是同态。其像为整个 <span class="kalax-inline-math">(I+J)/J</span>：因为任意元素可写为

<div class="kalax-display-math">i+j+J=i+J,</div>

其中 <span class="kalax-inline-math">i\in I,j\in J</span>。其核为

<div class="kalax-display-math">\ker\varphi
=\{x\in I:x+J=J\}
=I\cap J.</div>

由第一同构定理，

<div class="kalax-display-math">I/(I\cap J)\cong (I+J)/J.</div>

若 <span class="kalax-inline-math">I\triangleleft R</span>，则 <span class="kalax-inline-math">R/I</span> 的理想与 <span class="kalax-inline-math">R</span> 中包含 <span class="kalax-inline-math">I</span> 的理想一一对应：

<div class="kalax-display-math">\{J:J\triangleleft R,
\ I\subseteq J\}
\longleftrightarrow
\{\text{$R/I$ 的理想}\},
\qquad
J\longmapsto J/I.</div>

**证明补充。** 若 <span class="kalax-inline-math">J</span> 是 <span class="kalax-inline-math">R</span> 的理想且 <span class="kalax-inline-math">I\subseteq J</span>，则

<div class="kalax-display-math">J/I=\{j+I:j\in J\}</div>

是 <span class="kalax-inline-math">R/I</span> 的理想。因为若 <span class="kalax-inline-math">j,j'\in J</span>，则

<div class="kalax-display-math">(j+I)-(j'+I)=j-j'+I\in J/I,</div>

而对任意 <span class="kalax-inline-math">r\in R</span>，

<div class="kalax-display-math">(r+I)(j+I)=rj+I\in J/I.</div>

反过来，若 <span class="kalax-inline-math">\mathfrak a</span> 是 <span class="kalax-inline-math">R/I</span> 的理想，令

<div class="kalax-display-math">J=\pi^{-1}(\mathfrak a)
=\{r\in R:r+I\in\mathfrak a\},</div>

其中 <span class="kalax-inline-math">\pi:R\to R/I</span> 为自然投影。环同态的理想原像仍是理想，所以 <span class="kalax-inline-math">J</span> 是 <span class="kalax-inline-math">R</span> 的理想；并且 <span class="kalax-inline-math">I\subseteq J</span>，因为 <span class="kalax-inline-math">i+I=0\in\mathfrak a</span>。

两种构造互为逆：

<div class="kalax-display-math">\pi^{-1}(J/I)=J,
\qquad
\pi(\pi^{-1}(\mathfrak a))=\mathfrak a</div>

后一式用到 <span class="kalax-inline-math">\pi</span> 是满射。

## 6. 商环与理想对应

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

**证明说明。** 这一结论由映射

<div class="kalax-display-math">R/I\to R/J,\qquad r+I\mapsto r+J</div>

诱导。它的核正是 <span class="kalax-inline-math">J/I</span>，所以由第一同构定理得到同构。

## 7. 素理想与极大理想

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

## 8. 有限直积与中国剩余定理

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

**详细证明。** 先证明 <span class="kalax-inline-math">I_1\times\cdots\times I_n</span> 是理想。若

<div class="kalax-display-math">x=(x_1,\dots,x_n),\qquad y=(y_1,\dots,y_n)</div>

属于 <span class="kalax-inline-math">I_1\times\cdots\times I_n</span>，则每个 <span class="kalax-inline-math">x_i-y_i\in I_i</span>，所以 <span class="kalax-inline-math">x-y\in I_1\times\cdots\times I_n</span>。若

<div class="kalax-display-math">r=(r_1,\dots,r_n)\in R_1\times\cdots\times R_n,</div>

则

<div class="kalax-display-math">rx=(r_1x_1,\dots,r_nx_n)\in I_1\times\cdots\times I_n,</div>

因为每个 <span class="kalax-inline-math">I_i</span> 是 <span class="kalax-inline-math">R_i</span> 的理想。

反过来，设 <span class="kalax-inline-math">I\triangleleft R_1\times\cdots\times R_n</span>。令

<div class="kalax-display-math">I_i=\pi_i(I)=\{x_i:\exists (x_1,\dots,x_n)\in I\}.</div>

容易验证 <span class="kalax-inline-math">I_i</span> 是 <span class="kalax-inline-math">R_i</span> 的理想。显然 <span class="kalax-inline-math">I\subseteq I_1\times\cdots\times I_n</span>。为了证明反向包含，取任意

<div class="kalax-display-math">(a_1,\dots,a_n)\in I_1\times\cdots\times I_n.</div>

对每个 <span class="kalax-inline-math">i</span>，由 <span class="kalax-inline-math">a_i\in I_i</span>，存在 <span class="kalax-inline-math">u^{(i)}\in I</span>，其第 <span class="kalax-inline-math">i</span> 个坐标为 <span class="kalax-inline-math">a_i</span>。用标准幂等元

<div class="kalax-display-math">e_i=(0,\dots,0,1,0,\dots,0)</div>

相乘得

<div class="kalax-display-math">e_i u^{(i)}=(0,\dots,0,a_i,0,\dots,0)\in I.</div>

将这些元素相加，得到

<div class="kalax-display-math">(a_1,\dots,a_n)\in I.</div>

所以

<div class="kalax-display-math">I=I_1\times\cdots\times I_n.</div>

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

**证明。** 先处理 <span class="kalax-inline-math">n=2</span>。若 <span class="kalax-inline-math">A_1+A_2=R</span>，则存在

<div class="kalax-display-math">u\in A_1,\qquad v\in A_2</div>

使得

<div class="kalax-display-math">u+v=1.</div>

给定 <span class="kalax-inline-math">b_1,b_2\in R</span>，令

<div class="kalax-display-math">b=b_1v+b_2u.</div>

因为 <span class="kalax-inline-math">u\in A_1</span>，且 <span class="kalax-inline-math">v=1-u\equiv1\pmod{A_1}</span>，所以

<div class="kalax-display-math">b=b_1v+b_2u\equiv b_1\pmod{A_1}.</div>

同理，<span class="kalax-inline-math">v\in A_2</span> 且 <span class="kalax-inline-math">u=1-v\equiv1\pmod{A_2}</span>，所以

<div class="kalax-display-math">b\equiv b_2\pmod{A_2}.</div>

一般的 <span class="kalax-inline-math">n</span> 情形可归纳。也可显式构造：对每个 <span class="kalax-inline-math">i</span>，由两两互素可得

<div class="kalax-display-math">A_i+\bigcap_{j\ne i}A_j=R.</div>

于是取

<div class="kalax-display-math">e_i\in\bigcap_{j\ne i}A_j,\qquad e_i\equiv1\pmod{A_i}.</div>

令

<div class="kalax-display-math">b=\sum_{i=1}^n b_i e_i.</div>

模 <span class="kalax-inline-math">A_k</span> 时，除 <span class="kalax-inline-math">i=k</span> 项外，其他 <span class="kalax-inline-math">e_i\in A_k</span>，而 <span class="kalax-inline-math">e_k\equiv1\pmod{A_k}</span>，所以

<div class="kalax-display-math">b\equiv b_k\pmod{A_k}.</div>

唯一性：若 <span class="kalax-inline-math">b,b'</span> 都满足这些同余，则对所有 <span class="kalax-inline-math">i</span>，

<div class="kalax-display-math">b-b'\in A_i.</div>

故

<div class="kalax-display-math">b-b'\in\bigcap_i A_i.</div>

也就是说 <span class="kalax-inline-math">b</span> 模 <span class="kalax-inline-math">\bigcap_iA_i</span> 唯一。

### 中国剩余定理的商环形式

若 <span class="kalax-inline-math">A_1,\dots,A_n</span> 两两互素，则自然同态

<div class="kalax-display-math">\varphi:R\longrightarrow \prod_{i=1}^n R/A_i,\qquad
x\longmapsto (x+A_1,\dots,x+A_n)</div>

诱导同构

<div class="kalax-display-math">R/\bigcap_{i=1}^n A_i
\cong
\prod_{i=1}^n R/A_i.</div>

**证明。** 自然同态

<div class="kalax-display-math">\varphi:R\to\prod_i R/A_i,\qquad
x\mapsto (x+A_1,\dots,x+A_n)</div>

的核为

<div class="kalax-display-math">\ker\varphi=\bigcap_i A_i.</div>

由中国剩余定理的存在性，<span class="kalax-inline-math">\varphi</span> 是满射：任意给定

<div class="kalax-display-math">(b_1+A_1,\dots,b_n+A_n)</div>

都可找到 <span class="kalax-inline-math">b\in R</span>，使 <span class="kalax-inline-math">b\equiv b_i\pmod{A_i}</span>，所以 <span class="kalax-inline-math">\varphi(b)</span> 正是该元素。由第一同构定理，

<div class="kalax-display-math">R/\ker\varphi\cong \operatorname{Im}\varphi
=\prod_iR/A_i.</div>

### 例

求整数 <span class="kalax-inline-math">b</span> 使

<div class="kalax-display-math">b\equiv 2\pmod 5,\qquad b\equiv 3\pmod 6.</div>

由于 <span class="kalax-inline-math">(5,6)=1</span>，解模 <span class="kalax-inline-math">30</span> 唯一。可取

<div class="kalax-display-math">b\equiv 27\pmod {30}.</div>

## 9. 交换环中的因子分解

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

**证明。** 若 <span class="kalax-inline-math">a\sim b</span>，则 <span class="kalax-inline-math">a\mid b</span> 且 <span class="kalax-inline-math">b\mid a</span>。由 <span class="kalax-inline-math">a\mid b</span> 得 <span class="kalax-inline-math">b=ra</span>，所以 <span class="kalax-inline-math">(b)\subseteq(a)</span>；由 <span class="kalax-inline-math">b\mid a</span> 得 <span class="kalax-inline-math">a=sb</span>，所以 <span class="kalax-inline-math">(a)\subseteq(b)</span>，故 <span class="kalax-inline-math">(a)=(b)</span>。

若 <span class="kalax-inline-math">(a)=(b)</span>，则 <span class="kalax-inline-math">a\in(b)</span> 且 <span class="kalax-inline-math">b\in(a)</span>，所以存在 <span class="kalax-inline-math">r,s\in R</span> 使

<div class="kalax-display-math">a=rb,\qquad b=sa.</div>

代入得

<div class="kalax-display-math">a=rsa.</div>

若 <span class="kalax-inline-math">a\ne0</span>，因 <span class="kalax-inline-math">R</span> 是整环可消去 <span class="kalax-inline-math">a</span>，得到 <span class="kalax-inline-math">rs=1</span>，所以 <span class="kalax-inline-math">r</span> 是单位，<span class="kalax-inline-math">a=rb</span>。若 <span class="kalax-inline-math">a=0</span>，则 <span class="kalax-inline-math">(a)=(b)</span> 推出 <span class="kalax-inline-math">b=0</span>，结论也成立。

若 <span class="kalax-inline-math">a=ub</span> 且 <span class="kalax-inline-math">u</span> 是单位，则 <span class="kalax-inline-math">a\mid b</span> 与 <span class="kalax-inline-math">b\mid a</span> 都成立。

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

**证明。** 设 <span class="kalax-inline-math">x</span> 是素元。若 <span class="kalax-inline-math">ab\in(x)</span>，则 <span class="kalax-inline-math">x\mid ab</span>。由素元定义，<span class="kalax-inline-math">x\mid a</span> 或 <span class="kalax-inline-math">x\mid b</span>，即 <span class="kalax-inline-math">a\in(x)</span> 或 <span class="kalax-inline-math">b\in(x)</span>。又因为 <span class="kalax-inline-math">x</span> 非单位，所以 <span class="kalax-inline-math">(x)\ne R</span>，故 <span class="kalax-inline-math">(x)</span> 是素理想。

反过来，设 <span class="kalax-inline-math">(x)</span> 是素理想。若 <span class="kalax-inline-math">x\mid ab</span>，则 <span class="kalax-inline-math">ab\in(x)</span>。由素理想定义，<span class="kalax-inline-math">a\in(x)</span> 或 <span class="kalax-inline-math">b\in(x)</span>，即 <span class="kalax-inline-math">x\mid a</span> 或 <span class="kalax-inline-math">x\mid b</span>。所以 <span class="kalax-inline-math">x</span> 是素元。

### 定理：不可约元与主理想的极大性

设 <span class="kalax-inline-math">R</span> 为整环，<span class="kalax-inline-math">x\in R</span> 非零非单位。若主理想 <span class="kalax-inline-math">(x)</span> 在所有真主理想中极大，则 <span class="kalax-inline-math">x</span> 不可约。

若 <span class="kalax-inline-math">R</span> 是 PID，则反过来也成立。因此在 PID 中，

<div class="kalax-display-math">x\text{ 不可约}
\iff
(x)\text{ 是真主理想中的极大元}.</div>

进一步，在 PID 中不可约元都是素元。

**证明。** 先证一般方向。若 <span class="kalax-inline-math">(x)</span> 在所有真主理想中极大，且

<div class="kalax-display-math">x=ab.</div>

则 <span class="kalax-inline-math">(x)\subseteq(a)</span>，因为 <span class="kalax-inline-math">x=ab\in(a)</span>。若 <span class="kalax-inline-math">a</span> 不是单位，则 <span class="kalax-inline-math">(a)\ne R</span>；由极大性，<span class="kalax-inline-math">(a)=(x)</span>。于是 <span class="kalax-inline-math">a=ux</span> 对某个 <span class="kalax-inline-math">u\in R</span> 成立。代入 <span class="kalax-inline-math">x=ab</span> 得

<div class="kalax-display-math">x=uxb.</div>

由于 <span class="kalax-inline-math">R</span> 是整环且 <span class="kalax-inline-math">x\ne0</span>，消去 <span class="kalax-inline-math">x</span> 得 <span class="kalax-inline-math">1=ub</span>，所以 <span class="kalax-inline-math">b</span> 是单位。因此 <span class="kalax-inline-math">x</span> 不可约。

现在设 <span class="kalax-inline-math">R</span> 是 PID 且 <span class="kalax-inline-math">x</span> 不可约。若

<div class="kalax-display-math">(x)\subseteq(a)\subsetneq R,</div>

则 <span class="kalax-inline-math">x=ab</span> 对某个 <span class="kalax-inline-math">b\in R</span> 成立。因为 <span class="kalax-inline-math">x</span> 不可约，<span class="kalax-inline-math">a</span> 或 <span class="kalax-inline-math">b</span> 是单位。若 <span class="kalax-inline-math">a</span> 是单位，则 <span class="kalax-inline-math">(a)=R</span>，与 <span class="kalax-inline-math">(a)\subsetneq R</span> 矛盾；故 <span class="kalax-inline-math">b</span> 是单位，于是 <span class="kalax-inline-math">(a)=(x)</span>。因此 <span class="kalax-inline-math">(x)</span> 在真主理想中极大。

最后说明 PID 中不可约元是素元。若 <span class="kalax-inline-math">x</span> 不可约，则 <span class="kalax-inline-math">(x)</span> 在真理想中极大；PID 中所有理想都是主理想，所以 <span class="kalax-inline-math">(x)</span> 是极大理想。极大理想是素理想，因此由上一条定理，<span class="kalax-inline-math">x</span> 是素元。

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

**详细证明。**

1. **存在性。** 若 <span class="kalax-inline-math">x</span> 不可约则结束。若 <span class="kalax-inline-math">x=ab</span> 且 <span class="kalax-inline-math">a,b</span> 都非单位，则继续分解。若该过程不停止，会得到严格升链

   <div class="kalax-display-math">(x)\subsetneq(a_1)\subsetneq(a_2)\subsetneq\cdots,</div>

   与升链稳定引理矛盾。

   更具体地，取非零非单位元 <span class="kalax-inline-math">x</span>。若 <span class="kalax-inline-math">x</span> 不可约，已经得到分解。若可约，则

   <div class="kalax-display-math">x=a_1b_1</div>

   且 <span class="kalax-inline-math">a_1,b_1</span> 都非单位。若 <span class="kalax-inline-math">a_1,b_1</span> 都能分解成不可约元，则 <span class="kalax-inline-math">x</span> 也能分解。否则选一个仍可约的因子，例如 <span class="kalax-inline-math">a_1</span>，继续写

   <div class="kalax-display-math">a_1=a_2b_2.</div>

   因为 <span class="kalax-inline-math">b_2</span> 非单位，所以

   <div class="kalax-display-math">(a_1)\subsetneq(a_2).</div>

   若这个过程无限继续，就得到严格升链

   <div class="kalax-display-math">(x)\subsetneq(a_1)\subsetneq(a_2)\subsetneq\cdots,</div>

   这和 PID 中主理想升链稳定矛盾。所以分解过程必须停止，存在不可约分解。

2. **唯一性。** 在 PID 中不可约元为素元。若

   <div class="kalax-display-math">p_1\cdots p_m=q_1\cdots q_n</div>

   是两种不可约分解，则 <span class="kalax-inline-math">p_1</span> 整除右边乘积。因为 <span class="kalax-inline-math">p_1</span> 是素元，<span class="kalax-inline-math">p_1</span> 整除某个 <span class="kalax-inline-math">q_j</span>。重排后设 <span class="kalax-inline-math">p_1\mid q_1</span>。由于 <span class="kalax-inline-math">q_1</span> 不可约，且 <span class="kalax-inline-math">p_1</span> 非单位，得

   <div class="kalax-display-math">q_1=u p_1</div>

   对某个单位 <span class="kalax-inline-math">u</span> 成立，即 <span class="kalax-inline-math">q_1\sim p_1</span>。将等式中的 <span class="kalax-inline-math">p_1</span> 消去，得到

   <div class="kalax-display-math">p_2\cdots p_m=(u q_2)\cdots q_n</div>

   或等价地继续比较剩余因子。对因子个数归纳，得到 <span class="kalax-inline-math">m=n</span>，且重排后 <span class="kalax-inline-math">p_i\sim q_i</span>。

## 10. Euclidean Domain 与最大公因子

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

## 11. 分式域

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

**证明。** 先验证 <span class="kalax-inline-math">\sim</span> 是等价关系。自反性和对称性直接成立。若

<div class="kalax-display-math">(r,s)\sim(r',s'),\qquad (r',s')\sim(r'',s''),</div>

则

<div class="kalax-display-math">rs'=r's,\qquad r's''=r''s'.</div>

两式分别乘以 <span class="kalax-inline-math">s''</span> 和 <span class="kalax-inline-math">s</span>，得到

<div class="kalax-display-math">rs's''=r'ss'',\qquad r'ss''=r''s's.</div>

所以 <span class="kalax-inline-math">rs's''=r''s's</span>。由于 <span class="kalax-inline-math">s'\ne0</span> 且 <span class="kalax-inline-math">R</span> 是整环，可消去 <span class="kalax-inline-math">s'</span>，得

<div class="kalax-display-math">rs''=r''s.</div>

因此 <span class="kalax-inline-math">(r,s)\sim(r'',s'')</span>。

再验证运算良定义。若

<div class="kalax-display-math">\frac a b=\frac {a'}{b'},\qquad
\frac c d=\frac {c'}{d'},</div>

即 <span class="kalax-inline-math">ab'=a'b</span> 且 <span class="kalax-inline-math">cd'=c'd</span>，则

<div class="kalax-display-math">(ad+bc)b'd'
=adb'd'+bcb'd'
=a'bd d'+bb'c'd
=(a'd'+b'c')bd.</div>

所以

<div class="kalax-display-math">\frac{ad+bc}{bd}
=
\frac{a'd'+b'c'}{b'd'}.</div>

乘法良定义类似：

<div class="kalax-display-math">acb'd'=a'c'bd.</div>

域公理中的结合律、交换律和分配律都由 <span class="kalax-inline-math">R</span> 中相应性质推出。若 <span class="kalax-inline-math">\frac a b\ne0</span>，则 <span class="kalax-inline-math">a\ne0</span>，故

<div class="kalax-display-math">\left(\frac a b\right)^{-1}=\frac b a.</div>

因此 <span class="kalax-inline-math">\operatorname{Frac}(R)</span> 是域。映射 <span class="kalax-inline-math">r\mapsto r/1</span> 是环同态；若 <span class="kalax-inline-math">r/1=0/1</span>，则 <span class="kalax-inline-math">r=0</span>，故该映射单射。

### 例

<div class="kalax-display-math">\operatorname{Frac}(\mathbb Z)=\mathbb Q,
\qquad
\operatorname{Frac}(\mathbb Z[i])=\mathbb Q(i).</div>

## 12. 多项式环与形式幂级数

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

**证明。** 对多项式

<div class="kalax-display-math">f=\sum a_{k_1,\dots,k_n}x_1^{k_1}\cdots x_n^{k_n}</div>

定义

<div class="kalax-display-math">\overline\varphi(f)
=
\sum \varphi(a_{k_1,\dots,k_n})s_1^{k_1}\cdots s_n^{k_n}.</div>

多项式只有有限多项，所以该和有意义。<span class="kalax-inline-math">s_i</span> 与 <span class="kalax-inline-math">\varphi(R)</span> 中元素可交换，保证乘法展开时不因换序出错。逐项检查可得

<div class="kalax-display-math">\overline\varphi(f+g)=\overline\varphi(f)+\overline\varphi(g),
\qquad
\overline\varphi(fg)=\overline\varphi(f)\overline\varphi(g).</div>

唯一性来自多项式环由 <span class="kalax-inline-math">R</span> 和 <span class="kalax-inline-math">x_1,\dots,x_n</span> 生成：同态在 <span class="kalax-inline-math">R</span> 和各 <span class="kalax-inline-math">x_i</span> 上的值确定后，所有单项式和有限和的值都被迫确定。

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

**证明。**

1. 若 <span class="kalax-inline-math">f</span> 是单位，存在

   <div class="kalax-display-math">g=\sum_{i=0}^{\infty}b_ix^i</div>

   使 <span class="kalax-inline-math">fg=1</span>。比较常数项得

   <div class="kalax-display-math">a_0b_0=1,</div>

   所以 <span class="kalax-inline-math">a_0</span> 是单位。

   反过来，若 <span class="kalax-inline-math">a_0</span> 是单位，递归构造逆元。令 <span class="kalax-inline-math">b_0=a_0^{-1}</span>。要使

   <div class="kalax-display-math">\left(\sum a_ix^i\right)\left(\sum b_ix^i\right)=1,</div>

   对每个 <span class="kalax-inline-math">n\ge1</span>，<span class="kalax-inline-math">x^n</span> 的系数必须为 <span class="kalax-inline-math">0</span>：

   <div class="kalax-display-math">a_0b_n+a_1b_{n-1}+\cdots+a_nb_0=0.</div>

   因 <span class="kalax-inline-math">a_0</span> 可逆，可解出

   <div class="kalax-display-math">b_n=-a_0^{-1}(a_1b_{n-1}+\cdots+a_nb_0).</div>

   于是得到 <span class="kalax-inline-math">f^{-1}=g</span>。

2. 若 <span class="kalax-inline-math">a_0</span> 不可约且 <span class="kalax-inline-math">f=gh</span>，比较常数项得

   <div class="kalax-display-math">a_0=g(0)h(0).</div>

   因 <span class="kalax-inline-math">a_0</span> 不可约，<span class="kalax-inline-math">g(0)</span> 或 <span class="kalax-inline-math">h(0)</span> 是单位。由上一条，对应的形式幂级数 <span class="kalax-inline-math">g</span> 或 <span class="kalax-inline-math">h</span> 是单位。所以 <span class="kalax-inline-math">f</span> 不可约。

## 13. 多项式环中的因子分解

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

**证明。** 设

<div class="kalax-display-math">g=b_mx^m+\cdots+b_0,\qquad b_m\in R^\times.</div>

若 <span class="kalax-inline-math">\deg f&lt;m</span>，取 <span class="kalax-inline-math">q=0,r=f</span>。若

<div class="kalax-display-math">f=a_nx^n+\cdots,\qquad n\ge m,</div>

则用

<div class="kalax-display-math">a_nb_m^{-1}x^{n-m}g</div>

消去 <span class="kalax-inline-math">f</span> 的最高次项。令

<div class="kalax-display-math">f_1=f-a_nb_m^{-1}x^{n-m}g.</div>

则 <span class="kalax-inline-math">\deg f_1&lt;\deg f</span>。不断重复，次数每步下降，有限步后得到

<div class="kalax-display-math">f=qg+r,\qquad \deg r&lt;\deg g.</div>

唯一性：若

<div class="kalax-display-math">f=qg+r=q'g+r',
\qquad \deg r,\deg r'&lt;\deg g,</div>

则

<div class="kalax-display-math">(q-q')g=r'-r.</div>

若 <span class="kalax-inline-math">q\ne q'</span>，因为 <span class="kalax-inline-math">g</span> 的首项系数是单位，左边次数至少为 <span class="kalax-inline-math">\deg g</span>；但右边次数小于 <span class="kalax-inline-math">\deg g</span>，矛盾。所以 <span class="kalax-inline-math">q=q'</span>，进而 <span class="kalax-inline-math">r=r'</span>。

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

**证明。** 用 <span class="kalax-inline-math">x-c</span> 除 <span class="kalax-inline-math">f</span>，存在 <span class="kalax-inline-math">q\in R[x]</span> 和常数 <span class="kalax-inline-math">r\in R</span>，使得

<div class="kalax-display-math">f(x)=q(x)(x-c)+r.</div>

代入 <span class="kalax-inline-math">x=c</span> 得

<div class="kalax-display-math">f(c)=r.</div>

因此 <span class="kalax-inline-math">f(c)=0</span> 当且仅当 <span class="kalax-inline-math">r=0</span>，即当且仅当 <span class="kalax-inline-math">x-c</span> 整除 <span class="kalax-inline-math">f</span>。

### 根的个数

若 <span class="kalax-inline-math">D</span> 是整环，<span class="kalax-inline-math">f\in D[x]</span> 且 <span class="kalax-inline-math">\deg f=n</span>，则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">D</span> 中至多有 <span class="kalax-inline-math">n</span> 个根。

**证明。** 对次数 <span class="kalax-inline-math">n</span> 归纳。若 <span class="kalax-inline-math">n=0</span>，非零常数多项式没有根。设结论对次数小于 <span class="kalax-inline-math">n</span> 的多项式成立。若 <span class="kalax-inline-math">f</span> 没有根，结论显然；若 <span class="kalax-inline-math">c</span> 是一个根，则由因式定理

<div class="kalax-display-math">f=(x-c)g,\qquad \deg g=n-1.</div>

若 <span class="kalax-inline-math">c'\ne c</span> 也是 <span class="kalax-inline-math">f</span> 的根，则

<div class="kalax-display-math">0=f(c')=(c'-c)g(c').</div>

因 <span class="kalax-inline-math">D</span> 是整环且 <span class="kalax-inline-math">c'-c\ne0</span>，得 <span class="kalax-inline-math">g(c')=0</span>。所以除 <span class="kalax-inline-math">c</span> 外，<span class="kalax-inline-math">f</span> 的其他根都是 <span class="kalax-inline-math">g</span> 的根。由归纳假设，<span class="kalax-inline-math">g</span> 至多有 <span class="kalax-inline-math">n-1</span> 个根，因此 <span class="kalax-inline-math">f</span> 至多有 <span class="kalax-inline-math">n</span> 个根。

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

**证明。** 若 <span class="kalax-inline-math">c</span> 是重根，则

<div class="kalax-display-math">f=(x-c)^m g,\qquad m\ge2,\quad g(c)\ne0.</div>

求导得

<div class="kalax-display-math">f'=m(x-c)^{m-1}g+(x-c)^m g',</div>

所以 <span class="kalax-inline-math">f(c)=0</span> 且 <span class="kalax-inline-math">f'(c)=0</span>。

反过来，若 <span class="kalax-inline-math">f(c)=0</span>，则由因式定理

<div class="kalax-display-math">f=(x-c)g.</div>

求导得

<div class="kalax-display-math">f'=g+(x-c)g'.</div>

代入 <span class="kalax-inline-math">x=c</span>，得到

<div class="kalax-display-math">f'(c)=g(c).</div>

若 <span class="kalax-inline-math">f'(c)=0</span>，则 <span class="kalax-inline-math">g(c)=0</span>。再次用因式定理，<span class="kalax-inline-math">x-c\mid g</span>，所以

<div class="kalax-display-math">(x-c)^2\mid f,</div>

即 <span class="kalax-inline-math">c</span> 是重根。

若 <span class="kalax-inline-math">D</span> 是域，则 <span class="kalax-inline-math">f</span> 无重根等价于 <span class="kalax-inline-math">f</span> 与 <span class="kalax-inline-math">f'</span> 互素：

<div class="kalax-display-math">\gcd(f,f')=1.</div>

例：在 <span class="kalax-inline-math">\mathbb Q[x]</span> 中，<span class="kalax-inline-math">f(x)=x^2+1</span> 的导数为 <span class="kalax-inline-math">2x</span>，故无重根。

### 有理根判别

设 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">F=\operatorname{Frac}(D)</span>。若

<div class="kalax-display-math">f(x)=a_nx^n+\cdots+a_0\in D[x]</div>

且 <span class="kalax-inline-math">c/d\in F</span> 是 <span class="kalax-inline-math">f</span> 的根，其中 <span class="kalax-inline-math">\gcd(c,d)=1</span>，则

<div class="kalax-display-math">c\mid a_0,\qquad d\mid a_n.</div>

**证明。** 因 <span class="kalax-inline-math">f(c/d)=0</span>，乘以 <span class="kalax-inline-math">d^n</span> 得

<div class="kalax-display-math">a_nc^n+a_{n-1}c^{n-1}d+\cdots+a_1cd^{n-1}+a_0d^n=0.</div>

把第一项移到另一边：

<div class="kalax-display-math">a_nc^n=-d(a_{n-1}c^{n-1}+\cdots+a_0d^{n-1}).</div>

所以 <span class="kalax-inline-math">d\mid a_nc^n</span>。由于 <span class="kalax-inline-math">\gcd(c,d)=1</span>，在 UFD 中 <span class="kalax-inline-math">d</span> 与 <span class="kalax-inline-math">c^n</span> 也互素，因此

<div class="kalax-display-math">d\mid a_n.</div>

同理，把最后一项移到另一边：

<div class="kalax-display-math">a_0d^n=-c(a_nc^{n-1}+a_{n-1}c^{n-2}d+\cdots+a_1d^{n-1}),</div>

可得 <span class="kalax-inline-math">c\mid a_0d^n</span>。又 <span class="kalax-inline-math">\gcd(c,d)=1</span>，所以

<div class="kalax-display-math">c\mid a_0.</div>

### 例

对

<div class="kalax-display-math">f(x)=x^4+3x^3-6x^2-11x-6\in\mathbb Z[x],</div>

有理根只能从

<div class="kalax-display-math">\pm1,\ \pm2,\ \pm3,\ \pm6</div>

中寻找。

## 14. Gauss 引理与 Eisenstein 判别法

### 内容与本原多项式

设 <span class="kalax-inline-math">D</span> 是 UFD，

<div class="kalax-display-math">f(x)=\sum_{i=0}^n a_ix^i\in D[x].</div>

系数 <span class="kalax-inline-math">a_0,\dots,a_n</span> 的最大公因子称为 <span class="kalax-inline-math">f</span> 的**内容**，记作 <span class="kalax-inline-math">c(f)</span>。若 <span class="kalax-inline-math">c(f)</span> 是单位，则称 <span class="kalax-inline-math">f</span> 为**本原多项式**。

### Gauss 引理

若 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">f,g\in D[x]</span>，则

<div class="kalax-display-math">c(fg)\sim c(f)c(g).</div>

特别地，本原多项式的乘积仍是本原多项式。

**证明。** 先证本原多项式乘积仍本原。设 <span class="kalax-inline-math">f,g</span> 本原。若 <span class="kalax-inline-math">fg</span> 不是本原，则存在素元 <span class="kalax-inline-math">p\in D</span> 整除 <span class="kalax-inline-math">fg</span> 的每个系数。

在商环

<div class="kalax-display-math">\overline D=D/(p)</div>

中，因为 <span class="kalax-inline-math">(p)</span> 是素理想，<span class="kalax-inline-math">\overline D</span> 是整环。把 <span class="kalax-inline-math">f,g</span> 的系数模 <span class="kalax-inline-math">p</span>，得到

<div class="kalax-display-math">\overline f,\overline g\in \overline D[x].</div>

<span class="kalax-inline-math">p</span> 整除 <span class="kalax-inline-math">fg</span> 的每个系数等价于

<div class="kalax-display-math">\overline f\,\overline g=0.</div>

由于 <span class="kalax-inline-math">\overline D</span> 是整环，<span class="kalax-inline-math">\overline D[x]</span> 也是整环，所以

<div class="kalax-display-math">\overline f=0\quad\text{或}\quad \overline g=0.</div>

这意味着 <span class="kalax-inline-math">p</span> 整除 <span class="kalax-inline-math">f</span> 或 <span class="kalax-inline-math">g</span> 的每个系数，矛盾于 <span class="kalax-inline-math">f,g</span> 本原。因此 <span class="kalax-inline-math">fg</span> 本原。

一般情形中，写

<div class="kalax-display-math">f=c(f)f_1,\qquad g=c(g)g_1,</div>

其中 <span class="kalax-inline-math">f_1,g_1</span> 本原。则

<div class="kalax-display-math">fg=c(f)c(g)f_1g_1.</div>

由刚才所证，<span class="kalax-inline-math">f_1g_1</span> 本原，所以

<div class="kalax-display-math">c(fg)\sim c(f)c(g).</div>

### Gauss 引理的推论

设 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">F=\operatorname{Frac}(D)</span>。若 <span class="kalax-inline-math">f,g\in D[x]</span> 均为本原多项式，则

<div class="kalax-display-math">f\sim g\text{ in }D[x]
\iff
f\sim g\text{ in }F[x].</div>

若 <span class="kalax-inline-math">f\in D[x]</span> 为本原多项式，则

<div class="kalax-display-math">f\text{ 在 }D[x]\text{ 中不可约}
\iff
f\text{ 在 }F[x]\text{ 中不可约}.</div>

**证明。** 若 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">D[x]</span> 中可约，则当然在 <span class="kalax-inline-math">F[x]</span> 中可约。

反过来，若 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">F[x]</span> 中可约，写

<div class="kalax-display-math">f=gh,\qquad g,h\in F[x],</div>

且 <span class="kalax-inline-math">g,h</span> 都不是单位。把 <span class="kalax-inline-math">g,h</span> 的系数通分，可写作

<div class="kalax-display-math">g=\frac a b g_1,\qquad h=\frac c d h_1,</div>

其中 <span class="kalax-inline-math">a,b,c,d\in D</span>，<span class="kalax-inline-math">g_1,h_1\in D[x]</span> 本原。于是

<div class="kalax-display-math">f=\frac{ac}{bd}g_1h_1.</div>

因为 <span class="kalax-inline-math">f</span> 本原，且 <span class="kalax-inline-math">g_1h_1</span> 本原，由内容比较可知标量 <span class="kalax-inline-math">\frac{ac}{bd}</span> 实际上是 <span class="kalax-inline-math">D</span> 中的单位。因此 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">D[x]</span> 中也分解为两个非常数因子，矛盾于不可约。故 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">F[x]</span> 中不可约。

### 定理：<span class="kalax-inline-math">D[x]</span> 是 UFD

若 <span class="kalax-inline-math">D</span> 是 UFD，则 <span class="kalax-inline-math">D[x]</span> 也是 UFD。

因此反复归纳可得：

<div class="kalax-display-math">D[x_1,\dots,x_n]</div>

也是 UFD。

**证明。** 任取非零多项式 <span class="kalax-inline-math">f\in D[x]</span>，写

<div class="kalax-display-math">f=c(f)f_1,</div>

其中 <span class="kalax-inline-math">f_1</span> 本原。因为 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">c(f)</span> 可分解为 <span class="kalax-inline-math">D</span> 中不可约元的乘积。另一方面，<span class="kalax-inline-math">F=\operatorname{Frac}(D)</span> 是域，所以 <span class="kalax-inline-math">F[x]</span> 是 PID，因而是 UFD；于是 <span class="kalax-inline-math">f_1</span> 在 <span class="kalax-inline-math">F[x]</span> 中可分解为不可约多项式乘积。利用 Gauss 引理的推论，可把这些不可约因子取成本原的 <span class="kalax-inline-math">D[x]</span> 中多项式，并且它们在 <span class="kalax-inline-math">D[x]</span> 中仍不可约。这样得到 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">D[x]</span> 中的不可约分解。

唯一性也由 <span class="kalax-inline-math">F[x]</span> 中唯一性和内容唯一性推出：若 <span class="kalax-inline-math">D[x]</span> 中有两种分解，把它们看作 <span class="kalax-inline-math">F[x]</span> 中分解，因子在 <span class="kalax-inline-math">F[x]</span> 中相伴；再用本原性把相伴常数限制回 <span class="kalax-inline-math">D</span> 的单位。

### Eisenstein 判别法

设 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">F=\operatorname{Frac}(D)</span>，

<div class="kalax-display-math">f(x)=a_nx^n+\cdots+a_0\in D[x],
\qquad \deg f\ge 1.</div>

若存在素元 <span class="kalax-inline-math">p\in D</span> 满足：

1. <span class="kalax-inline-math">p\nmid a_n</span>；
2. <span class="kalax-inline-math">p\mid a_i</span> 对所有 <span class="kalax-inline-math">0\le i\le n-1</span> 成立；
3. <span class="kalax-inline-math">p^2\nmid a_0</span>，

则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">F[x]</span> 中不可约。若 <span class="kalax-inline-math">f</span> 本原，则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">D[x]</span> 中也不可约。

**证明。** 只需证明本原情形在 <span class="kalax-inline-math">D[x]</span> 中不可约。若

<div class="kalax-display-math">f=gh,\qquad g,h\in D[x],</div>

且 <span class="kalax-inline-math">g,h</span> 都非常数。写

<div class="kalax-display-math">g=b_rx^r+\cdots+b_0,\qquad
h=c_sx^s+\cdots+c_0.</div>

由 <span class="kalax-inline-math">p\mid a_0</span> 且 <span class="kalax-inline-math">p^2\nmid a_0</span>，可知 <span class="kalax-inline-math">a_0=b_0c_0</span> 中恰有一个因子被 <span class="kalax-inline-math">p</span> 整除。不妨设

<div class="kalax-display-math">p\mid b_0,\qquad p\nmid c_0.</div>

因为 <span class="kalax-inline-math">p\nmid a_n=b_rc_s</span>，所以 <span class="kalax-inline-math">p\nmid b_r</span>。于是存在最小的 <span class="kalax-inline-math">k</span>，使得

<div class="kalax-display-math">p\nmid b_k.</div>

注意 <span class="kalax-inline-math">k\ge1</span>。考察 <span class="kalax-inline-math">x^k</span> 的系数：

<div class="kalax-display-math">a_k=b_kc_0+b_{k-1}c_1+\cdots+b_0c_k.</div>

当 <span class="kalax-inline-math">i&lt;k</span> 时，<span class="kalax-inline-math">p\mid b_i</span>，所以除第一项外其余项都被 <span class="kalax-inline-math">p</span> 整除。又条件给出 <span class="kalax-inline-math">p\mid a_k</span>，因此

<div class="kalax-display-math">p\mid b_kc_0.</div>

但 <span class="kalax-inline-math">p\nmid b_k</span> 且 <span class="kalax-inline-math">p\nmid c_0</span>，与 <span class="kalax-inline-math">p</span> 为素元矛盾。因此 <span class="kalax-inline-math">f</span> 不可约。

若 <span class="kalax-inline-math">f</span> 不一定本原，则先取本原部分；若本原部分在 <span class="kalax-inline-math">F[x]</span> 中不可约，则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">F[x]</span> 中不可约。若 <span class="kalax-inline-math">f</span> 本原，再由 Gauss 引理得到它在 <span class="kalax-inline-math">D[x]</span> 中也不可约。

### 例

令

<div class="kalax-display-math">f(x)=2x^3-6x^2+9x-15\in\mathbb Z[x].</div>

取 <span class="kalax-inline-math">p=3</span>，有 <span class="kalax-inline-math">3\nmid 2</span>，<span class="kalax-inline-math">3\mid -6,9,-15</span>，且 <span class="kalax-inline-math">9\nmid -15</span>。故 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">\mathbb Q[x]</span> 中不可约。

## 15. 模

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

**证明。** 因为 <span class="kalax-inline-math">0_R=0_R+0_R</span>，所以

<div class="kalax-display-math">0_Ra=(0_R+0_R)a=0_Ra+0_Ra.</div>

在交换群 <span class="kalax-inline-math">A</span> 中两边加上 <span class="kalax-inline-math">-(0_Ra)</span>，得 <span class="kalax-inline-math">0_Ra=0_A</span>。同理，因为 <span class="kalax-inline-math">0_A=0_A+0_A</span>，

<div class="kalax-display-math">r0_A=r(0_A+0_A)=r0_A+r0_A,</div>

所以 <span class="kalax-inline-math">r0_A=0_A</span>。

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

**证明。** 对核，若 <span class="kalax-inline-math">x,y\in\ker f</span>，则

<div class="kalax-display-math">f(x-y)=f(x)-f(y)=0-0=0,</div>

所以 <span class="kalax-inline-math">x-y\in\ker f</span>。若 <span class="kalax-inline-math">r\in R</span>，则

<div class="kalax-display-math">f(rx)=rf(x)=r0=0,</div>

所以 <span class="kalax-inline-math">rx\in\ker f</span>。故 <span class="kalax-inline-math">\ker f</span> 是子模。

对像，若 <span class="kalax-inline-math">u=f(x),v=f(y)</span>，则

<div class="kalax-display-math">u-v=f(x)-f(y)=f(x-y)\in\operatorname{Im}f.</div>

若 <span class="kalax-inline-math">r\in R</span>，则

<div class="kalax-display-math">ru=r f(x)=f(rx)\in\operatorname{Im}f.</div>

故 <span class="kalax-inline-math">\operatorname{Im}f</span> 是子模。

### 生成子模

若 <span class="kalax-inline-math">X\subseteq A</span>，则由 <span class="kalax-inline-math">X</span> 生成的子模记作

<div class="kalax-display-math">\langle X\rangle.</div>

若 <span class="kalax-inline-math">X=\{a_1,\dots,a_n\}</span>，则

<div class="kalax-display-math">\langle a_1,\dots,a_n\rangle
=
\left\{\sum_{i=1}^n r_ia_i:r_i\in R\right\}.</div>

特别地，

<div class="kalax-display-math">\langle a\rangle=Ra=\{ra:r\in R\}.</div>

**证明。** 有限线性组合集合

<div class="kalax-display-math">L=\left\{\sum_{i=1}^n r_ia_i:r_i\in R\right\}</div>

显然包含 <span class="kalax-inline-math">a_1,\dots,a_n</span>，并且对加减与 <span class="kalax-inline-math">R</span> 的标量乘法封闭，因此是子模。任何包含 <span class="kalax-inline-math">a_1,\dots,a_n</span> 的子模都必须包含所有这样的线性组合，所以 <span class="kalax-inline-math">L</span> 正是由这些元素生成的最小子模。

### 商模与第一同构定理

若 <span class="kalax-inline-math">N\subseteq M</span> 是子 <span class="kalax-inline-math">R</span>-模，则

<div class="kalax-display-math">M/N</div>

在

<div class="kalax-display-math">r(m+N)=rm+N</div>

下成为 <span class="kalax-inline-math">R</span>-模，称为商模。

**良定义证明。** 商群 <span class="kalax-inline-math">M/N</span> 已经有加法。需要检查标量乘法不依赖代表元。若

<div class="kalax-display-math">m+N=m'+N,</div>

则 <span class="kalax-inline-math">m-m'\in N</span>。因为 <span class="kalax-inline-math">N</span> 是子模，

<div class="kalax-display-math">r(m-m')=rm-rm'\in N,</div>

所以

<div class="kalax-display-math">rm+N=rm'+N.</div>

故 <span class="kalax-inline-math">r(m+N)=rm+N</span> 良定义。

模公理从 <span class="kalax-inline-math">M</span> 中继承。例如

<div class="kalax-display-math">(r+s)(m+N)=(r+s)m+N=rm+sm+N
=r(m+N)+s(m+N).</div>

若 <span class="kalax-inline-math">f:A\to B</span> 是 <span class="kalax-inline-math">R</span>-模同态，则

<div class="kalax-display-math">A/\ker f\cong \operatorname{Im}f.</div>

**证明。** 定义

<div class="kalax-display-math">\overline f:A/\ker f\to\operatorname{Im}f,\qquad
a+\ker f\mapsto f(a).</div>

先看良定义。若 <span class="kalax-inline-math">a+\ker f=a'+\ker f</span>，则 <span class="kalax-inline-math">a-a'\in\ker f</span>，所以

<div class="kalax-display-math">f(a)-f(a')=f(a-a')=0,</div>

即 <span class="kalax-inline-math">f(a)=f(a')</span>。映射 <span class="kalax-inline-math">\overline f</span> 显然是 <span class="kalax-inline-math">R</span>-模同态，并且满射到 <span class="kalax-inline-math">\operatorname{Im}f</span>。若

<div class="kalax-display-math">\overline f(a+\ker f)=0,</div>

则 <span class="kalax-inline-math">f(a)=0</span>，即 <span class="kalax-inline-math">a\in\ker f</span>，所以 <span class="kalax-inline-math">a+\ker f=0</span>。故 <span class="kalax-inline-math">\overline f</span> 单射，从而是同构。

### 第二、第三同构定理

若 <span class="kalax-inline-math">B,C\subseteq A</span> 是子模，则

<div class="kalax-display-math">B/(B\cap C)\cong (B+C)/C.</div>

**证明。** 定义

<div class="kalax-display-math">\phi:B\to (B+C)/C,\qquad b\mapsto b+C.</div>

这是 <span class="kalax-inline-math">R</span>-模同态。它是满射，因为任意 <span class="kalax-inline-math">(b+c)+C</span> 都等于 <span class="kalax-inline-math">b+C</span>。其核为

<div class="kalax-display-math">\ker\phi
=\{b\in B:b+C=C\}
=B\cap C.</div>

由第一同构定理，

<div class="kalax-display-math">B/(B\cap C)\cong (B+C)/C.</div>

若 <span class="kalax-inline-math">B\subseteq C\subseteq A</span>，则

<div class="kalax-display-math">(A/B)/(C/B)\cong A/C.</div>

**证明。** 定义

<div class="kalax-display-math">\psi:A/B\to A/C,\qquad a+B\mapsto a+C.</div>

若 <span class="kalax-inline-math">a+B=a'+B</span>，则 <span class="kalax-inline-math">a-a'\in B\subseteq C</span>，所以 <span class="kalax-inline-math">a+C=a'+C</span>，故良定义。<span class="kalax-inline-math">\psi</span> 是满同态。其核为

<div class="kalax-display-math">\ker\psi
=\{a+B:a+C=C\}
=\{a+B:a\in C\}
=C/B.</div>

由第一同构定理，

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

**解释。** 在短正合列

<div class="kalax-display-math">0\to A\xrightarrow{f}B\xrightarrow{g}C\to0</div>

中，左端正合表示

<div class="kalax-display-math">\ker f=\operatorname{Im}(0\to A)=0,</div>

所以 <span class="kalax-inline-math">f</span> 单射。右端正合表示

<div class="kalax-display-math">\operatorname{Im}g=\ker(C\to0)=C,</div>

所以 <span class="kalax-inline-math">g</span> 满射。中间正合表示

<div class="kalax-display-math">\operatorname{Im}f=\ker g.</div>

于是由第一同构定理，

<div class="kalax-display-math">B/\operatorname{Im}f
=B/\ker g
\cong\operatorname{Im}g
=C.</div>

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

**证明。** 这是一次典型的 diagram chasing。

1. 先证单射部分。设 <span class="kalax-inline-math">b\in B</span> 且 <span class="kalax-inline-math">\beta(b)=0</span>。要证 <span class="kalax-inline-math">b=0</span>。由交换性，

   <div class="kalax-display-math">\gamma(g(b))=g'(\beta(b))=g'(0)=0.</div>

   因 <span class="kalax-inline-math">\gamma</span> 单射，得 <span class="kalax-inline-math">g(b)=0</span>。上排正合给出

   <div class="kalax-display-math">b\in\ker g=\operatorname{Im}f,</div>

   所以存在 <span class="kalax-inline-math">a\in A</span> 使 <span class="kalax-inline-math">f(a)=b</span>。再用交换性：

   <div class="kalax-display-math">f'(\alpha(a))=\beta(f(a))=\beta(b)=0.</div>

   下排中 <span class="kalax-inline-math">f'</span> 单射，因此 <span class="kalax-inline-math">\alpha(a)=0</span>。又 <span class="kalax-inline-math">\alpha</span> 单射，得 <span class="kalax-inline-math">a=0</span>，所以

   <div class="kalax-display-math">b=f(a)=0.</div>

   故 <span class="kalax-inline-math">\beta</span> 单射。

2. 再证满射部分。任取 <span class="kalax-inline-math">b'\in B'</span>。令

   <div class="kalax-display-math">c'=g'(b')\in C'.</div>

   因 <span class="kalax-inline-math">\gamma</span> 满射，存在 <span class="kalax-inline-math">c\in C</span> 使 <span class="kalax-inline-math">\gamma(c)=c'</span>。上排中 <span class="kalax-inline-math">g</span> 满射，所以存在 <span class="kalax-inline-math">b\in B</span> 使

   <div class="kalax-display-math">g(b)=c.</div>

   于是

   <div class="kalax-display-math">g'(\beta(b))=\gamma(g(b))=\gamma(c)=c'=g'(b').</div>

   因此

   <div class="kalax-display-math">b'-\beta(b)\in\ker g'=\operatorname{Im}f'.</div>

   存在 <span class="kalax-inline-math">a'\in A'</span> 使

   <div class="kalax-display-math">f'(a')=b'-\beta(b).</div>

   因 <span class="kalax-inline-math">\alpha</span> 满射，存在 <span class="kalax-inline-math">a\in A</span> 使 <span class="kalax-inline-math">\alpha(a)=a'</span>。于是

   <div class="kalax-display-math">\beta(b+f(a))
   =
   \beta(b)+\beta(f(a))
   =
   \beta(b)+f'(\alpha(a))
   =
   \beta(b)+f'(a')
   =
   b'.</div>

   故 <span class="kalax-inline-math">\beta</span> 满射。

3. 若 <span class="kalax-inline-math">\alpha,\gamma</span> 都是同构，则它们既单又满，由前两步知 <span class="kalax-inline-math">\beta</span> 既单又满，因此是同构。

## 16. 域扩张

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