import { writeFileSync } from "fs";
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Logger = require("pino")({
  prettyPrint: { colorize: true },
});

export class WriteMainReadme {
  path = path.resolve(__dirname, `../../README.md`);

  get path() {
    return this.path;
  }
}

export class WritePatternReadme {
  path;

  constructor(pattern) {
    this.path = path.resolve(__dirname, `../../patterns/${pattern}/README.md`);
  }

  get path() {
    return this.path;
  }
}

export class WriteIndexReadme {
  path = path.resolve(__dirname, `../../docs/index.md`);

  get path() {
    return this.path;
  }
}

export class WritePagesPatternReadme {
  path;

  constructor(pattern) {
    this.path = path.resolve(__dirname, `../../docs/${pattern}/README.md`);
  }

  get path() {
    return this.path;
  }
}

export class WriteDocs {
  constructor(doc, content) {
    this.doc = doc;
    this.content = content;
  }

  write() {
    try {
      writeFileSync(this.doc.path, this.content, "utf8");
    } catch (error) {
      Logger.error(error);
    }
  }
}
