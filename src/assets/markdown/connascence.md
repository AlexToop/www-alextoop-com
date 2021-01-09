# Connascence and software design

Alexander John Toop, 09 January 2021

# Table of Contents
* [Introduction](#intro)
* [Properties, the three axes](#axes)
* [Types](#types)
  * [Dynamic](#dynamic)
  * [Static](#static)
  * [Diagram](#diagram)
* [Summary](#summary)
* [Citations](#citations)

## <a name="intro"></a>Introduction

Connascence is a metric proposed by Meilir Page-Jones for measuring the complexity caused by the relationships of components in object orientated design [1]. 

It was theorised that decoupling of these relationships often leads to improving the quality of the software, as it often reduces the cost of modifying each component in isolation.

## <a name="axes"></a>Properties, the three axes

The impact on maintainability Meilir proposed could be further deduced by considering the following; 

**Degree** relates to the size of its impact, for example, being connascent to dozens of other elements will have a larger impact. 

**Locality** relates to how close software elements are together, similar to the philosophy of 'elements that change together should stay together', if the elements are escapsulated far apart, they should have a weaker connascence.

**Strength** relates to how hard the relations between entities are to spot or refactor. The types of relation are discussed in the next section.

## <a name="types"></a>Types

### <a name="dynamic"></a>Dynamic

**Identity**, when multiple components must reference the entity.

**Value**, when there are constraints on the possible values some shared elements can take.

**Timing**, when the timing of execution of components is important.

**Execution order**, when the order of multiple components is important.

### <a name="static"></a>Static

**Position**, agree on the order of values.

**Algorithm**, agree on a particular algorithm to use.

**Meaning/Convention**, agree on the meaning of an identity.

**Type**, agree the type of an entity.

**Name**, agree the name of an entity.

### <a name="diagram"></a>Diagram

![Connascence](/img/connascence.svg)

The higher the listed type, the stronger the connascence is. Reducing the strength of connascence is desirable as it often reduces the complexity when modifying or reusing these components in the future.

## <a name="summary"></a>Summary

Connascence is a useful metric but it's important to appreciate the cost of refactoring to reduce the strength of connascence, there's always a balance to achieve. When writing and reviewing new code, keeping this metric in mind can be great to ensure the future maintainability of the code.

## <a name="citations"></a>Citations

[1] Meilir Page-Jones, September 1992, [Comparing techniques by means of encapsulation and connascence](https://dl.acm.org/doi/abs/10.1145/130994.131004)