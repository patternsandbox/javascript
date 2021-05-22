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
        formatted = formatted.replace(link, `Ref: [${trimmed}]`);
      });
      return formatted;
    }
    return str;
  }
}
