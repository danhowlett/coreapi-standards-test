import flattenStandards, {sectionNotIncluded} from "./flattenStandards";

const complexStructure = {
  title: "Complex Structure",
  status: "draft",
  rulesets: ["core"],
  subsections: [
    {
      title: "Section 1",
      contents: "testData/test1.md",
      status: "draft",
      rulesets: ["core", "mercer"],
    },
    {
      title: "Section 2",
      status: "draft",
      rulesets: ["core"],
      subsections: [
        {
          title: "Section 2.1",
          contents: "testData/test1.md",
          status: "draft",
          rulesets: ["core"],
        },
        {
          title: "Section 2.2",
          contents: "testData/test2.md",
          status: "draft",
          rulesets: ["core", "mercer"],
          subsections: [
            {
              title: "Section 2.2.1",
              contents: "testData/test3.md",
              status: "draft",
              rulesets: ["core"],
            },
          ],
        },
      ],
    },
    {
      title: "Section 3",
      contents: "testData/test3.md",
      status: "draft",
      rulesets: ["core"],
    },
  ],
};

const complexFlatArray = [
  {
    title: "# Complex Structure",
    contents: "",
  },
  {
    title: "## 1 Section 1",
    contents: "Some random markdown"
  },
  {
    title: "## 2 Section 2",
    contents: ""
  },
  {
    title: "### 2.1 Section 2.1",
    contents: "Some random markdown"
  },
  {
    title: "### 2.2 Section 2.2",
    contents: "Some random markdown\n\nComplete with new lines"
  },
  {
    title: "#### 2.2.1 Section 2.2.1",
    contents: "##### A random markdown header"
  },
  {
    title: "## 3 Section 3",
    contents: "### A random markdown header"
  },
];

test("Complex structure is flattened appropriately", () => {
  expect(flattenStandards(complexStructure, "draft")).toStrictEqual(
    complexFlatArray
  );
});

const indevelopmentStructure = {
  title: "In development",
  contents: "testData/test1.md",
  status: "in-development",
  rulesets: ["core", "mercer"],
};

const indevelopmentStandardsIncludedFlatArray = [
  {
    title: "# In development",
    contents: "Some random markdown",
  },
];

const indevelopmentStandardsNotIncludedFlatArray = [
  {
    title: "# In development",
    contents: sectionNotIncluded,
  },
];

test("In-development standards are returned for an in-development document", () => {
  expect(
    flattenStandards(indevelopmentStructure, "in-development")
  ).toStrictEqual(indevelopmentStandardsIncludedFlatArray);
});

test("In-development standards are not returned for draft and released documents", () => {
  expect(flattenStandards(indevelopmentStructure, "draft")).toStrictEqual(
    indevelopmentStandardsNotIncludedFlatArray
  );
  expect(
    flattenStandards(indevelopmentStructure, "released")
  ).toStrictEqual(indevelopmentStandardsNotIncludedFlatArray);
});

const draftStructure = {
  title: "Draft",
  contents: "testData/test1.md",
  status: "draft",
  rulesets: ["core", "mercer"],
};

const draftStandardsIncludedFlatArray = [
  {
    title: "# Draft",
    contents: "Some random markdown",
  },
];

const draftStandardsNotIncludedFlatArray = [
  {
    title: "# Draft",
    contents: sectionNotIncluded,
  },
];

test("Draft standards are returned for draft and in-development documents", () => {
  expect(flattenStandards(draftStructure, "in-development")).toStrictEqual(
    draftStandardsIncludedFlatArray
  );
  expect(flattenStandards(draftStructure, "draft")).toStrictEqual(
    draftStandardsIncludedFlatArray
  );
});

test("Draft standards are not returned for released documents", () => {
  expect(flattenStandards(draftStructure, "released")).toStrictEqual(
    draftStandardsNotIncludedFlatArray
  );
});

const releasedStructure = {
  title: "Released",
  contents: "testData/test1.md",
  status: "released",
  rulesets: ["core", "mercer"],
};

const releasedStandardsIncludedFlatArray = [
  {
    title: "# Released",
    contents: "Some random markdown",
  },
];

test("Released standards are returned for all documents", () => {
  expect(
    flattenStandards(releasedStructure, "in-development")
  ).toStrictEqual(releasedStandardsIncludedFlatArray);
  expect(flattenStandards(releasedStructure, "draft")).toStrictEqual(
    releasedStandardsIncludedFlatArray
  );
  expect(flattenStandards(releasedStructure, "released")).toStrictEqual(
    releasedStandardsIncludedFlatArray
  );
});
