---
title: "高等代数 II 第十次作业解答"
date: 2026-05-19 22:51:00
updated: 2026-05-19 22:51:00
permalink: notes/数学-linear-algebra-作业-78b34299/
categories:
  - "数学"
  - "Linear Algebra"
tags:
  - "obsidian"
  - "数学"
  - "Linear Algebra"
description: "高等代数 II 第十次作业解答 题号：7.2.19，7.2.21，7.2.22，7.2.24，7.2.25，7.2.27，7.2.28，7.2.30，7.2.31，7.2.32 --- 习题 7.2.19 设 mathcal A in operatorname{End}(V) 为正规变换。证明： o"
mathjax: true
---
# 高等代数 II 第十次作业解答

题号：7.2.19，7.2.21，7.2.22，7.2.24，7.2.25，7.2.27，7.2.28，7.2.30，7.2.31，7.2.32

---

## 习题 7.2.19

设 <span class="kalax-inline-math">\mathcal A\in \operatorname{End}(V)</span> 为正规变换。证明：

<div class="kalax-display-math">\operatorname{Im}(\mathcal A)=\operatorname{Im}(\mathcal A^*).</div>

因为 <span class="kalax-inline-math">\mathcal A</span> 是正规变换，所以

<div class="kalax-display-math">\mathcal A\mathcal A^*=\mathcal A^*\mathcal A.</div>

对任意 <span class="kalax-inline-math">x\in V</span>，有

<div class="kalax-display-math">\|\mathcal A x\|^2
=\langle \mathcal A x,\mathcal A x\rangle
=\langle \mathcal A^*\mathcal A x,x\rangle,</div>

而

<div class="kalax-display-math">\|\mathcal A^*x\|^2
=\langle \mathcal A^*x,\mathcal A^*x\rangle
=\langle \mathcal A\mathcal A^*x,x\rangle.</div>

由正规性可得

<div class="kalax-display-math">\|\mathcal A x\|^2=\|\mathcal A^*x\|^2.</div>

因此

<div class="kalax-display-math">\mathcal A x=0
\iff
\mathcal A^*x=0.</div>

所以

<div class="kalax-display-math">\ker \mathcal A=\ker \mathcal A^*.</div>

又因为有限维内积空间中有

<div class="kalax-display-math">\operatorname{Im}(\mathcal A)
=
(\ker \mathcal A^*)^\perp,</div>

以及

<div class="kalax-display-math">\operatorname{Im}(\mathcal A^*)
=
(\ker \mathcal A)^\perp.</div>

于是

<div class="kalax-display-math">\operatorname{Im}(\mathcal A)
=
(\ker \mathcal A^*)^\perp
=
(\ker \mathcal A)^\perp
=
\operatorname{Im}(\mathcal A^*).</div>

所以

<div class="kalax-display-math">\boxed{\operatorname{Im}(\mathcal A)=\operatorname{Im}(\mathcal A^*)}.</div>

---

## 习题 7.2.21

设 <span class="kalax-inline-math">A\in M_n(\mathbb R)</span> 为对称矩阵。对于每个 <span class="kalax-inline-math">i\in[1,n]</span>，记 <span class="kalax-inline-math">c_i</span> 为 <span class="kalax-inline-math">A</span> 的所有 <span class="kalax-inline-math">i</span> 阶主子式之和。

证明：如果 <span class="kalax-inline-math">c_i\ge 0</span> 对每个 <span class="kalax-inline-math">i\in[1,n]</span> 成立，那么 <span class="kalax-inline-math">A</span> 是半正定的。如果再有 <span class="kalax-inline-math">c_n&gt;0</span>，则 <span class="kalax-inline-math">A</span> 是正定的。

因为 <span class="kalax-inline-math">A</span> 是实对称矩阵，所以存在正交矩阵 <span class="kalax-inline-math">Q</span>，使得

<div class="kalax-display-math">Q^TAQ=\operatorname{diag}(\lambda_1,\dots,\lambda_n),</div>

其中 <span class="kalax-inline-math">\lambda_1,\dots,\lambda_n\in\mathbb R</span>。

矩阵 <span class="kalax-inline-math">A</span> 的特征多项式为

<div class="kalax-display-math">p_A(t)=\det(tI-A)
=t^n-c_1t^{n-1}+c_2t^{n-2}-\cdots+(-1)^nc_n.</div>

