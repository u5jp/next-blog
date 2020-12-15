import { useGetBlogsPages } from 'actions/pagination';
import Button from 'components/Button';
import CardItem from 'components/CardItem';
import PageLayout from 'components/PageLayout';
import PreviewAlert from 'components/PreviewAlert';
import { getAllCate, getBlogsContainCate, getCate } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { FC } from 'react';

type Props = {
  cate: category
  blogs: blog[]
  preview: boolean
}

const Category:FC<Props> = ({ cate, blogs: initialData,preview }) => {
  const router = useRouter();

  if (!router.isFallback && !cate?.fields.slug) {
    return <ErrorPage statusCode={404}/>
  }

  if (router.isFallback) {
    return (
      <PageLayout>
          Loading...
      </PageLayout>
    )
  }

  const { data, size, setSize, hitEnd } = useGetBlogsPages({
    id: cate.sys.id,
  });
  const blogs = data ? [].concat(...data) : initialData;

  return (
    <PageLayout>
      {preview && <PreviewAlert/>}
      <div className="bl_pageHeader">
        <div className="bl_pageHeader_inner">
          <h1 className="bl_pageHeader_title">
            Category Page
          </h1>
          <h2 className="bl_pageHeader_subtitle">
            Tag : {cate?.fields.category}
          </h2>
        </div>
      </div>
      <div className="ly_container">
        {blogs.map((blog,index) => {
          return <CardItem
            className="ly_container_item"
            key={index}
            {...blog.fields}
          />
        })}
      </div>
      <Button
        className={"hp-mt20"}
        hitEnd={hitEnd}
        setSize={setSize}
        size={size}
      />
    </PageLayout>
  );
};

export const getStaticProps:GetStaticProps = async({ params,preview=false }) => {
  const cate = await getCate(params.slug);
  const blogs = await getBlogsContainCate(cate.sys.id);

  return {
    props: {
      cate,
      blogs,
      preview
    },
  };
}

export const getStaticPaths:GetStaticPaths = async() => {
  const cates:category[] = await getAllCate();
  return {
    paths: cates?.map((b) => ({ params: { slug: b.fields.slug } })),
    fallback: true,
  };
}

export default Category;
