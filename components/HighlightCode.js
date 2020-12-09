import { createRef, useEffect } from "react";
import { findDOMNode } from "react-dom";
import highlight from "highlight.js";

const HighlightCode = ({ children }) => {
  const code = createRef();

  useEffect(() => {
    debugger;
    highlight.highlightBlock(findDOMNode(code.current));
  });

  return (
    <pre className="blogDetailPage_code">
      <code ref={code}>{children}</code>
    </pre>
  );
};

export default HighlightCode;
