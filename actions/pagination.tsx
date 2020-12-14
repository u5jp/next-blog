import { getBlogs } from 'actions';
import { limit } from 'lib/api';
import { useSWRInfinite } from 'swr';

export const useGetBlogsPages = ({ id = "", search = "" } = { id: "", search: "" }) => {
  const result = useSWRInfinite((index, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    if (id) return `/api/category?id=${id}&offset=${index * limit}`;
    if (search) return `/api/pagination?offset=${index * limit}&search=${search}`;
    return `/api/pagination?offset=${index * limit}`;
  }, getBlogs);

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length < limit;
  }

  return { ...result, hitEnd };
};