反设 <span class="kalax-inline-math">A</span> 有负特征值。设该负特征值为 <span class="kalax-inline-math">-s</span>，其中 <span class="kalax-inline-math">s&gt;0</span>。因为 <span class="kalax-inline-math">-s</span> 是特征值，所以

<div class="kalax-display-math">p_A(-s)=0.</div>

但是

<div class="kalax-display-math">p_A(-s)
=
(-1)^n
\left(
s^n+c_1s^{n-1}+c_2s^{n-2}+\cdots+c_n
\right).</div>

由于

<div class="kalax-display-math">s&gt;0,\qquad c_i\ge 0,</div>

所以上式括号中的数严格大于 <span class="kalax-inline-math">0</span>，因此

<div class="kalax-display-math">p_A(-s)\neq 0.</div>

这与 <span class="kalax-inline-math">p_A(-s)=0</span> 矛盾。

所以 <span class="kalax-inline-math">A</span> 没有负特征值，即

<div class="kalax-display-math">\lambda_i\ge 0,\qquad i=1,\dots,n.</div>

因此 <span class="kalax-inline-math">A</span> 是半正定矩阵。

如果进一步有

<div class="kalax-display-math">c_n&gt;0,</div>

注意到

<div class="kalax-display-math">c_n=\det A=\lambda_1\lambda_2\cdots\lambda_n.</div>

而所有 <span class="kalax-inline-math">\lambda_i\ge 0</span>，且它们的乘积大于 <span class="kalax-inline-math">0</span>，所以每个 <span class="kalax-inline-math">\lambda_i</span> 都大于 <span class="kalax-inline-math">0</span>。因此 <span class="kalax-inline-math">A</span> 是正定矩阵。

综上，结论成立。

---

## 习题 7.2.22

设 <span class="kalax-inline-math">A,B\in M_n(\mathbb R)</span> 均为对称矩阵，其中 <span class="kalax-inline-math">A</span> 正定。证明：存在可逆矩阵 <span class="kalax-inline-math">P\in M_n(\mathbb R)</span>，使得

<div class="kalax-display-math">P^TAP</div>

和

<div class="kalax-display-math">P^TBP</div>

同时为对角矩阵。

因为 <span class="kalax-inline-math">A</span> 正定，所以存在可逆矩阵 <span class="kalax-inline-math">S</span>，使得

<div class="kalax-display-math">S^TAS=I.</div>

令

<div class="kalax-display-math">C=S^TBS.</div>

因为 <span class="kalax-inline-math">B</span> 是对称矩阵，所以

<div class="kalax-display-math">C^T=(S^TBS)^T=S^TB^TS=S^TBS=C.</div>

因此 <span class="kalax-inline-math">C</span> 也是实对称矩阵。

由实对称矩阵正交对角化定理，存在正交矩阵 <span class="kalax-inline-math">Q</span>，使得

<div class="kalax-display-math">Q^TCQ=D,</div>

其中 <span class="kalax-inline-math">D</span> 是对角矩阵。

令

<div class="kalax-display-math">P=SQ.</div>

则

<div class="kalax-display-math">P^TAP
=
Q^TS^TASQ
=
Q^TIQ
=
I,</div>

是对角矩阵。

同时

<div class="kalax-display-math">P^TBP
=
Q^TS^TBSQ
=
Q^TCQ
=
D,</div>

也是对角矩阵。

因此存在可逆矩阵 <span class="kalax-inline-math">P</span>，使得 <span class="kalax-inline-math">P^TAP</span> 和 <span class="kalax-inline-math">P^TBP</span> 同时为对角矩阵。

---

## 习题 7.2.24

设 <span class="kalax-inline-math">b,c\in\mathbb R</span> 且

<div class="kalax-display-math">b^2-4c&lt;0.</div>

举例说明：存在一个线性变换 <span class="kalax-inline-math">\mathcal A\in\operatorname{End}(V)</span>，使得

<div class="kalax-display-math">\mathcal A^2+b\mathcal A+cI</div>

不可逆。

因为

<div class="kalax-display-math">b^2-4c&lt;0,</div>

所以多项式

<div class="kalax-display-math">x^2+bx+c</div>

在实数范围内没有根，但在复数范围内有一对共轭复根

<div class="kalax-display-math">\alpha\pm i\beta,</div>

其中

<div class="kalax-display-math">\alpha=-\frac b2,\qquad
\beta=\frac{\sqrt{4c-b^2}}2\neq 0.</div>

