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
