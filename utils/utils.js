export default class Utils {
  static toTitleCase(str, delimiter) {
    return str
      .split(delimiter)
      .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
      .join(" ");
  }
}
