const Output = ({ paragraphs, includeHtml, tag }) => (
  <div className="output">
    {includeHtml === "Yes" ? (
      <p>{paragraphs.map((p) => `<${tag}>` + paragraphs + `</${tag}>`)}</p>
    ) : (
      <p>{paragraphs.map((p) => paragraphs)}</p>
    )}
  </div>
);


export default Output;