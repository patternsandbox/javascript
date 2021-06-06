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
