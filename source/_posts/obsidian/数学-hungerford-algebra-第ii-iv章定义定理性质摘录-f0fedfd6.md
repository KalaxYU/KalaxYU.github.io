---
title: "Hungerford Algebra 第 II-IV 章定义、定理与性质整理"
date: 2026-06-16 17:30:13
updated: 2026-06-16 17:30:13
permalink: notes/数学-hungerford-algebra-第ii-iv章定义定理性质摘录-f0fedfd6/
categories:
  - "数学"
tags:
  - "obsidian"
  - "数学"
  - "algebra"
  - "Hungerford"
  - "abstract-algebra"
description: "Hungerford Algebra 第 II-IV 章定义、定理与性质整理 这版已经把上一版的英文 OCR 原文块替换成中文讲义式表述。顺序按原书编号排列； Proposition 统一写成“命题/性质”。这里整理的是结论本身，不含证明。 使用方式 每条按这种结构读：先看中文标题，再看“若/则”的"
---
# Hungerford Algebra 第 II-IV 章定义、定理与性质整理

> 这版已经把上一版的英文 OCR 原文块替换成中文讲义式表述。顺序按原书编号排列；`Proposition` 统一写成“命题/性质”。这里整理的是结论本身，不含证明。

## 使用方式

每条按这种结构读：先看中文标题，再看“若/则”的条件和结论，最后看居中的公式。

公式用 Obsidian/Markdown 的 LaTeX：

<div class="kalax-display-math">A \cong B</div>

## 统计

- 第 II 章：72 条
- 第 III 章：87 条
- 第 IV 章：88 条
- 合计：247 条

---

## Chapter II The Structure of Groups

### II.1 自由阿贝尔群

#### II.1.1 定理：自由阿贝尔群的等价刻画

阿贝尔群 <span class="kalax-inline-math">F</span> 下列说法等价：有基；是若干无限循环群的内直和；同构于若干个 <span class="kalax-inline-math">\mathbb Z</span> 的直和；满足自由对象的泛性质。

<div class="kalax-display-math">F \cong \bigoplus_{x\in X}\mathbb Z.</div>

给定任意映射 <span class="kalax-inline-math">f:X\to G</span>，唯一延拓为群同态：

<div class="kalax-display-math">\bar f:F\to G,\qquad \bar f|_X=f.</div>

满足这些条件的阿贝尔群叫做集合 <span class="kalax-inline-math">X</span> 上的自由阿贝尔群。

#### II.1.2 定理：自由阿贝尔群的基数唯一

自由阿贝尔群的任意两个基有相同基数。这个基数叫做秩。

<div class="kalax-display-math">\operatorname{rank}F=|X|.</div>

#### II.1.3 命题/性质：自由阿贝尔群按秩分类

两个自由阿贝尔群同构，当且仅当它们的秩相同。

<div class="kalax-display-math">F_1\cong F_2 \iff \operatorname{rank}F_1=\operatorname{rank}F_2.</div>

#### II.1.4 定理：任意阿贝尔群是自由阿贝尔群的商

若 <span class="kalax-inline-math">X</span> 生成阿贝尔群 <span class="kalax-inline-math">G</span>，则存在自由阿贝尔群 <span class="kalax-inline-math">F(X)</span> 和满同态：

<div class="kalax-display-math">F(X)\twoheadrightarrow G.</div>

#### II.1.5 引理：基的初等变换

若 <span class="kalax-inline-math">\{x_1,\dots,x_n\}</span> 是自由阿贝尔群 <span class="kalax-inline-math">F</span> 的基，且 <span class="kalax-inline-math">i\ne j</span>，则把 <span class="kalax-inline-math">x_j</span> 换成 <span class="kalax-inline-math">x_j+a x_i</span> 仍然得到一组基：

<div class="kalax-display-math">\{x_1,\dots,x_{j-1},x_j+a x_i,x_{j+1},\dots,x_n\}.</div>

#### II.1.6 定理：有限秩自由阿贝尔群的子群仍自由

若 <span class="kalax-inline-math">F</span> 是秩为 <span class="kalax-inline-math">n</span> 的自由阿贝尔群，<span class="kalax-inline-math">0\ne G\le F</span>，则 <span class="kalax-inline-math">G</span> 也是自由阿贝尔群，且

<div class="kalax-display-math">\operatorname{rank}G\le n.</div>

#### II.1.7 推论：有限生成阿贝尔群的子群仍有限生成

若阿贝尔群 <span class="kalax-inline-math">G</span> 由 <span class="kalax-inline-math">n</span> 个元素生成，则 <span class="kalax-inline-math">G</span> 的任意子群也可由不超过 <span class="kalax-inline-math">n</span> 个元素生成。

---

### II.2 有限生成阿贝尔群

#### II.2.1 定理：有限生成阿贝尔群可分解为循环群直和

每个有限生成阿贝尔群都是有限多个循环群的直和。

<div class="kalax-display-math">G\cong \mathbb Z^r\oplus \mathbb Z_{n_1}\oplus\cdots\oplus \mathbb Z_{n_t}.</div>

#### II.2.2 定理：不变因子分解

每个有限生成阿贝尔群都可唯一写成自由部分加有限循环部分，并且循环部分满足整除链：

<div class="kalax-display-math">G\cong \mathbb Z^r\oplus \mathbb Z_{m_1}\oplus\cdots\oplus \mathbb Z_{m_t},</div>

其中

<div class="kalax-display-math">1&lt;m_1\mid m_2\mid\cdots\mid m_t.</div>

这些 <span class="kalax-inline-math">m_i</span> 叫做不变因子。

#### II.2.3 引理：中国剩余分解的循环群版本

若

<div class="kalax-display-math">m=p_1^{a_1}\cdots p_t^{a_t}</div>

且这些素数幂两两互素，则

<div class="kalax-display-math">\mathbb Z_m\cong \mathbb Z_{p_1^{a_1}}\oplus\cdots\oplus \mathbb Z_{p_t^{a_t}}.</div>

#### II.2.4 推论：有限阿贝尔群有任意整除阶子群

若有限阿贝尔群 <span class="kalax-inline-math">G</span> 的阶为 <span class="kalax-inline-math">n</span>，且 <span class="kalax-inline-math">m\mid n</span>，则 <span class="kalax-inline-math">G</span> 有阶为 <span class="kalax-inline-math">m</span> 的子群。

#### II.2.5 引理：阿贝尔群中的若干标准子群

对阿贝尔群 <span class="kalax-inline-math">G</span>、整数 <span class="kalax-inline-math">m</span>、素数 <span class="kalax-inline-math">p</span>，下列集合都是子群：

<div class="kalax-display-math">mG=\{mu:u\in G\},</div>

<div class="kalax-display-math">G[m]=\{u\in G:mu=0\},</div>

<div class="kalax-display-math">G(p)=\{u\in G:|u|=p^n\text{ for some }n&gt;0\},</div>

<div class="kalax-display-math">G_t=\{u\in G:|u|&lt;\infty\}.</div>

其中 <span class="kalax-inline-math">G_t</span> 是挠子群；若 <span class="kalax-inline-math">G=G_t</span>，叫挠群；若 <span class="kalax-inline-math">G_t=0</span>，叫无挠群。

#### II.2.6 定理：有限生成阿贝尔群的完整分类

有限生成阿贝尔群既有不变因子分解，也有初等因子分解：

<div class="kalax-display-math">G\cong F\oplus \mathbb Z_{m_1}\oplus\cdots\oplus \mathbb Z_{m_t},\qquad m_1\mid\cdots\mid m_t,</div>

也可写成

<div class="kalax-display-math">G\cong F\oplus \mathbb Z_{p_1^{s_1}}\oplus\cdots\oplus \mathbb Z_{p_k^{s_k}}.</div>

自由部分秩、不变因子、初等因子都由 <span class="kalax-inline-math">G</span> 唯一决定。

#### II.2.7 推论：有限生成阿贝尔群同构判别

有限生成阿贝尔群 <span class="kalax-inline-math">G,H</span> 同构，当且仅当它们有相同的不变量：自由秩相同，并且初等因子相同。

---

### II.3 Krull-Schmidt 定理

#### II.3.1 定义：不可分解群

群 <span class="kalax-inline-math">G</span> 叫不可分解，如果 <span class="kalax-inline-math">G\ne (e)</span>，且不能写成两个非平凡正规子群的内直积。

<div class="kalax-display-math">G\not\cong H\times K\quad (H,K\ne (e)).</div>

#### II.3.2 定义：升链条件与降链条件

若任意正规子群升链最终稳定，则 <span class="kalax-inline-math">G</span> 满足 ACC；若任意正规子群降链最终稳定，则 <span class="kalax-inline-math">G</span> 满足 DCC。

<div class="kalax-display-math">N_1\le N_2\le\cdots \quad\Rightarrow\quad N_i=N_{i+1}=\cdots</div>

或

<div class="kalax-display-math">N_1\ge N_2\ge\cdots \quad\Rightarrow\quad N_i=N_{i+1}=\cdots.</div>

#### II.3.3 定理：链条件保证有限分解

若群 <span class="kalax-inline-math">G</span> 满足 ACC 或 DCC，则 <span class="kalax-inline-math">G</span> 可分解为有限多个不可分解正规子群的内直积。

#### II.3.4 引理：满足链条件时满射/单射自同态可逆

若 <span class="kalax-inline-math">G</span> 满足 ACC，则 <span class="kalax-inline-math">G</span> 的满自同态是自同构；若 <span class="kalax-inline-math">G</span> 满足 DCC，则 <span class="kalax-inline-math">G</span> 的单自同态是自同构。

#### II.3.5 引理：Fitting 引理

若 <span class="kalax-inline-math">G</span> 同时满足 ACC 与 DCC，且 <span class="kalax-inline-math">f</span> 是 <span class="kalax-inline-math">G</span> 的正规自同态，则对充分大的 <span class="kalax-inline-math">n</span>：

<div class="kalax-display-math">G=\ker f^n\times \operatorname{im} f^n.</div>

#### II.3.6 推论：不可分解时正规自同态二分

若 <span class="kalax-inline-math">G</span> 不可分解且满足 ACC、DCC，则每个正规自同态要么是自同构，要么是幂零的。

#### II.3.7 推论：不可分解群的正规自同态和

若 <span class="kalax-inline-math">G</span> 不可分解并满足 ACC、DCC，且正规自同态 <span class="kalax-inline-math">f_1+\cdots+f_n</span> 是自同构，则某个 <span class="kalax-inline-math">f_i</span> 本身是自同构。

#### II.3.8 定理：Krull-Schmidt 唯一分解

若 <span class="kalax-inline-math">G</span> 同时满足 ACC 与 DCC，并有两种不可分解直积分解：

<div class="kalax-display-math">G=G_1\times\cdots\times G_s=H_1\times\cdots\times H_t,</div>

则 <span class="kalax-inline-math">s=t</span>，并且重排后

<div class="kalax-display-math">G_i\cong H_i.</div>

---

### II.4 群作用

#### II.4.1 定义：群作用

群 <span class="kalax-inline-math">G</span> 在集合 <span class="kalax-inline-math">S</span> 上的作用，是映射 <span class="kalax-inline-math">G\times S\to S</span>，记作 <span class="kalax-inline-math">(g,x)\mapsto gx</span>，满足

<div class="kalax-display-math">ex=x,</div>

<div class="kalax-display-math">(g_1g_2)x=g_1(g_2x).</div>

