import fs from "fs";
import path from "path";
import buildMarkdownFromFlatArray from "./src/buildMarkdownFromFlatArray.js";
import flattenStandards from "./src/flattenStandards.js";

const documentStatus = process.argv[2];
const inventoryFileName = process.argv[3];
const outputFileName = process.argv[4];

const standards = JSON.parse(fs.readFileSync(inventoryFileName));

const inventoryRootDirectory = path.dirname(path.resolve(inventoryFileName));

fs.mkdirSync('output', { recursive: true });
fs.writeFileSync(
  `output/${outputFileName}`,
  buildMarkdownFromFlatArray(
    flattenStandards(standards, documentStatus, inventoryRootDirectory)
  )
);