取 <span class="kalax-inline-math">V=\mathbb R^2</span>，定义线性变换 <span class="kalax-inline-math">\mathcal A</span> 在标准基下的矩阵为

<div class="kalax-display-math">A=
\begin{pmatrix}
\alpha &amp; -\beta\\
\beta &amp; \alpha
\end{pmatrix}.</div>

该矩阵对应复平面中“乘以复数 <span class="kalax-inline-math">\alpha+i\beta</span>”的线性变换。

由于 <span class="kalax-inline-math">\alpha+i\beta</span> 是方程

<div class="kalax-display-math">x^2+bx+c=0</div>

的根，所以对应的实矩阵满足

<div class="kalax-display-math">A^2+bA+cI=0.</div>

因此

<div class="kalax-display-math">\mathcal A^2+b\mathcal A+cI</div>

是零变换。

零变换不可逆，所以这就给出了所需例子。

这也说明，如果不假设 <span class="kalax-inline-math">\mathcal A</span> 自伴，那么结论不再成立。

---

## 习题 7.2.25

设 <span class="kalax-inline-math">\mathcal A,\mathcal B</span> 是 <span class="kalax-inline-math">n</span> 维内积空间 <span class="kalax-inline-math">V</span> 上的两个自伴算子。证明下列陈述等价：

1. 存在 <span class="kalax-inline-math">V</span> 的一组规范正交基 <span class="kalax-inline-math">\mathcal E</span>，使得 <span class="kalax-inline-math">M_\mathcal E(\mathcal A)</span> 和 <span class="kalax-inline-math">M_\mathcal E(\mathcal B)</span> 同时为对角矩阵；
2. <span class="kalax-inline-math">\mathcal A</span> 和 <span class="kalax-inline-math">\mathcal B</span> 可交换，即

<div class="kalax-display-math">\mathcal A\mathcal B=\mathcal B\mathcal A.</div>

### 证明 <span class="kalax-inline-math">1\Rightarrow 2</span>

若存在一组规范正交基 <span class="kalax-inline-math">\mathcal E</span>，使得

<div class="kalax-display-math">M_\mathcal E(\mathcal A)</div>

和

<div class="kalax-display-math">M_\mathcal E(\mathcal B)</div>

同时为对角矩阵。

因为对角矩阵之间一定可交换，所以

<div class="kalax-display-math">M_\mathcal E(\mathcal A)M_\mathcal E(\mathcal B)
=
M_\mathcal E(\mathcal B)M_\mathcal E(\mathcal A).</div>

因此

<div class="kalax-display-math">\mathcal A\mathcal B=\mathcal B\mathcal A.</div>

### 证明 <span class="kalax-inline-math">2\Rightarrow 1</span>

因为 <span class="kalax-inline-math">\mathcal A</span> 是自伴算子，所以 <span class="kalax-inline-math">V</span> 可以正交分解为 <span class="kalax-inline-math">\mathcal A</span> 的特征子空间直和：

<div class="kalax-display-math">V=\bigoplus_\lambda V_\lambda,</div>

其中

<div class="kalax-display-math">V_\lambda=\ker(\mathcal A-\lambda I).</div>

下面证明每个 <span class="kalax-inline-math">V_\lambda</span> 在 <span class="kalax-inline-math">\mathcal B</span> 下不变。

任取 <span class="kalax-inline-math">v\in V_\lambda</span>，则

<div class="kalax-display-math">\mathcal Av=\lambda v.</div>

又因为

<div class="kalax-display-math">\mathcal A\mathcal B=\mathcal B\mathcal A,</div>

所以

<div class="kalax-display-math">\mathcal A(\mathcal Bv)
=
\mathcal B(\mathcal Av)
=
\mathcal B(\lambda v)
=
\lambda\mathcal Bv.</div>

因此

<div class="kalax-display-math">\mathcal Bv\in V_\lambda.</div>

所以 <span class="kalax-inline-math">\mathcal B</span> 保持 <span class="kalax-inline-math">\mathcal A</span> 的每个特征子空间不变。

由于 <span class="kalax-inline-math">\mathcal B</span> 也是自伴算子，所以 <span class="kalax-inline-math">\mathcal B</span> 在每个 <span class="kalax-inline-math">V_\lambda</span> 上的限制仍然是自伴算子。于是可以在每个 <span class="kalax-inline-math">V_\lambda</span> 中选取一组规范正交基，使得 <span class="kalax-inline-math">\mathcal B</span> 在该子空间上对角化。