#### II.4.2 定理：轨道和稳定子

若 <span class="kalax-inline-math">G</span> 作用在 <span class="kalax-inline-math">S</span> 上，则关系

<div class="kalax-display-math">x\sim x' \iff x'=gx\text{ for some }g\in G</div>

是等价关系。对 <span class="kalax-inline-math">x\in S</span>，稳定子

<div class="kalax-display-math">G_x=\{g\in G:gx=x\}</div>

是 <span class="kalax-inline-math">G</span> 的子群。

#### II.4.3 定理：轨道-稳定子公式

若 <span class="kalax-inline-math">G</span> 作用在 <span class="kalax-inline-math">S</span> 上，则 <span class="kalax-inline-math">x</span> 的轨道大小等于稳定子的指数：

<div class="kalax-display-math">|Gx|=[G:G_x].</div>

#### II.4.4 推论：共轭类与类方程

有限群 <span class="kalax-inline-math">G</span> 中，元素 <span class="kalax-inline-math">x</span> 的共轭类大小为

<div class="kalax-display-math">|\operatorname{Cl}(x)|=[G:C_G(x)].</div>

若 <span class="kalax-inline-math">x_1,\dots,x_n</span> 代表所有共轭类，则

<div class="kalax-display-math">|G|=\sum_{i=1}^n [G:C_G(x_i)].</div>

若 <span class="kalax-inline-math">K\le G</span>，与 <span class="kalax-inline-math">K</span> 共轭的子群个数是

<div class="kalax-display-math">[G:N_G(K)].</div>

#### II.4.5 定理：群作用给出置换表示

若 <span class="kalax-inline-math">G</span> 作用在 <span class="kalax-inline-math">S</span> 上，则每个 <span class="kalax-inline-math">g\in G</span> 给出一个 <span class="kalax-inline-math">S</span> 的置换，从而得到同态

<div class="kalax-display-math">G\to A(S).</div>

#### II.4.6 推论：Cayley 定理

每个群都同构于某个置换群的子群。特别地，有限群 <span class="kalax-inline-math">G</span> 可嵌入 <span class="kalax-inline-math">S_{|G|}</span>。

<div class="kalax-display-math">G\hookrightarrow A(G).</div>

#### II.4.7 推论：内自同构、中心

对每个 <span class="kalax-inline-math">g\in G</span>，共轭给出自同构

<div class="kalax-display-math">T_g(x)=gxg^{-1}.</div>

映射

<div class="kalax-display-math">G\to \operatorname{Aut}G,</div>

其核为中心

<div class="kalax-display-math">C(G)=\{g\in G:gx=xg\text{ for all }x\in G\}.</div>

#### II.4.8 命题/性质：左陪集作用的核

令 <span class="kalax-inline-math">G</span> 左平移作用在左陪集集合 <span class="kalax-inline-math">G/H</span> 上，则诱导同态

<div class="kalax-display-math">G\to A(G/H)</div>

的核包含在 <span class="kalax-inline-math">H</span> 中。

#### II.4.9 推论：无非平凡正规子群时嵌入对称群

若 <span class="kalax-inline-math">[G:H]=n</span>，且 <span class="kalax-inline-math">H</span> 中不含 <span class="kalax-inline-math">G</span> 的非平凡正规子群，则

<div class="kalax-display-math">G\hookrightarrow S_n.</div>

#### II.4.10 推论：最小素指数子群正规

若有限群 <span class="kalax-inline-math">G</span> 的子群 <span class="kalax-inline-math">H</span> 指数为 <span class="kalax-inline-math">p</span>，且 <span class="kalax-inline-math">p</span> 是整除 <span class="kalax-inline-math">|G|</span> 的最小素数，则

<div class="kalax-display-math">H\trianglelefteq G.</div>

---

### II.5 Sylow 定理

#### II.5.1 引理：<span class="kalax-inline-math">p</span>-群作用的计数同余

若 <span class="kalax-inline-math">|H|=p^n</span> 且 <span class="kalax-inline-math">H</span> 作用在有限集 <span class="kalax-inline-math">S</span> 上，设固定点集合

<div class="kalax-display-math">S_0=\{x\in S:hx=x\text{ for all }h\in H\},</div>

则

<div class="kalax-display-math">|S|\equiv |S_0|\pmod p.</div>

#### II.5.2 定理：Cauchy 定理

若有限群 <span class="kalax-inline-math">G</span> 的阶被素数 <span class="kalax-inline-math">p</span> 整除，则 <span class="kalax-inline-math">G</span> 有阶为 <span class="kalax-inline-math">p</span> 的元素。

#### II.5.3 推论：有限 <span class="kalax-inline-math">p</span>-群的判别

有限群 <span class="kalax-inline-math">G</span> 是 <span class="kalax-inline-math">p</span>-群，当且仅当

<div class="kalax-display-math">|G|=p^n.</div>

#### II.5.4 推论：有限 <span class="kalax-inline-math">p</span>-群中心非平凡

若 <span class="kalax-inline-math">G</span> 是非平凡有限 <span class="kalax-inline-math">p</span>-群，则

<div class="kalax-display-math">|C(G)|&gt;1.</div>

#### II.5.5 引理：正规化子的指数同余

若 <span class="kalax-inline-math">H</span> 是有限群 <span class="kalax-inline-math">G</span> 的 <span class="kalax-inline-math">p</span>-子群，则

<div class="kalax-display-math">[N_G(H):H]\equiv [G:H]\pmod p.</div>

#### II.5.6 推论：可扩大 <span class="kalax-inline-math">p</span>-子群

若 <span class="kalax-inline-math">H</span> 是 <span class="kalax-inline-math">G</span> 的 <span class="kalax-inline-math">p</span>-子群且 <span class="kalax-inline-math">p\mid [G:H]</span>，则

<div class="kalax-display-math">N_G(H)\ne H.</div>

#### II.5.7 定理：第一 Sylow 定理

若

<div class="kalax-display-math">|G|=p^n m,
\qquad (p,m)=1,</div>

则 <span class="kalax-inline-math">G</span> 有阶为 <span class="kalax-inline-math">p^i</span> 的子群，<span class="kalax-inline-math">1\le i\le n</span>。并且任意阶为 <span class="kalax-inline-math">p^i</span>、<span class="kalax-inline-math">i&lt;n</span> 的子群，都正规于某个阶为 <span class="kalax-inline-math">p^{i+1}</span> 的子群中。

#### II.5.8 推论：Sylow 子群的基本性质

若 <span class="kalax-inline-math">|G|=p^n m</span>，<span class="kalax-inline-math">(p,m)=1</span>，则 Sylow <span class="kalax-inline-math">p</span>-子群就是阶为 <span class="kalax-inline-math">p^n</span> 的 <span class="kalax-inline-math">p</span>-子群。Sylow 子群的共轭仍是 Sylow 子群；若 Sylow <span class="kalax-inline-math">p</span>-子群唯一，则它正规。

#### II.5.9 定理：第二 Sylow 定理

任意 <span class="kalax-inline-math">p</span>-子群 <span class="kalax-inline-math">H</span> 都包含在某个 Sylow <span class="kalax-inline-math">p</span>-子群的共轭中。特别地，任意两个 Sylow <span class="kalax-inline-math">p</span>-子群共轭。

<div class="kalax-display-math">H\le xPx^{-1}\quad\text{for some }x\in G.</div>

#### II.5.10 定理：第三 Sylow 定理

Sylow <span class="kalax-inline-math">p</span>-子群个数 <span class="kalax-inline-math">n_p</span> 满足

<div class="kalax-display-math">n_p\mid |G|,</div>

并且

<div class="kalax-display-math">n_p\equiv 1\pmod p.</div>

#### II.5.11 定理：Sylow 子群正规化子的自正规化

若 <span class="kalax-inline-math">P</span> 是有限群 <span class="kalax-inline-math">G</span> 的 Sylow <span class="kalax-inline-math">p</span>-子群，则

<div class="kalax-display-math">N_G(N_G(P))=N_G(P).</div>

---

### II.6 有限群分类的若干结论

#### II.6.1 命题/性质：阶为 <span class="kalax-inline-math">pq</span> 的群

设 <span class="kalax-inline-math">p&gt;q</span> 为素数。若 <span class="kalax-inline-math">q\nmid (p-1)</span>，则阶为 <span class="kalax-inline-math">pq</span> 的群必循环：

<div class="kalax-display-math">G\cong \mathbb Z_{pq}.</div>

若 <span class="kalax-inline-math">q\mid(p-1)</span>，则除了循环群外，还有一个非阿贝尔群，由生成元 <span class="kalax-inline-math">c,d</span> 满足

<div class="kalax-display-math">|c|=p,
\qquad |d|=q,
\qquad dcd^{-1}=c^s,</div>

其中 <span class="kalax-inline-math">s^q\equiv 1\pmod p</span> 且 <span class="kalax-inline-math">s\not\equiv1\pmod p</span>。

#### II.6.2 推论：阶为 <span class="kalax-inline-math">2p</span> 的群

若 <span class="kalax-inline-math">p</span> 是奇素数，则阶为 <span class="kalax-inline-math">2p</span> 的群只有两类：

<div class="kalax-display-math">\mathbb Z_{2p}\quad\text{或}\quad D_p.</div>

#### II.6.3 命题/性质：阶为 8 的非阿贝尔群

阶为 <span class="kalax-inline-math">8</span> 的非阿贝尔群只有两类：四元数群和二面体群。

<div class="kalax-display-math">Q_8,\qquad D_4.</div>

#### II.6.4 命题/性质：阶为 12 的非阿贝尔群

阶为 <span class="kalax-inline-math">12</span> 的非阿贝尔群只有三类：

<div class="kalax-display-math">D_6,
\qquad A_4,
\qquad T=\langle a,b:|a|=6,\ b^2=a^3,\ ba=a^{-1}b\rangle.</div>

---

### II.7 幂零群与可解群

#### II.7.1 定义：幂零群

令 <span class="kalax-inline-math">C_1(G)=C(G)</span>，并递归定义上中心列。若某个 <span class="kalax-inline-math">n</span> 使得

<div class="kalax-display-math">C_n(G)=G,</div>

则 <span class="kalax-inline-math">G</span> 叫幂零群。

#### II.7.2 定理：有限 <span class="kalax-inline-math">p</span>-群幂零

每个有限 <span class="kalax-inline-math">p</span>-群都是幂零群。

#### II.7.3 定理：有限直积保持幂零

有限多个幂零群的直积仍然是幂零群。

#### II.7.4 引理：幂零群中真子群真包含于正规化子

若 <span class="kalax-inline-math">H&lt;G</span> 且 <span class="kalax-inline-math">G</span> 幂零，则

<div class="kalax-display-math">H&lt;N_G(H).</div>

#### II.7.5 命题/性质：有限幂零群的 Sylow 分解

有限群 <span class="kalax-inline-math">G</span> 幂零，当且仅当它是全部 Sylow 子群的直积。

<div class="kalax-display-math">G\cong \prod_p P_p.</div>

#### II.7.6 推论：有限幂零群有任意整除阶子群

若 <span class="kalax-inline-math">G</span> 是有限幂零群，且 <span class="kalax-inline-math">m\mid |G|</span>，则 <span class="kalax-inline-math">G</span> 有阶为 <span class="kalax-inline-math">m</span> 的子群。

#### II.7.7 定义：换位子群

群 <span class="kalax-inline-math">G</span> 的换位子群由所有换位子生成：

