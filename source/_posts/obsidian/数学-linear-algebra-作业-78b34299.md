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

设 \(\mathcal A\in \operatorname{End}(V)\) 为正规变换。证明：

\[
\operatorname{Im}(\mathcal A)=\operatorname{Im}(\mathcal A^*).
\]

因为 \(\mathcal A\) 是正规变换，所以

\[
\mathcal A\mathcal A^*=\mathcal A^*\mathcal A.
\]

对任意 \(x\in V\)，有

\[
\|\mathcal A x\|^2
=\langle \mathcal A x,\mathcal A x\rangle
=\langle \mathcal A^*\mathcal A x,x\rangle,
\]

而

\[
\|\mathcal A^*x\|^2
=\langle \mathcal A^*x,\mathcal A^*x\rangle
=\langle \mathcal A\mathcal A^*x,x\rangle.
\]

由正规性可得

\[
\|\mathcal A x\|^2=\|\mathcal A^*x\|^2.
\]

因此

\[
\mathcal A x=0
\iff
\mathcal A^*x=0.
\]

所以

\[
\ker \mathcal A=\ker \mathcal A^*.
\]

又因为有限维内积空间中有

\[
\operatorname{Im}(\mathcal A)
=
(\ker \mathcal A^*)^\perp,
\]

以及

\[
\operatorname{Im}(\mathcal A^*)
=
(\ker \mathcal A)^\perp.
\]

于是

\[
\operatorname{Im}(\mathcal A)
=
(\ker \mathcal A^*)^\perp
=
(\ker \mathcal A)^\perp
=
\operatorname{Im}(\mathcal A^*).
\]

所以

\[
\boxed{\operatorname{Im}(\mathcal A)=\operatorname{Im}(\mathcal A^*)}.
\]

---

## 习题 7.2.21

设 \(A\in M_n(\mathbb R)\) 为对称矩阵。对于每个 \(i\in[1,n]\)，记 \(c_i\) 为 \(A\) 的所有 \(i\) 阶主子式之和。

证明：如果 \(c_i\ge 0\) 对每个 \(i\in[1,n]\) 成立，那么 \(A\) 是半正定的。如果再有 \(c_n>0\)，则 \(A\) 是正定的。

因为 \(A\) 是实对称矩阵，所以存在正交矩阵 \(Q\)，使得

\[
Q^TAQ=\operatorname{diag}(\lambda_1,\dots,\lambda_n),
\]

其中 \(\lambda_1,\dots,\lambda_n\in\mathbb R\)。

矩阵 \(A\) 的特征多项式为

\[
p_A(t)=\det(tI-A)
=t^n-c_1t^{n-1}+c_2t^{n-2}-\cdots+(-1)^nc_n.
\]

反设 \(A\) 有负特征值。设该负特征值为 \(-s\)，其中 \(s>0\)。因为 \(-s\) 是特征值，所以

\[
p_A(-s)=0.
\]

但是

\[
p_A(-s)
=
(-1)^n
\left(
s^n+c_1s^{n-1}+c_2s^{n-2}+\cdots+c_n
\right).
\]

由于

\[
s>0,\qquad c_i\ge 0,
\]

所以上式括号中的数严格大于 \(0\)，因此

\[
p_A(-s)\neq 0.
\]

这与 \(p_A(-s)=0\) 矛盾。

所以 \(A\) 没有负特征值，即

\[
\lambda_i\ge 0,\qquad i=1,\dots,n.
\]

因此 \(A\) 是半正定矩阵。

如果进一步有

\[
c_n>0,
\]

注意到

\[
c_n=\det A=\lambda_1\lambda_2\cdots\lambda_n.
\]

而所有 \(\lambda_i\ge 0\)，且它们的乘积大于 \(0\)，所以每个 \(\lambda_i\) 都大于 \(0\)。因此 \(A\) 是正定矩阵。

综上，结论成立。

---

## 习题 7.2.22

设 \(A,B\in M_n(\mathbb R)\) 均为对称矩阵，其中 \(A\) 正定。证明：存在可逆矩阵 \(P\in M_n(\mathbb R)\)，使得

\[
P^TAP
\]

和

\[
P^TBP
\]

同时为对角矩阵。

