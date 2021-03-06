import { EntryLevelCar, PerformantCar, PremiumCar, BuildCar } from "./index";

test("Build entry level car", () => {
  const { driverAssistance, engine } = BuildCar(EntryLevelCar());

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V6");
});

test("Build performant car", () => {
  const { driverAssistance, engine } = BuildCar(PerformantCar());

  expect(driverAssistance).toEqual("Cruise control");
  expect(engine).toEqual("V8");
});

test("Build premium car", () => {
  const { driverAssistance, engine } = BuildCar(PremiumCar());

  expect(driverAssistance).toEqual("Intelligent cruise control");
  expect(engine).toEqual("V8");
});
