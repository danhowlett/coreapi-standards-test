import buildMarkdownFromFlatArray from "./buildMarkdownFromFlatArray.js";

test("Empty array should return empty document", () => {
  expect(buildMarkdownFromFlatArray([])).toStrictEqual("\n");
});

const testOneElementArray = [
  { title: "# Document", contents: "Some random markdown" },
];

const oneElementReturnedString = "# Document\n\nSome random markdown\n";

test("One element array should return markdown", () => {
  expect(buildMarkdownFromFlatArray(testOneElementArray)).toStrictEqual(
    oneElementReturnedString
  );
});

const testTwoElementArray = [
  { title: "# Document", contents: "Some random markdown" },
  { title: "## 1 Section 1", contents: "Some random markdown\n\nComplete with new lines" },
];

const twoElementReturnedString =
  "# Document\n\nSome random markdown\n\n## 1 Section 1\n\nSome random markdown\n\nComplete with new lines\n";

test("Two element array should return markdown appropriately assembled", () => {
  expect(buildMarkdownFromFlatArray(testTwoElementArray)).toStrictEqual(
    twoElementReturnedString
  );
});
