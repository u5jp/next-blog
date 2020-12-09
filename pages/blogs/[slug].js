import PageLayout from "components/PageLayout";
import BlogHeader from "components/BlogHeader";
import { getBlogBySlug, getAllBlogs } from "lib/api";

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout className="blogDetailPage">
      <BlogHeader
        className="blogDetailPage_header"
        title={blog.title}
        subtitle={blog.subtitle}
        thumbnail={blog.thumbnail}
        date={blog.date}
      />
      <hs />
      <p>contents here</p>
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
  // [
  //     {
  //       params: { slug: "my-first-blog" },
  //     },
  //     {
  //       params: { slug: "my-second-blog" },
  //     },
  //     {
  //       params: { slug: "my-third-blog" },
  //     },
  // ]
  return {
    paths: blogs?.map((b) => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}

export default BlogDetail;
