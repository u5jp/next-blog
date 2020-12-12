// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*====================================

  ハロージョンドウ！用API

====================================*/

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
