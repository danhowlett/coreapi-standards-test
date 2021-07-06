import { readFileSync } from "fs";
import path from "path";

import convertTitleToMarkdownHeading from "./convertTitleToMarkdownHeading.js";
import includeBasedOnStatus from "./includeBasedOnStatus.js";

export const sectionNotIncluded =
  "This section is not yet approved for inclusion in these standards.";

function resolveContent(
  contentSource,
  hierarchyLevel,
  inventoryRootDirectory
) {
  if (!contentSource) {
    return "";
  }
  return (
    readFileSync(path.join(inventoryRootDirectory, contentSource), "utf8")
      .trim()
      // Regular expression below advances any headers found in the markdown content
      // to be one level below the overall element.
      .replace(/# /g, `${"#".repeat(hierarchyLevel + 1)} `)
  );
}

export default function flattenStandards(
  section,
  documentStatus,
  inventoryRootDirectory = "",
  sectionNumbers = []
) {
  // Process the title and (if appropriate) content of this section.
  const sectionResult = {
    title: convertTitleToMarkdownHeading(section.title, sectionNumbers),
    contents: includeBasedOnStatus(documentStatus, section.status)
      ? resolveContent(
          section.contents,
          sectionNumbers.length,
          inventoryRootDirectory
        )
      : sectionNotIncluded,
  };

  // Recurse (depth-first) over any subsections.
  return [
    sectionResult,
    ...(section.subsections || [])
      .flatMap((subsection, index) =>
        flattenStandards(
          subsection,
          documentStatus,
          inventoryRootDirectory,
          sectionNumbers.concat(index + 1)
        )
      ),
  ];
}
