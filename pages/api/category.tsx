import { getPaginatedBlogsContainCate } from "lib/api";

export default async function getBlogs(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const id = req.query.id || "";
  const data = await getPaginatedBlogsContainCate({ offset, id });
  res.status(200).json(data);
}
