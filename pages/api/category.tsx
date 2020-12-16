/*====================================

  カテゴリに含まれているブログjson全取得API

====================================*/

import { getPaginatedBlogsContainCate } from 'lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getBlogs(req: NextApiRequest, res: NextApiResponse) {
  const offset = Number(req.query.offset || 0);
  const id = (req.query.id || "").toString();
  const data = await getPaginatedBlogsContainCate({ offset, id });
  res.status(200).json(data);
}