把所有这些规范正交基合并起来，就得到 <span class="kalax-inline-math">V</span> 的一组规范正交基。

在这组基下，<span class="kalax-inline-math">\mathcal A</span> 在每个 <span class="kalax-inline-math">V_\lambda</span> 上都是数乘 <span class="kalax-inline-math">\lambda I</span>，因此 <span class="kalax-inline-math">\mathcal A</span> 是对角的；而 <span class="kalax-inline-math">\mathcal B</span> 也被构造为对角的。

所以 <span class="kalax-inline-math">\mathcal A</span> 和 <span class="kalax-inline-math">\mathcal B</span> 可以同时正交对角化。

因此两条陈述等价。

---

## 习题 7.2.27

设 <span class="kalax-inline-math">A</span> 为 <span class="kalax-inline-math">n</span> 阶实正规矩阵。假设 <span class="kalax-inline-math">\lambda\in\mathbb C</span> 是 <span class="kalax-inline-math">A</span> 的一个复特征值，列向量 <span class="kalax-inline-math">\alpha\in\mathbb C^n</span> 满足

<div class="kalax-display-math">A\alpha=\lambda\alpha.</div>

证明：

<div class="kalax-display-math">A^T\alpha=\overline{\lambda}\alpha.</div>

因为 <span class="kalax-inline-math">A</span> 是实正规矩阵，所以

<div class="kalax-display-math">AA^T=A^TA.</div>

把 <span class="kalax-inline-math">A</span> 看作复空间 <span class="kalax-inline-math">\mathbb C^n</span> 上的矩阵，则它仍然是正规矩阵，并且它的伴随矩阵为

<div class="kalax-display-math">A^*=A^T.</div>

由正规矩阵的性质可知：如果

<div class="kalax-display-math">A\alpha=\lambda\alpha,</div>

那么

<div class="kalax-display-math">A^*\alpha=\overline{\lambda}\alpha.</div>

又因为这里

<div class="kalax-display-math">A^*=A^T,</div>

所以

<div class="kalax-display-math">A^T\alpha=\overline{\lambda}\alpha.</div>

证毕。

---

## 习题 7.2.28

设 <span class="kalax-inline-math">\mathcal A\in \operatorname{End}(V)</span> 是正规变换，且最小多项式为

<div class="kalax-display-math">g(X)=(X-a)^2+b^2,</div>

其中 <span class="kalax-inline-math">a,b\in\mathbb R</span>，<span class="kalax-inline-math">b\neq 0</span>。

证明：

<div class="kalax-display-math">\mathcal A</div>

可逆，且

<div class="kalax-display-math">\mathcal A^*=(a^2+b^2)\mathcal A^{-1}.</div>

由最小多项式可知

<div class="kalax-display-math">(\mathcal A-aI)^2+b^2I=0.</div>

展开得

<div class="kalax-display-math">\mathcal A^2-2a\mathcal A+(a^2+b^2)I=0.</div>

于是

<div class="kalax-display-math">\mathcal A(2aI-\mathcal A)=(a^2+b^2)I.</div>

因为

<div class="kalax-display-math">a^2+b^2&gt;0,</div>

所以 <span class="kalax-inline-math">\mathcal A</span> 可逆，并且

<div class="kalax-display-math">\mathcal A^{-1}
=
\frac{1}{a^2+b^2}(2aI-\mathcal A).</div>

因此

<div class="kalax-display-math">(a^2+b^2)\mathcal A^{-1}=2aI-\mathcal A.</div>

下面证明

<div class="kalax-display-math">\mathcal A^*=2aI-\mathcal A.</div>

令

<div class="kalax-display-math">\mathcal B=\mathcal A-aI.</div>

因为 <span class="kalax-inline-math">\mathcal A</span> 正规，所以 <span class="kalax-inline-math">\mathcal B</span> 也是正规变换。并且

<div class="kalax-display-math">\mathcal B^2=-b^2I.</div>

因此 <span class="kalax-inline-math">\mathcal B</span> 的特征值只能是

<div class="kalax-display-math">ib</div>

或

<div class="kalax-display-math">-ib.</div>

由于正规变换可以酉对角化，所以在一组规范正交基下，<span class="kalax-inline-math">\mathcal B</span> 的矩阵为对角矩阵，对角线上只可能出现 <span class="kalax-inline-math">ib</span> 或 <span class="kalax-inline-math">-ib</span>。

于是 <span class="kalax-inline-math">\mathcal B^*</span> 的特征值是这些特征值的共轭，即 <span class="kalax-inline-math">-ib</span> 或 <span class="kalax-inline-math">ib</span>。

