import { useState } from "react";
import PageLayout from "components/PageLayout";
import Intro from "components/Intro";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";
import FilteringMenu from "components/FilteringMenu";
import CategoryTag from "components/CategoryTag";

import Link from "next/link";

import { getAllBlogs } from "lib/api";
import { getAllCate } from "lib/api";
import { useGetBlogs } from "actions/index";

export default function Home({ blogs: initialData, categories }) {
  const [filter, setFilter] = useState({
    view: { list: 1 },
  });
  const { data: blogs, error } = useGetBlogs(initialData);
  console.log("インデックス", categories);

  return (
    <PageLayout>
      <Intro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
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
        {blogs.map((blog) =>
          filter.view.list === 0 ? (
            <CardListItem
              className="container_listItem"
              key={blog.fields.slug}
              title={blog.fields.title}
              subtitle={blog.fields.subtitle}
              date={blog.fields.date}
              categories={blog.fields.categories}
              link={{
                href: "/blogs/[slug]",
                as: `/blogs/${blog.fields.slug}`,
              }}
            />
          ) : (
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
          )
        )}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  const categories = await getAllCate();
  return {
    props: {
      blogs,
      categories,
    },
  };
}
