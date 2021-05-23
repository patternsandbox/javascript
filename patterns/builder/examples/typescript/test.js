import CarBuilder from "./index.ts";

test("Build a Honda with with sunroof", () => {
  const build = new CarBuilder()
    .setMake("Honda")
    .setModel("CR-V")
    .setSunroof(true)
    .build();
  const { car } = build;
  expect(car.sunroof).toBeTruthy();
});
