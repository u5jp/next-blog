/*====================================

  Previewアクセス用API

====================================*/

import { getBlogBySlug } from 'lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function enablePreview(req: NextApiRequest, res: NextApiResponse) {
  const blog:IBlogs = await getBlogBySlug(req.query.slug,true)
  if (!blog) {
    return res.status(401).json({message:"Invalid Slug"})
  }

  //setPreviewDataはブラウザーに下記クッキーをセットします
  // __prerender_bypass __next_preview_data
  res.setPreviewData({})
  res.writeHead(307, { Location: `/blogs/${blog.fields.slug}` })
  res.end();

}
