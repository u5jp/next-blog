/*====================================

  ブログjson全取得API 現在未使用

====================================*/

import { getAllBlogs } from 'lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getBlogs(req: NextApiRequest, res: NextApiResponse) {
  const data = await getAllBlogs();
  res.status(200).json(data);
}
