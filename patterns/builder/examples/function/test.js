import CarBuilder from "./index";

test("Build Honda Camry with sunroof", () => {
  const car = new CarBuilder()
    .setMake("Honda")
    .setModel("Camry")
    .setSunroof(false)
    .build();
  expect(car.sunroof).toBeFalsy();
});
