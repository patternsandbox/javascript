const Car = (build) => {
  this.body = build.body;
  this.make = build.make;
  this.model = build.model;
  this.camera = build.camera || false;
  this.sunroof = build.sunroof || false;
};

const CarBuilder = () => {
  this.car = new Car();

  this.setBody = (body) => {
    this.car.body = body;
    return this;
  };

  this.build = () => {
    return new Car(this);
  };

  // return {
  //   setBody: (body) => {
  //     this.body = body;
  //     return this;
  //   },
  //   setMake: (make) => {
  //     this.make = make;
  //     return this;
  //   },
  //   setModel: (model) => {
  //     this.model = model;
  //     return this;
  //   },
  //   setCamera: (camera) => {
  //     this.camera = camera;
  //     return this;
  //   },
  //   setSunroof: (sunroof) => {
  //     this.sunroof = sunroof;
  //     return this;
  //   },
  //   build: () => {
  //     return new Car(this);
  //   },
  // };
};

export default CarBuilder;
