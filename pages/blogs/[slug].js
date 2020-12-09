import PageLayout from "components/PageLayout";
import BlogHeader from "components/BlogHeader";
import BlogContent from "components/BlogContent";
import { getBlogBySlug, getAllBlogs } from "lib/api";

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

const BlogDetail = ({ blog }) => {
  console.log(blog);
  return (
    <PageLayout className="blogDetailPage">
      <div className="blogDetailPage_inner">
        <BlogHeader
          className="blogDetailPage_header"
          title={blog.fields.title}
          subtitle={blog.fields.subtitle}
          thumbnail={blog.fields.thumbnail}
          date={blog.fields.date}
          categories={blog.fields.categories}
        />
        <hr />
        <BlogContent className="blogDetailPage_body" body={blog.fields.body} />
      </div>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();

  return {
    paths: blogs?.map((b) => ({ params: { slug: b.fields.slug } })),
    fallback: false,
  };
}

export default BlogDetail;
