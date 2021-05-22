interface ICar {
  make: string;
  model: string;
  camera?: boolean;
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
      camera: false,
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

  setCamera(camera) {
    this.car.camera = camera;
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
