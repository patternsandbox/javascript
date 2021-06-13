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
