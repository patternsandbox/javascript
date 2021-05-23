const Truck = function ({ engines, bed, sunroof, cab }) {
  this.engines = engines;
  this.bed = bed || "standard";
  this.sunroof = sunroof || false;
  this.cab = cab || "standard";
};

const Sedan = function ({ engines, camera, sunroof, color }) {
  this.engines = engines;
  this.camera = camera || false;
  this.sunroof = sunroof || false;
  this.color = color;
};
const cars = { Truck, Sedan };

const carFactory = function createCar(type, attributes) {
  const CarType = cars[type];

  return new CarType(attributes);
};

export default carFactory;
