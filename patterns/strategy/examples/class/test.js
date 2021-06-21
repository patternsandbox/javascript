import { BuildCar, EntryLevelCar, PerformantCar, PremiumCar } from "./index";

test("buy entry level  car", () => {
  const car = new BuildCar(new EntryLevelCar());
  const { driverAssistance, engine } = car.build();

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V6");
});

test("buy performant car", () => {
  const car = new BuildCar(new PerformantCar());
  const { driverAssistance, engine } = car.build();

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V8");
});

test("buy premium car", () => {
  const car = new BuildCar(new PremiumCar());
  const { driverAssistance, engine } = car.build();

  expect(driverAssistance).toEqual("Intelligent cruise control");
  expect(engine).toEqual("V8");
});
