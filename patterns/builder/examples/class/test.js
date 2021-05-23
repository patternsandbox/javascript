import CarBuilder from "./index";

test("Build a Honda with with sunroof", () => {
  const car = new CarBuilder()
    .setMake("Honda")
    .setModel("CR-V")
    .setSunroof(true)
    .build();
  expect(car.sunroof).toBeTruthy();
});
