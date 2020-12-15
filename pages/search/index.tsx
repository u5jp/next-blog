import { useGetBlogsPages } from 'actions/pagination';
import Button from 'components/Button';
import CardItem from 'components/CardItem';
import PageLayout from 'components/PageLayout';
import PreviewAlert from 'components/PreviewAlert';
import SearchBox from 'components/SearchBox';
import { GetServerSideProps } from 'next';
import { FC, useState } from 'react';

type Props = {
  query:{search:string},
  preview:boolean
}

const Search:FC<Props> = ({ query, preview }) => {

  const [text, setText] = useState("");
  const [search, setSearch] = useState(query.search);
  const { data, size, setSize, hitEnd } = useGetBlogsPages({
    search,
  });
  const blogs:blog[] = data ? [].concat(...data) : [];

  const handleSubmit =
    (e: React.FormEvent<HTMLFormElement>) => {
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
        {blogs.map((blog,index) => (<CardItem
            className="ly_container_item"
            key={index}
            {...blog.fields}
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

export const getServerSideProps: GetServerSideProps =
async ({ query, preview = false }) => {
    return {
      props: {
        query,
        preview,
      },
    };
}

export default Search