因此

<div class="kalax-display-math">\mathcal B^*=-\mathcal B.</div>

也就是说

<div class="kalax-display-math">(\mathcal A-aI)^*=-(\mathcal A-aI).</div>

展开得

<div class="kalax-display-math">\mathcal A^*-aI=-\mathcal A+aI.</div>

所以

<div class="kalax-display-math">\mathcal A^*=2aI-\mathcal A.</div>

结合前面得到的

<div class="kalax-display-math">2aI-\mathcal A=(a^2+b^2)\mathcal A^{-1},</div>

可得

<div class="kalax-display-math">\boxed{\mathcal A^*=(a^2+b^2)\mathcal A^{-1}}.</div>

---

## 习题 7.2.30

设 <span class="kalax-inline-math">C[-\pi,\pi]</span> 是闭区间 <span class="kalax-inline-math">[-\pi,\pi]</span> 上所有实值连续函数构成的空间，在其上定义内积：

<div class="kalax-display-math">\langle f,g\rangle
=
\int_{-\pi}^{\pi}f(x)g(x)\,dx.</div>

取

<div class="kalax-display-math">V=\operatorname{span}
(1,\cos x,\cos 2x,\cos 3x,\sin x,\sin 2x,\sin 3x).</div>

### 1. 证明：对于任意 <span class="kalax-inline-math">f\in V</span>，其导函数 <span class="kalax-inline-math">f'</span> 也属于 <span class="kalax-inline-math">V</span>

任取 <span class="kalax-inline-math">f\in V</span>，则 <span class="kalax-inline-math">f</span> 可以写成

<div class="kalax-display-math">f(x)
=
a_0+a_1\cos x+a_2\cos 2x+a_3\cos 3x
+b_1\sin x+b_2\sin 2x+b_3\sin 3x.</div>

求导得

<div class="kalax-display-math">f'(x)
=
-a_1\sin x-2a_2\sin 2x-3a_3\sin 3x
+b_1\cos x+2b_2\cos 2x+3b_3\cos 3x.</div>

显然 <span class="kalax-inline-math">f'(x)</span> 仍然是

<div class="kalax-display-math">1,\cos x,\cos 2x,\cos 3x,\sin x,\sin 2x,\sin 3x</div>

的线性组合。

因此

<div class="kalax-display-math">f'\in V.</div>

### 2. 定义 <span class="kalax-inline-math">\mathcal A:V\to V,\ f\mapsto f'</span>，证明 <span class="kalax-inline-math">\mathcal A</span> 是斜对称变换

要证明 <span class="kalax-inline-math">\mathcal A</span> 是斜对称变换，即证明对任意 <span class="kalax-inline-math">f,g\in V</span>，有

<div class="kalax-display-math">\langle \mathcal Af,g\rangle
=
-\langle f,\mathcal Ag\rangle.</div>

也就是证明

<div class="kalax-display-math">\langle f',g\rangle
=
-\langle f,g'\rangle.</div>

由分部积分公式，

<div class="kalax-display-math">\int_{-\pi}^{\pi}f'(x)g(x)\,dx
=
f(x)g(x)\bigg|_{-\pi}^{\pi}
-
\int_{-\pi}^{\pi}f(x)g'(x)\,dx.</div>

因为 <span class="kalax-inline-math">f,g\in V</span> 都是由 <span class="kalax-inline-math">1,\sin kx,\cos kx</span> 线性组合而成，所以它们满足

<div class="kalax-display-math">f(\pi)=f(-\pi),
\qquad
g(\pi)=g(-\pi).</div>

因此

<div class="kalax-display-math">f(x)g(x)\bigg|_{-\pi}^{\pi}=0.</div>

所以

<div class="kalax-display-math">\int_{-\pi}^{\pi}f'(x)g(x)\,dx
=
-\int_{-\pi}^{\pi}f(x)g'(x)\,dx.</div>

即

<div class="kalax-display-math">\langle \mathcal Af,g\rangle
=
-\langle f,\mathcal Ag\rangle.</div>

所以 <span class="kalax-inline-math">\mathcal A</span> 是斜对称变换。

### 3. 求 <span class="kalax-inline-math">V</span> 的一组规范正交基，使得 <span class="kalax-inline-math">M_\mathcal E(\mathcal A)</span> 具有正交相似标准形

注意到

