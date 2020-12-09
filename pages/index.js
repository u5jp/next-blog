import PageLayout from "components/PageLayout";
import Intro from "components/Intro";
import CardItem from "components/CardItem";

import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <Intro />
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
        {/* {blogs.map((blog) => (
          <CardItem
            className="container_item"
            key={blog.slug}
            title={blog.title}
            subtitle={blog.subtitle}
            date={blog.date}
            src={blog.thumbnail.url}
            // slug={blog.fields.slug}
            link={{
              href: "/blogs/[slug]",
              as: `/blogs/${blog.slug}`,
            }}
          />
        ))} */}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
