# Design Patterns in JavaScript

## Creational Patterns

 Creational patterns are designed for class instantiation and object creation to increase flexibility and reuse of existing code. 

### Builder Pattern
>Builder pattern separate the complexities of the creation logic from the final representation.

#### Problem
Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code. ... [Refactoring Guru]
#### Solution
A builder pattern is a design pattern that lets us extract the object construction out of its own class (its representation) so that it can be used for multiple different representations. One advantage to using this pattern is that it lets us build objects with one operation on top of another where we don’t need to call all operations simultaneously, only the ones that are needed to produce a particular output. ... [Yash Sharma]

Read more here: [builder pattern >>>](https://patternsandbox.github.io/javascript/#builder-pattern
### Factory Pattern
>When a function returns an object, we call it a factory function.

#### Problem
In class-based programming, the factory method pattern is a creational pattern that uses factory methods **to deal with the problem of creating objects** without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor. ... [Jar Gon]
#### Solution
The Factory pattern can be especially useful when applied to the following situations: When our object or component setup involves a high level of complexity. When we need to easily generate different instances of objects depending on the environment we are in. When we’re working with many small objects or components that share the same properties. When composing objects with instances of other objects that need only satisfy an API contract (a.k.a., duck typing) to work. This is useful for decoupling. ... [Addy Osmani]

Read more here: [factory pattern >>>](https://patternsandbox.github.io/javascript/#factory-pattern
## Structural Patterns

 Stractural patterns are designed with regard to a class’s structure and composition. 

### Decorator Pattern
>In its simplest form, a decorator is simply a way of wrapping one piece of code with another — literally “decorating” it. ... [Graham Cox]

#### Problem
A common reason why developers use them is that their applications may contain features requiring a large quantity of distinct types of object. Imagine having to define hundreds of different object constructors for, say, a JavaScript game. ... [Addy Osmani]
#### Solution
Decorators are a proposal for extending JavaScript classes which is widely adopted among developers in transpiler environments, with broad interest in standardization. TC39 has been iterating on decorators proposals for over five years. ... [Tc39 Proposal Decorators]

Read more here: [decorator pattern >>>](https://patternsandbox.github.io/javascript/#decorator-pattern
### Facade Pattern
>The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems.

#### Problem
Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on. As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain. ... [Refactoring Guru]
#### Solution
A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about. ... [Refactoring Guru]

Read more here: [facade pattern >>>](https://patternsandbox.github.io/javascript/#facade-pattern
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
# Builder Pattern
>Builder pattern separate the complexities of the creation logic from the final representation.

## Problem

Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code. ... [Refactoring Guru]

Imagine having a complex object that requires a large, systematic step-by-step initialization of abundant fields and nested objects. This can get buried inside a huge constructor with many parameters — or even scattered throughout your code. ... [Jsmanifest]

The problem solved by the Builder pattern is easy to identify: this pattern should be used when it is necessary to use a constructor with a very long parameter list or when there is a long list of constructors with different parameters. ... [Carlos Caballero]

The seemingly easiest solution to complex object is to extend the base car class and create a set of subclasses, each covering pieces of the parameters. But if you think about it, you will eventually face the issue of having to create new subclasses every time you come across new parameters, such as having tinted windows. And every time this happens, your hierarchy will grow even more. ... [Jsmanifest]

You can use the builder pattern to avoid a common issue known as telescoping constructors, which is when you create smaller versions of a big constructor to reduce the amount of logic in the constructor. ... [Eslam Hefnawy]

## Solution

A builder pattern is a design pattern that lets us extract the object construction out of its own class (its representation) so that it can be used for multiple different representations. One advantage to using this pattern is that it lets us build objects with one operation on top of another where we don’t need to call all operations simultaneously, only the ones that are needed to produce a particular output. ... [Yash Sharma]

Builder pattern separates the `construction` of complex object which involve `computing multiple sequential operations` from its `representation`. It produces different representations of an object using the same construct

Builders allow us to construct complex objects by only specifying the type and content of the object, shielding us from the process of creating or representing the object explicitly. ... [Addy Osmani]

Director defines the order in which the construction steps are performed. Its purpose is the re-usability of specific configurations. The Director can be omitted in some implementations of this pattern. ... [Carlos Caballero]

Directors are involved in defining methods ensuring that steps are executed in a specific order to build the commonly constructed objects. ... [Jsmanifest]

The builder design pattern is self-explanatory. It creates objects but it really shines when there is a need to create multiple objects with some similarities. A builder avoids the necessity to create myriad subclasses from a base class or big constructors with a lot of conditional logic using method chaining. ... [Eslam Hefnawy]

The parameters in the constructor are reduced and served in a much more readable way, and thus there is no need to pass in null for optional parameters to the constructor. ... [Itay Elgazar]

## Example

### 1. Class
```javascript
class Car {
  constructor(build) {
    this.make = build.make;
    this.model = build.model;
    this.sunroof = build.sunroof || false;
  }
}

export default class CarBuilder {
  setMake(make) {
    this.make = make;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setSunroof(sunroof) {
    this.sunroof = sunroof;
    return this;
  }

  build() {
    return new Car(this);
  }
}

```
__Listing 1.1: [builder/examples/class/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/class/index.js)__
```javascript
import CarBuilder from "./index";

test("Build a Honda with with sunroof", () => {
  const car = new CarBuilder()
    .setMake("Honda")
    .setModel("CR-V")
    .setSunroof(true)
    .build();
  expect(car.sunroof).toBeTruthy();
});

```
__Listing 1.2: [builder/examples/class/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/class/test.js)__

### 2. Director
```javascript
class Audi {
  constructor(build) {
    this.horsePower = build.horsePower;
    this.torque = build.torque;
    this.sunroof = build.sunroof || false;
    this.panoramicSunroof = build.panoramicSunroof || false;
  }
}

export class AudiBuilder {
  setMaxHorsePower() {
    this.horsePower = 563;
    return this;
  }

  setMaxTorque() {
    this.torque = 590;
  }

  setPanoramicSunroof() {
    this.panoramicSunroof = true;
    return this;
  }

  setMinHorsePower() {
    this.horsePower = 228;
    return this;
  }

  setMinTorque() {
    this.torque = 258;
  }

  setSunroof() {
    this.sunroof = true;
    return this;
  }

  build() {
    return new Audi(this);
  }
}

export class Director {
  constructor() {
    this.builder = new AudiBuilder();
  }

  buildEntryLevelAudi() {
    this.builder.setMinHorsePower();
    this.builder.setMinTorque();
    this.builder.setSunroof();
    return this;
  }

  buildLoadedAudi() {
    this.builder.setMaxHorsePower();
    this.builder.setMaxTorque();
    this.builder.setPanoramicSunroof();
    return this;
  }

  build() {
    return this.builder;
  }
}

```
__Listing 2.1: [builder/examples/director/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/director/index.js)__
```javascript
import { Director } from "./index";

test("build entry level Audi", () => {
  const audi = new Director().buildEntryLevelAudi().build();
  expect(audi.torque).toEqual(258);
});

```
__Listing 2.2: [builder/examples/director/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/director/test.js)__

### 3. Function
```javascript
function Car(build) {
  this.body = build.make;
  this.model = build.model;
  this.sunroof = build.sunroof || false;
}

function CarBuilder() {
  return {
    setMake(value) {
      this.make = value;
      return this;
    },
    setModel(value) {
      this.model = value;
      return this;
    },
    setSunroof(value) {
      this.sunroof = value;
      return this;
    },
    build() {
      return new Car(this);
    },
  };
}

export default CarBuilder;

```
__Listing 3.1: [builder/examples/function/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/function/index.js)__
```javascript
import CarBuilder from "./index";

test("Build Honda Camry with sunroof", () => {
  const car = new CarBuilder()
    .setMake("Honda")
    .setModel("Camry")
    .setSunroof(false)
    .build();
  expect(car.sunroof).toBeFalsy();
});

```
__Listing 3.2: [builder/examples/function/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/function/test.js)__

### 4. Sequential
```javascript
class Calculator {
  constructor(builder) {
    this.result = builder.result;
  }
}

export default class CalculatorBuilder {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
    return this;
  }

  subtract(number) {
    this.result -= number;
    return this;
  }

  divide(number) {
    this.result /= number;
    return this;
  }

  multiply(number) {
    this.result *= number;
    return this;
  }

  compute() {
    return new Calculator(this);
  }
}

```
__Listing 4.1: [builder/examples/sequential/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/sequential/index.js)__
```javascript
import Calculator from "./index";

test("Calculate total", () => {
  const { result } = new Calculator()
    .add(100)
    .divide(2)
    .subtract(10)
    .divide(10)
    .multiply(9)
    .add(100)
    .compute();
  expect(result).toEqual(136);
});

```
__Listing 4.2: [builder/examples/sequential/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/sequential/test.js)__

### 5. Typescript
```typescript
interface ICar {
  make: string;
  model: string;
  sunroof?: boolean;
}

class Car {
  car: ICar;

  constructor(build: ICar) {
    this.car = build;
  }
}

export default class CarBuilder {
  car: ICar;

  constructor() {
    this.car = {
      make: "",
      model: "",
      sunroof: false,
    };
  }

  setMake(make) {
    this.car.make = make;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setSunroof(sunroof) {
    this.car.sunroof = sunroof;
    return this;
  }

  build() {
    return new Car(this.car);
  }
}

```
__Listing 5.1: [builder/examples/typescript/index.ts](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/typescript/index.ts)__
```javascript
import CarBuilder from "./index.ts";

test("Build a Honda with with sunroof", () => {
  const build = new CarBuilder()
    .setMake("Honda")
    .setModel("CR-V")
    .setSunroof(true)
    .build();
  const { car } = build;
  expect(car.sunroof).toBeTruthy();
});

```
__Listing 5.2: [builder/examples/typescript/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/typescript/test.js)__

## References
- [Jsmanifest]
- [Yash Sharma]
- [Do Factory]
- [Weekly Web Tips]
- [Addy Osmani]
- [Carlos Caballero]
- [Eslam Hefnawy]
- [Itay Elgazar]
- [Refactoring Guru]

[Jsmanifest]: https://jsmanifest.com/the-builder-pattern-in-javascript/
[Yash Sharma]: https://codeburst.io/builder-pattern-in-javascript-e5b13e4e51af
[Do Factory]: https://www.dofactory.com/javascript/design-patterns/builder
[Weekly Web Tips]: https://medium.com/weekly-webtips/the-builder-design-pattern-a7c9e6429fb7
[Addy Osmani]: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
[Carlos Caballero]: https://www.carloscaballero.io/understanding-design-patterns-builder/
[Eslam Hefnawy]: https://blog.logrocket.com/how-typescraddyipt-design-patterns-help-you-write-better-code/
[Itay Elgazar]: https://hashnode.com/post/the-builder-pattern-in-nodejs-and-typescript-cjrd2a0i000gz8ps1adi47mpx
[Refactoring Guru]: https://refactoring.guru/design-patterns/builder
# Decorator Pattern
>In its simplest form, a decorator is simply a way of wrapping one piece of code with another — literally “decorating” it. ... [Graham Cox]

## Problem

A common reason why developers use them is that their applications may contain features requiring a large quantity of distinct types of object. Imagine having to define hundreds of different object constructors for, say, a JavaScript game. ... [Addy Osmani]

Decorators provide flexibility to statically typed languages by allowing runtime changes as opposed to inheritance which takes place at compile time. **JavaScript, however, is a dynamic language and the ability to extend an object at runtime is baked into the language itself.  For this reason, the Decorator pattern is less relevant to JavaScript developers**. In JavaScript the Extend and Mixin patterns subsume the Decorator pattern. ... [Do Factory]

Whilst functional composition is already possible in JavaScript, it’s significantly more difficult — or even impossible — to apply the same techniques to other pieces of code (e.g. classes and class properties). ... [Graham Cox]

## Solution

Decorators are a proposal for extending JavaScript classes which is widely adopted among developers in transpiler environments, with broad interest in standardization. TC39 has been iterating on decorators proposals for over five years. ... [Tc39 Proposal Decorators]

Decorators are a structural design pattern that aim to **promote code reuse. Similar to Mixins**, they can be considered another viable alternative to object subclassing. Classically, Decorators offered the ability to add behavior to existing classes in a system dynamically. The idea was that the decoration itself was not essential to the base functionality of the class; otherwise, it would be baked into the superclass itself. ... [Addy Osmani]

Decorators are helpful for anything you want to transparently wrap with extra functionality. These include memoization, enforcing access control and authentication, instrumentation and timing functions, logging, rate-limiting, and the list goes on. ... [Addy Osmani Medium]

In its simplest form, a decorator is simply a way of wrapping one piece of code with another — literally “decorating” it. This is a concept you might well have heard of previously as **functional composition**, or **higher-order functions**. ... [Graham Cox]

The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object. ... [Do Factory]

With the introduction of Classes in TypeScript and ES6, there now exist certain scenarios that require additional features to support annotating or modifying classes and class members. Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members. Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature of TypeScript. ... [Typescript]

## Example

### 1. Class
```javascript
export class Car {
  constructor(spec) {
    this.body = spec.body;
    this.model = spec.model;
    this.sunroof = spec.sunroof || false;
  }

  assemble() {
    return {
      body: this.body,
      model: this.model,
      sunroof: this.sunroof,
    };
  }
}

export class DecorateCar {
  constructor(myCar, color, tint) {
    this.car = myCar;
    this.color = color;
    this.tint = tint || false;
  }

  makeover() {
    return {
      ...this.car,
      color: this.color,
      tint: this.tint,
    };
  }
}

```
__Listing 1.1: [decorator/examples/class/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/decorator/examples/class/index.js)__
```javascript
import { Car, DecorateCar } from "./index";

test("upgrade car", () => {
  const honda = new Car({ body: "sedan", model: "Camry", sunroof: false });
  const upgraded = new DecorateCar(honda, "Yellow", true);

  const result = upgraded.makeover();

  expect(result.tint).toBeTruthy();
  expect(result.color).toEqual("Yellow");
  expect(result.model).toEqual("Camry");
});

```
__Listing 1.2: [decorator/examples/class/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/decorator/examples/class/test.js)__

### 2. Function
```javascript
function Car(spec) {
  this.body = spec.body;
  this.model = spec.model;
  this.sunroof = spec.sunroof || false;

  // eslint-disable-next-line func-names
  this.assemble = function () {
    return {
      body: this.body,
      model: this.model,
      sunroof: this.sunroof,
    };
  };
}

function DecorateCar(myCar, color, tint) {
  this.car = myCar;
  this.color = color;
  this.tint = tint || false;

  this.makeover = function () {
    return {
      ...this.car,
      color: this.color,
      tint: this.tint,
    };
  };
}

export { Car, DecorateCar };

```
__Listing 2.1: [decorator/examples/function/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/decorator/examples/function/index.js)__
```javascript
import { Car, DecorateCar } from "./index";

test("upgrade car", () => {
  const honda = new Car({ body: "sedan", model: "Camry", sunroof: false });
  const upgraded = new DecorateCar(honda, "Yellow", true);

  const result = upgraded.makeover();

  expect(result.tint).toBeTruthy();
  expect(result.color).toEqual("Yellow");
  expect(result.model).toEqual("Camry");
});

```
__Listing 2.2: [decorator/examples/function/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/decorator/examples/function/test.js)__

### 3. Stage 2 Decorator
```javascript
// NOTE: requires @babel/plugin-proposal-decorators
function makeover(params) {
  return function decorator(target, name, descriptor) {
    const original = descriptor.value;
    if (typeof original === "function") {
      descriptor.value = function decorate(...args) {
        const result = original.apply(this, args);
        return { ...result, ...params };
      };
    }
    return descriptor;
  };
}

class Car {
  constructor(spec) {
    this.body = spec.body;
    this.model = spec.model;
    this.sunroof = spec.sunroof || false;
  }

  @makeover({ color: "Yellow", tint: true })
  assemble() {
    return {
      body: this.body,
      model: this.model,
      sunroof: this.sunroof,
    };
  }
}

export default Car;

```
__Listing 3.1: [decorator/examples/stage.2.decorator/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/decorator/examples/stage.2.decorator/index.js)__
```javascript
import Car from "./index";

test("Stage 2 draft function decorator", () => {
  const upgraded = new Car({ body: "sedan", model: "Camry", sunroof: false });

  const result = upgraded.assemble();

  expect(result.tint).toBeTruthy();
  expect(result.color).toEqual("Yellow");
  expect(result.model).toEqual("Camry");
});

```
__Listing 3.2: [decorator/examples/stage.2.decorator/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/decorator/examples/stage.2.decorator/test.js)__

## References
- [Do Factory]
- [Addy Osmani]
- [Graham Cox]
- [Tc39 Proposal Decorators]
- [Addy Osmani Medium]
- [Typescript]

[Do Factory]: https://www.dofactory.com/javascript/design-patterns/decorator
[Addy Osmani]: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
[Graham Cox]: https://www.sitepoint.com/javascript-decorators-what-they-are/
[Tc39 Proposal Decorators]: https://github.com/tc39/proposal-decorators
[Addy Osmani Medium]: https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
[Typescript]: https://www.typescriptlang.org/docs/handbook/decorators.html
# Facade Pattern
>The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems.

## Problem

Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on. As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain. ... [Refactoring Guru]

## Solution

A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about. ... [Refactoring Guru]

A facade pattern provides a convenient **higher-level interface** to a larger body of code, hiding its true underlying complexity. ... [Addy Osmani]

An area where Façades are used is in **refactoring**. Suppose you have a confusing or messy set of **legacy objects** that the client should not be concerned about. You can hide this code behind a Façade. ... [Do Factory]

The Facade pattern both simplifies the interface of a class and it also decouples the class from the code that utilizes it. This gives us the ability to indirectly interact with subsystems in a way that can sometimes be **less prone to error** than accessing the subsystem directly. ... [Addy Osmani]

The facade pattern is used to simplify a client’s interaction with a system. So it can be used when an application has a large and complex underlying code that the client does not need to see. ... [Educative Io]

This depends on the environment you will be building the JavaScript in, each comes with it’s own set of tools to help you get the job done.
If you are building a node application or module you will make use of node’s require() method and module.exports syntax to construct a facade.
If you are building a web application or module using requirejs you will use define() and require() to build your facade, or if you are using es6 syntax you will be using the import and export statements. ... [Hendrik Volschenk]

When building an application, we often face problems with external APIs. One has simple methods, other has them very complicated. Unifying them under one common interface is one of uses of the facade pattern. ... [Tomek Buszewski]

## Example

### 1. Class
```javascript
class Bank {
  static Verify(name, amount) {
    return name === "Bill" && amount < 100000;
  }
}

class Credit {
  credit = [{ name: "Bill", score: 800 }];

  score = 0;

  constructor(name) {
    this.credit.forEach((person) => {
      if (name === person.name) {
        this.score = person.score;
      } else {
        this.score = 400;
      }
    });
  }

  get score() {
    return this.score;
  }
}

class Background {
  status = false;

  constructor(name) {
    this.status = !(name.charAt(0) === "C");
  }

  get status() {
    return this.status;
  }
}

export default class AutoLoan {
  constructor(name) {
    this.name = name;
  }

  applyFor(amount) {
    let result = "approved";
    const bank = new Bank.Verify(this.name, amount);
    const credit = new Credit(this.name);
    const background = new Background(this.name);

    if (!bank) {
      result = "denied";
    } else if (credit.score < 600) {
      result = "denied";
    } else if (!background.status) {
      result = "denied";
    }

    return `${this.name} has been ${result} for a $${amount} auto loan.`;
  }
}

```
__Listing 1.1: [facade/examples/class/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/facade/examples/class/index.js)__
```javascript
import AutoLoan from "./index";

test("approved", () => {
  const autoLoan = new AutoLoan("Bill");
  const result = autoLoan.applyFor("50000");

  expect(`Bill has been approved for a $50000 auto loan.`).toEqual(result);
});

test("denied", () => {
  const autoLoan = new AutoLoan("Bob");
  const result = autoLoan.applyFor("50000");

  expect(`Bob has been denied for a $50000 auto loan.`).toEqual(result);
});

```
__Listing 1.2: [facade/examples/class/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/facade/examples/class/test.js)__

### 2. Function
```javascript
function Bank(name, amount) {
  return {
    verify: () => {
      return name === "Bill" && amount < 100000;
    },
  };
}

function Credit(name) {
  const credit = [{ name: "Bill", score: 800 }];
  let score = 0;

  credit.forEach((person) => {
    if (name === person.name) {
      score = person.score;
    } else {
      score = 400;
    }
  });

  return {
    get: score,
  };
}

function Background(name) {
  const status = !(name.charAt(0) === "C");
  return {
    status,
  };
}

const AutoLoan = (name) => {
  return {
    applyFor: (amount) => {
      let result = "approved";
      const bank = Bank(name, amount).verify();
      const credit = Credit(name).get;
      const background = Background(name).status;

      if (!bank) {
        result = "denied";
      } else if (credit.score < 600) {
        result = "denied";
      } else if (!background.status) {
        result = "denied";
      }

      return `${this.name} has been ${result} for a $${amount} auto loan.`;
    },
  };
};

export default AutoLoan;

```
__Listing 2.1: [facade/examples/function/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/facade/examples/function/index.js)__
```javascript
import AutoLoan from "../class";

test("approved", () => {
  const result = new AutoLoan("Bill").applyFor("50000");

  expect(`Bill has been approved for a $50000 auto loan.`).toEqual(result);
});

test("denied", () => {
  const result = new AutoLoan("Bob").applyFor("50000");

  expect(`Bob has been denied for a $50000 auto loan.`).toEqual(result);
});

```
__Listing 2.2: [facade/examples/function/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/facade/examples/function/test.js)__

## References
- [Do Factory]
- [Addy Osmani]
- [Tomek Buszewski]
- [Educative Io]
- [Refactoring Guru]
- [Hendrik Volschenk]

[Do Factory]: https://www.dofactory.com/javascript/design-patterns/builder
[Addy Osmani]: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
[Tomek Buszewski]: https://dev.to/tomekbuszewski/facade-pattern-in-javascript-3on4
[Educative Io]: https://www.educative.io/collection/page/5429798910296064/5725579815944192/6046230397321216
[Refactoring Guru]: https://refactoring.guru/design-patterns/facade
[Hendrik Volschenk]: https://medium.com/@righteous.trespasser/creating-and-using-facades-in-javascript-2c471ea2af41
# Factory Pattern
>When a function returns an object, we call it a factory function.

## Problem

In class-based programming, the factory method pattern is a creational pattern that uses factory methods **to deal with the problem of creating objects** without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor. ... [Jar Gon]

There are many people who argue against using constructors at all. Their arguments boil down to the fact that if you aren’t careful, it can be easy to introduce bugs into your code when using constructors. ... [The Odin Project]

## Solution

The Factory pattern can be especially useful when applied to the following situations: When our object or component setup involves a high level of complexity. When we need to easily generate different instances of objects depending on the environment we are in. When we’re working with many small objects or components that share the same properties. When composing objects with instances of other objects that need only satisfy an API contract (a.k.a., duck typing) to work. This is useful for decoupling. ... [Addy Osmani]

The factory function pattern is **similar to constructors**, but instead of using new to create an object, factory functions simply set up and return the new object when you call the function. ... [The Odin Project]

The factory pattern wraps a constructor for different types of objects and returns instances of the objects via a simple API. It makes it easy to create different objects by exposing a simple API that return the specified object type. ... [Babs Craig]

With a factory function, you can create as many user objects as you want. If you’re building a chat app, for instance, you can have a user object representing the current user, and also a lot of other user objects representing all the other users who are currently signed in and chatting. ... [Eric Elliott]

## Example

### 1. Class
```javascript
class Truck {
  constructor({ engine, bed, sunroof, cab }) {
    this.engine = engine;
    this.bed = bed || "standard";
    this.sunroof = sunroof || false;
    this.cab = cab || "standard";
  }
}

class Sedan {
  constructor({ engine, camera, sunroof, color }) {
    this.engine = engine;
    this.camera = camera || false;
    this.sunroof = sunroof || false;
    this.color = color;
  }
}

export default class CarFactory {
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  build() {
    if (this.type === "sedan") {
      return new Sedan(this.attributes);
    }
    if (this.type === "truck") {
      return new Truck(this.attributes);
    }

    return {};
  }
}

```
__Listing 1.1: [factory/examples/class/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/factory/examples/class/index.js)__
```javascript
import CarFactory from "./index";

test("make truck", () => {
  const attributes = {
    engine: "V8",
    bed: "standard",
    sunroof: true,
    cab: "standard",
  };

  const truck = new CarFactory("truck", { ...attributes }).build();

  expect(truck.bed).toEqual("standard");
});

test("make sedan", () => {
  const attributes = {
    engines: "V8",
    camera: true,
    sunroof: true,
    color: "white",
  };

  const truck = new CarFactory("sedan", { ...attributes }).build();

  expect(truck.sunroof).toBeTruthy();
});

```
__Listing 1.2: [factory/examples/class/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/factory/examples/class/test.js)__

### 2. Function
```javascript
const Truck = function ({ engines, bed, sunroof, cab }) {
  this.engines = engines;
  this.bed = bed || "standard";
  this.sunroof = sunroof || false;
  this.cab = cab || "standard";
};

const Sedan = function ({ engines, camera, sunroof, color }) {
  this.engines = engines;
  this.camera = camera || false;
  this.sunroof = sunroof || false;
  this.color = color;
};
const cars = { Truck, Sedan };

const carFactory = function createCar(type, attributes) {
  const CarType = cars[type];

  return new CarType(attributes);
};

export default carFactory;

```
__Listing 2.1: [factory/examples/function/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/factory/examples/function/index.js)__
```javascript
import carFactory from "./index";

test("make truck", () => {
  const attributes = {
    engines: "V8",
    bed: "standard",
    sunroof: true,
    cab: "standard",
  };

  const truck = carFactory("Truck", { ...attributes });

  expect(truck.bed).toEqual("standard");
});

test("make sedan", () => {
  const attributes = {
    engines: "V8",
    camera: true,
    sunroof: true,
    color: "white",
  };

  const truck = carFactory("Sedan", { ...attributes });

  expect(truck.sunroof).toBeTruthy();
});

```
__Listing 2.2: [factory/examples/function/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/factory/examples/function/test.js)__

## References
- [Babs Craig]
- [Eric Elliott]
- [Addy Osmani]
- [The Odin Project]
- [Jar Gon]

[Babs Craig]: https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192
[Eric Elliott]: https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
[Addy Osmani]: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
[The Odin Project]: https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/factory-functions-and-the-module-pattern
[Jar Gon]: http://jargon.js.org/_glossary/FACTORY_PATTERN.md
# Strategy Pattern
>Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it. ... [Rob Dodson]

## Problem

A strategy pattern can be used in Javascript in many cases to replace a switch statement. It is especially helpful when the number of conditions is dynamic or very large. It allows the code for each condition to be independent and separately testable. ... [Rip Tutorial]

Do you ever find yourself writing a lengthy switch statements or if statements structured like a switch. Luckily there is the Strategy Pattern to help alleviate this complex, sometimes unintelligible code. You may have also noticed that this code can have quite a high Cyclomatic Complexity. ... [Los Techies]

The problem with the if/else scenario is that it doesn’t scale. As our systems grow, we need a better way to inject new policies. We may have different strategies required for development, automated testing, and production environments. This is where the strategy pattern becomes so effective. ... [Jarrett Meyer]

## Solution

Abstractly speaking, the Strategy pattern is relevant whenever you have a number of algorithms (or some combination of functions and inputs) that share some common behavior. Put another way, try using this pattern whenever you have a single Goal to accomplish with a number of Approaches. ... [Mike Pennisi]

Define a family of algorithms, encapsulate each one, and make them interchangeable. ... [Carlos Caballero]

Strategy pattern uses the inversion of control technique for having decoupled code. Inversion of control is also known under the “Hollywood Principle”, which states “Don’t call us, we’ll call you”. In functional programming this is done a bit more naturally just by passing a callback. ... [Thomas Rubattel]

The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable. ... [Do Factory]

The key idea is to create objects which represent various strategies. These objects form a pool of strategies from which the context object can choose from to vary its behavior as per its strategy. These objects(strategies) perform the same operation, have the same(single) job and compose the same interface strategy. ... [Chidume Nnamdi]

This pattern seems to be very similar to Factory, Command and others. The main difference is that it is one to many pattern (one object can have many strategies). Also this pattern is used to define algorithms. ... [Bumbu]

## Example

### 1. Class
```javascript
export class BuildCar {
  constructor(strategy) {
    this.strategy = strategy;
  }

  build() {
    return this.strategy.add();
  }
}

export class EntryLevelCar {
  add = () => ({
    engine: "V6",
    driverAssistance: "Cruise control",
  });
}

export class PerformantCar {
  add = () => ({
    engine: "V8",
    driverAssistance: "Cruise control",
  });
}

export class PremiumCar {
  add = () => ({
    engine: "V8",
    driverAssistance: "Intelligent cruise control",
  });
}

```
__Listing 1.1: [strategy/examples/class/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/class/index.js)__
```javascript
import { BuildCar, EntryLevelCar, PerformantCar, PremiumCar } from "./index";

test("buy premium car", () => {
  const car = new BuildCar(new EntryLevelCar());
  const { driverAssistance, engine } = car.build();

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V6");
});

test("buy premium car", () => {
  const car = new BuildCar(new PerformantCar());
  const { driverAssistance, engine } = car.build();

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V8");
});

test("buy premium car", () => {
  const car = new BuildCar(new PremiumCar());
  const { driverAssistance, engine } = car.build();

  expect(driverAssistance).toEqual("Intelligent cruise control");
  expect(engine).toEqual("V8");
});

```
__Listing 1.2: [strategy/examples/class/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/class/test.js)__

### 2. Currying
```javascript
const operation = (operator) => (a) => (b) => operator(a, b);

const add = operation((a, b) => a + b);
const subtract = operation((a, b) => a - b);
const multiply = operation((a, b) => a * b);

export { add, subtract, multiply };

```
__Listing 2.1: [strategy/examples/currying/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/currying/index.js)__
```javascript
import { add, subtract, multiply } from "./index";

test("add", () => {
  expect(add(10)(10)).toEqual(20);
});

test("subtract", () => {
  expect(subtract(10)(10)).toEqual(0);
});

test("multiply", () => {
  expect(multiply(10)(10)).toEqual(100);
});

```
__Listing 2.2: [strategy/examples/currying/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/currying/test.js)__

### 3. Function
```javascript
function BasicEngine() {
  return "V6";
}

function LargeEngine() {
  return "V8";
}

function BasicDriverAssistance() {
  return "Cruise control";
}

function AdvancedDriverAssistance() {
  return "Intelligent cruise control";
}

export function EntryLevelCar() {
  return {
    engine: BasicEngine(),
    driverAssistance: BasicDriverAssistance(),
  };
}

export function PerformantCar() {
  return {
    engine: LargeEngine(),
    driverAssistance: BasicDriverAssistance(),
  };
}

export function PremiumCar() {
  return {
    engine: LargeEngine(),
    driverAssistance: AdvancedDriverAssistance(),
  };
}

export function BuildCar(car) {
  return { ...car };
}

```
__Listing 3.1: [strategy/examples/function/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/function/index.js)__
```javascript
import { EntryLevelCar, PerformantCar, PremiumCar, BuildCar } from "./index";

test("Build entry level car", () => {
  const { driverAssistance, engine } = BuildCar(EntryLevelCar());

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V6");
});

test("Build performant car", () => {
  const { driverAssistance, engine } = BuildCar(PerformantCar());

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V8");
});

test("Build premium car", () => {
  const { driverAssistance, engine } = BuildCar(PremiumCar());

  expect(driverAssistance).toEqual("Intelligent cruise control");
  expect(engine).toEqual("V8");
});

```
__Listing 3.2: [strategy/examples/function/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/function/test.js)__

### 4. Switch
```javascript
const KnownFor = {
  toyota() {
    return "reliability";
  },

  volvo() {
    return "safety";
  },

  mercedes() {
    return "comfort";
  },

  default() {
    return "transporting from point A to B";
  },
};

function BrandKnownFor(brand) {
  return KnownFor[brand] || KnownFor.default;
}

export default BrandKnownFor;

```
__Listing 4.1: [strategy/examples/switch/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/switch/index.js)__
```javascript
import BrandKnownFor from "./index";

test("volvo", () => {
  expect(BrandKnownFor("volvo")()).toEqual("safety");
});

test("toyota", () => {
  expect(BrandKnownFor("toyota")()).toEqual("reliability");
});

test("mercedes", () => {
  expect(BrandKnownFor("mercedes")()).toEqual("comfort");
});

test("kia", () => {
  expect(BrandKnownFor("kia")()).toEqual("transporting from point A to B");
});

```
__Listing 4.2: [strategy/examples/switch/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/switch/test.js)__

### 5. Typescript
```typescript
interface EngineSize {
  add(): string;
}

interface DriverAssistance {
  add(): string;
}

class BasicEngine implements EngineSize {
  add = (): string => "V6";
}

class LargeEngine implements EngineSize {
  add = (): string => "V8";
}

class BasicDriverAssistance implements DriverAssistance {
  add = (): string => "Cruise control";
}

class AdvancedDriverAssistance implements DriverAssistance {
  add = (): string => "Intelligent cruise control";
}

interface CarSpec {
  driverAssistance(): string;
  engineSize(): string;
}

export class EntryLevelCar implements CarSpec {
  driverAssistance = (): string => new BasicDriverAssistance().add();

  engineSize = (): string => new BasicEngine().add();
}

export class PerformantCar implements CarSpec {
  driverAssistance = (): string => new BasicDriverAssistance().add();

  engineSize = (): string => new LargeEngine().add();
}

export class PremiumCar implements CarSpec {
  driverAssistance = (): string => new AdvancedDriverAssistance().add();

  engineSize = (): string => new LargeEngine().add();
}

export class BuildCar {
  engine: string;

  driverAssistance: string;

  constructor(carSpec: CarSpec) {
    this.engine = carSpec.engineSize();
    this.driverAssistance = carSpec.driverAssistance();
  }

  get spec() {
    return {
      engine: this.engine,
      driverAssistance: this.driverAssistance,
    };
  }
}

```
__Listing 5.1: [strategy/examples/typescript/index.ts](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/typescript/index.ts)__
```typescript
import { EntryLevelCar, PerformantCar, PremiumCar, BuildCar } from "./index";

test("Build entry level car", () => {
  const car = new BuildCar(new EntryLevelCar());
  const { driverAssistance, engine } = car.spec;

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V6");
});

test("Build performant car", () => {
  const car = new BuildCar(new PerformantCar());
  const { driverAssistance, engine } = car.spec;

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V8");
});

test("Build premium car", () => {
  const car = new BuildCar(new PremiumCar());
  const { driverAssistance, engine } = car.spec;

  expect(driverAssistance).toEqual("Intelligent cruise control");
  expect(engine).toEqual("V8");
});

```
__Listing 5.2: [strategy/examples/typescript/test.ts](https://github.com/patternsandbox/javascript/blob/main/patterns/strategy/examples/typescript/test.ts)__

## References
- [Do Factory]
- [Rob Dodson]
- [Chidume Nnamdi]
- [Carlos Caballero]
- [Bumbu]
- [Thomas Rubattel]
- [Mike Pennisi]
- [Jarrett Meyer]
- [Los Techies]
- [Rip Tutorial]

[Do Factory]: https://www.dofactory.com/javascript/design-patterns/strategy
[Rob Dodson]: https://robdodson.me/posts/javascript-design-patterns-strategy/
[Chidume Nnamdi]: https://blog.bitsrc.io/keep-it-simple-with-the-strategy-design-pattern-c36a14c985e9
[Carlos Caballero]: https://www.carloscaballero.io/stategy-pattern-in-javascript-typescript/
[Bumbu]: https://bumbu.me/javascript-strategy-pattern/
[Thomas Rubattel]: https://thomas-rubattel.medium.com/strategy-pattern-in-functional-programming-38ddcc2b2d50
[Mike Pennisi]: https://bocoup.com/blog/the-strategy-pattern-in-javascript
[Jarrett Meyer]: https://jarrettmeyer.com/2016/04/28/strategy-pattern-in-node
[Los Techies]: https://lostechies.com/seanbiefeld/2014/12/28/using-the-strategy-pattern-to-reduce-complexity-in-your-javascript/
[Rip Tutorial]: https://riptutorial.com/javascript/example/9116/strategy
