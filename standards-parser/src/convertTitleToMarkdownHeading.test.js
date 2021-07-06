import convertTitleToMarkdownHeading from "./convertTitleToMarkdownHeading";

test("Blank title returns empty string", () => {
  expect(convertTitleToMarkdownHeading("", [18, 2, 1])).toBe("");
});

test("Missing level returns the title without a header", () => {
  expect(convertTitleToMarkdownHeading("title")).toBe("title");
});

test("Level 0 returns an h1 title", () => {
  expect(convertTitleToMarkdownHeading("title", [])).toBe("# title");
});

test("Level 1 returns an h2 title", () => {
  expect(convertTitleToMarkdownHeading("title", [18])).toBe("## 18 title");
});

test("Level 2 returns an h3 title", () => {
  expect(convertTitleToMarkdownHeading("title", [18, 5])).toBe(
    "### 18.5 title"
  );
});

test("Level 6 returns an h7 title", () => {
  expect(
    convertTitleToMarkdownHeading("longer title", [18, 5, 4, 3, 2, 1])
  ).toBe("####### 18.5.4.3.2.1 longer title");
});
