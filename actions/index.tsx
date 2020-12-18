import useSWR from 'swr';

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .catch(error => error);

export const getBlogs = (url:string) => {
  return fetcher(url);
};
