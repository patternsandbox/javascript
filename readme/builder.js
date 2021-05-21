import Utils from "./utils";

class Readme {
  constructor(readme) {
    this.readme = readme;
  }
}

export default class ReadmeBuilder {
  setTitle(name) {
    // multi-word pattern, its folder name should be separated by period
    this.readme = `# ${Utils.toTitleCase(name, ".")} Pattern`;
    return this;
  }

  build() {
    return new Readme(this);
  }
}
