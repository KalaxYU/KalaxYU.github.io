---
title: "Abstract Algebra 作业"
date: 2026-06-07 00:13:28
updated: 2026-06-07 00:13:28
permalink: notes/数学-abstract-algebra-作业-440112c0/
categories:
  - "数学"
  - "Abstract algebra"
tags:
  - "obsidian"
  - "数学"
  - "Abstract algebra"
description: "Abstract Algebra 作业 HW7 题目 Recall in our course, all rings have identity elements. 1. A ring R such that a^2=a for all a in R is called a Boolean ring"
mathjax: true
---
# Abstract Algebra 作业

## HW7

### 题目

Recall in our course, all rings have identity elements.

1. A ring <span class="kalax-inline-math">R</span> such that <span class="kalax-inline-math">a^2=a</span> for all <span class="kalax-inline-math">a\in R</span> is called a Boolean ring. Prove that every Boolean ring <span class="kalax-inline-math">R</span> is commutative and <span class="kalax-inline-math">a+a=0</span> for all <span class="kalax-inline-math">a\in R</span>.

2. Prove: if <span class="kalax-inline-math">A</span> is the abelian group <span class="kalax-inline-math">\mathbb Z\oplus \mathbb Z</span>, then <span class="kalax-inline-math">\operatorname{End} A</span> is a non-commutative ring.

3. A finite ring with more than one element and no zero divisors is a division ring.

4. An element of a ring is nilpotent if <span class="kalax-inline-math">a^n=0</span> for some <span class="kalax-inline-math">n</span>. Prove that in a commutative ring <span class="kalax-inline-math">a+b</span> is nilpotent if <span class="kalax-inline-math">a</span> and <span class="kalax-inline-math">b</span> are nilpotent. Show that this result may be false if <span class="kalax-inline-math">R</span> is not commutative. (Give counterexamples in the non-commutative case.)

5. In a ring <span class="kalax-inline-math">R</span> the following conditions are equivalent.

   (a) <span class="kalax-inline-math">R</span> has no nonzero nilpotent elements.

   (b) If <span class="kalax-inline-math">a\in R</span> and <span class="kalax-inline-math">a^2=0</span>, then <span class="kalax-inline-math">a=0</span>.

### 答案

1. Since <span class="kalax-inline-math">a^2=a</span>, applying this to <span class="kalax-inline-math">a+a</span> gives
   <div class="kalax-display-math">a+a=(a+a)^2=a^2+a^2+a^2+a^2=4a.</div>
   Hence <span class="kalax-inline-math">2a=0</span> for every <span class="kalax-inline-math">a\in R</span>.

   Applying the Boolean condition to <span class="kalax-inline-math">a+b</span>,
   <div class="kalax-display-math">a+b=(a+b)^2=a^2+ab+ba+b^2=a+ab+ba+b.</div>
   Thus <span class="kalax-inline-math">ab+ba=0</span>. Since every element has additive inverse equal to itself, this means <span class="kalax-inline-math">ab=ba</span>. Therefore <span class="kalax-inline-math">R</span> is commutative and <span class="kalax-inline-math">a+a=0</span> for all <span class="kalax-inline-math">a\in R</span>.

2. Identify <span class="kalax-inline-math">\operatorname{End}(\mathbb Z\oplus\mathbb Z)</span> with <span class="kalax-inline-math">2\times 2</span> integer matrices, where addition is matrix addition and multiplication is composition, i.e. matrix multiplication.

   Let
   <div class="kalax-display-math">A=\begin{pmatrix}0&amp;1\\0&amp;0\end{pmatrix},\qquad
   B=\begin{pmatrix}0&amp;0\\1&amp;0\end{pmatrix}.</div>
   Then
   <div class="kalax-display-math">AB=\begin{pmatrix}1&amp;0\\0&amp;0\end{pmatrix},\qquad
   BA=\begin{pmatrix}0&amp;0\\0&amp;1\end{pmatrix}.</div>
   Hence <span class="kalax-inline-math">AB\ne BA</span>, so <span class="kalax-inline-math">\operatorname{End}A</span> is non-commutative.

3. Let <span class="kalax-inline-math">R</span> be finite, <span class="kalax-inline-math">|R|&gt;1</span>, and suppose <span class="kalax-inline-math">R</span> has no zero divisors. For any nonzero <span class="kalax-inline-math">a\in R</span>, the map
   <div class="kalax-display-math">L_a:R\to R,\qquad x\mapsto ax</div>
   is injective, since <span class="kalax-inline-math">ax=ay</span> implies <span class="kalax-inline-math">a(x-y)=0</span>, hence <span class="kalax-inline-math">x-y=0</span>. Since <span class="kalax-inline-math">R</span> is finite, <span class="kalax-inline-math">L_a</span> is surjective. Therefore there exists <span class="kalax-inline-math">b\in R</span> such that <span class="kalax-inline-math">ab=1</span>.

   Similarly the map <span class="kalax-inline-math">R_a:x\mapsto xa</span> is injective and hence surjective, so there exists <span class="kalax-inline-math">c\in R</span> such that <span class="kalax-inline-math">ca=1</span>. Then
   <div class="kalax-display-math">c=c(ab)=(ca)b=b.</div>
   Thus <span class="kalax-inline-math">b</span> is a two-sided inverse of <span class="kalax-inline-math">a</span>. Every nonzero element is invertible, so <span class="kalax-inline-math">R</span> is a division ring.

4. Suppose <span class="kalax-inline-math">R</span> is commutative, <span class="kalax-inline-math">a^m=0</span>, and <span class="kalax-inline-math">b^n=0</span>. By the binomial theorem,
   <div class="kalax-display-math">(a+b)^{m+n-1}=\sum_{i=0}^{m+n-1}\binom{m+n-1}{i}a^i b^{m+n-1-i}.</div>
   For each term, either <span class="kalax-inline-math">i\ge m</span> or <span class="kalax-inline-math">m+n-1-i\ge n</span>. Hence every term is <span class="kalax-inline-math">0</span>, so <span class="kalax-inline-math">(a+b)^{m+n-1}=0</span>. Therefore <span class="kalax-inline-math">a+b</span> is nilpotent.

   In the non-commutative ring <span class="kalax-inline-math">M_2(F)</span>, take
   <div class="kalax-display-math">A=\begin{pmatrix}0&amp;1\\0&amp;0\end{pmatrix},\qquad
   B=\begin{pmatrix}0&amp;0\\1&amp;0\end{pmatrix}.</div>
   Then <span class="kalax-inline-math">A^2=B^2=0</span>, so both are nilpotent. But
   <div class="kalax-display-math">A+B=\begin{pmatrix}0&amp;1\\1&amp;0\end{pmatrix},
   \qquad
   (A+B)^2=I.</div>
   Thus <span class="kalax-inline-math">A+B</span> is not nilpotent.

