# Factory Pattern
>

## Problem

## Solution



The factory pattern wraps a constructor for different types of objects and returns instances of the objects via a simple API. It makes it easy to create different objects by exposing a simple API that return the specified object type. Ref: *Ref:* [Babs Craig]

## Example

### 1. Function
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
__Listing 1: index.js__
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

  expect(truck.engines).toEqual(attributes.engines);
});

test("make sedan", () => {
  const attributes = {
    engines: "V8",
    camera: true,
    sunroof: true,
    color: "white",
  };

  const truck = carFactory("Sedan", { ...attributes });

  expect(truck.engines).toEqual(attributes.engines);
});

```
__Listing 2: test.js__

## References
- [Babs Craig]

[Babs Craig]: https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192
