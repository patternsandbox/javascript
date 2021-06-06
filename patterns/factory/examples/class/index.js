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
