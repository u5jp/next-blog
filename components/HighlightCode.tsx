import highlight from 'highlight.js';
import { createRef, FC, useEffect } from 'react';
import { findDOMNode } from 'react-dom';

const HighlightCode:FC = ({ children }) => {
  const code = createRef<HTMLElement>();

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