5. <span class="kalax-inline-math">(a)\Rightarrow(b)</span> is immediate: if <span class="kalax-inline-math">a^2=0</span>, then <span class="kalax-inline-math">a</span> is nilpotent, so <span class="kalax-inline-math">a=0</span>.

   For <span class="kalax-inline-math">(b)\Rightarrow(a)</span>, suppose <span class="kalax-inline-math">a</span> is nilpotent and <span class="kalax-inline-math">a\ne0</span>. Let <span class="kalax-inline-math">k</span> be minimal such that <span class="kalax-inline-math">a^k=0</span>. Since <span class="kalax-inline-math">a\ne0</span>, we have <span class="kalax-inline-math">k&gt;1</span>. Put <span class="kalax-inline-math">m=\lceil k/2\rceil</span>. Then <span class="kalax-inline-math">m&lt;k</span>, so <span class="kalax-inline-math">a^m\ne0</span>, but
   <div class="kalax-display-math">(a^m)^2=a^{2m}=0.</div>
   This contradicts (b). Hence there are no nonzero nilpotent elements.

## HW8

### 题目

1. Let <span class="kalax-inline-math">I</span> be an ideal in a commutative ring <span class="kalax-inline-math">R</span>. Let
   <div class="kalax-display-math">\operatorname{Rad} I=\{r\in R\mid r^n\in I\text{ for some }n\}.</div>
   Show that <span class="kalax-inline-math">\operatorname{Rad} I</span> is also an ideal.

2. Let <span class="kalax-inline-math">F</span> be a field. Let <span class="kalax-inline-math">S=\operatorname{Mat}_{2\times 2}(F)</span> be the ring of <span class="kalax-inline-math">2</span> by <span class="kalax-inline-math">2</span> matrices over <span class="kalax-inline-math">F</span>. Recall the center of a ring consists of elements commuting with all elements. Prove the center of <span class="kalax-inline-math">S</span> consists of all matrices of the form
   <div class="kalax-display-math">\begin{pmatrix}a&amp;0\\0&amp;a\end{pmatrix}.</div>

3. Let <span class="kalax-inline-math">F</span> be a field. Let <span class="kalax-inline-math">S=\operatorname{Mat}_{2\times 2}(F)</span> be the ring of <span class="kalax-inline-math">2</span> by <span class="kalax-inline-math">2</span> matrices over <span class="kalax-inline-math">F</span>. Show that the center of <span class="kalax-inline-math">S</span> is not an ideal in <span class="kalax-inline-math">S</span>.

4. Let <span class="kalax-inline-math">F</span> be a field. Let <span class="kalax-inline-math">S=\operatorname{Mat}_{n\times n}(F)</span> be the ring of <span class="kalax-inline-math">n\times n</span> matrices over <span class="kalax-inline-math">F</span>. What is its center? Prove your answer.

5. Let <span class="kalax-inline-math">R</span> be a ring and <span class="kalax-inline-math">S</span> the ring of all <span class="kalax-inline-math">n\times n</span> matrices over <span class="kalax-inline-math">R</span>. Prove that <span class="kalax-inline-math">J</span> is an ideal of <span class="kalax-inline-math">S</span> if and only if <span class="kalax-inline-math">J</span> is the set of all <span class="kalax-inline-math">n\times n</span> matrices over <span class="kalax-inline-math">I</span> for some ideal <span class="kalax-inline-math">I</span> in <span class="kalax-inline-math">R</span>.

### 答案

1. Let <span class="kalax-inline-math">a,b\in\operatorname{Rad}I</span>. Then <span class="kalax-inline-math">a^m\in I</span> and <span class="kalax-inline-math">b^n\in I</span> for some <span class="kalax-inline-math">m,n</span>. Since <span class="kalax-inline-math">R</span> is commutative,
   <div class="kalax-display-math">(a-b)^{m+n-1}=\sum_i \binom{m+n-1}{i}a^i(-b)^{m+n-1-i}.</div>
   Each term has either <span class="kalax-inline-math">i\ge m</span> or <span class="kalax-inline-math">m+n-1-i\ge n</span>, so each term lies in <span class="kalax-inline-math">I</span>. Hence <span class="kalax-inline-math">a-b\in\operatorname{Rad}I</span>.

   If <span class="kalax-inline-math">r\in R</span>, then
   <div class="kalax-display-math">(ra)^m=r^m a^m\in I,</div>
   so <span class="kalax-inline-math">ra\in\operatorname{Rad}I</span>. Therefore <span class="kalax-inline-math">\operatorname{Rad}I</span> is an ideal.

2. Let
   <div class="kalax-display-math">A=\begin{pmatrix}a&amp;b\\c&amp;d\end{pmatrix}</div>
   be central. Commuting with
   <div class="kalax-display-math">E_{11}=\begin{pmatrix}1&amp;0\\0&amp;0\end{pmatrix}</div>
   gives
   <div class="kalax-display-math">AE_{11}=\begin{pmatrix}a&amp;0\\c&amp;0\end{pmatrix},\qquad
   E_{11}A=\begin{pmatrix}a&amp;b\\0&amp;0\end{pmatrix}.</div>
   Thus <span class="kalax-inline-math">b=c=0</span>. So <span class="kalax-inline-math">A=\begin{pmatrix}a&amp;0\\0&amp;d\end{pmatrix}</span>.

   Now commute with
   <div class="kalax-display-math">E_{12}=\begin{pmatrix}0&amp;1\\0&amp;0\end{pmatrix}.</div>
   Then
   <div class="kalax-display-math">AE_{12}=\begin{pmatrix}0&amp;a\\0&amp;0\end{pmatrix},\qquad
   E_{12}A=\begin{pmatrix}0&amp;d\\0&amp;0\end{pmatrix}.</div>
   Hence <span class="kalax-inline-math">a=d</span>. Therefore the center is exactly <span class="kalax-inline-math">\{aI_2:a\in F\}</span>.

3. The center contains <span class="kalax-inline-math">I_2</span>. If it were an ideal of <span class="kalax-inline-math">S</span>, then for every <span class="kalax-inline-math">A\in S</span> we would have <span class="kalax-inline-math">AI_2=A</span> in the center. That would force every matrix to be central, which is false. For example <span class="kalax-inline-math">E_{12}</span> is not central. Hence the center is not an ideal.

4. The center of <span class="kalax-inline-math">\operatorname{Mat}_{n\times n}(F)</span> is
   <div class="kalax-display-math">Z(S)=\{aI_n:a\in F\}.</div>
   Indeed, if <span class="kalax-inline-math">A=(a_{ij})</span> commutes with every matrix unit <span class="kalax-inline-math">E_{rs}</span>, then <span class="kalax-inline-math">AE_{rs}=E_{rs}A</span> for all <span class="kalax-inline-math">r,s</span>. Comparing entries shows all off-diagonal entries of <span class="kalax-inline-math">A</span> are <span class="kalax-inline-math">0</span>, and all diagonal entries are equal. Thus <span class="kalax-inline-math">A=aI_n</span>. Conversely, every scalar matrix <span class="kalax-inline-math">aI_n</span> commutes with all matrices.

