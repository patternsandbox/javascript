interface EngineSize {
  add(): string;
}

interface DriverAssistance {
  add(): string;
}

class BasicEngine implements EngineSize {
  add = (): string => "V6";
}

class LargeEngine implements EngineSize {
  add = (): string => "V8";
}

class BasicDriverAssistance implements DriverAssistance {
  add = (): string => "Cruise control";
}

class AdvancedDriverAssistance implements DriverAssistance {
  add = (): string => "Intelligent cruise control";
}

interface CarSpec {
  driverAssistance(): string;
  engineSize(): string;
}

export class EntryLevelCar implements CarSpec {
  driverAssistance = (): string => new BasicDriverAssistance().add();

  engineSize = (): string => new BasicEngine().add();
}

export class PerformantCar implements CarSpec {
  driverAssistance = (): string => new BasicDriverAssistance().add();

  engineSize = (): string => new LargeEngine().add();
}

export class PremiumCar implements CarSpec {
  driverAssistance = (): string => new AdvancedDriverAssistance().add();

  engineSize = (): string => new LargeEngine().add();
}

export class BuildCar {
  engine: string;

  driverAssistance: string;

  constructor(carSpec: CarSpec) {
    this.engine = carSpec.engineSize();
    this.driverAssistance = carSpec.driverAssistance();
  }

  get spec() {
    return {
      engine: this.engine,
      driverAssistance: this.driverAssistance,
    };
  }
}
