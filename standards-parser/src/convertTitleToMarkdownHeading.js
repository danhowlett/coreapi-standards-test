export default function convertTitleToMarkdownHeading(title, sectionNumbers) {
  if (title === "") return "";
  if (!sectionNumbers) return title;
  // Because we'll have a title at the top of the document, all section headers are one level down (i.e. h2 for Section 18, h3 for Section 18.1)
  const hashString = "#".repeat(sectionNumbers.length + 1);
  const sectionNumber = sectionNumbers.length ? `${sectionNumbers.join(".")} ` : "";
  return `${hashString} ${sectionNumber}${title}`;
}
