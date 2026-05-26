---
title: "The Action Of A Group On A Set"
date: 2026-05-25 15:51:52
updated: 2026-05-25 15:51:52
permalink: notes/abstract-algebra-the-structure-of-groups-f73e7b0f/
categories:
  - "Notes"
  - "Abstract algebra"
tags:
  - "obsidian"
  - "Abstract algebra"
description: "The Action Of A Group On A Set Definition 4.1 An action of a group G on a set is a function G times S to S usually denoted by (g,x) mapsto gx such tha"
mathjax: true
---
## The Action Of A Group On A Set
>Definition 4.1
>An **action** of a group $G$ on a set is a function
>$$G\times S\to S$$
>usually denoted by
>$$(g,x)\mapsto gx$$
>such that for all $x \in S$and$g_{1}g_{2}\in G$ :
>$$
ex=x
\qquad\text{and} \qquad
(g_1g_2)x=g_{1}(g_{2x})
$$
>When such an action is given, we say that $G$ **acts on** the Set $S$ .

>**Theorem 4.2.** Let G be a group that acts on a set **S** .
>(i) The relation on **S** defined by
>$$x\sim x'\Longleftrightarrow gx=x'\quad\text{for some}\quad\\g\in G$$
>is an equalalence relation.
>(ii) For each $x\in S$ ,
>$$
G_x=\{g\in G\mid gx=x\}
$$
is a subgroup of $G$ .

 **EXAMPLES**.  If a group $G$  acts on itself by conjugation, then the orbit $\{gxg^{-1}\mid g \in G\}$ of $x \in G$  is called the **conjugacy class** of x. If a subgroup $H$ acts on $G$ by conjugation the stabilizer $H_x=\{h\in H\mid hxh^{-1}=x\}=\{h\in H\mid hx=xh\}$ is called the **centralizer of x in H** and is denoted $C_H(x)$ .If $H=G$ ,$C_G(x)$ is simply called the **centralizer of x.** If $H$ acts by conjugation on the set $S$ of all subgroups of $G$ ,then the subgroup
 
 $K\in S$  $\{h\in H\mid hKh^{-1}=K\}$  **normalizer of K in H** and is denoted $N_H(K)$    


## Sylow Theorem