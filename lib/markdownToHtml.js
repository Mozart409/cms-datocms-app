import marked from "marked";

export default async function markdownToHtml(markdown) {
  const result = await marked(markdown);
  return result;
}
