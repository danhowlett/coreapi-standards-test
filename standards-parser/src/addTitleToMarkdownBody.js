export default function addTitleToMarkdownBody(title, body) {
  const whitespace = title && body ? "\n\n" : "";
  return `${title}${whitespace}${body}`;
}