<div class="kalax-display-math">\int_{-\pi}^{\pi}1^2\,dx=2\pi,</div>

并且对于 <span class="kalax-inline-math">k=1,2,3</span>，

<div class="kalax-display-math">\int_{-\pi}^{\pi}\cos^2 kx\,dx=\pi,
\qquad
\int_{-\pi}^{\pi}\sin^2 kx\,dx=\pi.</div>

同时，不同频率之间正交，<span class="kalax-inline-math">\sin</span> 与 <span class="kalax-inline-math">\cos</span> 之间也正交。

所以取

<div class="kalax-display-math">e_0=\frac{1}{\sqrt{2\pi}},</div>

以及

<div class="kalax-display-math">c_k=\frac{\cos kx}{\sqrt{\pi}},
\qquad
s_k=\frac{\sin kx}{\sqrt{\pi}},
\qquad k=1,2,3.</div>

令

<div class="kalax-display-math">\mathcal E=(e_0,c_1,s_1,c_2,s_2,c_3,s_3).</div>

则 <span class="kalax-inline-math">\mathcal E</span> 是 <span class="kalax-inline-math">V</span> 的一组规范正交基。

因为

<div class="kalax-display-math">\mathcal A(e_0)=0,</div>

<div class="kalax-display-math">\mathcal A(c_k)=-ks_k,</div>

<div class="kalax-display-math">\mathcal A(s_k)=kc_k.</div>

所以在基 <span class="kalax-inline-math">\mathcal E</span> 下，<span class="kalax-inline-math">\mathcal A</span> 的矩阵为

<div class="kalax-display-math">M_\mathcal E(\mathcal A)
=
\begin{pmatrix}
0&amp;0&amp;0&amp;0&amp;0&amp;0&amp;0\\
0&amp;0&amp;1&amp;0&amp;0&amp;0&amp;0\\
0&amp;-1&amp;0&amp;0&amp;0&amp;0&amp;0\\
0&amp;0&amp;0&amp;0&amp;2&amp;0&amp;0\\
0&amp;0&amp;0&amp;-2&amp;0&amp;0&amp;0\\
0&amp;0&amp;0&amp;0&amp;0&amp;0&amp;3\\
0&amp;0&amp;0&amp;0&amp;0&amp;-3&amp;0
\end{pmatrix}.</div>

即

<div class="kalax-display-math">M_\mathcal E(\mathcal A)
=
0
\oplus
\begin{pmatrix}
0&amp;1\\
-1&amp;0
\end{pmatrix}
\oplus
\begin{pmatrix}
0&amp;2\\
-2&amp;0
\end{pmatrix}
\oplus
\begin{pmatrix}
0&amp;3\\
-3&amp;0
\end{pmatrix}.</div>

这就是斜对称矩阵的正交相似标准形。

---

## 习题 7.2.31

设 <span class="kalax-inline-math">A,B\in M_n(\mathbb R)</span>，其中 <span class="kalax-inline-math">A</span> 正定。证明：

1. 对任意正整数 <span class="kalax-inline-math">k</span>，矩阵 <span class="kalax-inline-math">A^k</span> 也正定；
2. 如果存在正整数 <span class="kalax-inline-math">r</span>，使得 <span class="kalax-inline-math">B</span> 与 <span class="kalax-inline-math">A^r</span> 可交换，则 <span class="kalax-inline-math">B</span> 与 <span class="kalax-inline-math">A</span> 也可交换。

### 1. 证明 <span class="kalax-inline-math">A^k</span> 正定

因为 <span class="kalax-inline-math">A</span> 正定，所以 <span class="kalax-inline-math">A</span> 是实对称矩阵，且所有特征值都为正。

由谱定理，存在正交矩阵 <span class="kalax-inline-math">Q</span>，使得

<div class="kalax-display-math">A=QDQ^T,</div>

其中

<div class="kalax-display-math">D=\operatorname{diag}(\lambda_1,\dots,\lambda_n),
\qquad
\lambda_i&gt;0.</div>

于是

<div class="kalax-display-math">A^k=QD^kQ^T,</div>

其中

<div class="kalax-display-math">D^k=\operatorname{diag}(\lambda_1^k,\dots,\lambda_n^k).</div>

因为

<div class="kalax-display-math">\lambda_i&gt;0,</div>

所以

<div class="kalax-display-math">\lambda_i^k&gt;0.</div>

因此 <span class="kalax-inline-math">A^k</span> 的所有特征值仍然为正，所以 <span class="kalax-inline-math">A^k</span> 正定。

