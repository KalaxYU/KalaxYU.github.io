---
title: "The Action Of A Group On A Set"
date: 2026-05-25 15:51:52
updated: 2026-05-25 15:51:52
permalink: notes/abstract-algebra-the-structure-of-groups-f73e7b0f/
categories:
  - "数学"
  - "Abstract algebra"
tags:
  - "obsidian"
  - "数学"
  - "Abstract algebra"
description: "The Action Of A Group On A Set Definition 4.1 An action of a group {% mathjax '{\"conversion\":{\"display\":false}}' %}G{% endmathjax %} on a set is a fun"
---
## The Action Of A Group On A Set
>Definition 4.1
>An **action** of a group {% mathjax '{"conversion":{"display":false}}' %}G{% endmathjax %} on a set is a function
>{% mathjax '{"conversion":{"display":true}}' %}
G\times S\to S
{% endmathjax %}
>usually denoted by
>{% mathjax '{"conversion":{"display":true}}' %}
(g,x)\mapsto gx
{% endmathjax %}
>such that for all {% mathjax '{"conversion":{"display":false}}' %}x \in S{% endmathjax %}and{% mathjax '{"conversion":{"display":false}}' %}g_{1}g_{2}\in G{% endmathjax %} :
>{% mathjax '{"conversion":{"display":true}}' %}
ex=x
\qquad\text{and} \qquad
(g_1g_2)x=g_{1}(g_{2x})
{% endmathjax %}
>When such an action is given, we say that {% mathjax '{"conversion":{"display":false}}' %}G{% endmathjax %} **acts on** the Set {% mathjax '{"conversion":{"display":false}}' %}S{% endmathjax %} .

>**Theorem 4.2.** Let G be a group that acts on a set **S** .
>(i) The relation on **S** defined by
>{% mathjax '{"conversion":{"display":true}}' %}
x\sim x'\Longleftrightarrow gx=x'\quad\text{for some}\quad\\g\in G
{% endmathjax %}
>is an equalalence relation.
>(ii) For each {% mathjax '{"conversion":{"display":false}}' %}x\in S{% endmathjax %} ,
>{% mathjax '{"conversion":{"display":true}}' %}
G_x=\{g\in G\mid gx=x\}
{% endmathjax %}
is a subgroup of {% mathjax '{"conversion":{"display":false}}' %}G{% endmathjax %} .

 **EXAMPLES**.  If a group {% mathjax '{"conversion":{"display":false}}' %}G{% endmathjax %}  acts on itself by conjugation, then the orbit {% mathjax '{"conversion":{"display":false}}' %}\{gxg^{-1}\mid g \in G\}{% endmathjax %} of {% mathjax '{"conversion":{"display":false}}' %}x \in G{% endmathjax %}  is called the **conjugacy class** of x. If a subgroup {% mathjax '{"conversion":{"display":false}}' %}H{% endmathjax %} acts on {% mathjax '{"conversion":{"display":false}}' %}G{% endmathjax %} by conjugation the stabilizer {% mathjax '{"conversion":{"display":false}}' %}H_x=\{h\in H\mid hxh^{-1}=x\}=\{h\in H\mid hx=xh\}{% endmathjax %} is called the **centralizer of x in H** and is denoted {% mathjax '{"conversion":{"display":false}}' %}C_H(x){% endmathjax %} .If {% mathjax '{"conversion":{"display":false}}' %}H=G{% endmathjax %} ,{% mathjax '{"conversion":{"display":false}}' %}C_G(x){% endmathjax %} is simply called the **centralizer of x.** If {% mathjax '{"conversion":{"display":false}}' %}H{% endmathjax %} acts by conjugation on the set {% mathjax '{"conversion":{"display":false}}' %}S{% endmathjax %} of all subgroups of {% mathjax '{"conversion":{"display":false}}' %}G{% endmathjax %} ,then the subgroup
 
 {% mathjax '{"conversion":{"display":false}}' %}K\in S{% endmathjax %}  {% mathjax '{"conversion":{"display":false}}' %}\{h\in H\mid hKh^{-1}=K\}{% endmathjax %}  **normalizer of K in H** and is denoted {% mathjax '{"conversion":{"display":false}}' %}N_H(K){% endmathjax %}    


## Sylow Theorem