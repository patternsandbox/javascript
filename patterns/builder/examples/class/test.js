import CarBuilder from "./index";

test("Build a Honda with with sunroof", () => {
  const car = new CarBuilder()
    .setMake("Honda")
    .setModel("CR-V")
    .setCamera(false)
    .setSunroof(true)
    .build();

  expect(car.camera).toBeFalsy();
  expect(car.sunroof).toBeTruthy();
});
