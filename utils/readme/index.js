import { readdirSync } from "fs";
import * as docs from "@patternsandbox/docs";
import ReadmeBuilder from "./builder";
import WriteReadmeFile from "./writer";

const patterns = readdirSync("./patterns");
const Logger = require("pino")({
  prettyPrint: { colorize: true },
});

function writeMainReadmeFile() {
  const content = new ReadmeBuilder().setMainReadme();
  const writeReadmeFile = new WriteReadmeFile(undefined, content.readme);
  writeReadmeFile.write();
  Logger.info(`Write main README.md for the repository`);
}

function writePatternReadme() {
  patterns.forEach((pattern) => {
    const { name, summary, refs, description, problem, example } = docs[
      pattern
    ];
    const content = new ReadmeBuilder()
      .setTitle(name)
      .setSummary(summary)
      .setProblem(problem)
      .setDescription(description)
      .setExample(name, example)
      .setReference(refs);
    // .build(); // TODO ...

    const writeReadmeFile = new WriteReadmeFile(name, content.readme);
    writeReadmeFile.write();
    Logger.info(`Write a README.md for ${name} pattern`);
  });
}

writeMainReadmeFile();
writePatternReadme();