<div class="kalax-display-math">G'=\langle aba^{-1}b^{-1}:a,b\in G\rangle.</div>

<span class="kalax-inline-math">G</span> 阿贝尔当且仅当 <span class="kalax-inline-math">G'=(e)</span>。

#### II.7.8 定理：换位子群刻画阿贝尔化

<span class="kalax-inline-math">G'</span> 是 <span class="kalax-inline-math">G</span> 的正规子群，且

<div class="kalax-display-math">G/G'\quad\text{是阿贝尔群}.</div>

若 <span class="kalax-inline-math">N\trianglelefteq G</span>，则

<div class="kalax-display-math">G/N\text{ 阿贝尔}\iff G'\le N.</div>

#### II.7.9 定义：可解群

定义导出列

<div class="kalax-display-math">G^{(0)}=G,
\qquad G^{(n+1)}=(G^{(n)})'.</div>

若某个 <span class="kalax-inline-math">n</span> 使

<div class="kalax-display-math">G^{(n)}=(e),</div>

则 <span class="kalax-inline-math">G</span> 叫可解群。

#### II.7.10 命题/性质：幂零推出可解

每个幂零群都是可解群。

#### II.7.11 定理：可解群的封闭性

可解群的子群和同态像仍可解。若

<div class="kalax-display-math">N\trianglelefteq G,</div>

且 <span class="kalax-inline-math">N</span> 与 <span class="kalax-inline-math">G/N</span> 都可解，则 <span class="kalax-inline-math">G</span> 可解。

#### II.7.12 推论：大对称群不可解

当 <span class="kalax-inline-math">n\ge 5</span> 时，

<div class="kalax-display-math">S_n\quad\text{不可解}.</div>

#### II.7.13 引理：特征子群、完全不变子群和极小正规子群

若 <span class="kalax-inline-math">H</span> 是 <span class="kalax-inline-math">N</span> 的特征子群且 <span class="kalax-inline-math">N\trianglelefteq G</span>，则 <span class="kalax-inline-math">H\trianglelefteq G</span>。正规 Sylow 子群是完全不变的。有限可解群的极小正规子群是某个素数 <span class="kalax-inline-math">p</span> 的阿贝尔 <span class="kalax-inline-math">p</span>-群。

#### II.7.14 命题/性质：P. Hall 定理

若 <span class="kalax-inline-math">G</span> 是有限可解群，且

<div class="kalax-display-math">|G|=mn,
\qquad (m,n)=1,</div>

则 <span class="kalax-inline-math">G</span> 有阶为 <span class="kalax-inline-math">m</span> 的子群；任意两个阶为 <span class="kalax-inline-math">m</span> 的子群共轭；阶整除 <span class="kalax-inline-math">m</span> 的子群包含在某个阶为 <span class="kalax-inline-math">m</span> 的子群中。

---

### II.8 正规列与次正规列

#### II.8.1 定义：次正规列与正规列

群 <span class="kalax-inline-math">G</span> 的次正规列是链

<div class="kalax-display-math">G=G_0&gt;G_1&gt;\cdots&gt;G_n,</div>

满足

<div class="kalax-display-math">G_{i+1}\trianglelefteq G_i.</div>

因子为 <span class="kalax-inline-math">G_i/G_{i+1}</span>。若每个 <span class="kalax-inline-math">G_i\trianglelefteq G</span>，则称为正规列。

#### II.8.2 定义：加细

在次正规列中插入额外子群得到新的次正规列，称为加细。若长度严格增加，则称为真加细。

#### II.8.3 定义：组成列与可解列

若次正规列

<div class="kalax-display-math">G=G_0&gt;G_1&gt;\cdots&gt;G_n=(e)</div>

每个因子 <span class="kalax-inline-math">G_i/G_{i+1}</span> 都是单群，则叫组成列；若每个因子都是阿贝尔群，则叫可解列。

#### II.8.4 定理：组成列与可解列的基本性质

每个有限群都有组成列；可解列的任意加细仍是可解列；次正规列是组成列，当且仅当它没有真加细。

#### II.8.5 定理：可解群等价于有可解列

群 <span class="kalax-inline-math">G</span> 可解，当且仅当 <span class="kalax-inline-math">G</span> 有可解列。

#### II.8.6 命题/性质：有限可解群的组成因子

有限群 <span class="kalax-inline-math">G</span> 可解，当且仅当它有组成列，并且所有组成因子都是素数阶循环群。

<div class="kalax-display-math">G_i/G_{i+1}\cong \mathbb Z_p.</div>

#### II.8.7 定义：次正规列的等价

两个次正规列等价，指它们的非平凡因子可以一一对应，且对应因子同构。

#### II.8.8 引理：组成列的加细不改变因子

组成列的任意加细都与原组成列等价。

#### II.8.9 引理：Zassenhaus 引理

若

<div class="kalax-display-math">A^*\trianglelefteq A,
\qquad B^*\trianglelefteq B,</div>

则

<div class="kalax-display-math">A^*(A\cap B^*)\trianglelefteq A^*(A\cap B),</div>

<div class="kalax-display-math">B^*(A^*\cap B)\trianglelefteq B^*(A\cap B),</div>

且有同构

<div class="kalax-display-math">\frac{A^*(A\cap B)}{A^*(A\cap B^*)}
\cong
\frac{B^*(A\cap B)}{B^*(A^*\cap B)}.</div>

#### II.8.10 定理：Schreier 加细定理

任意两个次正规列都有等价的次正规加细。若原来是正规列，则可取正规加细。

#### II.8.11 定理：Jordan-Hölder 定理

若群 <span class="kalax-inline-math">G</span> 有组成列，则任意两条组成列等价。因此组成因子作为同构类列表是唯一的。

---

## Chapter III Rings

### III.1 环与同态

#### III.1.1 定义：环、交换环、含幺环

环是带有加法和乘法的非空集合 <span class="kalax-inline-math">R</span>，满足加法成阿贝尔群，乘法结合，并满足左右分配律。

<div class="kalax-display-math">a(b+c)=ab+ac,
\qquad (a+b)c=ac+bc.</div>

若 <span class="kalax-inline-math">ab=ba</span>，称为交换环；若存在 <span class="kalax-inline-math">1_R</span> 使 <span class="kalax-inline-math">1_Ra=a1_R=a</span>，称为含幺环。

#### III.1.2 定理：环中的基本运算律

对环 <span class="kalax-inline-math">R</span> 中元素有：

<div class="kalax-display-math">0a=a0=0,</div>

<div class="kalax-display-math">(-a)b=a(-b)=-(ab),</div>

<div class="kalax-display-math">(-a)(-b)=ab,</div>

并且有限和与乘法满足分配展开。

#### III.1.3 定义：零因子

非零元素 <span class="kalax-inline-math">a\in R</span> 若存在非零 <span class="kalax-inline-math">b</span> 使 <span class="kalax-inline-math">ab=0</span>，则 <span class="kalax-inline-math">a</span> 是左零因子；若存在非零 <span class="kalax-inline-math">c</span> 使 <span class="kalax-inline-math">ca=0</span>，则 <span class="kalax-inline-math">a</span> 是右零因子。两者都是时称为零因子。

#### III.1.4 定义：可逆元与单位

含幺环中，<span class="kalax-inline-math">a</span> 若有左逆或右逆，则称左可逆或右可逆。若存在 <span class="kalax-inline-math">b</span> 使

<div class="kalax-display-math">ab=ba=1_R,</div>

则 <span class="kalax-inline-math">a</span> 是单位。

#### III.1.5 定义：整环、除环、域

交换含幺环 <span class="kalax-inline-math">R</span> 若 <span class="kalax-inline-math">1_R\ne0</span> 且无零因子，称为整环。含幺环 <span class="kalax-inline-math">D</span> 若 <span class="kalax-inline-math">1_D\ne0</span> 且每个非零元都是单位，称为除环。交换除环就是域。

#### III.1.6 定理：二项式定理

若 <span class="kalax-inline-math">a,b</span> 在含幺环中可交换，则

<div class="kalax-display-math">(a+b)^n=\sum_{k=0}^n {n\choose k}a^k b^{n-k}.</div>

#### III.1.7 定义：环同态

环同态 <span class="kalax-inline-math">f:R\to S</span> 满足

<div class="kalax-display-math">f(a+b)=f(a)+f(b),
\qquad f(ab)=f(a)f(b).</div>

单、满、同构按底层映射是否单、满、双射定义。自同构是 <span class="kalax-inline-math">R\to R</span> 的同构。

#### III.1.8 定义：环的特征

若存在最小正整数 <span class="kalax-inline-math">n</span>，使得对所有 <span class="kalax-inline-math">a\in R</span>：

<div class="kalax-display-math">na=0,</div>

则称 <span class="kalax-inline-math">\operatorname{char}R=n</span>。若不存在这样的正整数，则 <span class="kalax-inline-math">\operatorname{char}R=0</span>。

#### III.1.9 定理：含幺环特征的判别

若 <span class="kalax-inline-math">R</span> 含幺且 <span class="kalax-inline-math">\operatorname{char}R=n&gt;0</span>，则映射

<div class="kalax-display-math">\mathbb Z\to R,
\qquad m\mapsto m1_R</div>

是环同态，核为 <span class="kalax-inline-math">(n)</span>。并且 <span class="kalax-inline-math">n</span> 是使 <span class="kalax-inline-math">n1_R=0</span> 的最小正整数。若 <span class="kalax-inline-math">R</span> 无零因子，则 <span class="kalax-inline-math">n</span> 必为素数。

#### III.1.10 定理：任意环可嵌入含幺环

每个环 <span class="kalax-inline-math">R</span> 都可嵌入某个含幺环 <span class="kalax-inline-math">S</span>。可选 <span class="kalax-inline-math">S</span> 使其特征为 <span class="kalax-inline-math">0</span>，或与 <span class="kalax-inline-math">R</span> 特征相同。

---

### III.2 理想

#### III.2.1 定义：子环、左理想、右理想、理想

子环 <span class="kalax-inline-math">S\subseteq R</span> 若对加法和乘法仍成环，称为子环。子环 <span class="kalax-inline-math">I</span> 若满足

<div class="kalax-display-math">rI\subseteq I</div>

则为左理想；若 <span class="kalax-inline-math">Ir\subseteq I</span>，则为右理想；两者都是时称为双边理想，简称理想。

#### III.2.2 定理：理想判别法

非空子集 <span class="kalax-inline-math">I\subseteq R</span> 是左理想，当且仅当

<div class="kalax-display-math">a,b\in I\Rightarrow a-b\in I,</div>

且

<div class="kalax-display-math">r\in R,
\ a\in I\Rightarrow ra\in I.</div>

右理想类似；理想要求左右都满足。

#### III.2.3 推论：理想交仍是理想

任意族左理想、右理想或双边理想的交仍分别是左理想、右理想或双边理想。

#### III.2.4 定义：由集合生成的理想

包含 <span class="kalax-inline-math">X\subseteq R</span> 的所有左理想之交，叫做由 <span class="kalax-inline-math">X</span> 生成的左理想。若 <span class="kalax-inline-math">X=\{a\}</span>，写作 <span class="kalax-inline-math">(a)</span>，叫主理想。

#### III.2.5 定理：主理想的元素形式

由 <span class="kalax-inline-math">a</span> 生成的双边主理想由有限和组成。一般形如

<div class="kalax-display-math">ra+as+na+\sum_i r_i a s_i.</div>

