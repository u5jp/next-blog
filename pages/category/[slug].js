import PageLayout from "components/PageLayout";
import CardItem from "components/CardItem";
import { getCate } from "lib/api";
import { getAllCate } from "lib/api";
import { getBlogsContainCate } from "lib/api";

import { useGetBlogsPages } from "actions/pagination";

const Category = ({ cate, blogs: initialData }) => {
  // console.log("cate", cate.sys.id);
  // console.log("blogs", blogs);
  // const id = cate.sys.id;
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
      <button disabled={hitEnd} onClick={() => setSize(size + 1)}>
        ボタン
      </button>
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
    paths: cates?.map((b) => ({ params: { slug: b.fields.slug } })),
    fallback: false,
  };
}

export default Category;
