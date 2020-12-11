import { useSWRInfinite } from "swr";
import { getBlogs } from "actions";

export const useGetBlogsPages = ({ id = "" } = { id: "" }) => {
  const result = useSWRInfinite((index, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    if (id) return `/api/category?id=${id}&offset=${index * 3}`;
    return `/api/pagination?offset=${index * 3}`;
  }, getBlogs);

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...result, hitEnd };
};
