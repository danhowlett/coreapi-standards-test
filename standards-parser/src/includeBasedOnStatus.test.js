import includeBasedOnStatus from "./includeBasedOnStatus";

test("Released standards should only contain released components", () => {
  expect(includeBasedOnStatus("released", "released")).toBe(true);
  expect(includeBasedOnStatus("released", "draft")).toBe(false);
  expect(includeBasedOnStatus("released", "in-development")).toBe(false);
});

test("Draft standards should include released components as well", () => {
  expect(includeBasedOnStatus("draft", "released")).toBe(true);
  expect(includeBasedOnStatus("draft", "draft")).toBe(true);
  expect(includeBasedOnStatus("draft", "in-development")).toBe(false);
});

test("In-development standards should include draft and released components as well", () => {
  expect(includeBasedOnStatus("in-development", "released")).toBe(true);
  expect(includeBasedOnStatus("in-development", "draft")).toBe(true);
  expect(includeBasedOnStatus("in-development", "in-development")).toBe(true);
});

test("Incorrect statuses should throw appropriate errors", () => {
  expect(() => {
    includeBasedOnStatus("chocolate", "released");
  }).toThrow("documentStatus was passed an invalid priority level");
  expect(() => {
    includeBasedOnStatus("released", "chocolate");
  }).toThrow("sectionStatus was passed an invalid priority level");
  expect(() => {
    includeBasedOnStatus("chocolate", "chocolate");
  }).toThrow("sectionStatus was passed an invalid priority level");
});
