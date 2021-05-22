import Utils from "../utils";

class Readme {
  constructor(readme) {
    this.readme = readme;
  }
}

export default class ReadmeBuilder {
  setTitle(name) {
    this.readme = `# ${Utils.toTitleCase(name, ".")} Pattern`;
    return this;
  }

  setSummary(summary) {
    this.readme += `\n>${summary}\n`;
    return this;
  }

  setReference(refs) {
    this.readme += `\n## References\n`;
    const reference = { ...refs.javascript, ...refs.misc };
    const keys = Object.keys(reference);
    keys.forEach((ref) => {
      this.readme += `- [${Utils.toTitleCase(ref, ".")}]\n`;
    });
    this.readme += "\n";
    keys.forEach((ref) => {
      this.readme += `[${Utils.toTitleCase(ref, ".")}]: ${reference[ref]}\n`;
    });
    return this;
  }

  build() {
    return new Readme(this);
  }
}
