import hljs from 'highlight.js/lib/core';
import { createRef, FC, useEffect } from 'react';
import { findDOMNode } from 'react-dom';

hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))


const HighlightCode:FC = ({ children }) => {
  const code = createRef<HTMLElement>();

  useEffect(() => {
    hljs.highlightBlock(findDOMNode(code.current));
  });

  return (
    <pre>
      <code ref={code}>{children}</code>
    </pre>
  );
};

export default HighlightCode;
