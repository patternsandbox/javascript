import { readdirSync, readFileSync } from "fs";
import * as docs from "@patternsandbox/docs";

const patterns = readdirSync("./patterns");
const regex = /\[(.*?)\]/g; // find words surround by []
const baseURL = "https://github.com/patternsandbox/javascript";

export default class Utils {
  static toTitleCase(str, delimiter = ".") {
    return str
      .split(delimiter)
      .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
      .join(" ");
  }

  static formatLink(str) {
    const links = str ? str.match(regex) : undefined;

    if (links) {
      let formatted = str;
      links.forEach((link) => {
        const trimmed = this.toTitleCase(
          link.substring(1, link.length - 1),
          "."
        );
        formatted = formatted.replace(link, `__Ref:__ [${trimmed}]`);
      });
      return formatted;
    }
    return str;
  }

  static getExamples(name, ex) {
    const path = `./patterns/${name}/examples/${ex}`;
    const files = readdirSync(path);
    let example = "";

    files.forEach((file, index) => {
      const data = readFileSync(
        `./patterns/${name}/examples/${ex}/${file}`,
        "utf8"
      );
      example += "```javascript";
      example += `\n${data}\n`;
      example += "```";
      example += `\n__Listing ${
        index + 1
      }: [${name}/examples/${ex}/${file}](${baseURL}/blob/main/patterns/${name}/examples/${ex}/${file})__\n`;
    });

    return example;
  }

  static getPatternsSummary(type) {
    let content = "";
    patterns.forEach((pattern) => {
      const { category, name, summary, problem, description } = docs[pattern];
      problem.sort();
      description.sort();
      if (type === category) {
        content += `\n### ${this.toTitleCase(name)} Pattern`;
        const formatted = this.formatLink(summary);
        content += `\n>${formatted}\n`;
        content += `\n#### Problem\n`;
        content += this.formatLink(problem[0]);
        content += `\n#### Solution\n`;
        content += this.formatLink(description[0]);
        content += `\n\nFor more: [${name} pattern >>>](${baseURL}/tree/main/patterns/${name})`;
      }
    });
    return content;
  }

  static getMainReadmeReferences() {
    let content = `\n## References\n`;
    let reference = {};
    let links = [];

    patterns.forEach((pattern) => {
      const { refs, problem, description } = docs[pattern];
      problem.sort();
      description.sort();
      reference = { ...reference, ...refs.javascript, ...refs.misc };

      if (problem[0]) {
        const pLinks = this.extractLinks(problem[0]);
        links = [...links, ...pLinks];
      }

      if (description[0]) {
        const dLinks = this.extractLinks(description[0]);
        links = [...links, ...dLinks];
      }
    });

    // remove unused references
    const keys = Object.keys(reference);
    keys.forEach((key) => {
      if (!links.includes(key)) {
        delete reference[key];
      }
    });

    // used references only
    const usedKeys = Object.keys(reference);
    usedKeys.forEach((ref) => {
      content += `- [${this.toTitleCase(ref, ".")}]\n`;
    });
    content += "\n";
    usedKeys.forEach((ref) => {
      content += `[${this.toTitleCase(ref, ".")}]: ${reference[ref]}\n`;
    });
    return content;
  }

  static extractLinks(str) {
    const links = str.match(regex);
    return links.map((link) => link.substring(1, link.length - 1));
  }
}
