import ReactMarkdown from "react-markdown";
import { useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState("# This is a *Markdown* Preview!");
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <main className="main">
      <article className="editor">
        <textarea className="input" value={markdown} onChange={handleChange} />
      </article>
      <article className="markdown">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
}

export default App;
