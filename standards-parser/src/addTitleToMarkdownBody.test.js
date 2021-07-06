import addTitleToMarkdownBody from "./addTitleToMarkdownBody";

test("Empty body and title return empty string", () => {
  expect(addTitleToMarkdownBody("", "")).toBe("");
});

test("Empty title returns body", () => {
  expect(addTitleToMarkdownBody("", "Sample body text")).toBe(
    "Sample body text"
  );
});

test("Empty body returns title", () => {
  expect(addTitleToMarkdownBody("Example title", "")).toBe("Example title");
});

test("With body and title present, title is returned separated by a new line from the body", () => {
  expect(addTitleToMarkdownBody("Example title", "Example body")).toBe(
    "Example title\n\nExample body"
  );
});
