/*====================================

  プレビューモード離脱用API

====================================*/

export default function exitPreview(_, res) {
  res.clearPreviewData()
  res.writeHead(307, { Location: '/' });
  res.end();
}
