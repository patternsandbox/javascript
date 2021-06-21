function BasicEngine() {
  return "V6";
}

function LargeEngine() {
  return "V8";
}

function BasicDriverAssistance() {
  return "Cruise control";
}

function AdvancedDriverAssistance() {
  return "Intelligent cruise control";
}

export function EntryLevelCar() {
  return {
    engine: BasicEngine(),
    driverAssistance: BasicDriverAssistance(),
  };
}

export function PerformantCar() {
  return {
    engine: LargeEngine(),
    driverAssistance: BasicDriverAssistance(),
  };
}

export function PremiumCar() {
  return {
    engine: LargeEngine(),
    driverAssistance: AdvancedDriverAssistance(),
  };
}

export function BuildCar(car) {
  return { ...car };
}
