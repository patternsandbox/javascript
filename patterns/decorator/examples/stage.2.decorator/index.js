// NOTE: requires @babel/plugin-proposal-decorators
function makeover(params) {
  return function decorator(target, name, descriptor) {
    const original = descriptor.value;
    if (typeof original === "function") {
      descriptor.value = function decorate(...args) {
        const result = original.apply(this, args);
        return { ...result, ...params };
      };
    }
    return descriptor;
  };
}

class Car {
  constructor(spec) {
    this.body = spec.body;
    this.model = spec.model;
    this.sunroof = spec.sunroof || false;
  }

  @makeover({ color: "Yellow", tint: true })
  assemble() {
    return {
      body: this.body,
      model: this.model,
      sunroof: this.sunroof,
    };
  }
}

export default Car;
