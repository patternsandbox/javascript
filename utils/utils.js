import { readdirSync, readFileSync } from "fs";
import * as docs from "@patternsandbox/docs";

export default class Utils {
  static toTitleCase(str, delimiter = ".") {
    return str
      .split(delimiter)
      .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
      .join(" ");
  }

  static formatLink(str) {
    const regex = /\[(.*?)\]/g; // find words surround by []
    const links = str.match(regex);

    if (links) {
      let formatted = str;
      links.forEach((link) => {
        const trimmed = this.toTitleCase(
          link.substring(1, link.length - 1),
          "."
        );
        formatted = formatted.replace(link, `*Ref:* [${trimmed}]`);
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
      example += `\n__Listing ${index + 1}: ${file}__\n`;
    });

    return example;
  }

  static getPatternsSummary(type) {
    const patterns = readdirSync("./patterns");
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
        content += problem[0];
        content += `\n#### Solution\n`;
        content += description[0];
        content += `\n\nFor more: [${name} pattern >>>](https://github.com/patternsandbox/javascript/tree/main/patterns/${name})`;
      }
    });
    return content;
  }
}
