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
