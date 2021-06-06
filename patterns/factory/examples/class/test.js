import CarFactory from "./index";

test("make truck", () => {
  const attributes = {
    engine: "V8",
    bed: "standard",
    sunroof: true,
    cab: "standard",
  };

  const truck = new CarFactory("truck", { ...attributes }).build();

  expect(truck.bed).toEqual("standard");
});

test("make sedan", () => {
  const attributes = {
    engines: "V8",
    camera: true,
    sunroof: true,
    color: "white",
  };

  const truck = new CarFactory("sedan", { ...attributes }).build();

  expect(truck.sunroof).toBeTruthy();
});