因为 \(A\) 正定，所以存在可逆矩阵 \(S\)，使得

\[
S^TAS=I.
\]

令

\[
C=S^TBS.
\]

因为 \(B\) 是对称矩阵，所以

\[
C^T=(S^TBS)^T=S^TB^TS=S^TBS=C.
\]

因此 \(C\) 也是实对称矩阵。

由实对称矩阵正交对角化定理，存在正交矩阵 \(Q\)，使得

\[
Q^TCQ=D,
\]

其中 \(D\) 是对角矩阵。

令

\[
P=SQ.
\]

则

\[
P^TAP
=
Q^TS^TASQ
=
Q^TIQ
=
I,
\]

是对角矩阵。

同时

\[
P^TBP
=
Q^TS^TBSQ
=
Q^TCQ
=
D,
\]

也是对角矩阵。

因此存在可逆矩阵 \(P\)，使得 \(P^TAP\) 和 \(P^TBP\) 同时为对角矩阵。

---

## 习题 7.2.24

设 \(b,c\in\mathbb R\) 且

\[
b^2-4c<0.
\]

举例说明：存在一个线性变换 \(\mathcal A\in\operatorname{End}(V)\)，使得

\[
\mathcal A^2+b\mathcal A+cI
\]

不可逆。

因为

\[
b^2-4c<0,
\]

所以多项式

\[
x^2+bx+c
\]

在实数范围内没有根，但在复数范围内有一对共轭复根

\[
\alpha\pm i\beta,
\]

其中

\[
\alpha=-\frac b2,\qquad
\beta=\frac{\sqrt{4c-b^2}}2\neq 0.
\]

取 \(V=\mathbb R^2\)，定义线性变换 \(\mathcal A\) 在标准基下的矩阵为

\[
A=
\begin{pmatrix}
\alpha & -\beta\\
\beta & \alpha
\end{pmatrix}.
\]

该矩阵对应复平面中“乘以复数 \(\alpha+i\beta\)”的线性变换。

由于 \(\alpha+i\beta\) 是方程

\[
x^2+bx+c=0
\]

的根，所以对应的实矩阵满足

\[
A^2+bA+cI=0.
\]

因此

\[
\mathcal A^2+b\mathcal A+cI
\]

是零变换。

零变换不可逆，所以这就给出了所需例子。

这也说明，如果不假设 \(\mathcal A\) 自伴，那么结论不再成立。

---

## 习题 7.2.25

设 \(\mathcal A,\mathcal B\) 是 \(n\) 维内积空间 \(V\) 上的两个自伴算子。证明下列陈述等价：

1. 存在 \(V\) 的一组规范正交基 \(\mathcal E\)，使得 \(M_\mathcal E(\mathcal A)\) 和 \(M_\mathcal E(\mathcal B)\) 同时为对角矩阵；
2. \(\mathcal A\) 和 \(\mathcal B\) 可交换，即

\[
\mathcal A\mathcal B=\mathcal B\mathcal A.
\]

### 证明 \(1\Rightarrow 2\)

若存在一组规范正交基 \(\mathcal E\)，使得

\[
M_\mathcal E(\mathcal A)
\]

和

\[
M_\mathcal E(\mathcal B)
\]

同时为对角矩阵。

因为对角矩阵之间一定可交换，所以

\[
M_\mathcal E(\mathcal A)M_\mathcal E(\mathcal B)
=
M_\mathcal E(\mathcal B)M_\mathcal E(\mathcal A).
\]

因此

\[
\mathcal A\mathcal B=\mathcal B\mathcal A.
\]

### 证明 \(2\Rightarrow 1\)

因为 \(\mathcal A\) 是自伴算子，所以 \(V\) 可以正交分解为 \(\mathcal A\) 的特征子空间直和：

\[
V=\bigoplus_\lambda V_\lambda,
\]

其中

\[
V_\lambda=\ker(\mathcal A-\lambda I).
\]

下面证明每个 \(V_\lambda\) 在 \(\mathcal B\) 下不变。

任取 \(v\in V_\lambda\)，则

\[
\mathcal Av=\lambda v.
\]

又因为

\[
\mathcal A\mathcal B=\mathcal B\mathcal A,
\]

所以

