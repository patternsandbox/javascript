# Builder Pattern
>Builder pattern separate the complexities of the creation logic from the final representation.

## Problem

Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code. __Ref:__ [Refactoring Guru]

Imagine having a complex object that requires a large, systematic step-by-step initialization of abundant fields and nested objects. This can get buried inside a huge constructor with many parameters — or even scattered throughout your code. __Ref:__ [Jsmanifest]

The problem solved by the Builder pattern is easy to identify: this pattern should be used when it is necessary to use a constructor with a very long parameter list or when there is a long list of constructors with different parameters. __Ref:__ [Carlos Caballero]

The seemingly easiest solution to complex object is to extend the base car class and create a set of subclasses, each covering pieces of the parameters. But if you think about it, you will eventually face the issue of having to create new subclasses every time you come across new parameters, such as having tinted windows. And every time this happens, your hierarchy will grow even more. __Ref:__ [Jsmanifest]

You can use the builder pattern to avoid a common issue known as telescoping constructors, which is when you create smaller versions of a big constructor to reduce the amount of logic in the constructor. __Ref:__ [Eslam Hefnawy]

## Solution

A builder pattern is a design pattern that lets us extract the object construction out of its own class (its representation) so that it can be used for multiple different representations. One advantage to using this pattern is that it lets us build objects with one operation on top of another where we don’t need to call all operations simultaneously, only the ones that are needed to produce a particular output. __Ref:__ [Yash Sharma]

Builder pattern separates the `construction` of complex object which involve `computing multiple sequential operations` from its `representation`. It produces different representations of an object using the same construct

Builders allow us to construct complex objects by only specifying the type and content of the object, shielding us from the process of creating or representing the object explicitly. __Ref:__ [Addy Osmani]

The builder design pattern is self-explanatory. It creates objects but it really shines when there is a need to create multiple objects with some similarities. A builder avoids the necessity to create myriad subclasses from a base class or big constructors with a lot of conditional logic using method chaining. __Ref:__ [Eslam Hefnawy]

The parameters in the constructor are reduced and served in a much more readable way, and thus there is no need to pass in null for optional parameters to the constructor. __Ref:__ [Itay Elgazar]

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
__Listing 1: [builder/examples/class/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/class/index.js)__
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
__Listing 2: [builder/examples/class/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/class/test.js)__

### 2. Function
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
__Listing 1: [builder/examples/function/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/function/index.js)__
```javascript
import CarBuilder from "./index";

test("Build Honda Camry with camera", () => {
  const car = new CarBuilder()
    .setMake("Honda")
    .setModel("Camry")
    .setSunroof(false)
    .build();
  expect(car.sunroof).toBeFalsy();
});

```
__Listing 2: [builder/examples/function/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/function/test.js)__

### 3. Sequential
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
__Listing 1: [builder/examples/sequential/index.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/sequential/index.js)__
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
__Listing 2: [builder/examples/sequential/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/sequential/test.js)__

### 4. Typescript
```javascript
interface ICar {
  make: string;
  model: string;
  sunroof?: boolean;
}

class Car {
  private readonly car: ICar;

  constructor(build: ICar) {
    this.car = build;
  }
}

export default class CarBuilder {
  private readonly car: ICar;

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
__Listing 1: [builder/examples/typescript/index.ts](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/typescript/index.ts)__
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
__Listing 2: [builder/examples/typescript/test.js](https://github.com/patternsandbox/javascript/blob/main/patterns/builder/examples/typescript/test.js)__

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
