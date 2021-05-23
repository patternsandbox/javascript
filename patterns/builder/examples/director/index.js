class Audi {
  constructor(build) {
    this.horsePower = build.horsePower;
    this.torque = build.torque;
    this.sunroof = build.sunroof || false;
    this.panoramicSunroof = build.panoramicSunroof || false;
  }
}

export class AudiBuilder {
  setMaxHorsePower() {
    this.horsePower = 563;
    return this;
  }

  setMaxTorque() {
    this.torque = 590;
  }

  setPanoramicSunroof() {
    this.panoramicSunroof = true;
    return this;
  }

  setMinHorsePower() {
    this.horsePower = 228;
    return this;
  }

  setMinTorque() {
    this.torque = 258;
  }

  setSunroof() {
    this.sunroof = true;
    return this;
  }

  build() {
    return new Audi(this);
  }
}

export class Director {
  constructor() {
    this.builder = new AudiBuilder();
  }

  buildEntryLevelAudi() {
    this.builder.setMinHorsePower();
    this.builder.setMinTorque();
    this.builder.setSunroof();
    return this;
  }

  buildLoadedAudi() {
    this.builder.setMaxHorsePower();
    this.builder.setMaxTorque();
    this.builder.setPanoramicSunroof();
    return this;
  }

  build() {
    return this.builder;
  }
}