\[
\mathcal A(\mathcal Bv)
=
\mathcal B(\mathcal Av)
=
\mathcal B(\lambda v)
=
\lambda\mathcal Bv.
\]

因此

\[
\mathcal Bv\in V_\lambda.
\]

所以 \(\mathcal B\) 保持 \(\mathcal A\) 的每个特征子空间不变。

由于 \(\mathcal B\) 也是自伴算子，所以 \(\mathcal B\) 在每个 \(V_\lambda\) 上的限制仍然是自伴算子。于是可以在每个 \(V_\lambda\) 中选取一组规范正交基，使得 \(\mathcal B\) 在该子空间上对角化。

把所有这些规范正交基合并起来，就得到 \(V\) 的一组规范正交基。

在这组基下，\(\mathcal A\) 在每个 \(V_\lambda\) 上都是数乘 \(\lambda I\)，因此 \(\mathcal A\) 是对角的；而 \(\mathcal B\) 也被构造为对角的。

所以 \(\mathcal A\) 和 \(\mathcal B\) 可以同时正交对角化。

因此两条陈述等价。

---

## 习题 7.2.27

设 \(A\) 为 \(n\) 阶实正规矩阵。假设 \(\lambda\in\mathbb C\) 是 \(A\) 的一个复特征值，列向量 \(\alpha\in\mathbb C^n\) 满足

\[
A\alpha=\lambda\alpha.
\]

证明：

\[
A^T\alpha=\overline{\lambda}\alpha.
\]

因为 \(A\) 是实正规矩阵，所以

\[
AA^T=A^TA.
\]

把 \(A\) 看作复空间 \(\mathbb C^n\) 上的矩阵，则它仍然是正规矩阵，并且它的伴随矩阵为

\[
A^*=A^T.
\]

由正规矩阵的性质可知：如果

\[
A\alpha=\lambda\alpha,
\]

那么

\[
A^*\alpha=\overline{\lambda}\alpha.
\]

又因为这里

\[
A^*=A^T,
\]

所以

\[
A^T\alpha=\overline{\lambda}\alpha.
\]

证毕。

---

## 习题 7.2.28

设 \(\mathcal A\in \operatorname{End}(V)\) 是正规变换，且最小多项式为

\[
g(X)=(X-a)^2+b^2,
\]

其中 \(a,b\in\mathbb R\)，\(b\neq 0\)。

证明：

\[
\mathcal A
\]

可逆，且

\[
\mathcal A^*=(a^2+b^2)\mathcal A^{-1}.
\]

由最小多项式可知

\[
(\mathcal A-aI)^2+b^2I=0.
\]

展开得

\[
\mathcal A^2-2a\mathcal A+(a^2+b^2)I=0.
\]

于是

\[
\mathcal A(2aI-\mathcal A)=(a^2+b^2)I.
\]

因为

\[
a^2+b^2>0,
\]

所以 \(\mathcal A\) 可逆，并且

\[
\mathcal A^{-1}
=
\frac{1}{a^2+b^2}(2aI-\mathcal A).
\]

因此

\[
(a^2+b^2)\mathcal A^{-1}=2aI-\mathcal A.
\]

下面证明

\[
\mathcal A^*=2aI-\mathcal A.
\]

令

\[
\mathcal B=\mathcal A-aI.
\]

因为 \(\mathcal A\) 正规，所以 \(\mathcal B\) 也是正规变换。并且

\[
\mathcal B^2=-b^2I.
\]

因此 \(\mathcal B\) 的特征值只能是

\[
ib
\]

或

\[
-ib.
\]

由于正规变换可以酉对角化，所以在一组规范正交基下，\(\mathcal B\) 的矩阵为对角矩阵，对角线上只可能出现 \(ib\) 或 \(-ib\)。

于是 \(\mathcal B^*\) 的特征值是这些特征值的共轭，即 \(-ib\) 或 \(ib\)。

因此

\[
\mathcal B^*=-\mathcal B.
\]

也就是说

\[
(\mathcal A-aI)^*=-(\mathcal A-aI).
\]

展开得

\[
\mathcal A^*-aI=-\mathcal A+aI.
\]

所以

\[
\mathcal A^*=2aI-\mathcal A.
\]