5. Suppose <span class="kalax-inline-math">I</span> is an ideal of <span class="kalax-inline-math">R</span>. Let <span class="kalax-inline-math">\operatorname{Mat}_n(I)</span> be the set of matrices whose entries lie in <span class="kalax-inline-math">I</span>. It is closed under addition and additive inverses. If <span class="kalax-inline-math">A\in \operatorname{Mat}_n(I)</span> and <span class="kalax-inline-math">B\in \operatorname{Mat}_n(R)</span>, then each entry of <span class="kalax-inline-math">AB</span> and <span class="kalax-inline-math">BA</span> is a finite sum of elements of the form <span class="kalax-inline-math">r i</span> or <span class="kalax-inline-math">i r</span>, so lies in <span class="kalax-inline-math">I</span>. Hence <span class="kalax-inline-math">\operatorname{Mat}_n(I)</span> is an ideal of <span class="kalax-inline-math">S</span>.

   Conversely, let <span class="kalax-inline-math">J</span> be an ideal of <span class="kalax-inline-math">S</span>. Define
   <div class="kalax-display-math">I=\{r\in R:\ r\text{ is the }(1,1)\text{-entry of some matrix in }J\}.</div>
   Then <span class="kalax-inline-math">I</span> is an ideal of <span class="kalax-inline-math">R</span>: addition and negatives are clear, and if <span class="kalax-inline-math">r\in I</span> occurs as the <span class="kalax-inline-math">(1,1)</span>-entry of <span class="kalax-inline-math">A\in J</span>, then <span class="kalax-inline-math">s r</span> and <span class="kalax-inline-math">r s</span> occur as <span class="kalax-inline-math">(1,1)</span>-entries of <span class="kalax-inline-math">sE_{11}A</span> and <span class="kalax-inline-math">AE_{11}sE_{11}</span>, which lie in <span class="kalax-inline-math">J</span>.

   Now take any <span class="kalax-inline-math">A=(a_{ij})\in J</span>. For each <span class="kalax-inline-math">i,j</span>,
   <div class="kalax-display-math">E_{1i}AE_{j1}</div>
   has <span class="kalax-inline-math">a_{ij}</span> in the <span class="kalax-inline-math">(1,1)</span>-entry and <span class="kalax-inline-math">0</span> elsewhere, so <span class="kalax-inline-math">a_{ij}\in I</span>. Thus <span class="kalax-inline-math">J\subseteq\operatorname{Mat}_n(I)</span>.

   Conversely, if <span class="kalax-inline-math">r\in I</span>, choose <span class="kalax-inline-math">A\in J</span> whose <span class="kalax-inline-math">(1,1)</span>-entry is <span class="kalax-inline-math">r</span>. Then
   <div class="kalax-display-math">E_{i1}AE_{1j}</div>
   is the matrix with <span class="kalax-inline-math">r</span> in the <span class="kalax-inline-math">(i,j)</span>-entry and <span class="kalax-inline-math">0</span> elsewhere, so every matrix unit multiple <span class="kalax-inline-math">rE_{ij}</span> lies in <span class="kalax-inline-math">J</span>. Hence every matrix over <span class="kalax-inline-math">I</span> lies in <span class="kalax-inline-math">J</span>. Therefore <span class="kalax-inline-math">J=\operatorname{Mat}_n(I)</span>.

## HW9

### 题目

All rings in this HW are commutative rings with identity.

1. Let <span class="kalax-inline-math">R</span> be a commutative ring with identity and suppose that the ideal <span class="kalax-inline-math">A</span> of <span class="kalax-inline-math">R</span> is contained in a finite union of prime ideals
   <div class="kalax-display-math">P_1\cup\cdots\cup P_n.</div>
   Show that <span class="kalax-inline-math">A\subset P_i</span> for some <span class="kalax-inline-math">i</span>.

2. Let <span class="kalax-inline-math">f:R\to S</span> be an epimorphism of rings with kernel <span class="kalax-inline-math">K</span>.

   (a) If <span class="kalax-inline-math">P</span> is a prime ideal in <span class="kalax-inline-math">R</span> that contains <span class="kalax-inline-math">K</span>, then <span class="kalax-inline-math">f(P)</span> is a prime ideal in <span class="kalax-inline-math">S</span>.

   (b) If <span class="kalax-inline-math">Q</span> is a prime ideal in <span class="kalax-inline-math">S</span>, then <span class="kalax-inline-math">f^{-1}(Q)</span> is a prime ideal in <span class="kalax-inline-math">R</span> that contains <span class="kalax-inline-math">K</span>.

   (c) There is a one-to-one correspondence between the set of all prime ideals in <span class="kalax-inline-math">R</span> that contain <span class="kalax-inline-math">K</span> and the set of all prime ideals in <span class="kalax-inline-math">S</span>, given by <span class="kalax-inline-math">P\mapsto f(P)</span>.

   (d) If <span class="kalax-inline-math">I</span> is an ideal in a ring <span class="kalax-inline-math">R</span>, then every prime ideal in <span class="kalax-inline-math">R/I</span> is of the form <span class="kalax-inline-math">P/I</span>, where <span class="kalax-inline-math">P</span> is a prime ideal in <span class="kalax-inline-math">R</span> that contains <span class="kalax-inline-math">I</span>.

3. An ideal <span class="kalax-inline-math">M\ne R</span> in a commutative ring <span class="kalax-inline-math">R</span> with identity is maximal if and only if for every <span class="kalax-inline-math">r\in R-M</span>, there exists <span class="kalax-inline-math">x\in R</span> such that <span class="kalax-inline-math">1_R-rx\in M</span>.

4. Consider the infinite direct product ring
   <div class="kalax-display-math">R=\prod_{i=1}^{\infty}\mathbb Z.</div>
   Construct an ideal <span class="kalax-inline-math">I</span> such that <span class="kalax-inline-math">I</span> is not of the form
   <div class="kalax-display-math">\prod_{i=1}^{\infty} I_i,</div>
   where each <span class="kalax-inline-math">I_i</span> is an ideal of <span class="kalax-inline-math">\mathbb Z</span>.

### 答案

1. We prove by prime avoidance. Suppose no <span class="kalax-inline-math">P_i</span> contains <span class="kalax-inline-math">A</span>. Removing redundant primes if necessary, assume for each <span class="kalax-inline-math">j</span> that
   <div class="kalax-display-math">A\cap P_j\not\subseteq \bigcup_{i\ne j}P_i.</div>
   Choose
   <div class="kalax-display-math">a_j\in (A\cap P_j)-\bigcup_{i\ne j}P_i.</div>
   Then
   <div class="kalax-display-math">x=a_1+a_2a_3\cdots a_n</div>
   lies in <span class="kalax-inline-math">A</span>. But <span class="kalax-inline-math">x\notin P_1</span>, because <span class="kalax-inline-math">a_1\in P_1</span> while <span class="kalax-inline-math">a_2\cdots a_n\notin P_1</span> by primality. For <span class="kalax-inline-math">j\ge2</span>, we have <span class="kalax-inline-math">a_2\cdots a_n\in P_j</span> but <span class="kalax-inline-math">a_1\notin P_j</span>, so <span class="kalax-inline-math">x\notin P_j</span>. Hence <span class="kalax-inline-math">x\notin P_1\cup\cdots\cup P_n</span>, contradicting <span class="kalax-inline-math">A\subseteq\bigcup_iP_i</span>. Therefore <span class="kalax-inline-math">A\subseteq P_i</span> for some <span class="kalax-inline-math">i</span>.

