import carFactory from "./index";

test("make truck", () => {
  const attributes = {
    engines: "V8",
    bed: "standard",
    sunroof: true,
    cab: "standard",
  };

  const truck = carFactory("Truck", { ...attributes });

  expect(truck.engines).toEqual(attributes.engines);
});
