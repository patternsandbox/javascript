import { readdirSync, readFileSync } from "fs";

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
      example += `\n*Listing ${index + 1}: ${file}*\n`;
    });

    return example;
  }
}