2. (a) Since <span class="kalax-inline-math">f</span> is surjective, <span class="kalax-inline-math">f(P)</span> is an ideal of <span class="kalax-inline-math">S</span>. Also <span class="kalax-inline-math">f(P)\ne S</span>, because if <span class="kalax-inline-math">1_S\in f(P)</span>, then some <span class="kalax-inline-math">p\in P</span> has <span class="kalax-inline-math">f(p)=1_S</span>, so <span class="kalax-inline-math">p-1_R\in K\subseteq P</span>, hence <span class="kalax-inline-math">1_R\in P</span>, impossible.

   If <span class="kalax-inline-math">ab\in f(P)</span>, choose <span class="kalax-inline-math">r,s\in R</span> with <span class="kalax-inline-math">f(r)=a</span>, <span class="kalax-inline-math">f(s)=b</span>. Then <span class="kalax-inline-math">f(rs)\in f(P)</span>, so <span class="kalax-inline-math">rs-p\in K</span> for some <span class="kalax-inline-math">p\in P</span>. Since <span class="kalax-inline-math">K\subseteq P</span>, we get <span class="kalax-inline-math">rs\in P</span>. Since <span class="kalax-inline-math">P</span> is prime, <span class="kalax-inline-math">r\in P</span> or <span class="kalax-inline-math">s\in P</span>, so <span class="kalax-inline-math">a\in f(P)</span> or <span class="kalax-inline-math">b\in f(P)</span>. Thus <span class="kalax-inline-math">f(P)</span> is prime.

   (b) The preimage <span class="kalax-inline-math">f^{-1}(Q)</span> is an ideal and contains <span class="kalax-inline-math">K=f^{-1}(0)</span>. It is proper because <span class="kalax-inline-math">1_S\notin Q</span>. If <span class="kalax-inline-math">ab\in f^{-1}(Q)</span>, then <span class="kalax-inline-math">f(a)f(b)=f(ab)\in Q</span>. Since <span class="kalax-inline-math">Q</span> is prime, <span class="kalax-inline-math">f(a)\in Q</span> or <span class="kalax-inline-math">f(b)\in Q</span>, so <span class="kalax-inline-math">a\in f^{-1}(Q)</span> or <span class="kalax-inline-math">b\in f^{-1}(Q)</span>. Thus <span class="kalax-inline-math">f^{-1}(Q)</span> is prime.

   (c) The two maps are inverse. If <span class="kalax-inline-math">P\supseteq K</span>, then
   <div class="kalax-display-math">f^{-1}(f(P))=P.</div>
   Indeed, if <span class="kalax-inline-math">x\in f^{-1}(f(P))</span>, then <span class="kalax-inline-math">f(x)=f(p)</span> for some <span class="kalax-inline-math">p\in P</span>, so <span class="kalax-inline-math">x-p\in K\subseteq P</span>, hence <span class="kalax-inline-math">x\in P</span>. The reverse inclusion is clear. Also, because <span class="kalax-inline-math">f</span> is surjective,
   <div class="kalax-display-math">f(f^{-1}(Q))=Q</div>
   for every ideal <span class="kalax-inline-math">Q</span> of <span class="kalax-inline-math">S</span>. Hence prime ideals of <span class="kalax-inline-math">S</span> correspond exactly to prime ideals of <span class="kalax-inline-math">R</span> containing <span class="kalax-inline-math">K</span>.

   (d) Apply (c) to the quotient map <span class="kalax-inline-math">\pi:R\to R/I</span>. The kernel is <span class="kalax-inline-math">I</span>. Thus every prime ideal of <span class="kalax-inline-math">R/I</span> is <span class="kalax-inline-math">\pi(P)=P/I</span> for some prime ideal <span class="kalax-inline-math">P\supseteq I</span>.

3. If <span class="kalax-inline-math">M</span> is maximal, then <span class="kalax-inline-math">R/M</span> is a field. For <span class="kalax-inline-math">r\notin M</span>, the coset <span class="kalax-inline-math">r+M</span> is nonzero, so it has an inverse <span class="kalax-inline-math">x+M</span>. Hence
   <div class="kalax-display-math">(r+M)(x+M)=1+M,</div>
   meaning <span class="kalax-inline-math">1-rx\in M</span>.

   Conversely, suppose the stated condition holds. Let <span class="kalax-inline-math">J</span> be an ideal with <span class="kalax-inline-math">M\subsetneq J\subseteq R</span>. Choose <span class="kalax-inline-math">r\in J-M</span>. By assumption, there exists <span class="kalax-inline-math">x\in R</span> such that <span class="kalax-inline-math">1-rx\in M</span>. Since <span class="kalax-inline-math">r\in J</span>, we have <span class="kalax-inline-math">rx\in J</span>, and since <span class="kalax-inline-math">M\subseteq J</span>, we get <span class="kalax-inline-math">1=(1-rx)+rx\in J</span>. Thus <span class="kalax-inline-math">J=R</span>. Hence <span class="kalax-inline-math">M</span> is maximal.

4. Let
   <div class="kalax-display-math">I=\bigoplus_{i=1}^{\infty}\mathbb Z</div>
   be the set of integer sequences with finite support. This is an ideal of <span class="kalax-inline-math">R=\prod_{i=1}^{\infty}\mathbb Z</span>, because multiplying a finite-support sequence coordinatewise by any sequence still gives finite support.

   Suppose <span class="kalax-inline-math">I=\prod_{i=1}^{\infty} I_i</span>. For each coordinate <span class="kalax-inline-math">i</span>, the sequence with <span class="kalax-inline-math">1</span> in the <span class="kalax-inline-math">i</span>-th position and <span class="kalax-inline-math">0</span> elsewhere lies in <span class="kalax-inline-math">I</span>, so <span class="kalax-inline-math">I_i=\mathbb Z</span> for every <span class="kalax-inline-math">i</span>. Then <span class="kalax-inline-math">\prod_i I_i=\prod_i\mathbb Z=R</span>, but <span class="kalax-inline-math">I\ne R</span>, since <span class="kalax-inline-math">(1,1,1,\ldots)\notin I</span>. Contradiction. Therefore <span class="kalax-inline-math">I</span> is not of product form.

## HW10

### 题目

Feel free to use the following easy fact:

