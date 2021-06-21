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
