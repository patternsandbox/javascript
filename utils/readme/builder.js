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

  setDescription(description) {
    description.sort();
    description.forEach((desc) => {
      const formatted = Utils.formatLink(desc);
      this.readme += `\n${formatted}\n`;
      // const str = Utils.formatLink(desc);
      // const regex = /\[(.*?)\]/g;
      // const matches = desc.match(regex);
      // if (matches) {
      //   matches.forEach((match) => {
      //     const trimed = Utils.toTitleCase(
      //       match.substring(1, match.length - 1),
      //       "."
      //     );
      //     console.log(trimed);
      //     const x = desc.replace(match, `[${trimed}] `);
      //     console.log(x);
      //     this.readme += `\nRef: ${x}\n`;
      //   });
      // } else {
      //   this.readme += `\n${desc}\n`;
      // }
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
