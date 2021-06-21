import { readdirSync } from "fs";
import * as docs from "@patternsandbox/docs";
import ReadmeBuilder from "./builder";
import {
  WriteDocs,
  WriteIndexReadme,
  WritePagesPatternReadme,
  WriteMainReadme,
  WritePatternReadme,
} from "./writer";

const patterns = readdirSync("./patterns");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Logger = require("pino")({
  prettyPrint: { colorize: true },
});

// write README.md for the repo
function writeMainReadmeFile() {
  const content = new ReadmeBuilder()
    .setMainReadme({ page: true })
    .setMainReadmeReference();

  const writeMainReadme = new WriteDocs(new WriteMainReadme(), content.readme);
  writeMainReadme.write();

  Logger.info(`Write main README.md for the repository`);
}

// write index.md for Github Pages
function writeIndexReadmeFile() {
  const content = new ReadmeBuilder()
    .setMainReadme({ page: true })
    .setMainReadmeReference();

  patterns.forEach((pattern) => {
    const { name, summary, refs, description, problem, example } =
      docs[pattern];
    const details = new ReadmeBuilder()
      .setTitle(name)
      .setSummary(summary)
      .setProblem(problem)
      .setDescription(description)
      .setExample(name, example)
      .setReference(refs);
    content.readme += details.readme;
  });

  const writeIndexReadme = new WriteDocs(
    new WriteIndexReadme(),
    content.readme
  );
  writeIndexReadme.write();
  Logger.info(`Write main index.md for the Github Pages`);
}

writeMainReadmeFile();
writeIndexReadmeFile();
