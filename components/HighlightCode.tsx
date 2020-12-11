import highlight from 'highlight.js';
import { createRef, useEffect } from 'react';
import { findDOMNode } from 'react-dom';

const HighlightCode = ({ children }) => {
  const code = createRef<HTMLDivElement>();

  useEffect(() => {
    highlight.highlightBlock(findDOMNode(code.current));
  });

  return (
    <pre>
      <code ref={code}>{children}</code>
    </pre>
  );
};

export default HighlightCode;