### 2. 证明若 <span class="kalax-inline-math">B</span> 与 <span class="kalax-inline-math">A^r</span> 可交换，则 <span class="kalax-inline-math">B</span> 与 <span class="kalax-inline-math">A</span> 可交换

仍设

<div class="kalax-display-math">A=QDQ^T,</div>

其中

<div class="kalax-display-math">D=\operatorname{diag}(\lambda_1,\dots,\lambda_n),
\qquad
\lambda_i&gt;0.</div>

于是

<div class="kalax-display-math">A^r=QD^rQ^T,</div>

其中

<div class="kalax-display-math">D^r=\operatorname{diag}(\lambda_1^r,\dots,\lambda_n^r).</div>

由于函数

<div class="kalax-display-math">x\mapsto x^r</div>

在正实数范围内严格单调，所以

<div class="kalax-display-math">\lambda_i^r=\lambda_j^r
\iff
\lambda_i=\lambda_j.</div>

这说明 <span class="kalax-inline-math">A</span> 与 <span class="kalax-inline-math">A^r</span> 有相同的特征子空间分解。

若

<div class="kalax-display-math">BA^r=A^rB,</div>

则 <span class="kalax-inline-math">B</span> 保持 <span class="kalax-inline-math">A^r</span> 的每个特征子空间不变。

由于 <span class="kalax-inline-math">A</span> 与 <span class="kalax-inline-math">A^r</span> 的特征子空间相同，所以 <span class="kalax-inline-math">B</span> 也保持 <span class="kalax-inline-math">A</span> 的每个特征子空间不变。

而在 <span class="kalax-inline-math">A</span> 的每个特征子空间上，<span class="kalax-inline-math">A</span> 都只是数乘变换。因此在每个特征子空间上，<span class="kalax-inline-math">A</span> 与 <span class="kalax-inline-math">B</span> 可交换。

所以在整个空间上有

<div class="kalax-display-math">BA=AB.</div>

即 <span class="kalax-inline-math">B</span> 与 <span class="kalax-inline-math">A</span> 可交换。

---

## 习题 7.2.32

设 <span class="kalax-inline-math">U</span> 和 <span class="kalax-inline-math">V</span> 分别为 <span class="kalax-inline-math">n</span> 维和 <span class="kalax-inline-math">m</span> 维内积空间，

<div class="kalax-display-math">W=\operatorname{Hom}(U,V).</div>

取定 <span class="kalax-inline-math">U</span> 的一组规范正交基

<div class="kalax-display-math">\varepsilon_1,\dots,\varepsilon_n.</div>

### 1. 证明映射

<div class="kalax-display-math">\langle f,g\rangle_W
=
\sum_{i=1}^n
\langle f(\varepsilon_i),g(\varepsilon_i)\rangle_V</div>

是 <span class="kalax-inline-math">W</span> 上的一个内积。

首先，线性性来自于 <span class="kalax-inline-math">V</span> 上内积的线性性。

对称性如下：

<div class="kalax-display-math">\langle f,g\rangle_W
=
\sum_{i=1}^n
\langle f(\varepsilon_i),g(\varepsilon_i)\rangle_V
=
\sum_{i=1}^n
\langle g(\varepsilon_i),f(\varepsilon_i)\rangle_V
=
\langle g,f\rangle_W.</div>

正定性如下：

<div class="kalax-display-math">\langle f,f\rangle_W
=
\sum_{i=1}^n
\langle f(\varepsilon_i),f(\varepsilon_i)\rangle_V
=
\sum_{i=1}^n
\|f(\varepsilon_i)\|^2
\ge 0.</div>

若

<div class="kalax-display-math">\langle f,f\rangle_W=0,</div>

则

<div class="kalax-display-math">\sum_{i=1}^n\|f(\varepsilon_i)\|^2=0.</div>

由于每一项都非负，所以每一项都为 <span class="kalax-inline-math">0</span>。因此

<div class="kalax-display-math">f(\varepsilon_i)=0,\qquad i=1,\dots,n.</div>

因为 <span class="kalax-inline-math">\varepsilon_1,\dots,\varepsilon_n</span> 是 <span class="kalax-inline-math">U</span> 的一组基，所以

<div class="kalax-display-math">f=0.</div>

因此该映射是 <span class="kalax-inline-math">W</span> 上的一个内积。

### 2. 定义

<div class="kalax-display-math">T(\mathcal A):W\to W,</div>

