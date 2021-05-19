export default class Car {
  constructor(build) {
    this.body = build.body;
    this.make = build.make;
    this.model = build.model;
    this.camera = build.camera || false;
    this.sunroof = build.sunroof || false;
  }

  static get Builder() {
    class Builder {
      constructor(body) {
        this.body = body;
      }

      withMake(make) {
        this.make = make;
        return this;
      }

      withModel(model) {
        this.model = model;
        return this;
      }

      withCamera(camera) {
        this.camera = camera;
        return this;
      }

      withSunroof(sunroof) {
        this.sunroof = sunroof;
        return this;
      }

      build() {
        return new Car(this);
      }
    }
    return Builder;
  }
}
