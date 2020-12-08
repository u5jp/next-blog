import PageLayout from "components/PageLayout";
import Intro from "components/Intro";
import CardItem from "components/CardItem";

import { getAllPosts } from "lib/index";

export default function Home({ blogs }) {
  console.log(blogs);
  return (
    <PageLayout>
      <Intro />
      <hr />
      {JSON.stringify(blogs)}
      <div className="container">
        {blogs.map((blog) => (
          <CardItem
            className="container_item"
            key={blog.fields.slug}
            title={blog.fields.title}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllPosts();
  return {
    props: {
      blogs,
    },
  };
}
