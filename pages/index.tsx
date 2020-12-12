import { useGetBlogsPages } from 'actions/pagination';
import Button from 'components/Button';
import CardItem from 'components/CardItem';
import CategoryTag from 'components/CategoryTag';
import Introduce from 'components/Introduce';
import PageLayout from 'components/PageLayout';
import PreviewAlert from 'components/PreviewAlert';
import { getAllCate, getPaginatedBlogs } from 'lib/api';

export default function Home({ blogs: initialData, categories,preview }) {

  const { data, size, setSize, hitEnd } = useGetBlogsPages();
  const blogs = data ? [].concat(...data) : initialData;

  return (
    <PageLayout>
      {preview && <PreviewAlert/>}
      <Introduce />
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
      <Button
        className="u-mt20"
        hitEnd={hitEnd}
        setSize={setSize}
        size={size}
      />
    </PageLayout>
  );
}

export async function getStaticProps({preview=false}) {
  const blogs = await getPaginatedBlogs();
  const categories = await getAllCate();
  return {
    props: {
      blogs,
      categories,
      preview
    },
  };
}
