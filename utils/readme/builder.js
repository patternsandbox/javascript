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
    const formatted = Utils.formatLink(summary);
    this.readme += `\n>${formatted}\n`;
    return this;
  }

  setDescription(description) {
    this.readme += `\n## Solution\n`;
    description.sort();
    description.forEach((desc) => {
      const formatted = Utils.formatLink(desc);
      this.readme += `\n${formatted}\n`;
    });
    return this;
  }

  setProblem(problem) {
    this.readme += `\n## Problem\n`;
    problem.sort();
    problem.forEach((desc) => {
      const formatted = Utils.formatLink(desc);
      this.readme += `\n${formatted}\n`;
    });
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
