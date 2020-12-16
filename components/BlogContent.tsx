import HighlightCode from 'components/HighlightCode';
import { FC } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';

type Props = CLASS_NAME & BODY

const options = {
  renderNode: {
    "embedded-asset-block": ({ data }) =>
      <img className="blogDetailPage_img"
        src={data.target.fields.file.url}
        alt={data.target.fields.title}
      />
  },
  renderMark: {
    [MARKS.CODE]: (text) => <HighlightCode>{text}</HighlightCode>,
  },
};

const BlogContent
  : FC<Props>
  = ({ className, body }) => {
  return (
    <div className={`${className}_body bl_blogBody`}>
      {documentToReactComponents(body, options)}
    </div>
  );
};

export default BlogContent;