Let <span class="kalax-inline-math">d\in\mathbb Z</span>. Let
<div class="kalax-display-math">\mathbb Z[\sqrt d]=\{x+y\sqrt d\mid x,y\in\mathbb Z\}.</div>
Then it is a subring of <span class="kalax-inline-math">\mathbb C</span>.

1. Show <span class="kalax-inline-math">\mathbb Z[\sqrt{-2}]</span> is a Euclidean domain.

2. Show <span class="kalax-inline-math">\mathbb Z[\sqrt2]</span> is a Euclidean domain.

3. Consider <span class="kalax-inline-math">R=\mathbb Z[\sqrt{-3}]</span>. Consider elements
   <div class="kalax-display-math">a=4=2\cdot2=(1+\sqrt{-3})(1-\sqrt{-3}),\qquad
   b=(1+\sqrt{-3})\cdot2.</div>
   Show that <span class="kalax-inline-math">a,b</span> have no greatest common divisor.

4. Consider the ring <span class="kalax-inline-math">A=\mathbb Z[i]</span>.

   (a) The principal ideal <span class="kalax-inline-math">(2)</span> generated by <span class="kalax-inline-math">2</span> is not a prime ideal.

   (b) The principal ideal <span class="kalax-inline-math">(3)</span> of <span class="kalax-inline-math">A</span> is a prime ideal.

   (c) The principal ideal <span class="kalax-inline-math">(5)</span> of <span class="kalax-inline-math">A</span> is not a prime ideal.

   (d) The principal ideal <span class="kalax-inline-math">(7)</span> of <span class="kalax-inline-math">A</span> is a prime ideal.

### 答案

1. Use the norm
   <div class="kalax-display-math">N(a+b\sqrt{-2})=a^2+2b^2.</div>
   For <span class="kalax-inline-math">\alpha,\beta\in\mathbb Z[\sqrt{-2}]</span> with <span class="kalax-inline-math">\beta\ne0</span>, write <span class="kalax-inline-math">\alpha/\beta=x+y\sqrt{-2}</span> with <span class="kalax-inline-math">x,y\in\mathbb Q</span>. Choose integers <span class="kalax-inline-math">m,n</span> such that <span class="kalax-inline-math">|x-m|\le1/2</span> and <span class="kalax-inline-math">|y-n|\le1/2</span>. Let <span class="kalax-inline-math">q=m+n\sqrt{-2}</span> and <span class="kalax-inline-math">r=\alpha-q\beta</span>. Then
   <div class="kalax-display-math">\frac{r}{\beta}=(x-m)+(y-n)\sqrt{-2}.</div>
   Thus
   <div class="kalax-display-math">N(r)=N(\beta)\big((x-m)^2+2(y-n)^2\big).</div>
   A nearest-lattice-point argument for the lattice <span class="kalax-inline-math">\mathbb Z[\sqrt{-2}]</span> in <span class="kalax-inline-math">\mathbb C</span> gives a choice of <span class="kalax-inline-math">m,n</span> with
   <div class="kalax-display-math">(x-m)^2+2(y-n)^2&lt;1.</div>
   Hence <span class="kalax-inline-math">N(r)&lt;N(\beta)</span>. Therefore <span class="kalax-inline-math">\mathbb Z[\sqrt{-2}]</span> is Euclidean.

2. Use
   <div class="kalax-display-math">N(a+b\sqrt2)=|a^2-2b^2|.</div>
   For <span class="kalax-inline-math">\alpha,\beta\in\mathbb Z[\sqrt2]</span> with <span class="kalax-inline-math">\beta\ne0</span>, write
   <div class="kalax-display-math">\alpha/\beta=x+y\sqrt2</div>
   with <span class="kalax-inline-math">x,y\in\mathbb Q</span>. Choose integers <span class="kalax-inline-math">m,n</span> such that <span class="kalax-inline-math">|x-m|\le1/2</span> and <span class="kalax-inline-math">|y-n|\le1/2</span>. Let <span class="kalax-inline-math">q=m+n\sqrt2</span> and <span class="kalax-inline-math">r=\alpha-q\beta</span>. Then
   <div class="kalax-display-math">N(\alpha/\beta-q)=|(x-m)^2-2(y-n)^2|&lt;1,</div>
   since <span class="kalax-inline-math">(x-m)^2\le1/4</span> and <span class="kalax-inline-math">2(y-n)^2\le1/2</span>. Hence
   <div class="kalax-display-math">N(r)=N(\beta)N(\alpha/\beta-q)&lt;N(\beta).</div>
   Thus division with smaller remainder exists, so <span class="kalax-inline-math">\mathbb Z[\sqrt2]</span> is Euclidean.

3. Let <span class="kalax-inline-math">s=\sqrt{-3}</span>. The elements <span class="kalax-inline-math">2</span> and <span class="kalax-inline-math">1+s</span> are both common divisors of
   <div class="kalax-display-math">a=4,\qquad b=2(1+s).</div>
   Suppose a greatest common divisor <span class="kalax-inline-math">d</span> exists. Since both <span class="kalax-inline-math">2</span> and <span class="kalax-inline-math">1+s</span> are common divisors, we must have
   <div class="kalax-display-math">2\mid d,\qquad 1+s\mid d.</div>
   Also <span class="kalax-inline-math">d\mid4</span> and <span class="kalax-inline-math">d\mid2(1+s)</span>.

   Use the norm <span class="kalax-inline-math">N(x+ys)=x^2+3y^2</span>. Since <span class="kalax-inline-math">d\mid4</span>, <span class="kalax-inline-math">N(d)</span> divides <span class="kalax-inline-math">N(4)=16</span>. Since <span class="kalax-inline-math">2\mid d</span> and <span class="kalax-inline-math">1+s\mid d</span>, we have <span class="kalax-inline-math">4=N(2)\mid N(d)</span> and <span class="kalax-inline-math">4=N(1+s)\mid N(d)</span>. Therefore <span class="kalax-inline-math">N(d)</span> is either <span class="kalax-inline-math">4</span> or <span class="kalax-inline-math">16</span>.

   If <span class="kalax-inline-math">N(d)=4</span>, then <span class="kalax-inline-math">d</span> is associated to either <span class="kalax-inline-math">2</span> or <span class="kalax-inline-math">1+s</span>. But <span class="kalax-inline-math">2</span> and <span class="kalax-inline-math">1+s</span> are not associates, since <span class="kalax-inline-math">(1+s)/2\notin\mathbb Z[s]</span>.

   If <span class="kalax-inline-math">N(d)=16</span>, then because <span class="kalax-inline-math">d\mid4</span>, <span class="kalax-inline-math">d</span> is associated to <span class="kalax-inline-math">4</span>. But <span class="kalax-inline-math">4\nmid b=2(1+s)</span>, since <span class="kalax-inline-math">b/4=(1+s)/2\notin\mathbb Z[s]</span>.

   Both cases are impossible. Hence <span class="kalax-inline-math">a,b</span> have no greatest common divisor.

