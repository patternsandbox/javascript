export default class CarBuilder {
  constructor(build) {
    this.body = build.body;
    this.make = build.make;
    this.model = build.model;
    this.camera = build.camera || false;
    this.navigation = build.navigation || false;
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

      withNavigation(navigation) {
        this.navigation = navigation;
        return this;
      }

      build() {
        return new CarBuilder(this);
      }
    }
    return Builder;
  }
}
