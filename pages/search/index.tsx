import { useGetBlogsPages } from 'actions/pagination';
import Button from 'components/Button';
import CardItem from 'components/CardItem';
import CategoryTag from 'components/CategoryTag';
import PageLayout from 'components/PageLayout';
import PreviewAlert from 'components/PreviewAlert';
import SearchBox from 'components/SearchBox';
import { getAllCate } from 'lib/api';
import { useState } from 'react';

export default function Home({ query, preview }) {
  const [text, setText] = useState("");
  const [search, setSearch] = useState(query.search);

  const { data, size, setSize, hitEnd } = useGetBlogsPages({
    search,
  });
  const blogs = data ? [].concat(...data) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(text);
  };

  return (
    <PageLayout>
      {preview && <PreviewAlert />}
      <div className="bl_pageHeader">
        <div className="bl_pageHeader_inner">
          <h1 className="bl_pageHeader_title">
              Search Page<br />
          </h1>
          <h2 className="bl_pageHeader_subtitle">
              Target : {search}
          </h2>
        </div>

        <SearchBox
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
        />
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
        className="hp-mt20"
        hitEnd={hitEnd}
        setSize={setSize}
        size={size}
      />
    </PageLayout>
  );
}

export async function getServerSideProps({ query, preview = false }) {
  return {
    props: {
      query,
      preview,
    },
  };
}
