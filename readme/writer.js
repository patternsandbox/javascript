import { writeFileSync } from "fs";
import path from "path";

const Logger = require("pino")({
  prettyPrint: { colorize: true },
});

export default class WriteReadmeFile {
  constructor(pattern, data) {
    this.path = path.resolve(__dirname, `../patterns/${pattern}/README.md`);
    this.content = data;
  }

  write() {
    try {
      writeFileSync(this.path, this.content, "utf8");
    } catch (error) {
      Logger.error(error);
    }
  }
}
