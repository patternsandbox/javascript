export class BuildCar {
  constructor(strategy) {
    this.strategy = strategy;
  }

  build() {
    return this.strategy.add();
  }
}

export class EntryLevelCar {
  add = () => ({
    engine: "V6",
    driverAssistance: "Cruise control",
  });
}

export class PerformantCar {
  add = () => ({
    engine: "V8",
    driverAssistance: "Cruise control",
  });
}

export class PremiumCar {
  add = () => ({
    engine: "V8",
    driverAssistance: "Intelligent cruise control",
  });
}
