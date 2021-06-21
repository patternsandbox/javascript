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
