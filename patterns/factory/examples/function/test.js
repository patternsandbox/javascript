import carFactory from "./index";

test("make truck", () => {
  const attributes = {
    engines: "V8",
    bed: "standard",
    sunroof: true,
    cab: "standard",
  };

  const truck = carFactory("Truck", { ...attributes });

  expect(truck.bed).toEqual("standard");
});

test("make sedan", () => {
  const attributes = {
    engines: "V8",
    camera: true,
    sunroof: true,
    color: "white",
  };

  const truck = carFactory("Sedan", { ...attributes });

  expect(truck.sunroof).toBeTruthy();
});
