class Car {
  constructor(build) {
    this.body = build.body;
    this.make = build.make;
    this.model = build.model;
    this.camera = build.camera || false;
    this.sunroof = build.sunroof || false;
  }
}

export default class CarBuilder {
  setBody(body) {
    this.body = body;
    return this;
  }

  setMake(make) {
    this.make = make;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setCamera(camera) {
    this.camera = camera;
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
