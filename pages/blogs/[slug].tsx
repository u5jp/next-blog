import BlogContent from 'components/BlogContent';
import BlogHeader from 'components/BlogHeader';
import PageLayout from 'components/PageLayout';
import PreviewAlert from 'components/PreviewAlert';
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { FC } from 'react';

type Props = {
  blog:blog
  preview:boolean
}

const BlogDetail: FC<Props> = ({ blog, preview }) => {

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
          {...blog.fields}
        />
        <hr/><hr />
        <BlogContent className="ly_blogDetail" body={blog.fields.body} />
        <hr/><hr />
      </div>
    </PageLayout>
  );
};

export async function getStaticProps({ params, preview = false}) {
  const blog:blog = await getBlogBySlug(params.slug ,preview);
  return {
    props: { blog,preview },
  };
}

export async function getStaticPaths() {
  const blogs:blog[] = await getAllBlogs();
  return {
    paths: blogs?.map((b) => ({ params: { slug: b.fields.slug } })),
    fallback: true,
  };
}

export default BlogDetail;
