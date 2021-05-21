import { readdirSync } from "fs";
import * as docs from "@patternsandbox/docs";
import ReadmeBuilder from "./builder";
import WriteReadmeFile from "./writer";

const patterns = readdirSync("./patterns");
const Logger = require("pino")({
  prettyPrint: { colorize: true },
});

patterns.forEach((pattern) => {
  const { name } = docs[pattern];
  const content = new ReadmeBuilder().setTitle(name);
  const writeReadmeFile = new WriteReadmeFile(name, content.readme);
  writeReadmeFile.write();
  Logger.info(`Write a read me for ${name} pattern`);
});
