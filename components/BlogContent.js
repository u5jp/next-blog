import { MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import HighlightCode from "components/HighlightCode";

const options = {
  renderNode: {
    "embedded-asset-block": ({
      data: {
        target: {
          fields: {
            title,
            file: { url },
          },
        },
      },
    }) => <img className="blogDetailPage_img" src={url} alt={title} />,
  },
  renderMark: {
    [MARKS.CODE]: (text) => <HighlightCode>{text}</HighlightCode>,
  },
};

const BlogContent = ({ body }) => {
  return (
    <div className="blogDetailPage_body">
      {documentToReactComponents(body, options)}
    </div>
  );
};

export default BlogContent;
