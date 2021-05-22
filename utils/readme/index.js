import { readdirSync } from "fs";
import * as docs from "@patternsandbox/docs";
import ReadmeBuilder from "./builder";
import WriteReadmeFile from "./writer";

const patterns = readdirSync("./patterns");
const Logger = require("pino")({
  prettyPrint: { colorize: true },
});

patterns.forEach((pattern) => {
  const { name, summary, refs, description, problem } = docs[pattern];
  const content = new ReadmeBuilder()
    .setTitle(name)
    .setSummary(summary)
    .setProblem(problem)
    .setDescription(description)
    .setReference(refs);
  // .build(); // TODO ...

  const writeReadmeFile = new WriteReadmeFile(name, content.readme);
  writeReadmeFile.write();
  Logger.info(`Write a README.md for ${name} pattern`);
});
