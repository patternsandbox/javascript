import CarBuilder from "./index";

test("Build a Honda SUV with with sunroof", () => {
  const car = new CarBuilder()
    .setBody("SUV")
    .setMake("Honda")
    .setModel("CR-V")
    .setCamera(false)
    .setSunroof(true)
    .build();

  expect(car.camera).toBeFalsy();
  expect(car.sunroof).toBeTruthy();
});

test("Build Honda Camry with camera", () => {
  const car = new CarBuilder()
    .setBody("Sedan")
    .setMake("Honda")
    .setModel("Camry")
    .setCamera(true)
    .setSunroof(false)
    .build();

  expect(car.camera).toBeTruthy();
  expect(car.sunroof).toBeFalsy();
});
