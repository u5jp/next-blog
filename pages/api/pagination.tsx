/*====================================

  ブログをオフセット件数ずつ取得用API

====================================*/

import { getPaginatedBlogs } from 'lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getBlogs(req: NextApiRequest, res: NextApiResponse) {
  const offset = Number(req.query.offset || 0);
  const search = (req.query.search || "").toString()
  const data = await getPaginatedBlogs({ offset, search });
  res.status(200).json(data);
}
