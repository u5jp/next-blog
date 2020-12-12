/*====================================

  ブログjson全取得API 現在未使用

====================================*/

import { getAllBlogs } from 'lib/api';

export default async function getBlogs(req, res) {
  const data = await getAllBlogs();
  res.status(200).json(data);
}
