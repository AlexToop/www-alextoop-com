# Connascence and software design

Alexander John Toop, 09 January 2021

## <a name="intro"></a>Introduction

Connascence is a metric proposed by Meilir Page-Jones for measuring the complexity caused by the relationships of components in object orientated design [1]. 

It was theorised that decoupling of these relationships often leads to improving the quality of the software, as it often reduces the cost of modifying each component in isolation.

## Table of Contents
* [Properties, the three axes](#axes)
* [Types](#types)
  * [Diagram](#diagram)
  * [Dynamic](#dynamic)
  * [Static](#static)
* [Summary](#summary)
* [Citations](#citations)

## <a name="axes"></a>Properties, the three axes

The three axes are properties that can be considered to help determine the maintainability of code; 

**Degree**, relates to the size of its impact, being connascent to dozens of other elements will have a larger impact on maintainability. 

**Locality**, relates to how close elements are together, 'elements that change together, should stay together'. If the elements are encapsulated far apart, ensuring they have weaker connascence helps ensure they can be modified more independently.

**Strength**, relates to how hard the relationship between entities are to spot or refactor. The types of connascence in the next section can be used to determine the strength of their relationship.

## <a name="types"></a>Types

### <a name="diagram"></a>Diagram

![Connascence types diagram, Alexander Toop](/img/connascence.svg)

The higher the listed type, the stronger the connascence is. Reducing the strength of connascence is desirable as it often reduces the difficulty when modifying or reusing these components in the future. Below explains how to identify the type of connascence. 

### <a name="dynamic"></a>Dynamic

**Identity**, when multiple components must reference the entity.

**Value**, when there are constraints on the possible values some shared elements can take.

**Timing**, when the timing of execution of components is important.

**Execution order**, when the order of several components is important.

### <a name="static"></a>Static

**Position**, when they must agree on the order of values.

**Algorithm**, when they must agree on agree on a particular algorithm to use.

**Meaning/Convention**, when they must agree on agree on a common meaning of an identity.

**Type**, when they must agree on the type of an entity.

**Name**, when they must agree on the name of an entity.

## <a name="summary"></a>Summary

Connascence is a useful metric but it's important to appreciate the cost of refactoring to reduce the strength of connascence, there's always a balance to achieve. When writing and reviewing new code, keeping this metric in mind can be great to ensure the future maintainability of the code.

## <a name="citations"></a>Citations

[1] Meilir Page-Jones, September 1992, [Comparing techniques by means of encapsulation and connascence](https://dl.acm.org/doi/abs/10.1145/130994.131004)