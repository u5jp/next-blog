/*====================================

  ブログをオフセット件数ずつ取得用API

====================================*/

import { getPaginatedBlogs } from 'lib/api';

export default async function getBlogs(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const data = await getPaginatedBlogs({ offset });
  res.status(200).json(data);
}
