import useSWR from 'swr';

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .catch(error => error);

export const useGetHello = () =>
  useSWR("/api/hello", fetcher);

export const getBlogs = (url:string) => {
  return fetcher(url);
};
