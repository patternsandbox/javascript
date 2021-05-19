import CarBuilder from ".";

test("Build a Honda SUV with with sunroof", () => {
  const car = new CarBuilder.Builder("SUV")
    .withMake("Honda")
    .withModel("CR-V")
    .withCamera(false)
    .withSunroof(true)
    .build();

  expect(car.camera).toBeFalsy();
  expect(car.sunroof).toBeTruthy();
});

test("Build Honda Camry with camera", () => {
  const car = new CarBuilder.Builder("SUV")
    .withMake("Honda")
    .withModel("Camry")
    .withCamera(true)
    .withSunroof(false)
    .build();

  expect(car.camera).toBeTruthy();
  expect(car.sunroof).toBeFalsy();
});
