export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="prose lg:prose-md"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