若 <span class="kalax-inline-math">R</span> 含幺，则

<div class="kalax-display-math">(a)=\left\{\sum_i r_i a s_i:r_i,s_i\in R\right\}.</div>

若 <span class="kalax-inline-math">a</span> 在中心中，则

<div class="kalax-display-math">(a)=\{ra+na:r\in R,
\ n\in\mathbb Z\}.</div>

#### III.2.6 定理：理想的和、积及分配律

若 <span class="kalax-inline-math">A_i,B,C</span> 是理想，则

<div class="kalax-display-math">A_1+\cdots+A_n,
\qquad A_1A_2\cdots A_n</div>

仍是理想，并且满足结合律和分配律：

<div class="kalax-display-math">B(A_1+\cdots+A_n)=BA_1+
\cdots+BA_n.</div>

#### III.2.7 定理：商环

若 <span class="kalax-inline-math">I\trianglelefteq R</span> 是理想，则加法商群 <span class="kalax-inline-math">R/I</span> 可定义乘法

<div class="kalax-display-math">(a+I)(b+I)=ab+I,</div>

从而成为环。

#### III.2.8 定理：环同态的核与像

若 <span class="kalax-inline-math">f:R\to S</span> 是环同态，则

<div class="kalax-display-math">\ker f\trianglelefteq R,</div>

且

<div class="kalax-display-math">\operatorname{im}f\le S</div>

是子环。

#### III.2.9 定理：商环的泛性质

若 <span class="kalax-inline-math">I\subseteq \ker f</span>，则 <span class="kalax-inline-math">f:R\to S</span> 唯一诱导同态

<div class="kalax-display-math">\bar f:R/I\to S,
\qquad \bar f(a+I)=f(a).</div>

并且

<div class="kalax-display-math">\ker \bar f=(\ker f)/I.</div>

#### III.2.10 推论：第一同构定理

环同态 <span class="kalax-inline-math">f:R\to S</span> 诱导同构

<div class="kalax-display-math">R/\ker f\cong \operatorname{im}f.</div>

#### III.2.11 推论：同态诱导商同态

若 <span class="kalax-inline-math">f:R\to S</span>，<span class="kalax-inline-math">I\trianglelefteq R</span>，<span class="kalax-inline-math">J\trianglelefteq S</span>，且 <span class="kalax-inline-math">f(I)\subseteq J</span>，则诱导

<div class="kalax-display-math">\bar f:R/I\to S/J,
\qquad a+I\mapsto f(a)+J.</div>

在适当的满性和核条件下，<span class="kalax-inline-math">\bar f</span> 是同构。

#### III.2.12 定理：第二、第三同构定理

若 <span class="kalax-inline-math">I,J</span> 是 <span class="kalax-inline-math">R</span> 的理想，则

<div class="kalax-display-math">I/(I\cap J)\cong (I+J)/J.</div>

若 <span class="kalax-inline-math">I\subseteq J</span>，则

<div class="kalax-display-math">(R/I)/(J/I)\cong R/J.</div>

#### III.2.13 定理：商环理想对应定理

含 <span class="kalax-inline-math">I</span> 的 <span class="kalax-inline-math">R</span> 的理想，与 <span class="kalax-inline-math">R/I</span> 的理想一一对应：

<div class="kalax-display-math">J\longleftrightarrow J/I.</div>

#### III.2.14 定义：素理想

理想 <span class="kalax-inline-math">P\ne R</span> 称为素理想，如果对任意理想 <span class="kalax-inline-math">A,B</span>：

<div class="kalax-display-math">AB\subseteq P\Rightarrow A\subseteq P\text{ or }B\subseteq P.</div>

#### III.2.15 定理：交换情形素理想判别

若 <span class="kalax-inline-math">P\ne R</span>，且对任意 <span class="kalax-inline-math">a,b\in R</span>：

<div class="kalax-display-math">ab\in P\Rightarrow a\in P\text{ or }b\in P,</div>

则 <span class="kalax-inline-math">P</span> 是素理想；交换环中这也是素理想的等价刻画。

#### III.2.16 定理：素理想与整环商

在交换含幺环 <span class="kalax-inline-math">R</span> 中，理想 <span class="kalax-inline-math">P</span> 是素理想，当且仅当

<div class="kalax-display-math">R/P</div>

是整环。

#### III.2.17 定义：极大理想

理想 <span class="kalax-inline-math">M\ne R</span> 称为极大理想，如果不存在理想 <span class="kalax-inline-math">N</span> 满足

<div class="kalax-display-math">M&lt;N&lt;R.</div>

左理想的极大性类似定义。

#### III.2.18 定理：极大理想存在

非零含幺环中，极大左理想存在；交换含幺环中，极大理想存在。

#### III.2.19 定理：极大理想推出素理想

若 <span class="kalax-inline-math">R</span> 是交换环且 <span class="kalax-inline-math">R^2=R</span>，则每个极大理想都是素理想。特别地，交换含幺环中的极大理想都是素理想。

#### III.2.20 定理：极大理想与商除环/域

若 <span class="kalax-inline-math">M</span> 是含幺环 <span class="kalax-inline-math">R</span> 的理想，则 <span class="kalax-inline-math">M</span> 是极大左理想，当且仅当 <span class="kalax-inline-math">R/M</span> 是单左 <span class="kalax-inline-math">R</span>-模。交换含幺环中，<span class="kalax-inline-math">M</span> 极大当且仅当

<div class="kalax-display-math">R/M</div>

是域。

#### III.2.21 推论：域的理想判别

交换含幺环 <span class="kalax-inline-math">R</span> 是域，当且仅当 <span class="kalax-inline-math">R</span> 只有两个理想：

<div class="kalax-display-math">(0),\quad R.</div>

等价地，<span class="kalax-inline-math">(0)</span> 是极大理想。

#### III.2.22 定理：环的直积

一族环的直积

<div class="kalax-display-math">\prod_{i\in I}R_i</div>

按分量加法和乘法构成环。若每个 <span class="kalax-inline-math">R_i</span> 交换、含幺、无零因子等，相应性质按条件保留。

#### III.2.23 定理：直积的泛性质

给定同态族

<div class="kalax-display-math">f_i:S\to R_i,</div>

存在唯一同态

<div class="kalax-display-math">f:S\to \prod_i R_i</div>

使每个投影复合为 <span class="kalax-inline-math">f_i</span>。

#### III.2.24 定理：内直积分解

若理想 <span class="kalax-inline-math">A_1,\dots,A_n</span> 满足

<div class="kalax-display-math">A_1+
\cdots+A_n=R</div>

且每个 <span class="kalax-inline-math">A_k</span> 与其余理想之和交为 <span class="kalax-inline-math">0</span>，则

<div class="kalax-display-math">R\cong A_1\times\cdots\times A_n.</div>

#### III.2.25 定理：中国剩余定理

若理想 <span class="kalax-inline-math">A_1,\dots,A_n</span> 两两互素：

<div class="kalax-display-math">A_i+A_j=R\quad(i\ne j),</div>

则

<div class="kalax-display-math">R/(A_1\cap\cdots\cap A_n)
\cong
R/A_1\times\cdots\times R/A_n.</div>

#### III.2.26 推论：整数的中国剩余定理

若正整数 <span class="kalax-inline-math">m_1,\dots,m_n</span> 两两互素，则

<div class="kalax-display-math">\mathbb Z/(m_1\cdots m_n)\cong \mathbb Z/(m_1)\times\cdots\times\mathbb Z/(m_n).</div>

#### III.2.27 推论：一般理想到直积商的单射

对任意理想 <span class="kalax-inline-math">A_1,\dots,A_n</span>，自然映射

<div class="kalax-display-math">R/(A_1\cap\cdots\cap A_n)	o R/A_1\times\cdots\times R/A_n</div>

总是单射；若这些理想两两互素，则为同构。

---

### III.3 交换环中的因式分解

#### III.3.1 定义：整除与相伴

在交换环 <span class="kalax-inline-math">R</span> 中，非零元 <span class="kalax-inline-math">a</span> 整除 <span class="kalax-inline-math">b</span>，记作 <span class="kalax-inline-math">a\mid b</span>，如果存在 <span class="kalax-inline-math">c\in R</span> 使

<div class="kalax-display-math">b=ac.</div>

若 <span class="kalax-inline-math">a\mid b</span> 且 <span class="kalax-inline-math">b\mid a</span>，则 <span class="kalax-inline-math">a,b</span> 相伴。

#### III.3.2 定理：相伴、单位、主理想的基本性质

在含幺交换环中，相伴与主理想相等密切相关；在整环中，<span class="kalax-inline-math">a,b</span> 相伴当且仅当

<div class="kalax-display-math">a=bu</div>

其中 <span class="kalax-inline-math">u</span> 是单位。

#### III.3.3 定义：不可约元与素元

在交换含幺环中，非零非单位 <span class="kalax-inline-math">c</span> 若每次分解 <span class="kalax-inline-math">c=ab</span> 都迫使 <span class="kalax-inline-math">a</span> 或 <span class="kalax-inline-math">b</span> 是单位，则 <span class="kalax-inline-math">c</span> 不可约。若

<div class="kalax-display-math">p\mid ab\Rightarrow p\mid a\text{ or }p\mid b,</div>

则 <span class="kalax-inline-math">p</span> 是素元。

#### III.3.4 定理：素元不可约；PID 中不可约即素

在整环中，素元一定不可约。若 <span class="kalax-inline-math">R</span> 是主理想整环，则不可约元也是素元。

#### III.3.5 定义：唯一分解整环 UFD

整环 <span class="kalax-inline-math">R</span> 是 UFD，如果每个非零非单位都可写成不可约元乘积，并且这种分解在重排和相伴意义下唯一。

#### III.3.6 引理：主理想环中的升链稳定

若 <span class="kalax-inline-math">R</span> 是主理想环，则任意主理想升链最终稳定：

<div class="kalax-display-math">(a_1)\subseteq(a_2)\subseteq\cdots
\quad\Rightarrow\quad
(a_n)=(a_{n+1})=\cdots.</div>

#### III.3.7 定理：PID 是 UFD

每个主理想整环都是唯一分解整环。

<div class="kalax-display-math">\text{PID}\Rightarrow\text{UFD}.</div>

#### III.3.8 定义：欧几里得环

带有函数

<div class="kalax-display-math">\varphi:R\setminus\{0\}\to \mathbb N</div>

并满足可带余除法条件的交换环称为欧几里得环。若同时是整环，则称为欧几里得整环。

#### III.3.9 定理：欧几里得环是主理想环

每个欧几里得环都是含幺主理想环。特别地，欧几里得整环是 PID，因此是 UFD。

#### III.3.10 定义：最大公因子

若 <span class="kalax-inline-math">d</span> 是 <span class="kalax-inline-math">a_1,\dots,a_n</span> 的公因子，且任意公因子都整除 <span class="kalax-inline-math">d</span>，则 <span class="kalax-inline-math">d</span> 是最大公因子。最大公因子只在相伴意义下唯一。

#### III.3.11 定理：主理想生成最大公因子

在交换含幺环中，若

<div class="kalax-display-math">(a_1,
\dots,a_n)=(d),</div>

则 <span class="kalax-inline-math">d</span> 是 <span class="kalax-inline-math">a_1,\dots,a_n</span> 的最大公因子。若该理想为整个环，则这些元素互素。

---

### III.4 分式环与局部化

#### III.4.1 定义：乘法闭集