4. In <span class="kalax-inline-math">\mathbb Z[i]</span>, use the norm
   <div class="kalax-display-math">N(a+bi)=a^2+b^2.</div>

   (a) We have
   <div class="kalax-display-math">(1+i)(1-i)=2\in(2),</div>
   but <span class="kalax-inline-math">1+i\notin(2)</span> and <span class="kalax-inline-math">1-i\notin(2)</span>. Hence <span class="kalax-inline-math">(2)</span> is not prime.

   (b) Suppose <span class="kalax-inline-math">(a+bi)(c+di)\in(3)</span>. Then <span class="kalax-inline-math">3</span> divides
   <div class="kalax-display-math">N((a+bi)(c+di))=(a^2+b^2)(c^2+d^2).</div>
   Since <span class="kalax-inline-math">3</span> is prime in <span class="kalax-inline-math">\mathbb Z</span>, <span class="kalax-inline-math">3\mid a^2+b^2</span> or <span class="kalax-inline-math">3\mid c^2+d^2</span>. Modulo <span class="kalax-inline-math">3</span>, the only squares are <span class="kalax-inline-math">0</span> and <span class="kalax-inline-math">1</span>, so <span class="kalax-inline-math">a^2+b^2\equiv0\pmod3</span> implies <span class="kalax-inline-math">a\equiv b\equiv0\pmod3</span>. Hence <span class="kalax-inline-math">a+bi\in(3)</span>; similarly for <span class="kalax-inline-math">c+di</span>. Therefore <span class="kalax-inline-math">(3)</span> is prime.

   (c) Since
   <div class="kalax-display-math">5=(2+i)(2-i),</div>
   we have <span class="kalax-inline-math">(2+i)(2-i)\in(5)</span>, but neither <span class="kalax-inline-math">2+i</span> nor <span class="kalax-inline-math">2-i</span> is in <span class="kalax-inline-math">(5)</span>. Hence <span class="kalax-inline-math">(5)</span> is not prime.

   (d) Suppose <span class="kalax-inline-math">(a+bi)(c+di)\in(7)</span>. Taking norms gives
   <div class="kalax-display-math">7\mid (a^2+b^2)(c^2+d^2).</div>
   If <span class="kalax-inline-math">7\mid a^2+b^2</span>, then modulo <span class="kalax-inline-math">7</span> the squares are <span class="kalax-inline-math">0,1,2,4</span>. The congruence <span class="kalax-inline-math">a^2+b^2\equiv0\pmod7</span> forces <span class="kalax-inline-math">a\equiv b\equiv0\pmod7</span>, since <span class="kalax-inline-math">-1</span> is not a square modulo <span class="kalax-inline-math">7</span>. Thus <span class="kalax-inline-math">a+bi\in(7)</span>. Similarly for the other factor. Hence <span class="kalax-inline-math">(7)</span> is prime.

## HW11

### 题目

1. Let <span class="kalax-inline-math">F</span> be a field. Prove <span class="kalax-inline-math">F[x]</span> is a Euclidean domain.

2. 

   (a) If <span class="kalax-inline-math">F</span> is a field, then every nonzero element of <span class="kalax-inline-math">Fx</span> is of the form <span class="kalax-inline-math">x^k u</span> with <span class="kalax-inline-math">u\in Fx</span> a unit.

   (b) <span class="kalax-inline-math">Fx</span> is a principal ideal domain whose only ideals are <span class="kalax-inline-math">0</span>, <span class="kalax-inline-math">Fx=(1_F)=(x^0)</span>, and <span class="kalax-inline-math">(x^k)</span> for each <span class="kalax-inline-math">k\ge1</span>.

3.

   (a) The polynomial <span class="kalax-inline-math">x+1</span> is a unit in the power series ring <span class="kalax-inline-math">\mathbb Zx</span>, but is not a unit in <span class="kalax-inline-math">\mathbb Z[x]</span>.

   (b) <span class="kalax-inline-math">x^2+3x+2</span> is irreducible in <span class="kalax-inline-math">\mathbb Zx</span>, but not in <span class="kalax-inline-math">\mathbb Z[x]</span>.

4. If <span class="kalax-inline-math">c_0,c_1,\ldots,c_n</span> are distinct elements of an integral domain <span class="kalax-inline-math">D</span> and <span class="kalax-inline-math">d_0,\ldots,d_n</span> are any elements of <span class="kalax-inline-math">D</span>, then there is at most one polynomial <span class="kalax-inline-math">f</span> of degree <span class="kalax-inline-math">\le n</span> in <span class="kalax-inline-math">D[x]</span> such that <span class="kalax-inline-math">f(c_i)=d_i</span> for <span class="kalax-inline-math">i=0,1,\ldots,n</span>.

### 答案

1. Let <span class="kalax-inline-math">f,g\in F[x]</span> with <span class="kalax-inline-math">g\ne0</span>. The polynomial division algorithm over a field gives
   <div class="kalax-display-math">f=qg+r,\qquad r=0\text{ or }\deg r&lt;\deg g.</div>
   Therefore <span class="kalax-inline-math">F[x]</span> is Euclidean with Euclidean function <span class="kalax-inline-math">\delta(f)=\deg f</span> for nonzero <span class="kalax-inline-math">f</span>.

2. (a) Let
   <div class="kalax-display-math">f=a_kx^k+a_{k+1}x^{k+1}+\cdots</div>
   where <span class="kalax-inline-math">a_k\ne0</span> and <span class="kalax-inline-math">k</span> is minimal. Then
   <div class="kalax-display-math">f=x^k(a_k+a_{k+1}x+\cdots)=x^ku.</div>
   Since the constant term of <span class="kalax-inline-math">u</span> is <span class="kalax-inline-math">a_k\ne0</span>, <span class="kalax-inline-math">u</span> is a unit in <span class="kalax-inline-math">Fx</span>.

   (b) Let <span class="kalax-inline-math">I</span> be a nonzero ideal of <span class="kalax-inline-math">Fx</span>. Choose <span class="kalax-inline-math">f\in I</span> with minimal order <span class="kalax-inline-math">k</span>, meaning <span class="kalax-inline-math">f=x^ku</span> where <span class="kalax-inline-math">u</span> is a unit. Then <span class="kalax-inline-math">x^k=fu^{-1}\in I</span>, so <span class="kalax-inline-math">(x^k)\subseteq I</span>. Conversely, every element of <span class="kalax-inline-math">I</span> has order at least <span class="kalax-inline-math">k</span>, so it is divisible by <span class="kalax-inline-math">x^k</span>. Hence <span class="kalax-inline-math">I\subseteq(x^k)</span>. Therefore <span class="kalax-inline-math">I=(x^k)</span>. The zero ideal is the remaining case.

