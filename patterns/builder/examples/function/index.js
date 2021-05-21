function Car(build) {
  this.body = build.body;
  this.body = build.make;
  this.model = build.model;
  this.camera = build.camera || false;
  this.sunroof = build.sunroof || false;
}

function CarBuilder() {
  return {
    setBody(value) {
      this.body = value;
      return this;
    },
    setMake(value) {
      this.make = value;
      return this;
    },
    setModel(value) {
      this.model = value;
      return this;
    },
    setCamera(value) {
      this.camera = value;
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
