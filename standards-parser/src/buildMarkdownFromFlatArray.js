import addTitleToMarkdownBody from "./addTitleToMarkdownBody.js";

export default function buildMarkdownFromFlatArray(flatArray) {
  return (
    flatArray
      .map((element) => addTitleToMarkdownBody(element.title, element.contents))
      .join("\n\n") + "\n"
  );
}
