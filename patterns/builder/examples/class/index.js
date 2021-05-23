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
