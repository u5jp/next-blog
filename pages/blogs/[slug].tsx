import BlogContent from 'components/BlogContent';
import BlogHeader from 'components/BlogHeader';
import PageLayout from 'components/PageLayout';
import { getAllBlogs, getBlogBySlug } from 'lib/api';

const BlogDetail = ({ blog }) => {
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
    paths: blogs?.map((b:any) => ({ params: { slug: b.fields.slug } })),
    fallback: false,
  };
}

export default BlogDetail;
