import { useSWRInfinite } from "swr";
import { getBlogs } from "actions";

export const useGetBlogsPages = () => {
  const result = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData.length) return null;
      return `/api/pagination?offset=${index * 3}`;
    },
    (url) => fetch(url).then((res) => res.json())
  );

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...result, hitEnd };
};
