function Car(spec) {
  this.body = spec.body;
  this.model = spec.model;
  this.sunroof = spec.sunroof || false;

  this.assemble = function () {
    return {
      body: this.body,
      model: this.model,
      sunroof: this.sunroof,
    };
  };
}

function DecorateCar(myCar, color, tint) {
  this.car = myCar;
  this.color = color;
  this.tint = tint || false;

  this.makeover = function () {
    return {
      ...this.car,
      color: this.color,
      tint: this.tint,
    };
  };
}

export { Car, DecorateCar };