3. (a) In <span class="kalax-inline-math">\mathbb Zx</span>,
   <div class="kalax-display-math">(1+x)(1-x+x^2-x^3+\cdots)=1,</div>
   so <span class="kalax-inline-math">1+x</span> is a unit. In <span class="kalax-inline-math">\mathbb Z[x]</span>, the only units are <span class="kalax-inline-math">\pm1</span>, so <span class="kalax-inline-math">1+x</span> is not a unit.

   (b) In <span class="kalax-inline-math">\mathbb Z[x]</span>,
   <div class="kalax-display-math">x^2+3x+2=(x+1)(x+2),</div>
   so it is reducible.

   In <span class="kalax-inline-math">\mathbb Zx</span>, <span class="kalax-inline-math">x+1</span> is a unit, so <span class="kalax-inline-math">x^2+3x+2</span> is associated to <span class="kalax-inline-math">x+2</span>. If
   <div class="kalax-display-math">x+2=fg</div>
   in <span class="kalax-inline-math">\mathbb Zx</span>, then the constant terms of <span class="kalax-inline-math">f</span> and <span class="kalax-inline-math">g</span> multiply to <span class="kalax-inline-math">2</span>. Thus one constant term is <span class="kalax-inline-math">\pm1</span>, so one factor is a unit. Hence <span class="kalax-inline-math">x+2</span> is irreducible, and therefore <span class="kalax-inline-math">x^2+3x+2</span> is irreducible in <span class="kalax-inline-math">\mathbb Zx</span>.

4. Suppose <span class="kalax-inline-math">f,g\in D[x]</span> both have degree <span class="kalax-inline-math">\le n</span> and satisfy <span class="kalax-inline-math">f(c_i)=g(c_i)=d_i</span>. Then <span class="kalax-inline-math">h=f-g</span> has degree <span class="kalax-inline-math">\le n</span> and has roots <span class="kalax-inline-math">c_0,\ldots,c_n</span>. Since <span class="kalax-inline-math">D</span> is an integral domain, a nonzero polynomial of degree <span class="kalax-inline-math">\le n</span> has at most <span class="kalax-inline-math">n</span> roots. But <span class="kalax-inline-math">h</span> has <span class="kalax-inline-math">n+1</span> distinct roots, so <span class="kalax-inline-math">h=0</span>. Hence <span class="kalax-inline-math">f=g</span>.

## HW12

### 题目

1. Let <span class="kalax-inline-math">R</span> be a commutative ring with identity and <span class="kalax-inline-math">c,b\in R</span> with <span class="kalax-inline-math">c</span> a unit.

   (a) Show that the assignment <span class="kalax-inline-math">x\mapsto cx+b</span> induces a unique automorphism of <span class="kalax-inline-math">R[x]</span> that is the identity on <span class="kalax-inline-math">R</span>. What is its inverse?

   (b) If <span class="kalax-inline-math">D</span> is an integral domain, then show that every automorphism of <span class="kalax-inline-math">D[x]</span> that is the identity on <span class="kalax-inline-math">D</span> is of the type described in (a).

2. Prove that <span class="kalax-inline-math">x^5+48x+24</span> is irreducible in <span class="kalax-inline-math">\mathbb Q[x]</span>.

3. Let
   <div class="kalax-display-math">f=\sum_{i=0}^n a_ix^i\in\mathbb Z[x]</div>
   have degree <span class="kalax-inline-math">n</span>. Suppose that for some <span class="kalax-inline-math">k</span> with <span class="kalax-inline-math">0&lt;k&lt;n</span> and some prime <span class="kalax-inline-math">p</span>, we have:

   - <span class="kalax-inline-math">p\nmid a_n</span> and <span class="kalax-inline-math">p\nmid a_k</span>;
   - <span class="kalax-inline-math">p\mid a_i</span> for all <span class="kalax-inline-math">0\le i\le k-1</span>;
   - <span class="kalax-inline-math">p^2\nmid a_0</span>.

   Show that <span class="kalax-inline-math">f</span> has a factor <span class="kalax-inline-math">g</span> of degree at least <span class="kalax-inline-math">k</span> that is irreducible in <span class="kalax-inline-math">\mathbb Z[x]</span>.

4. Let <span class="kalax-inline-math">H</span> be a subgroup of <span class="kalax-inline-math">G</span>. The centralizer of <span class="kalax-inline-math">H</span> is
   <div class="kalax-display-math">C_G(H)=\{g\in G\mid hg=gh\text{ for all }h\in H\}.</div>
   Show that <span class="kalax-inline-math">C_G(H)</span> is a normal subgroup of <span class="kalax-inline-math">N_G(H)</span>.

5. Use the setup in the above problem. Prove:
   <div class="kalax-display-math">N_G(H)/C_G(H)</div>
   is isomorphic to a subgroup of <span class="kalax-inline-math">\operatorname{Aut}H</span>.

6. Find all the Sylow <span class="kalax-inline-math">2</span>-subgroups and <span class="kalax-inline-math">3</span>-subgroups of <span class="kalax-inline-math">S_5</span>.

7. If <span class="kalax-inline-math">|G|=200</span>, then <span class="kalax-inline-math">G</span> contains a normal Sylow subgroup.

### 答案

1. (a) By the universal property of polynomial rings, any choice of an element of <span class="kalax-inline-math">R[x]</span> determines a unique <span class="kalax-inline-math">R</span>-algebra homomorphism <span class="kalax-inline-math">R[x]\to R[x]</span>. Thus <span class="kalax-inline-math">x\mapsto cx+b</span> induces a unique homomorphism <span class="kalax-inline-math">\varphi</span> fixing <span class="kalax-inline-math">R</span>.

   Since <span class="kalax-inline-math">c</span> is a unit, define
   <div class="kalax-display-math">\psi(x)=c^{-1}x-c^{-1}b.</div>
   Then
   <div class="kalax-display-math">\psi(\varphi(x))=\psi(cx+b)=c^{-1}(cx+b)-c^{-1}b=x,</div>
   and
   <div class="kalax-display-math">\varphi(\psi(x))=\varphi(c^{-1}x-c^{-1}b)=c^{-1}(cx+b)-c^{-1}b=x.</div>
   Both maps fix <span class="kalax-inline-math">R</span>, so <span class="kalax-inline-math">\psi=\varphi^{-1}</span>. Hence <span class="kalax-inline-math">\varphi</span> is an automorphism.

   (b) Let <span class="kalax-inline-math">\varphi</span> be an automorphism of <span class="kalax-inline-math">D[x]</span> fixing <span class="kalax-inline-math">D</span>. Put <span class="kalax-inline-math">f=\varphi(x)</span>. Since <span class="kalax-inline-math">\varphi</span> is surjective, there exists <span class="kalax-inline-math">g\in D[x]</span> such that <span class="kalax-inline-math">g(f)=x</span>. Taking degrees over the integral domain <span class="kalax-inline-math">D</span> gives
   <div class="kalax-display-math">\deg(g(f))=(\deg g)(\deg f)=1.</div>
   Hence <span class="kalax-inline-math">\deg f=1</span>. Therefore
   <div class="kalax-display-math">f=cx+b</div>
   with <span class="kalax-inline-math">c\ne0</span>. Applying the same argument to <span class="kalax-inline-math">\varphi^{-1}</span> shows that <span class="kalax-inline-math">c</span> must be a unit. Hence every such automorphism has the form in (a).

