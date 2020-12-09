import { MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {
  renderNode: {
    "embedded-asset-block": (node) => {
      return (
        <img
          className="blogDetailPage_img"
          src={node.data.target.fields.file.url}
        />
      );
    },
  },
  renderMark: {
    [MARKS.CODE]: (text) => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      );
    },
  },
};

const BlogContent = ({ body }) => {
  console.log("body", body);
  return (
    <div className="blogDetailPage_body">
      {documentToReactComponents(body, options)}
    </div>
  );
};

export default BlogContent;
