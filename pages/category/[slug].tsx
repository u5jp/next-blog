import { useGetBlogsPages } from 'actions/pagination';
import Button from 'components/Button';
import CardItem from 'components/CardItem';
import PageLayout from 'components/PageLayout';
import PreviewAlert from 'components/PreviewAlert';
import { getAllCate, getBlogsContainCate, getCate } from 'lib/api';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

const Category = ({ cate, blogs: initialData,preview }) => {
  const router = useRouter();

  if (!router.isFallback && !cate?.fields.slug) {
    return <ErrorPage statusCode={404}/>
  }

  if (router.isFallback) {
    return (
      <PageLayout>
          Loading...
      </PageLayout>
    )
  }

  const { data, size, setSize, hitEnd } = useGetBlogsPages({
    id: cate.sys.id,
  });
  const blogs = data ? [].concat(...data) : initialData;

  return (
    <PageLayout>
      {preview && <PreviewAlert/>}
      <div className="ly_pageHeader">
        <h1>
          Category Page
        </h1>
        <h2>
          Tag : {cate?.fields.category}<br />
          Items : {blogs.length}
        </h2>
      </div>
      <div className="ly_container">
        {blogs.map((blog) => (
          <CardItem
            className="ly_container_item"
            key={blog.fields.slug}
            title={blog.fields.title}
            subtitle={blog.fields.subtitle}
            date={blog.fields.date}
            src={blog.fields.thumbnail.fields.file.url}
            categories={blog.fields.categories}
            link={{
              href: "/blogs/[slug]",
              as: `/blogs/${blog.fields.slug}`,
            }}
          />
        ))}
      </div>
      <Button
        className={"hp-mt20"}
        hitEnd={hitEnd}
        setSize={setSize}
        size={size}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ params,preview=false }) {
  const cate = await getCate(params.slug);
  const blogs = await getBlogsContainCate(cate.sys.id);

  return {
    props: {
      cate,
      blogs,
      preview
    },
  };
}

export async function getStaticPaths() {
  const cates = await getAllCate();
  return {
    paths: cates?.map((b:any) => ({ params: { slug: b.fields.slug } })),
    fallback: true,
  };
}

export default Category;
