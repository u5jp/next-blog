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
