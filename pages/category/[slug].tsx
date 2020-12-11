import { useGetBlogsPages } from 'actions/pagination';
import Button from 'components/Button';
import CardItem from 'components/CardItem';
import PageLayout from 'components/PageLayout';
import { getAllCate, getBlogsContainCate, getCate } from 'lib/api';

const Category = ({ cate, blogs: initialData }) => {
  const { data, size, setSize, hitEnd } = useGetBlogsPages({
    id: cate.sys.id,
  });
  const blogs = data ? [].concat(...data) : initialData;

  return (
    <PageLayout className="blogDetailPage">
      <h1>
        カテゴリーページ
        {cate?.fields.category}
      </h1>
      <div className="container">
        {blogs.map((blog) => (
          <CardItem
            className="container_item"
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
        hitEnd={hitEnd}
        setSize={setSize}
        size={size}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const cate = await getCate(params.slug);
  const blogs = await getBlogsContainCate(cate.sys.id);

  return {
    props: {
      cate,
      blogs,
    },
  };
}

export async function getStaticPaths() {
  const cates = await getAllCate();
  return {
    paths: cates?.map((b:any) => ({ params: { slug: b.fields.slug } })),
    fallback: false,
  };
}

export default Category;
