import { fetchContent } from "./contentful";

export async function getAllBlogs() {
  const response = await fetchContent(`
    {
      blogsCollection{
        items{
          slug
          title
          subtitle
          date
          thumbnail{
            title
            url
          }
          body{
            json
          }
        }
      }
    }
  `);

  return response.blogsCollection.items;
}

export async function getBlogBySlug(slug) {
  const response = await fetchContent(`
{
  blogsCollection(where:{slug:"${slug}"}){
    items{
      slug
      title
      subtitle
      date
      thumbnail{
        title
        url
      }
      body{
        json
      }
    }
  }
}
  `);

  return response.blogsCollection.items[0];
}

export async function getImage(id) {
  const response = await fetchContent(`
  {
    asset(id:"uqEatMMAdpTIsf3lmlWv9"){
      url
    }
  }
  `);
  // console.log(id);
  // console.log(response);

  return response;
}
