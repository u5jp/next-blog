import HighlightCode from 'components/HighlightCode';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';

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

const BlogContent = ({ className,body }) => {
  return (
    <div className="ly_blogDetail_body bl_blogBody">
      {documentToReactComponents(body, options)}
    </div>
  );
};

export default BlogContent;
