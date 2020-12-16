/*====================================

  プレビューモード離脱用API

====================================*/
import { NextApiRequest, NextApiResponse } from 'next';

export default function exitPreview(_: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData()
  res.writeHead(307, { Location: '/' });
  res.end();
}