环 <span class="kalax-inline-math">R</span> 的非空子集 <span class="kalax-inline-math">S</span> 称为乘法闭集，如果

<div class="kalax-display-math">a,b\in S\Rightarrow ab\in S.</div>

#### III.4.2 定理：构造分式环的等价关系

在 <span class="kalax-inline-math">R\times S</span> 上定义

<div class="kalax-display-math">(r,s)\sim(r',s')\iff \exists t\in S,
\quad t(rs'-r's)=0.</div>

这是等价关系。若 <span class="kalax-inline-math">R</span> 无零因子且 <span class="kalax-inline-math">0\notin S</span>，可简化为

<div class="kalax-display-math">rs'=r's.</div>

#### III.4.3 定理：分式环 <span class="kalax-inline-math">S^{-1}R</span>

等价类记为 <span class="kalax-inline-math">r/s</span>，并定义

<div class="kalax-display-math">\frac r s+\frac{r'}{s'}=\frac{rs'+r's}{ss'},</div>

<div class="kalax-display-math">\frac r s\cdot\frac{r'}{s'}=\frac{rr'}{ss'}.</div>

于是 <span class="kalax-inline-math">S^{-1}R</span> 是交换含幺环；若 <span class="kalax-inline-math">R</span> 是整环且 <span class="kalax-inline-math">0\notin S</span>，则 <span class="kalax-inline-math">S^{-1}R</span> 是整环；若 <span class="kalax-inline-math">S=R\setminus\{0\}</span>，则得到商域。

#### III.4.4 定理：自然映射到分式环

自然映射

<div class="kalax-display-math">\varphi_S:R\to S^{-1}R,
\qquad r\mapsto \frac{rs}{s}</div>

是环同态，且每个 <span class="kalax-inline-math">s\in S</span> 的像是单位。若 <span class="kalax-inline-math">S</span> 不含零因子，则 <span class="kalax-inline-math">\varphi_S</span> 单射。

#### III.4.5 定理：分式环的泛性质

若 <span class="kalax-inline-math">f:R\to T</span> 把 <span class="kalax-inline-math">S</span> 中每个元素送到 <span class="kalax-inline-math">T</span> 的单位，则唯一存在

<div class="kalax-display-math">\bar f:S^{-1}R\to T</div>

使

<div class="kalax-display-math">\bar f\circ\varphi_S=f.</div>

具体为

<div class="kalax-display-math">\bar f(r/s)=f(r)f(s)^{-1}.</div>

#### III.4.6 推论：整环的商域泛性质

若 <span class="kalax-inline-math">R</span> 是整环，<span class="kalax-inline-math">F</span> 是其商域，且同态 <span class="kalax-inline-math">f:R\to T</span> 将 <span class="kalax-inline-math">R\setminus\{0\}</span> 送到单位，则 <span class="kalax-inline-math">f</span> 唯一延拓为

<div class="kalax-display-math">F\to T.</div>

#### III.4.7 定理：理想在局部化下的扩张

若 <span class="kalax-inline-math">I,J</span> 是 <span class="kalax-inline-math">R</span> 的理想，则 <span class="kalax-inline-math">S^{-1}I</span> 是 <span class="kalax-inline-math">S^{-1}R</span> 的理想，并且

<div class="kalax-display-math">S^{-1}(I+J)=S^{-1}I+S^{-1}J,</div>

<div class="kalax-display-math">S^{-1}(IJ)=(S^{-1}I)(S^{-1}J),</div>

<div class="kalax-display-math">S^{-1}(I\cap J)=S^{-1}I\cap S^{-1}J.</div>

#### III.4.8 定理：局部化后理想变成全环的条件

若 <span class="kalax-inline-math">R</span> 含幺，则

<div class="kalax-display-math">S^{-1}I=S^{-1}R
\iff
S\cap I\ne\varnothing.</div>

#### III.4.9 引理：局部化中理想与素理想的收缩扩张

任意局部化后的理想都形如 <span class="kalax-inline-math">S^{-1}I</span>。若 <span class="kalax-inline-math">P</span> 是与 <span class="kalax-inline-math">S</span> 不交的素理想，则

<div class="kalax-display-math">S^{-1}P</div>

是 <span class="kalax-inline-math">S^{-1}R</span> 的素理想，并且收缩回 <span class="kalax-inline-math">R</span> 得到 <span class="kalax-inline-math">P</span>。

#### III.4.10 定理：局部化素理想对应

<span class="kalax-inline-math">S^{-1}R</span> 的素理想与 <span class="kalax-inline-math">R</span> 中不交于 <span class="kalax-inline-math">S</span> 的素理想一一对应：

<div class="kalax-display-math">P\longleftrightarrow S^{-1}P.</div>

#### III.4.11 定理：在素理想处局部化

设 <span class="kalax-inline-math">P</span> 是 <span class="kalax-inline-math">R</span> 的素理想，令

<div class="kalax-display-math">R_P=S^{-1}R,
\qquad S=R\setminus P.</div>

则 <span class="kalax-inline-math">R_P</span> 的素理想与 <span class="kalax-inline-math">R</span> 中包含在 <span class="kalax-inline-math">P</span> 内的素理想对应；并且 <span class="kalax-inline-math">R_P</span> 是局部环，其唯一极大理想为

<div class="kalax-display-math">P_P=S^{-1}P.</div>

#### III.4.12 定义：局部环

交换含幺环若只有一个极大理想，则称为局部环。

#### III.4.13 定理：局部环的等价刻画

交换含幺环 <span class="kalax-inline-math">R</span> 是局部环，当且仅当非单位元全都落在某个真理想中；等价地，所有非单位元组成一个理想。

---

### III.5 多项式环与形式幂级数

#### III.5.1 定理：一元多项式环

由有限支撑序列组成的集合 <span class="kalax-inline-math">R[x]</span>，按卷积乘法构成环。若 <span class="kalax-inline-math">R</span> 交换、含幺、无零因子等，<span class="kalax-inline-math">R[x]</span> 继承相应性质。

#### III.5.2 定理：多项式的通常写法

若 <span class="kalax-inline-math">R</span> 含幺，令

<div class="kalax-display-math">x=(0,1_R,0,
\dots).</div>

则 <span class="kalax-inline-math">R[x]</span> 中元素可唯一写成

<div class="kalax-display-math">a_0+a_1x+
\cdots+a_nx^n.</div>

#### III.5.3 定理：多元多项式环

<span class="kalax-inline-math">R[x_1,\dots,x_n]</span> 可定义为有限支撑的多指标函数集合，并构成环；性质类似一元情形。

#### III.5.4 定理：多元多项式的展开

若 <span class="kalax-inline-math">R</span> 含幺，每个多项式可唯一写成有限和

<div class="kalax-display-math">\sum a_{i_1,
\dots,i_n}x_1^{i_1}\cdots x_n^{i_n}.</div>

#### III.5.5 定理：多项式环的泛性质

若 <span class="kalax-inline-math">R,S</span> 是交换含幺环，<span class="kalax-inline-math">\varphi:R\to S</span> 是保幺同态，且 <span class="kalax-inline-math">s_1,\dots,s_n\in S</span>，则唯一存在同态

<div class="kalax-display-math">\Phi:R[x_1,
\dots,x_n]\to S</div>

满足

<div class="kalax-display-math">\Phi|_R=\varphi,
\qquad \Phi(x_i)=s_i.</div>

#### III.5.6 推论：代入同态

对交换环同态 <span class="kalax-inline-math">\varphi:R\to S</span> 和元素 <span class="kalax-inline-math">s_i\in S</span>，代入

<div class="kalax-display-math">f\mapsto \varphi f(s_1,
\dots,s_n)</div>

给出环同态。

#### III.5.7 推论：逐次添加变量不改变多项式环

对 <span class="kalax-inline-math">1\le k&lt;n</span>，有自然同构

<div class="kalax-display-math">R[x_1,
\dots,x_k][x_{k+1},
\dots,x_n]
\cong
R[x_1,
\dots,x_n].</div>

#### III.5.8 命题/性质：形式幂级数环

所有序列 <span class="kalax-inline-math">(a_0,a_1,\dots)</span> 构成形式幂级数环 <span class="kalax-inline-math">Rx</span>，乘法由卷积定义：

<div class="kalax-display-math">c_n=\sum_{i=0}^n a_i b_{n-i}.</div>

<span class="kalax-inline-math">R[x]</span> 是 <span class="kalax-inline-math">Rx</span> 的子环。

#### III.5.9 命题/性质：形式幂级数中的单位

若 <span class="kalax-inline-math">R</span> 含幺，幂级数

<div class="kalax-display-math">f=a_0+a_1x+a_2x^2+
\cdots</div>

在 <span class="kalax-inline-math">Rx</span> 中为单位，当且仅当常数项 <span class="kalax-inline-math">a_0</span> 在 <span class="kalax-inline-math">R</span> 中为单位。

#### III.5.10 推论：除环上的形式幂级数环是局部环

若 <span class="kalax-inline-math">R</span> 是除环，则 <span class="kalax-inline-math">Rx</span> 的单位正是常数项非零的幂级数；非单位组成唯一极大理想

<div class="kalax-display-math">(x).</div>

若 <span class="kalax-inline-math">R</span> 是域，则 <span class="kalax-inline-math">Rx</span> 是局部环。

---

### III.6 多项式环中的因式分解

#### III.6.1 定理：多项式次数的基本性质

对 <span class="kalax-inline-math">f,g\in R[x_1,\dots,x_n]</span>：

<div class="kalax-display-math">\deg(f+g)\le \max(\deg f,
\deg g),</div>

<div class="kalax-display-math">\deg(fg)\le \deg f+
\deg g.</div>

若 <span class="kalax-inline-math">R</span> 无零因子，则第二个等号成立。

#### III.6.2 定理：一元多项式除法算法

若 <span class="kalax-inline-math">R</span> 含幺，<span class="kalax-inline-math">f,g\in R[x]</span>，且 <span class="kalax-inline-math">g</span> 的首项系数是单位，则存在唯一 <span class="kalax-inline-math">q,r\in R[x]</span> 使

<div class="kalax-display-math">f=qg+r,
\qquad \deg r&lt;\deg g.</div>

#### III.6.3 推论：余数定理

对任意 <span class="kalax-inline-math">c\in R</span>，存在唯一 <span class="kalax-inline-math">q(x)</span> 使

<div class="kalax-display-math">f(x)=q(x)(x-c)+f(c).</div>

#### III.6.4 推论：域上一元多项式环是欧几里得整环

若 <span class="kalax-inline-math">F</span> 是域，则

<div class="kalax-display-math">F[x]</div>

是欧几里得整环，因此是 PID 和 UFD。

#### III.6.5 定义：根或零点

若 <span class="kalax-inline-math">f\in R[x_1,\dots,x_n]</span>，且

<div class="kalax-display-math">f(c_1,
\dots,c_n)=0,</div>

则 <span class="kalax-inline-math">(c_1,\dots,c_n)</span> 是 <span class="kalax-inline-math">f</span> 的根或零点。

#### III.6.6 定理：因子定理

若 <span class="kalax-inline-math">R</span> 是交换含幺环，<span class="kalax-inline-math">f\in R[x]</span>，则

<div class="kalax-display-math">c\text{ 是 }f\text{ 的根}
\iff
x-c\mid f(x).</div>

#### III.6.7 定理：整环上根的个数有限

若 <span class="kalax-inline-math">D\subseteq E</span> 是整环，<span class="kalax-inline-math">f\in D[x]</span> 次数为 <span class="kalax-inline-math">n</span>，则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">E</span> 中至多有 <span class="kalax-inline-math">n</span> 个不同根。

#### III.6.8 命题/性质：有理根判别

若 <span class="kalax-inline-math">D</span> 是 UFD，商域为 <span class="kalax-inline-math">F</span>，

<div class="kalax-display-math">f=a_nx^n+
\cdots+a_0\in D[x],</div>

且 <span class="kalax-inline-math">u=c/d\in F</span> 是根，<span class="kalax-inline-math">(c,d)=1</span>，则

<div class="kalax-display-math">c\mid a_0,
\qquad d\mid a_n.</div>

#### III.6.9 引理：形式导数的乘积法则

对 <span class="kalax-inline-math">f,g\in D[x]</span>，形式导数满足

<div class="kalax-display-math">(f+g)'=f'+g',</div>

<div class="kalax-display-math">(fg)'=f'g+fg'.</div>

#### III.6.10 定理：重根与导数

若 <span class="kalax-inline-math">D\subseteq E</span> 是整环，<span class="kalax-inline-math">f\in D[x]</span>，<span class="kalax-inline-math">c\in E</span>，则 <span class="kalax-inline-math">c</span> 是重根，当且仅当

<div class="kalax-display-math">f(c)=0,
\qquad f'(c)=0.</div>

若 <span class="kalax-inline-math">D</span> 是域且 <span class="kalax-inline-math">(f,f')=1</span>，则 <span class="kalax-inline-math">f</span> 无重根。若 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">D[x]</span> 不可约并在 <span class="kalax-inline-math">E</span> 有根，则无重根当且仅当 <span class="kalax-inline-math">f'\ne0</span>。

#### III.6.11 引理：Gauss 引理

若 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">f,g\in D[x]</span>，则内容满足

<div class="kalax-display-math">C(fg)=C(f)C(g).</div>

特别地，两个本原多项式的乘积仍本原。

#### III.6.12 引理：本原多项式在 <span class="kalax-inline-math">D[x]</span> 与 <span class="kalax-inline-math">F[x]</span> 中相伴一致

若 <span class="kalax-inline-math">D</span> 是 UFD、<span class="kalax-inline-math">F</span> 是商域，且 <span class="kalax-inline-math">f,g\in D[x]</span> 本原，则 <span class="kalax-inline-math">f,g</span> 在 <span class="kalax-inline-math">D[x]</span> 中相伴，当且仅当它们在 <span class="kalax-inline-math">F[x]</span> 中相伴。

#### III.6.13 引理：本原多项式的不可约性可在商域中检查

若 <span class="kalax-inline-math">f\in D[x]</span> 本原且次数正，则

<div class="kalax-display-math">f\text{ 在 }D[x]\text{ 中不可约}
\iff
f\text{ 在 }F[x]\text{ 中不可约}.</div>

#### III.6.14 定理：UFD 上的多项式环仍是 UFD

若 <span class="kalax-inline-math">D</span> 是 UFD，则

<div class="kalax-display-math">D[x_1,
\dots,x_n]</div>

也是 UFD。

#### III.6.15 定理：Eisenstein 判别法

若 <span class="kalax-inline-math">D</span> 是 UFD，<span class="kalax-inline-math">p</span> 是素元，

<div class="kalax-display-math">f=a_nx^n+
\cdots+a_0\in D[x]</div>

满足

<div class="kalax-display-math">p\nmid a_n,
\qquad p\mid a_i\ (0\le i&lt;n),
\qquad p^2\nmid a_0,</div>

则 <span class="kalax-inline-math">f</span> 在 <span class="kalax-inline-math">F[x]</span> 中不可约；若 <span class="kalax-inline-math">f</span> 本原，则在 <span class="kalax-inline-math">D[x]</span> 中不可约。

---

## Chapter IV Modules

### IV.1 模、同态与正合列

#### IV.1.1 定义：左模、右模、酉模、向量空间

左 <span class="kalax-inline-math">R</span>-模是阿贝尔群 <span class="kalax-inline-math">A</span> 连同标量乘法 <span class="kalax-inline-math">R\times A\to A</span>，满足

<div class="kalax-display-math">r(a+b)=ra+rb,</div>

<div class="kalax-display-math">(r+s)a=ra+sa,</div>

<div class="kalax-display-math">r(sa)=(rs)a.</div>

若 <span class="kalax-inline-math">R</span> 含幺且 <span class="kalax-inline-math">1_Ra=a</span>，称为酉模。除环上的酉模就是向量空间。

#### IV.1.2 定义：模同态

<span class="kalax-inline-math">R</span>-模同态 <span class="kalax-inline-math">f:A\to B</span> 满足

<div class="kalax-display-math">f(a+a')=f(a)+f(a'),</div>

<div class="kalax-display-math">f(ra)=rf(a).</div>

#### IV.1.3 定义：子模

非空子集 <span class="kalax-inline-math">B\subseteq A</span> 若对加法和 <span class="kalax-inline-math">R</span> 的标量乘法封闭，则 <span class="kalax-inline-math">B</span> 是 <span class="kalax-inline-math">A</span> 的子模。

#### IV.1.4 定义：生成子模

由 <span class="kalax-inline-math">X\subseteq A</span> 生成的子模，是所有包含 <span class="kalax-inline-math">X</span> 的子模之交，记作

<div class="kalax-display-math">\langle X\rangle.</div>

#### IV.1.5 定理：生成子模的元素形式

由 <span class="kalax-inline-math">X</span> 生成的子模由有限线性组合组成：

<div class="kalax-display-math">r_1x_1+
\cdots+r_nx_n.</div>

#### IV.1.6 定理：商模

若 <span class="kalax-inline-math">B\le A</span> 是子模，则商群 <span class="kalax-inline-math">A/B</span> 成为 <span class="kalax-inline-math">R</span>-模：

<div class="kalax-display-math">r(a+B)=ra+B.</div>

#### IV.1.7 定理：模同态诱导商同态

若 <span class="kalax-inline-math">f:A\to B</span> 是 <span class="kalax-inline-math">R</span>-模同态，且 <span class="kalax-inline-math">C\le A</span>、<span class="kalax-inline-math">C\subseteq\ker f</span>，则唯一诱导

<div class="kalax-display-math">\bar f:A/C\to B.</div>

#### IV.1.8 推论：第一同构定理

模同态 <span class="kalax-inline-math">f:A\to B</span> 给出同构

<div class="kalax-display-math">A/\ker f\cong \operatorname{im}f.</div>

#### IV.1.9 定理：第二、第三同构定理

若 <span class="kalax-inline-math">B,C\le A</span>，则

<div class="kalax-display-math">B/(B\cap C)\cong (B+C)/C.</div>

若 <span class="kalax-inline-math">B\le C\le A</span>，则

<div class="kalax-display-math">(A/B)/(C/B)\cong A/C.</div>

#### IV.1.10 定理：子模对应定理

含 <span class="kalax-inline-math">B</span> 的 <span class="kalax-inline-math">A</span> 的子模，与 <span class="kalax-inline-math">A/B</span> 的子模一一对应：

<div class="kalax-display-math">C\longleftrightarrow C/B.</div>

#### IV.1.11 定理：模的直积与直和

一族 <span class="kalax-inline-math">R</span>-模 <span class="kalax-inline-math">A_i</span> 的直积和直和都是 <span class="kalax-inline-math">R</span>-模。有限情形下直积与直和相同：

<div class="kalax-display-math">A_1\oplus\cdots\oplus A_n.</div>

#### IV.1.12 定理：直积的泛性质

给定同态族

<div class="kalax-display-math">\varphi_i:C\to A_i,</div>

存在唯一同态

<div class="kalax-display-math">\varphi:C\to \prod_i A_i</div>

使

<div class="kalax-display-math">\pi_i\varphi=\varphi_i.</div>

#### IV.1.13 定理：直和的泛性质

给定同态族

<div class="kalax-display-math">\psi_i:A_i\to D,</div>

存在唯一同态

<div class="kalax-display-math">\psi:\bigoplus_i A_i\to D</div>

使

<div class="kalax-display-math">\psi\iota_i=\psi_i.</div>

#### IV.1.14 定理：有限直和的投影-嵌入判别

<span class="kalax-inline-math">A\cong A_1\oplus\cdots\oplus A_n</span> 当且仅当存在同态

<div class="kalax-display-math">\pi_i:A\to A_i,
\qquad \iota_i:A_i\to A</div>

满足

<div class="kalax-display-math">\pi_i\iota_i=1_{A_i},
\qquad \pi_j\iota_i=0\ (i\ne j),</div>

<div class="kalax-display-math">\iota_1\pi_1+
\cdots+
\iota_n\pi_n=1_A.</div>

#### IV.1.15 定理：内直和判别

若 <span class="kalax-inline-math">A_i\le A</span>，则 <span class="kalax-inline-math">A</span> 是 <span class="kalax-inline-math">A_i</span> 的内直和，当且仅当每个元素唯一写成有限和

<div class="kalax-display-math">a=a_{i_1}+
\cdots+a_{i_k},
\qquad a_{i_j}\in A_{i_j}.</div>

#### IV.1.16 定义：正合列

序列

<div class="kalax-display-math">A\xrightarrow f B\xrightarrow g C</div>

在 <span class="kalax-inline-math">B</span> 处正合，如果

<div class="kalax-display-math">\operatorname{im}f=\ker g.</div>

若每一处都满足，就叫正合列。

#### IV.1.17 引理：短五引理

在两个短正合列之间的交换图中，若两端竖箭头是同构，则中间竖箭头也是同构。

#### IV.1.18 定理：短正合列分裂判别

短正合列

<div class="kalax-display-math">0\to A_1\xrightarrow f B\xrightarrow g A_2\to0</div>

分裂，当且仅当存在右逆 <span class="kalax-inline-math">h:A_2\to B</span> 使 <span class="kalax-inline-math">gh=1</span>；等价地，存在左逆 <span class="kalax-inline-math">k:B\to A_1</span> 使 <span class="kalax-inline-math">kf=1</span>。此时

<div class="kalax-display-math">B\cong A_1\oplus A_2.</div>

---

### IV.2 自由模与向量空间

#### IV.2.1 定理：自由模的等价刻画

酉 <span class="kalax-inline-math">R</span>-模 <span class="kalax-inline-math">F</span> 自由，当且仅当它有基；等价地，是若干个 <span class="kalax-inline-math">R</span> 的直和；等价地，满足自由对象的泛性质。

<div class="kalax-display-math">F\cong \bigoplus_{x\in X} R.</div>

#### IV.2.2 推论：任意酉模是自由模的商

每个酉 <span class="kalax-inline-math">R</span>-模 <span class="kalax-inline-math">A</span> 都是某个自由 <span class="kalax-inline-math">R</span>-模的同态像。

<div class="kalax-display-math">F\twoheadrightarrow A.</div>

#### IV.2.3 引理：极大线性无关集生成向量空间

若 <span class="kalax-inline-math">X</span> 是向量空间 <span class="kalax-inline-math">V</span> 的极大线性无关子集，则 <span class="kalax-inline-math">X</span> 是 <span class="kalax-inline-math">V</span> 的基。

#### IV.2.4 定理：向量空间都有基

除环上的每个向量空间都有基，因此都是自由模。

#### IV.2.5 定理：线性无关集可扩充为基

若 <span class="kalax-inline-math">X</span> 是向量空间 <span class="kalax-inline-math">V</span> 的线性无关子集，则存在 <span class="kalax-inline-math">V</span> 的基 <span class="kalax-inline-math">Y</span> 使

<div class="kalax-display-math">X\subseteq Y.</div>

#### IV.2.6 定理：无限基的基数唯一

若自由模 <span class="kalax-inline-math">F</span> 有无限基，则 <span class="kalax-inline-math">F</span> 的任意两个基基数相同。

#### IV.2.7 定理：向量空间维数唯一

除环上向量空间的任意两个基有相同基数。这个基数叫维数：

<div class="kalax-display-math">\dim_D V.</div>

#### IV.2.8 定义：不变维数性质

环 <span class="kalax-inline-math">R</span> 有不变维数性质，指任意自由 <span class="kalax-inline-math">R</span>-模的任意两个基都有相同基数。此基数称为自由模的秩。

#### IV.2.9 命题/性质：有不变维数性质时按秩分类

若 <span class="kalax-inline-math">R</span> 有不变维数性质，两个自由 <span class="kalax-inline-math">R</span>-模同构，当且仅当秩相同。

#### IV.2.10 引理：模掉理想后的自由模

若 <span class="kalax-inline-math">F</span> 是自由 <span class="kalax-inline-math">R</span>-模，基为 <span class="kalax-inline-math">X</span>，<span class="kalax-inline-math">I\trianglelefteq R</span>，则

<div class="kalax-display-math">F/IF</div>

是自由 <span class="kalax-inline-math">R/I</span>-模，基为自然像 <span class="kalax-inline-math">\pi(X)</span>，且

<div class="kalax-display-math">|\pi(X)|=|X|.</div>

#### IV.2.11 命题/性质：同态像继承不变维数性质

若 <span class="kalax-inline-math">R\twoheadrightarrow S</span> 是非零保幺环满同态，且 <span class="kalax-inline-math">S</span> 有不变维数性质，则 <span class="kalax-inline-math">R</span> 也有不变维数性质。

#### IV.2.12 推论：有域作为同态像则有不变维数性质

若含幺环 <span class="kalax-inline-math">R</span> 有某个同态像是除环，则 <span class="kalax-inline-math">R</span> 有不变维数性质。

#### IV.2.13 定理：子空间有补空间

若 <span class="kalax-inline-math">W</span> 是向量空间 <span class="kalax-inline-math">V</span> 的子空间，则存在子空间 <span class="kalax-inline-math">U</span> 使

<div class="kalax-display-math">V=W\oplus U.</div>

#### IV.2.14 推论：秩-零化度公式

若 <span class="kalax-inline-math">f:V\to V'</span> 是线性变换，则

<div class="kalax-display-math">\dim V=\dim\ker f+
\dim\operatorname{im} f.</div>

#### IV.2.15 推论：维数公式

若 <span class="kalax-inline-math">V,W</span> 是有限维子空间，则

<div class="kalax-display-math">\dim(V+W)=\dim V+
\dim W-
\dim(V\cap W).</div>

#### IV.2.16 定理：域扩张的维数乘法

若除环 <span class="kalax-inline-math">R\subseteq S\subseteq T</span>，则

<div class="kalax-display-math">[T:R]=[T:S][S:R].</div>

---

### IV.3 投射模与内射模

#### IV.3.1 定义：投射模

<span class="kalax-inline-math">R</span>-模 <span class="kalax-inline-math">P</span> 投射，指任意满同态 <span class="kalax-inline-math">g:A\twoheadrightarrow B</span> 和任意 <span class="kalax-inline-math">f:P\to B</span>，都可提升为 <span class="kalax-inline-math">h:P\to A</span>：

<div class="kalax-display-math">gh=f.</div>

#### IV.3.2 定理：自由模投射

每个自由模都是投射模。

#### IV.3.3 推论：任意模是投射模的商

每个 <span class="kalax-inline-math">R</span>-模都是某个投射模的同态像。

#### IV.3.4 定理：投射模的等价刻画

<span class="kalax-inline-math">P</span> 投射，当且仅当任意短正合列

<div class="kalax-display-math">0\to K\to A\to P\to0</div>

都分裂；等价地，<span class="kalax-inline-math">P</span> 是某个自由模的直和因子。

#### IV.3.5 命题/性质：直和投射判别

直和

<div class="kalax-display-math">\bigoplus_i P_i</div>

投射，当且仅当每个 <span class="kalax-inline-math">P_i</span> 投射。

#### IV.3.6 定义：内射模

<span class="kalax-inline-math">R</span>-模 <span class="kalax-inline-math">J</span> 内射，指任意单同态 <span class="kalax-inline-math">A\hookrightarrow B</span> 和任意 <span class="kalax-inline-math">f:A\to J</span>，都可延拓为 <span class="kalax-inline-math">h:B\to J</span>。

#### IV.3.7 命题/性质：直积内射判别

直积

<div class="kalax-display-math">\prod_i J_i</div>

内射，当且仅当每个 <span class="kalax-inline-math">J_i</span> 内射。

#### IV.3.8 引理：Baer 判别法

含幺环 <span class="kalax-inline-math">R</span> 上，酉模 <span class="kalax-inline-math">J</span> 内射，当且仅当每个定义在左理想 <span class="kalax-inline-math">L\le R</span> 上的同态

<div class="kalax-display-math">L\to J</div>

都能延拓到

<div class="kalax-display-math">R\to J.</div>

#### IV.3.9 引理：可除阿贝尔群等价于内射 <span class="kalax-inline-math">\mathbb Z</span>-模

阿贝尔群 <span class="kalax-inline-math">D</span> 可除，当且仅当它作为酉 <span class="kalax-inline-math">\mathbb Z</span>-模是内射模。

#### IV.3.10 引理：阿贝尔群可嵌入可除群

每个阿贝尔群 <span class="kalax-inline-math">A</span> 都可嵌入某个可除阿贝尔群 <span class="kalax-inline-math">D</span>。

#### IV.3.11 引理：由可除群构造内射模

若 <span class="kalax-inline-math">J</span> 是可除阿贝尔群，<span class="kalax-inline-math">R</span> 是含幺环，则

<div class="kalax-display-math">\operatorname{Hom}_{\mathbb Z}(R,J)</div>

带有自然 <span class="kalax-inline-math">R</span>-模结构，并且是内射模。

#### IV.3.12 命题/性质：任意酉模可嵌入内射模

每个含幺环上的酉模都可嵌入某个内射模。

#### IV.3.13 命题/性质：内射模的直和因子刻画

<span class="kalax-inline-math">J</span> 内射，当且仅当包含 <span class="kalax-inline-math">J</span> 的任意短正合列分裂；等价地，<span class="kalax-inline-math">J</span> 是任意包含它的模的直和因子。

---

### IV.4 Hom 与对偶

#### IV.4.1 定理：Hom 的函子性

给定同态

<div class="kalax-display-math">\varphi:C\to A,
\qquad \psi:B\to D,</div>

可诱导阿贝尔群同态

<div class="kalax-display-math">\operatorname{Hom}_R(A,B)	o \operatorname{Hom}_R(C,D),
\qquad f\mapsto \psi f\varphi.</div>

#### IV.4.2 定理：Hom 左正合之一

序列

<div class="kalax-display-math">0\to A\to B\to C</div>

正合，当且仅当对每个 <span class="kalax-inline-math">D</span>，序列

<div class="kalax-display-math">0\to \operatorname{Hom}_R(D,A)	o \operatorname{Hom}_R(D,B)	o \operatorname{Hom}_R(D,C)</div>

正合。

#### IV.4.3 命题/性质：Hom 左正合之二

序列

<div class="kalax-display-math">A\to B\to C\to0</div>

正合，当且仅当对每个 <span class="kalax-inline-math">D</span>，序列

<div class="kalax-display-math">0\to \operatorname{Hom}_R(C,D)	o \operatorname{Hom}_R(B,D)	o \operatorname{Hom}_R(A,D)</div>

正合。

#### IV.4.4 命题/性质：分裂正合列与 Hom

短正合列分裂，当且仅当对所有 <span class="kalax-inline-math">D</span>，由 Hom 诱导的相应短正合列分裂。

#### IV.4.5 定理：投射模与 Hom 的正合性

<span class="kalax-inline-math">P</span> 投射，当且仅当

<div class="kalax-display-math">\operatorname{Hom}_R(P,-)</div>

把短正合列送到短正合列。

#### IV.4.6 命题/性质：内射模与 Hom 的正合性

<span class="kalax-inline-math">J</span> 内射，当且仅当

<div class="kalax-display-math">\operatorname{Hom}_R(-,J)</div>

把短正合列送到短正合列。

#### IV.4.7 定理：Hom 与直和、直积

有自然同构

<div class="kalax-display-math">\operatorname{Hom}_R\left(A,\prod_j B_j\right)
\cong
\prod_j \operatorname{Hom}_R(A,B_j),</div>

<div class="kalax-display-math">\operatorname{Hom}_R\left(\bigoplus_i A_i,B\right)
\cong
\prod_i \operatorname{Hom}_R(A_i,B).</div>

#### IV.4.8 定理：双模情形下 Hom 的模结构

若 <span class="kalax-inline-math">A,B,C,D</span> 具有相容双模结构，则 <span class="kalax-inline-math">\operatorname{Hom}</span> 集合自然带有左模或右模结构，并且由复合诱导的 Hom 映射保持这些模结构。

#### IV.4.9 定理：左模与双对偶的自然嵌入

若 <span class="kalax-inline-math">A</span> 是含幺环 <span class="kalax-inline-math">R</span> 上的酉左模，则有自然同态

<div class="kalax-display-math">A\to A^{**},
\qquad a\mapsto (f\mapsto f(a)).</div>

#### IV.4.10 定理：湮灭子与对偶的基本关系

对左模 <span class="kalax-inline-math">A,B,C</span>，Hom 和湮灭子满足自然包含与反向对应；在有限维向量空间中，这给出通常的正交补关系。

#### IV.4.11 定理：有限秩自由模的对偶基

若 <span class="kalax-inline-math">F</span> 是含幺环上有限基自由左模，基为 <span class="kalax-inline-math">X=\{x_1,\dots,x_n\}</span>，则对偶模 <span class="kalax-inline-math">F^*=\operatorname{Hom}_R(F,R)</span> 是自由右模，基为对偶基 <span class="kalax-inline-math">x_i^*</span>，满足

<div class="kalax-display-math">x_i^*(x_j)=\delta_{ij}.</div>

#### IV.4.12 定理：有限维向量空间的双对偶

若 <span class="kalax-inline-math">A</span> 是除环上的有限维向量空间，则自然映射

<div class="kalax-display-math">A\to A^{**}</div>

是同构。

---

### IV.5 张量积

#### IV.5.1 定义：张量积

若 <span class="kalax-inline-math">A_R</span> 是右 <span class="kalax-inline-math">R</span>-模，<span class="kalax-inline-math">_RB</span> 是左 <span class="kalax-inline-math">R</span>-模，则张量积 <span class="kalax-inline-math">A\otimes_R B</span> 由符号 <span class="kalax-inline-math">a\otimes b</span> 生成，并满足

<div class="kalax-display-math">(a+a')\otimes b=a\otimes b+a'\otimes b,</div>

<div class="kalax-display-math">a\otimes(b+b')=a\otimes b+a\otimes b',</div>

<div class="kalax-display-math">ar\otimes b=a\otimes rb.</div>

#### IV.5.2 定理：张量积的泛性质

任意中间线性映射

<div class="kalax-display-math">f:A\times B\to C</div>

唯一分解为群同态

<div class="kalax-display-math">\bar f:A\otimes_R B\to C,
\qquad \bar f(a\otimes b)=f(a,b).</div>

#### IV.5.3 推论：张量积诱导映射

若 <span class="kalax-inline-math">f:A\to A'</span>、<span class="kalax-inline-math">g:B\to B'</span> 是相容模同态，则存在唯一群同态

<div class="kalax-display-math">f\otimes g:A\otimes_R B\to A'\otimes_R B'</div>

满足

<div class="kalax-display-math">(f\otimes g)(a\otimes b)=f(a)\otimes g(b).</div>

#### IV.5.4 命题/性质：张量积右正合

若

<div class="kalax-display-math">A\to B\to C\to0</div>

是左 <span class="kalax-inline-math">R</span>-模正合列，且 <span class="kalax-inline-math">D</span> 是右 <span class="kalax-inline-math">R</span>-模，则

<div class="kalax-display-math">D\otimes_R A\to D\otimes_R B\to D\otimes_R C\to0</div>

正合。

#### IV.5.5 定理：张量积上的双模结构

若 <span class="kalax-inline-math">A,B,C,D</span> 有相容双模结构，则 <span class="kalax-inline-math">A\otimes_R B</span>、<span class="kalax-inline-math">C\otimes_R D</span> 自然获得左模或右模结构，例如

<div class="kalax-display-math">s(a\otimes b)=sa\otimes b.</div>

#### IV.5.6 定理：交换环上张量积交换

若 <span class="kalax-inline-math">R</span> 交换，<span class="kalax-inline-math">A,B,C</span> 为 <span class="kalax-inline-math">R</span>-模，且 <span class="kalax-inline-math">g:A\times B\to C</span> 双线性，则可通过张量积唯一分解。特别地有自然同构

<div class="kalax-display-math">A\otimes_R B\cong B\otimes_R A.</div>

#### IV.5.7 定理：<span class="kalax-inline-math">R\otimes_R B\cong B</span>

若 <span class="kalax-inline-math">R</span> 含幺，<span class="kalax-inline-math">A_R</span>、<span class="kalax-inline-math">_RB</span> 酉，则

<div class="kalax-display-math">R\otimes_R B\cong B,
\qquad r\otimes b\mapsto rb.</div>

也有

<div class="kalax-display-math">A\otimes_R R\cong A.</div>

#### IV.5.8 定理：张量积结合律

在相容双模条件下，有自然同构

<div class="kalax-display-math">(A\otimes_R B)\otimes_S C
\cong
A\otimes_R (B\otimes_S C).</div>

#### IV.5.9 定理：张量积与直和交换

张量积分配到直和：

<div class="kalax-display-math">\left(\bigoplus_i A_i\right)\otimes_R B
\cong
\bigoplus_i(A_i\otimes_R B),</div>

<div class="kalax-display-math">A\otimes_R\left(\bigoplus_j B_j\right)
\cong
\bigoplus_j(A\otimes_R B_j).</div>

#### IV.5.10 定理：Hom-张量伴随

在相容双模条件下有自然同构

<div class="kalax-display-math">\operatorname{Hom}_S(A\otimes_R B,C)
\cong
\operatorname{Hom}_R(A,\operatorname{Hom}_S(B,C)).</div>

#### IV.5.11 定理：与自由模张量的唯一展开

若 <span class="kalax-inline-math">F</span> 是左自由 <span class="kalax-inline-math">R</span>-模，基为 <span class="kalax-inline-math">Y</span>，则 <span class="kalax-inline-math">A\otimes_R F</span> 中每个元素唯一写成

<div class="kalax-display-math">\sum_{i=1}^n a_i\otimes y_i,</div>

其中 <span class="kalax-inline-math">y_i\in Y</span> 互异。

#### IV.5.12 推论：自由模张量仍自由

若 <span class="kalax-inline-math">A_R</span> 与 <span class="kalax-inline-math">_RB</span> 都是自由 <span class="kalax-inline-math">R</span>-模，基分别为 <span class="kalax-inline-math">X,Y</span>，则

<div class="kalax-display-math">A\otimes_R B</div>

是自由模，基为

<div class="kalax-display-math">\{x\otimes y:x\in X,
\ y\in Y\}.</div>

#### IV.5.13 推论：扩张标量后的自由模

若 <span class="kalax-inline-math">R\subseteq S</span> 且 <span class="kalax-inline-math">1_R=1_S</span>，<span class="kalax-inline-math">F</span> 是自由左 <span class="kalax-inline-math">R</span>-模，基为 <span class="kalax-inline-math">X</span>，则

<div class="kalax-display-math">S\otimes_R F</div>

是自由左 <span class="kalax-inline-math">S</span>-模，基为

<div class="kalax-display-math">\{1_S\otimes x:x\in X\}.</div>

---

### IV.6 主理想整环上的模

#### IV.6.1 定理：PID 上自由模的子模自由

若 <span class="kalax-inline-math">F</span> 是 PID <span class="kalax-inline-math">R</span> 上自由模，<span class="kalax-inline-math">G\le F</span>，则 <span class="kalax-inline-math">G</span> 自由，且

<div class="kalax-display-math">\operatorname{rank}G\le \operatorname{rank}F.</div>

#### IV.6.2 推论：有限生成模的子模有限生成

PID 上有限生成模的任意子模仍有限生成。

#### IV.6.3 推论：PID 上投射模等价于自由模

PID 上的酉模 <span class="kalax-inline-math">A</span> 满足

<div class="kalax-display-math">A\text{ projective}\iff A\text{ free}.</div>

#### IV.6.4 定理：阶理想与挠子模

对整环 <span class="kalax-inline-math">R</span> 上的模 <span class="kalax-inline-math">A</span>，定义

<div class="kalax-display-math">O_a=\{r\in R:ra=0\}.</div>

则 <span class="kalax-inline-math">O_a</span> 是理想，且

<div class="kalax-display-math">A_t=\{a\in A:O_a\ne0\}</div>

是子模。还有自然同构

<div class="kalax-display-math">R/O_a\cong Ra.</div>

#### IV.6.5 定理：有限生成无挠模自由

PID 上有限生成无挠模是自由模。

#### IV.6.6 定理：有限生成模分解为挠部分与自由部分

若 <span class="kalax-inline-math">A</span> 是 PID 上有限生成模，则

<div class="kalax-display-math">A=A_t\oplus F,</div>

其中 <span class="kalax-inline-math">F</span> 是有限秩自由模，并且

<div class="kalax-display-math">F\cong A/A_t.</div>

#### IV.6.7 定理：挠模分解为 <span class="kalax-inline-math">p</span>-初等部分

若 <span class="kalax-inline-math">A</span> 是 PID 上挠模，定义

<div class="kalax-display-math">A(p)=\{a\in A:a\text{ 的阶是 }p\text{ 的幂}\},</div>

则每个 <span class="kalax-inline-math">A(p)</span> 是子模，并且

<div class="kalax-display-math">A=\bigoplus_p A(p).</div>

有限生成时只有有限多个 <span class="kalax-inline-math">A(p)</span> 非零。

#### IV.6.8 引理：被 <span class="kalax-inline-math">p^n</span> 杀死的模含有阶最大的循环直和因子

若 <span class="kalax-inline-math">p^nA=0</span>，且 <span class="kalax-inline-math">a\in A</span> 阶为 <span class="kalax-inline-math">p^n</span>，则循环子模 <span class="kalax-inline-math">Ra</span> 可作为直和因子分离出来。

<div class="kalax-display-math">A=Ra\oplus C.</div>

#### IV.6.9 定理：有限生成 <span class="kalax-inline-math">p</span>-初等模分解

若 <span class="kalax-inline-math">A</span> 是有限生成 <span class="kalax-inline-math">p</span>-初等模，则

<div class="kalax-display-math">A\cong R/(p^{n_1})\oplus\cdots\oplus R/(p^{n_t}).</div>

#### IV.6.10 引理：有限直和、同构与 <span class="kalax-inline-math">p</span>-初等部分

模同构、有限直和与 <span class="kalax-inline-math">A(p)</span> 的构造相容；比较模的不变量时可逐个素元 <span class="kalax-inline-math">p</span> 比较。

#### IV.6.11 引理：互素因子的循环模分解

若

<div class="kalax-display-math">r=p_1^{n_1}\cdots p_k^{n_k}</div>

且 <span class="kalax-inline-math">p_i</span> 两两不相伴，则

<div class="kalax-display-math">R/(r)\cong R/(p_1^{n_1})\oplus\cdots\oplus R/(p_k^{n_k}).</div>

#### IV.6.12 定理：PID 上有限生成模结构定理

若 <span class="kalax-inline-math">A</span> 是 PID 上有限生成模，则有不变因子分解：

<div class="kalax-display-math">A\cong R^r\oplus R/(r_1)\oplus\cdots\oplus R/(r_t),</div>

其中

<div class="kalax-display-math">r_1\mid r_2\mid\cdots\mid r_t.</div>

也有初等因子分解：

<div class="kalax-display-math">A\cong R^r\oplus \bigoplus_j R/(p_j^{s_j}).</div>

秩、不变因子理想、初等因子理想都由 <span class="kalax-inline-math">A</span> 唯一决定。

#### IV.6.13 推论：PID 上有限生成模同构判别

两个 PID 上有限生成模同构，当且仅当它们的自由秩相同，且不变因子相同；等价地，初等因子相同。

---

### IV.7 代数

#### IV.7.1 定义：<span class="kalax-inline-math">K</span>-代数

若 <span class="kalax-inline-math">K</span> 是交换含幺环，<span class="kalax-inline-math">K</span>-代数 <span class="kalax-inline-math">A</span> 是一个环，同时 <span class="kalax-inline-math">(A,+)</span> 是酉左 <span class="kalax-inline-math">K</span>-模，并满足

<div class="kalax-display-math">k(ab)=(ka)b=a(kb).</div>

若 <span class="kalax-inline-math">A</span> 作为环是除环，则称为除代数。

#### IV.7.2 定理：由模构造张量代数式乘法

给定 <span class="kalax-inline-math">K</span>-模 <span class="kalax-inline-math">A</span> 和合适的乘法映射，可用张量积的泛性质把双线性乘法转化为线性映射，从而在张量积或相关模上构造 <span class="kalax-inline-math">K</span>-代数结构。

#### IV.7.3 定义：代数同态与张量积代数

若 <span class="kalax-inline-math">A,B</span> 是 <span class="kalax-inline-math">K</span>-代数，代数同态是同时为环同态和 <span class="kalax-inline-math">K</span>-模同态的映射。<span class="kalax-inline-math">A\otimes_K B</span> 在自然乘法下也可成为 <span class="kalax-inline-math">K</span>-代数。

#### IV.7.4 定理：代数张量积

若 <span class="kalax-inline-math">A,B</span> 是含幺 <span class="kalax-inline-math">K</span>-代数，则 <span class="kalax-inline-math">A\otimes_K B</span> 成为含幺 <span class="kalax-inline-math">K</span>-代数，乘法由

<div class="kalax-display-math">(a\otimes b)(a'\otimes b')=aa'\otimes bb'</div>

给出，单位元为

<div class="kalax-display-math">1_A\otimes 1_B.</div>