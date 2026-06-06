---
title: "The Action Of A Group On A Set"
date: 2026-05-25 15:51:52
updated: 2026-05-25 15:51:52
permalink: notes/数学-abstract-algebra-the-structure-of-groups-bbd56663/
categories:
  - "数学"
  - "Abstract algebra"
tags:
  - "obsidian"
  - "数学"
  - "Abstract algebra"
description: "The Action Of A Group On A Set Definition 4.1 An action of a group G on a set is a function G times S to S usually denoted by (g,x) mapsto gx such tha"
---
## The Action Of A Group On A Set
>Definition 4.1
>An **action** of a group <span class="kalax-inline-math">G</span> on a set is a function
><div class="kalax-display-math">G\times S\to S</div>
>usually denoted by
><div class="kalax-display-math">(g,x)\mapsto gx</div>
>such that for all <span class="kalax-inline-math">x \in S</span>and<span class="kalax-inline-math">g_{1}g_{2}\in G</span> :
><div class="kalax-display-math">ex=x
\qquad\text{and} \qquad
(g_1g_2)x=g_{1}(g_{2x})</div>
>When such an action is given, we say that <span class="kalax-inline-math">G</span> **acts on** the Set <span class="kalax-inline-math">S</span> .

>**Theorem 4.2.** Let G be a group that acts on a set **S** .
>(i) The relation on **S** defined by
><div class="kalax-display-math">x\sim x'\Longleftrightarrow gx=x'\quad\text{for some}\quad\\g\in G</div>
>is an equalalence relation.
>(ii) For each <span class="kalax-inline-math">x\in S</span> ,
><div class="kalax-display-math">G_x=\{g\in G\mid gx=x\}</div>
is a subgroup of <span class="kalax-inline-math">G</span> .

 **EXAMPLES**.  If a group <span class="kalax-inline-math">G</span>  acts on itself by conjugation, then the orbit <span class="kalax-inline-math">\{gxg^{-1}\mid g \in G\}</span> of <span class="kalax-inline-math">x \in G</span>  is called the **conjugacy class** of x. If a subgroup <span class="kalax-inline-math">H</span> acts on <span class="kalax-inline-math">G</span> by conjugation the stabilizer <span class="kalax-inline-math">H_x=\{h\in H\mid hxh^{-1}=x\}=\{h\in H\mid hx=xh\}</span> is called the **centralizer of x in H** and is denoted <span class="kalax-inline-math">C_H(x)</span> .If <span class="kalax-inline-math">H=G</span> ,<span class="kalax-inline-math">C_G(x)</span> is simply called the **centralizer of x.** If <span class="kalax-inline-math">H</span> acts by conjugation on the set <span class="kalax-inline-math">S</span> of all subgroups of <span class="kalax-inline-math">G</span> ,then the subgroup
 
 <span class="kalax-inline-math">K\in S</span>  <span class="kalax-inline-math">\{h\in H\mid hKh^{-1}=K\}</span>  **normalizer of K in H** and is denoted <span class="kalax-inline-math">N_H(K)</span>    


## Sylow Theorem