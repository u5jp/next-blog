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
{blogsCollection(where:{slug:"my-first-blog"}){
  items{

    body {
      json
      links {
        entries {
          block {
            __typename
            ... on WidgetSlider {
              sys {
                id
              }
              name
              slidesToShow
              itemsCollection {
                items {
                  image {
                    title
                    url
                  }
                  link
                }
              }
            }
          }
        }
      }
    }
  }
}
}
  `);
  // console.log(id);
  // console.log(response);

  return response;
}
