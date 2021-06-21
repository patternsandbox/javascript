# Design Patterns in JavaScript

## Creational Patterns

 Creational patterns are designed for class instantiation and object creation to increase flexibility and reuse of existing code. 

### Builder Pattern
>Builder pattern separate the complexities of the creation logic from the final representation.

#### Problem
Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code. ... [Refactoring Guru]
#### Solution
A builder pattern is a design pattern that lets us extract the object construction out of its own class (its representation) so that it can be used for multiple different representations. One advantage to using this pattern is that it lets us build objects with one operation on top of another where we don’t need to call all operations simultaneously, only the ones that are needed to produce a particular output. ... [Yash Sharma]

Read more here: [builder pattern >>>](https://github.com/patternsandbox/javascript/tree/main/docs/builder)
### Factory Pattern
>When a function returns an object, we call it a factory function.

#### Problem
In class-based programming, the factory method pattern is a creational pattern that uses factory methods **to deal with the problem of creating objects** without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor. ... [Jar Gon]
#### Solution
The Factory pattern can be especially useful when applied to the following situations: When our object or component setup involves a high level of complexity. When we need to easily generate different instances of objects depending on the environment we are in. When we’re working with many small objects or components that share the same properties. When composing objects with instances of other objects that need only satisfy an API contract (a.k.a., duck typing) to work. This is useful for decoupling. ... [Addy Osmani]

Read more here: [factory pattern >>>](https://github.com/patternsandbox/javascript/tree/main/docs/factory)
## Structural Patterns

 Stractural patterns are designed with regard to a class’s structure and composition. 

### Decorator Pattern
>In its simplest form, a decorator is simply a way of wrapping one piece of code with another — literally “decorating” it. ... [Graham Cox]

#### Problem
A common reason why developers use them is that their applications may contain features requiring a large quantity of distinct types of object. Imagine having to define hundreds of different object constructors for, say, a JavaScript game. ... [Addy Osmani]
#### Solution
Decorators are a proposal for extending JavaScript classes which is widely adopted among developers in transpiler environments, with broad interest in standardization. TC39 has been iterating on decorators proposals for over five years. ... [Tc39 Proposal Decorators]

Read more here: [decorator pattern >>>](https://github.com/patternsandbox/javascript/tree/main/docs/decorator)
### Facade Pattern
>The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems.

#### Problem
Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on. As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain. ... [Refactoring Guru]
#### Solution
A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about. ... [Refactoring Guru]

Read more here: [facade pattern >>>](https://github.com/patternsandbox/javascript/tree/main/docs/facade)
## Behavioural Patterns

 Behavioural patterns are designed depending on how one class communicates with others. 

## References
- [Yash Sharma]
- [Addy Osmani]
- [Refactoring Guru]
- [Tc39 Proposal Decorators]
- [Jar Gon]
- [Mike Pennisi]
- [Rip Tutorial]

[Yash Sharma]: https://codeburst.io/builder-pattern-in-javascript-e5b13e4e51af
[Addy Osmani]: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
[Refactoring Guru]: https://refactoring.guru/design-patterns/facade
[Tc39 Proposal Decorators]: https://github.com/tc39/proposal-decorators
[Jar Gon]: http://jargon.js.org/_glossary/FACTORY_PATTERN.md
[Mike Pennisi]: https://bocoup.com/blog/the-strategy-pattern-in-javascript
[Rip Tutorial]: https://riptutorial.com/javascript/example/9116/strategy
