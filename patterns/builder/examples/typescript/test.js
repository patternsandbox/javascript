import CarBuilder from "./index.ts";

test("Build a Honda SUV with with sunroof", () => {
  const build = new CarBuilder()
    .setBody("SUV")
    .setMake("Honda")
    .setModel("CR-V")
    .setCamera(false)
    .setSunroof(true)
    .build();

  const { car } = build;
  expect(car.camera).toBeFalsy();
  expect(car.sunroof).toBeTruthy();
});

test("Build Honda Camry with camera", () => {
  const build = new CarBuilder()
    .setBody("Sedan")
    .setMake("Honda")
    .setModel("Camry")
    .setCamera(true)
    .setSunroof(false)
    .build();

  const { car } = build;
  expect(car.camera).toBeTruthy();
  expect(car.sunroof).toBeFalsy();
});