其中

<div class="kalax-display-math">T(\mathcal A)(f):x\mapsto f(\mathcal A x).</div>

证明 <span class="kalax-inline-math">T(\mathcal A)</span> 是 <span class="kalax-inline-math">W</span> 上的线性变换。

任取 <span class="kalax-inline-math">f,g\in W</span>，<span class="kalax-inline-math">\lambda\in\mathbb R</span>。对任意 <span class="kalax-inline-math">x\in U</span>，有

<div class="kalax-display-math">T(\mathcal A)(f+\lambda g)(x)
=
(f+\lambda g)(\mathcal A x)
=
f(\mathcal A x)+\lambda g(\mathcal A x).</div>

所以

<div class="kalax-display-math">T(\mathcal A)(f+\lambda g)
=
T(\mathcal A)(f)+\lambda T(\mathcal A)(g).</div>

因此 <span class="kalax-inline-math">T(\mathcal A)</span> 是线性变换。

### 3. 证明 <span class="kalax-inline-math">T(\mathcal A)</span> 是 <span class="kalax-inline-math">W</span> 上的正交变换，当且仅当 <span class="kalax-inline-math">\mathcal A</span> 是 <span class="kalax-inline-math">U</span> 上的正交变换

先证充分性。

若 <span class="kalax-inline-math">\mathcal A</span> 是 <span class="kalax-inline-math">U</span> 上的正交变换，则

<div class="kalax-display-math">\mathcal A\varepsilon_1,\dots,\mathcal A\varepsilon_n</div>

也是 <span class="kalax-inline-math">U</span> 的一组规范正交基。

于是

<div class="kalax-display-math">\langle T(\mathcal A)f,T(\mathcal A)g\rangle_W
=
\sum_{i=1}^n
\langle f(\mathcal A\varepsilon_i),g(\mathcal A\varepsilon_i)\rangle_V.</div>

由于 <span class="kalax-inline-math">\mathcal A\varepsilon_1,\dots,\mathcal A\varepsilon_n</span> 也是一组规范正交基，所以上式等于

<div class="kalax-display-math">\sum_{i=1}^n
\langle f(\varepsilon_i),g(\varepsilon_i)\rangle_V
=
\langle f,g\rangle_W.</div>

因此 <span class="kalax-inline-math">T(\mathcal A)</span> 保持内积，所以 <span class="kalax-inline-math">T(\mathcal A)</span> 是正交变换。

再证必要性。

若 <span class="kalax-inline-math">T(\mathcal A)</span> 是 <span class="kalax-inline-math">W</span> 上的正交变换，则它保持 <span class="kalax-inline-math">W</span> 上的范数。

任取 <span class="kalax-inline-math">u\in U</span>，固定一个单位向量 <span class="kalax-inline-math">v_0\in V</span>，定义线性映射

<div class="kalax-display-math">f_u:U\to V</div>

为

<div class="kalax-display-math">f_u(x)=\langle x,u\rangle_U v_0.</div>

则

<div class="kalax-display-math">\|f_u\|_W^2
=
\sum_{i=1}^n
\|f_u(\varepsilon_i)\|^2
=
\sum_{i=1}^n
|\langle \varepsilon_i,u\rangle|^2
=
\|u\|^2.</div>

另一方面，

<div class="kalax-display-math">T(\mathcal A)(f_u)(x)
=
f_u(\mathcal A x)
=
\langle \mathcal A x,u\rangle_U v_0
=
\langle x,\mathcal A^*u\rangle_U v_0.</div>

所以

<div class="kalax-display-math">T(\mathcal A)(f_u)=f_{\mathcal A^*u}.</div>

由于 <span class="kalax-inline-math">T(\mathcal A)</span> 保持范数，有

<div class="kalax-display-math">\|f_u\|_W
=
\|T(\mathcal A)(f_u)\|_W.</div>

于是

<div class="kalax-display-math">\|u\|
=
\|\mathcal A^*u\|.</div>

这对任意 <span class="kalax-inline-math">u\in U</span> 都成立，所以 <span class="kalax-inline-math">\mathcal A^*</span> 保持范数，因此 <span class="kalax-inline-math">\mathcal A^*</span> 是正交变换。

于是 <span class="kalax-inline-math">\mathcal A</span> 也是正交变换。

综上，

<div class="kalax-display-math">\boxed{
T(\mathcal A)\text{ 是正交变换}
\iff
\mathcal A\text{ 是正交变换}
}.</div>