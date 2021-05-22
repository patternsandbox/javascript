import CarBuilder from "./index.ts";

test("Build a Honda with with sunroof", () => {
  const build = new CarBuilder()
    .setMake("Honda")
    .setModel("CR-V")
    .setCamera(false)
    .setSunroof(true)
    .build();

  const { car } = build;
  expect(car.camera).toBeFalsy();
  expect(car.sunroof).toBeTruthy();
});
