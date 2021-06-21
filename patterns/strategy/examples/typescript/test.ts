import { EntryLevelCar, PerformantCar, PremiumCar, BuildCar } from "./index";

test("Build entry level car", () => {
  const car = new BuildCar(new EntryLevelCar());
  const { driverAssistance, engine } = car.spec;

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V6");
});

test("Build performant car", () => {
  const car = new BuildCar(new PerformantCar());
  const { driverAssistance, engine } = car.spec;

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V8");
});

test("Build premium car", () => {
  const car = new BuildCar(new PremiumCar());
  const { driverAssistance, engine } = car.spec;

  expect(driverAssistance).toEqual("Intelligent cruise control");
  expect(engine).toEqual("V8");
});
