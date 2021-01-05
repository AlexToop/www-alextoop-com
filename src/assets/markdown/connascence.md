# Connascence and software design

## What is it?

Connascence is a metric documented by Meilir Page-Jones for measuring the complexity caused by the relationships of components in object orientated design. Decoupling of these relationships often leads to improving the quality of the software, as it often reduces the cost of modifying each component in isolation.

## Types of connascence

### Dynamic 

Identity - When multiple components must reference the entity

Value - When there are constraints on the possible values some shared elements can take.

Timing - When the timing of execution of components is important.

Execution order - When the order of multiple components is important.

### Static

Position - Agree on the order of values.

Algorithm - Agree on a particular algorithm to use.

Meaning/Convention - Agree on the meaning of an identity.

Type - Agree the type of an entity.

Name - Agree the name of an entity.

## Observations

The order I've placed those types is important. The higher the listed type, the stronger the connascence is. Refactoring your code to have less strong connascence is desirable as it often reduces the complexity when refactoring in the future.