2. The polynomial
   <div class="kalax-display-math">f(x)=x^5+48x+24</div>
   is Eisenstein at <span class="kalax-inline-math">p=3</span>: the leading coefficient is not divisible by <span class="kalax-inline-math">3</span>, every other coefficient is divisible by <span class="kalax-inline-math">3</span>, and the constant term <span class="kalax-inline-math">24</span> is not divisible by <span class="kalax-inline-math">9</span>. Hence <span class="kalax-inline-math">f</span> is irreducible in <span class="kalax-inline-math">\mathbb Z[x]</span>, and by Gauss's lemma it is irreducible in <span class="kalax-inline-math">\mathbb Q[x]</span>.

3. Factor <span class="kalax-inline-math">f</span> into irreducibles in <span class="kalax-inline-math">\mathbb Z[x]</span>:
   <div class="kalax-display-math">f=g_1g_2\cdots g_m.</div>
   Reducing modulo <span class="kalax-inline-math">p</span>, the hypotheses say
   <div class="kalax-display-math">\overline f=x^k\overline h</div>
   in <span class="kalax-inline-math">\mathbb F_p[x]</span>, where <span class="kalax-inline-math">\overline h(0)=\overline{a_k}\ne0</span> and the leading coefficient is nonzero.

   Since <span class="kalax-inline-math">p\mid a_0</span> but <span class="kalax-inline-math">p^2\nmid a_0</span>, exactly one irreducible factor <span class="kalax-inline-math">g_j</span> has constant term divisible by <span class="kalax-inline-math">p</span>. All other factors have nonzero constant term modulo <span class="kalax-inline-math">p</span>. Therefore all of the factor <span class="kalax-inline-math">x^k</span> in <span class="kalax-inline-math">\overline f</span> must come from <span class="kalax-inline-math">\overline{g_j}</span>. Hence <span class="kalax-inline-math">x^k\mid\overline{g_j}</span>, so
   <div class="kalax-display-math">\deg g_j\ge k.</div>
   This <span class="kalax-inline-math">g_j</span> is irreducible in <span class="kalax-inline-math">\mathbb Z[x]</span> and has degree at least <span class="kalax-inline-math">k</span>.

4. First <span class="kalax-inline-math">C_G(H)\le N_G(H)</span>, because if <span class="kalax-inline-math">c</span> commutes with every element of <span class="kalax-inline-math">H</span>, then <span class="kalax-inline-math">cHc^{-1}=H</span>.

   Let <span class="kalax-inline-math">n\in N_G(H)</span> and <span class="kalax-inline-math">c\in C_G(H)</span>. For any <span class="kalax-inline-math">h\in H</span>, since <span class="kalax-inline-math">n^{-1}hn\in H</span>, we have
   <div class="kalax-display-math">c(n^{-1}hn)=(n^{-1}hn)c.</div>
   Multiplying by <span class="kalax-inline-math">n</span> on the left and <span class="kalax-inline-math">n^{-1}</span> on the right gives
   <div class="kalax-display-math">(ncn^{-1})h=h(ncn^{-1}).</div>
   Thus <span class="kalax-inline-math">ncn^{-1}\in C_G(H)</span>. Therefore <span class="kalax-inline-math">C_G(H)\trianglelefteq N_G(H)</span>.

5. Define
   <div class="kalax-display-math">\Phi:N_G(H)\to\operatorname{Aut}(H)</div>
   by
   <div class="kalax-display-math">\Phi(n)(h)=nhn^{-1}.</div>
   Since <span class="kalax-inline-math">n\in N_G(H)</span>, conjugation by <span class="kalax-inline-math">n</span> maps <span class="kalax-inline-math">H</span> to itself, so <span class="kalax-inline-math">\Phi(n)</span> is an automorphism of <span class="kalax-inline-math">H</span>. Also <span class="kalax-inline-math">\Phi</span> is a group homomorphism.

   Its kernel consists of those <span class="kalax-inline-math">n\in N_G(H)</span> such that <span class="kalax-inline-math">nhn^{-1}=h</span> for every <span class="kalax-inline-math">h\in H</span>, i.e.
   <div class="kalax-display-math">\ker\Phi=C_G(H).</div>
   By the first isomorphism theorem,
   <div class="kalax-display-math">N_G(H)/C_G(H)\cong \operatorname{Im}\Phi,</div>
   and <span class="kalax-inline-math">\operatorname{Im}\Phi</span> is a subgroup of <span class="kalax-inline-math">\operatorname{Aut}H</span>.

6. Since
   <div class="kalax-display-math">|S_5|=120=2^3\cdot3\cdot5,</div>
   a Sylow <span class="kalax-inline-math">2</span>-subgroup has order <span class="kalax-inline-math">8</span>, and a Sylow <span class="kalax-inline-math">3</span>-subgroup has order <span class="kalax-inline-math">3</span>.

   The Sylow <span class="kalax-inline-math">3</span>-subgroups are exactly
   <div class="kalax-display-math">\langle(abc)\rangle</div>
   where <span class="kalax-inline-math">\{a,b,c\}</span> runs over all <span class="kalax-inline-math">3</span>-element subsets of <span class="kalax-inline-math">\{1,2,3,4,5\}</span>. There are <span class="kalax-inline-math">\binom53=10</span> of them.

   The Sylow <span class="kalax-inline-math">2</span>-subgroups are obtained as follows. Choose one element <span class="kalax-inline-math">a</span> to be fixed, and partition the remaining four elements into two unordered pairs:
   <div class="kalax-display-math">\{b,c\}\sqcup\{d,e\}.</div>
   Then
   <div class="kalax-display-math">P_{a;\{b,c\},\{d,e\}}
   =
   \langle (bc),\ (de),\ (bd)(ce)\rangle</div>
   is a subgroup of order <span class="kalax-inline-math">8</span>, isomorphic to <span class="kalax-inline-math">D_8</span>. These are all Sylow <span class="kalax-inline-math">2</span>-subgroups. There are
   <div class="kalax-display-math">5\cdot3=15</div>
   such subgroups.

7. Since
   <div class="kalax-display-math">|G|=200=2^3\cdot5^2,</div>
   the number <span class="kalax-inline-math">n_5</span> of Sylow <span class="kalax-inline-math">5</span>-subgroups satisfies
   <div class="kalax-display-math">n_5\equiv1\pmod5,\qquad n_5\mid 8.</div>
   The divisors of <span class="kalax-inline-math">8</span> are <span class="kalax-inline-math">1,2,4,8</span>, and the only one congruent to <span class="kalax-inline-math">1</span> modulo <span class="kalax-inline-math">5</span> is <span class="kalax-inline-math">1</span>. Hence <span class="kalax-inline-math">n_5=1</span>. Therefore the Sylow <span class="kalax-inline-math">5</span>-subgroup is unique, and hence normal.