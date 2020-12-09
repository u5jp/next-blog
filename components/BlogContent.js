import { MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import HighlightCode from "components/HighlightCode";

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
      return <HighlightCode>{text}</HighlightCode>;
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
