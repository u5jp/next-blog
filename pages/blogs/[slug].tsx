import BlogContent from 'components/BlogContent';
import BlogHeader from 'components/BlogHeader';
import PageLayout from 'components/PageLayout';
import PreviewAlert from 'components/PreviewAlert';
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

const BlogDetail = ({ blog, preview }) => {

  const router = useRouter();


  if (!router.isFallback && !blog?.fields.slug) {
    return <ErrorPage statusCode={404}/>
  }

  if (router.isFallback) {
    return (
      <PageLayout>
          Loading...
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {preview && <PreviewAlert/>}
      <div className="ly_blogDetail">
        <BlogHeader
          className="ly_blogDetail"
          title={blog.fields.title}
          subtitle={blog.fields.subtitle}
          thumbnail={blog.fields.thumbnail}
          date={blog.fields.date}
          categories={blog.fields.categories}
        />
        <hr />
        <BlogContent className="ly_blogDetail" body={blog.fields.body} />
      </div>
    </PageLayout>
  );
};

export async function getStaticProps({ params, preview = false}) {
  const blog = await getBlogBySlug(params.slug ,preview);
  return {
    props: { blog,preview },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs?.map((b:any) => ({ params: { slug: b.fields.slug } })),
    fallback: true,
  };
}

export default BlogDetail;
