import CarBuilder from "./index";

test("Build Honda Camry with camera", () => {
  const car = new CarBuilder()
    .setMake("Honda")
    .setModel("Camry")
    .setCamera(true)
    .setSunroof(false)
    .build();

  expect(car.camera).toBeTruthy();
  expect(car.sunroof).toBeFalsy();
});
