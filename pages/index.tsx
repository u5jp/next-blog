import { useGetBlogsPages } from 'actions/pagination';
import Button from 'components/Button';
import CardItem from 'components/CardItem';
import CategoryTag from 'components/CategoryTag';
import Introduce from 'components/Introduce';
import PageLayout from 'components/PageLayout';
import PreviewAlert from 'components/PreviewAlert';
import SearchBox from 'components/SearchBox';
import { getAllCate, getPaginatedBlogs } from 'lib/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import React, { FC, useState } from 'react';

type Props = {
  blogs:IBlogs[]
  categories:ICategories[]
  preview:boolean
}

const Home: FC<Props> = ({ blogs: initialData, categories,preview }) => {

  const [text, setText] = useState("")

  const { data, size, setSize, hitEnd } = useGetBlogsPages();
  const blogs:IBlogs[] = data ? [].concat(...data) : initialData;

  const handleSubmit =
    (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    Router.push({
      pathname: '/search',
      query: { search:`${text}` }
    })
  }

  return (
    <>
      <Head>
        <title>u5jp blog | Top page</title>
      </Head>
      <PageLayout>
        {preview && <PreviewAlert />}
        <div className="bl_pageHeader">
          <Introduce />
          <SearchBox
            handleSubmit={handleSubmit}
            text={text}
            setText={setText}
          />
        </div>

        <div className="bl_category_wrapper bl_category_wrapper__right">
          {categories.map((category, index) => (
            <CategoryTag
              key={index}
              index={index}
              className="bl_category"
              {...category.fields}
            />
          ))}
        </div>
        <hr />
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
      </>
  );
}

export const getStaticProps:GetStaticProps = async ({preview=false}) => {
  const blogs:IBlogs[] = await getPaginatedBlogs();
  const categories:ICategories[] = await getAllCate();
  return {
    props: {
      blogs,
      categories,
      preview
    },
    revalidate: 1
  };
}

export default Home;