结合前面得到的

\[
2aI-\mathcal A=(a^2+b^2)\mathcal A^{-1},
\]

可得

\[
\boxed{\mathcal A^*=(a^2+b^2)\mathcal A^{-1}}.
\]

---

## 习题 7.2.30

设 \(C[-\pi,\pi]\) 是闭区间 \([-\pi,\pi]\) 上所有实值连续函数构成的空间，在其上定义内积：

\[
\langle f,g\rangle
=
\int_{-\pi}^{\pi}f(x)g(x)\,dx.
\]

取

\[
V=\operatorname{span}
(1,\cos x,\cos 2x,\cos 3x,\sin x,\sin 2x,\sin 3x).
\]

### 1. 证明：对于任意 \(f\in V\)，其导函数 \(f'\) 也属于 \(V\)

任取 \(f\in V\)，则 \(f\) 可以写成

\[
f(x)
=
a_0+a_1\cos x+a_2\cos 2x+a_3\cos 3x
+b_1\sin x+b_2\sin 2x+b_3\sin 3x.
\]

求导得

\[
f'(x)
=
-a_1\sin x-2a_2\sin 2x-3a_3\sin 3x
+b_1\cos x+2b_2\cos 2x+3b_3\cos 3x.
\]

显然 \(f'(x)\) 仍然是

\[
1,\cos x,\cos 2x,\cos 3x,\sin x,\sin 2x,\sin 3x
\]

的线性组合。

因此

\[
f'\in V.
\]

### 2. 定义 \(\mathcal A:V\to V,\ f\mapsto f'\)，证明 \(\mathcal A\) 是斜对称变换

要证明 \(\mathcal A\) 是斜对称变换，即证明对任意 \(f,g\in V\)，有

\[
\langle \mathcal Af,g\rangle
=
-\langle f,\mathcal Ag\rangle.
\]

也就是证明

\[
\langle f',g\rangle
=
-\langle f,g'\rangle.
\]

由分部积分公式，

\[
\int_{-\pi}^{\pi}f'(x)g(x)\,dx
=
f(x)g(x)\bigg|_{-\pi}^{\pi}
-
\int_{-\pi}^{\pi}f(x)g'(x)\,dx.
\]

因为 \(f,g\in V\) 都是由 \(1,\sin kx,\cos kx\) 线性组合而成，所以它们满足

\[
f(\pi)=f(-\pi),
\qquad
g(\pi)=g(-\pi).
\]

因此

\[
f(x)g(x)\bigg|_{-\pi}^{\pi}=0.
\]

所以

\[
\int_{-\pi}^{\pi}f'(x)g(x)\,dx
=
-\int_{-\pi}^{\pi}f(x)g'(x)\,dx.
\]

即

\[
\langle \mathcal Af,g\rangle
=
-\langle f,\mathcal Ag\rangle.
\]

所以 \(\mathcal A\) 是斜对称变换。

### 3. 求 \(V\) 的一组规范正交基，使得 \(M_\mathcal E(\mathcal A)\) 具有正交相似标准形

注意到

\[
\int_{-\pi}^{\pi}1^2\,dx=2\pi,
\]

并且对于 \(k=1,2,3\)，

\[
\int_{-\pi}^{\pi}\cos^2 kx\,dx=\pi,
\qquad
\int_{-\pi}^{\pi}\sin^2 kx\,dx=\pi.
\]

同时，不同频率之间正交，\(\sin\) 与 \(\cos\) 之间也正交。

所以取

\[
e_0=\frac{1}{\sqrt{2\pi}},
\]

以及

\[
c_k=\frac{\cos kx}{\sqrt{\pi}},
\qquad
s_k=\frac{\sin kx}{\sqrt{\pi}},
\qquad k=1,2,3.
\]

令

\[
\mathcal E=(e_0,c_1,s_1,c_2,s_2,c_3,s_3).
\]

则 \(\mathcal E\) 是 \(V\) 的一组规范正交基。

因为

\[
\mathcal A(e_0)=0,
\]

\[
\mathcal A(c_k)=-ks_k,
\]

\[
\mathcal A(s_k)=kc_k.
\]

所以在基 \(\mathcal E\) 下，\(\mathcal A\) 的矩阵为

\[
M_\mathcal E(\mathcal A)
=
\begin{pmatrix}
0&0&0&0&0&0&0\\
0&0&1&0&0&0&0\\
0&-1&0&0&0&0&0\\
0&0&0&0&2&0&0\\
0&0&0&-2&0&0&0\\
0&0&0&0&0&0&3\\
0&0&0&0&0&-3&0
\end{pmatrix}.
\]

即

\[
M_\mathcal E(\mathcal A)
=
0
\oplus
\begin{pmatrix}
0&1\\
-1&0
\end{pmatrix}
\oplus
\begin{pmatrix}
0&2\\
-2&0
\end{pmatrix}
\oplus
\begin{pmatrix}
0&3\\
-3&0
\end{pmatrix}.
\]

这就是斜对称矩阵的正交相似标准形。

---

## 习题 7.2.31

设 \(A,B\in M_n(\mathbb R)\)，其中 \(A\) 正定。证明：

1. 对任意正整数 \(k\)，矩阵 \(A^k\) 也正定；
2. 如果存在正整数 \(r\)，使得 \(B\) 与 \(A^r\) 可交换，则 \(B\) 与 \(A\) 也可交换。

### 1. 证明 \(A^k\) 正定

因为 \(A\) 正定，所以 \(A\) 是实对称矩阵，且所有特征值都为正。

由谱定理，存在正交矩阵 \(Q\)，使得

\[
A=QDQ^T,
\]

其中

\[
D=\operatorname{diag}(\lambda_1,\dots,\lambda_n),
\qquad
\lambda_i>0.
\]

于是

\[
A^k=QD^kQ^T,
\]

其中

\[
D^k=\operatorname{diag}(\lambda_1^k,\dots,\lambda_n^k).
\]

因为

\[
\lambda_i>0,
\]

所以

\[
\lambda_i^k>0.
\]

因此 \(A^k\) 的所有特征值仍然为正，所以 \(A^k\) 正定。

### 2. 证明若 \(B\) 与 \(A^r\) 可交换，则 \(B\) 与 \(A\) 可交换

仍设

\[
A=QDQ^T,
\]

其中

\[
D=\operatorname{diag}(\lambda_1,\dots,\lambda_n),
\qquad
\lambda_i>0.
\]

于是

\[
A^r=QD^rQ^T,
\]

其中

\[
D^r=\operatorname{diag}(\lambda_1^r,\dots,\lambda_n^r).
\]

由于函数

\[
x\mapsto x^r
\]

在正实数范围内严格单调，所以

\[
\lambda_i^r=\lambda_j^r
\iff
\lambda_i=\lambda_j.
\]

这说明 \(A\) 与 \(A^r\) 有相同的特征子空间分解。

若

\[
BA^r=A^rB,
\]

则 \(B\) 保持 \(A^r\) 的每个特征子空间不变。

由于 \(A\) 与 \(A^r\) 的特征子空间相同，所以 \(B\) 也保持 \(A\) 的每个特征子空间不变。

而在 \(A\) 的每个特征子空间上，\(A\) 都只是数乘变换。因此在每个特征子空间上，\(A\) 与 \(B\) 可交换。

所以在整个空间上有

\[
BA=AB.
\]

即 \(B\) 与 \(A\) 可交换。

---

## 习题 7.2.32

设 \(U\) 和 \(V\) 分别为 \(n\) 维和 \(m\) 维内积空间，

\[
W=\operatorname{Hom}(U,V).
\]

取定 \(U\) 的一组规范正交基

\[
\varepsilon_1,\dots,\varepsilon_n.
\]

### 1. 证明映射

\[
\langle f,g\rangle_W
=
\sum_{i=1}^n
\langle f(\varepsilon_i),g(\varepsilon_i)\rangle_V
\]

是 \(W\) 上的一个内积。

首先，线性性来自于 \(V\) 上内积的线性性。

对称性如下：

\[
\langle f,g\rangle_W
=
\sum_{i=1}^n
\langle f(\varepsilon_i),g(\varepsilon_i)\rangle_V
=
\sum_{i=1}^n
\langle g(\varepsilon_i),f(\varepsilon_i)\rangle_V
=
\langle g,f\rangle_W.
\]

正定性如下：

\[
\langle f,f\rangle_W
=
\sum_{i=1}^n
\langle f(\varepsilon_i),f(\varepsilon_i)\rangle_V
=
\sum_{i=1}^n
\|f(\varepsilon_i)\|^2
\ge 0.
\]

若

\[
\langle f,f\rangle_W=0,
\]

则

\[
\sum_{i=1}^n\|f(\varepsilon_i)\|^2=0.
\]

由于每一项都非负，所以每一项都为 \(0\)。因此

\[
f(\varepsilon_i)=0,\qquad i=1,\dots,n.
\]

因为 \(\varepsilon_1,\dots,\varepsilon_n\) 是 \(U\) 的一组基，所以

\[
f=0.
\]

因此该映射是 \(W\) 上的一个内积。

### 2. 定义

\[
T(\mathcal A):W\to W,
\]

其中

\[
T(\mathcal A)(f):x\mapsto f(\mathcal A x).
\]

证明 \(T(\mathcal A)\) 是 \(W\) 上的线性变换。

任取 \(f,g\in W\)，\(\lambda\in\mathbb R\)。对任意 \(x\in U\)，有

\[
T(\mathcal A)(f+\lambda g)(x)
=
(f+\lambda g)(\mathcal A x)
=
f(\mathcal A x)+\lambda g(\mathcal A x).
\]

所以

\[
T(\mathcal A)(f+\lambda g)
=
T(\mathcal A)(f)+\lambda T(\mathcal A)(g).
\]

因此 \(T(\mathcal A)\) 是线性变换。

### 3. 证明 \(T(\mathcal A)\) 是 \(W\) 上的正交变换，当且仅当 \(\mathcal A\) 是 \(U\) 上的正交变换

先证充分性。

若 \(\mathcal A\) 是 \(U\) 上的正交变换，则

\[
\mathcal A\varepsilon_1,\dots,\mathcal A\varepsilon_n
\]

也是 \(U\) 的一组规范正交基。

于是

\[
\langle T(\mathcal A)f,T(\mathcal A)g\rangle_W
=
\sum_{i=1}^n
\langle f(\mathcal A\varepsilon_i),g(\mathcal A\varepsilon_i)\rangle_V.
\]

由于 \(\mathcal A\varepsilon_1,\dots,\mathcal A\varepsilon_n\) 也是一组规范正交基，所以上式等于

\[
\sum_{i=1}^n
\langle f(\varepsilon_i),g(\varepsilon_i)\rangle_V
=
\langle f,g\rangle_W.
\]

因此 \(T(\mathcal A)\) 保持内积，所以 \(T(\mathcal A)\) 是正交变换。

再证必要性。

若 \(T(\mathcal A)\) 是 \(W\) 上的正交变换，则它保持 \(W\) 上的范数。

任取 \(u\in U\)，固定一个单位向量 \(v_0\in V\)，定义线性映射

\[
f_u:U\to V
\]

为

\[
f_u(x)=\langle x,u\rangle_U v_0.
\]

则

\[
\|f_u\|_W^2
=
\sum_{i=1}^n
\|f_u(\varepsilon_i)\|^2
=
\sum_{i=1}^n
|\langle \varepsilon_i,u\rangle|^2
=
\|u\|^2.
\]

另一方面，

\[
T(\mathcal A)(f_u)(x)
=
f_u(\mathcal A x)
=
\langle \mathcal A x,u\rangle_U v_0
=
\langle x,\mathcal A^*u\rangle_U v_0.
\]

所以

\[
T(\mathcal A)(f_u)=f_{\mathcal A^*u}.
\]

由于 \(T(\mathcal A)\) 保持范数，有

\[
\|f_u\|_W
=
\|T(\mathcal A)(f_u)\|_W.
\]

于是

\[
\|u\|
=
\|\mathcal A^*u\|.
\]

这对任意 \(u\in U\) 都成立，所以 \(\mathcal A^*\) 保持范数，因此 \(\mathcal A^*\) 是正交变换。

于是 \(\mathcal A\) 也是正交变换。

综上，

\[
\boxed{
T(\mathcal A)\text{ 是正交变换}
\iff
\mathcal A\text{ 是正交变换}
}.
\]