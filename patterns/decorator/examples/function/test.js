import { Car, DecorateCar } from "./index";

test("upgrade car", () => {
  const honda = new Car({ body: "sedan", model: "Camry", sunroof: false });
  const upgraded = new DecorateCar(honda, "Yellow", true);

  const result = upgraded.makeover();

  expect(result.tint).toBeTruthy();
  expect(result.color).toEqual("Yellow");
  expect(result.model).toEqual("Camry");
});
