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

  setExample(name, example) {
    this.readme += `\n## Example\n`;
    example.sort();
    example.forEach((ex, index) => {
      this.readme += `\n### ${index + 1}. ${Utils.toTitleCase(ex, ".")}\n`;
      this.readme += Utils.getExamples(name, ex, index + 1);
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

  setMainReadme() {
    const types = ["creational", "structural", "behavioral"];
    this.readme = `# Design Patterns in JavaScript\n`;
    types.forEach((type) => {
      this.readme += `\n## ${Utils.toTitleCase(type)} Patterns\n`;
      this.readme += Utils.getPatternsSummary(type);
    });
    return this;
  }

  setMainReadmeReference() {
    this.readme += Utils.getMainReadmeReferences();
    return this;
  }

  build() {
    return new Readme(this);
  }
}
