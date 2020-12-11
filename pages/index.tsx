// import { getAllBlogs } from "lib/api";
// import { useGetBlogs } from "actions";
import { useGetBlogsPages } from 'actions/pagination';
import CardItem from 'components/CardItem';
import CategoryTag from 'components/CategoryTag';
import Intro from 'components/Intro';
import PageLayout from 'components/PageLayout';
import { getAllCate, getPaginatedBlogs } from 'lib/api';

// import { useSWRInfinite } from 'swr';

export default function Home({ blogs: initialData, categories }) {
  // const { data: blogs, error } = useGetBlogs(offset,initialData);

  const { data, size, setSize, hitEnd } = useGetBlogsPages();

  const blogs = data ? [].concat(...data) : initialData;
  const test = "";
  if (test) {
    console.log("ok");
  }

  return (
    <PageLayout>
      <Intro />
      <div className="categories categoryWrap">
        {categories.map((category, index) => (
          <CategoryTag
            key={index}
            className="categoryWrap_category"
            category={category.fields.category}
            link={{
              href: "/category/[slug]",
              as: `/category/${category.fields.slug}`,
            }}
          />
        ))}
      </div>
      <hr />
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
      <button disabled={hitEnd} onClick={() => setSize(size + 1)}>
        ボタン
      </button>
    </PageLayout>
  );
}

export async function getStaticProps() {
  // const blogs = await getAllBlogs();
  const blogs = await getPaginatedBlogs();
  const categories = await getAllCate();
  return {
    props: {
      blogs,
      categories,
    },
  };
}
