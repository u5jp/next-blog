import client, { previewClient } from './contentful';

const getClient = preview => preview ? previewClient : client

export const limit:number = 6;

//全てのブログの取得
export async function getAllBlogs() {
  const entries = await client
    .getEntries({
      content_type: "blogs",
      order: "-fields.date",
    })
    .then((res) => res.items)
    .catch(console.error);

  if (entries) return entries;
}

//ブログslug判別による個別ブログ取得
export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview)
  const entry = await currentClient
    .getEntries({
      content_type: "blogs",
      "fields.slug[all]": slug,
    })
    .then((res) => {
      return res.items[0]
    })
    .catch(console.error);

  if (entry) return entry;
}

//全てのカテゴリーの取得
export async function getAllCate() {
  const entries = await client
    .getEntries({
      content_type: "categories",
    })
    .then((res) => res.items)
    .catch(console.error)

  if (entries) return entries;
}

//カテゴリslug判別による個別カテゴリの取得
export async function getCate(cate) {
  const entry = await client
    .getEntries({
      content_type: "categories",
      "fields.slug[all]": cate,
    })
    .then((res) => res.items[0])
    .catch(console.error)

  if (entry) return entry;
}

//カテゴリid判別によるブログエントリの取得
export async function getBlogsContainCate(id) {
  const entries = await client
    .getEntries({
      content_type: "blogs",
      links_to_entry: `${id}`,
      order: "-fields.date",
    })
    .then((res) => res.items)
    .catch(console.error);

  if (entries) return entries;
}

//ブログ分割ページごとの取得
//limitはactions/pagination.jsと連動しているので要注意
export async function getPaginatedBlogs(
  { offset = 0,search="" } = { offset: 0,search:"" }
) {
  const entries = await client
    .getEntries({
      content_type: "blogs",
      skip: `${offset}`,
      limit: `${limit}`,
      order: "-fields.date",
      query:`${search}`
    })
    .then((res) => res.items)
    .catch(console.error)

  if (entries) return entries;
}

// カテゴリid判別によるブログエントリの取得;
//limitはactions/pagination.jsと連動しているので要注意
export async function getPaginatedBlogsContainCate(
  { offset = 0, id = "" } = { offset: 0, id: "" }
) {
  const entries = await client
    .getEntries({
      content_type: "blogs",
      links_to_entry: `${id}`,
      skip: `${offset}`,
      limit: `${limit}`,
      order: "-fields.date",
    })
    .then((res) => res.items)
    .catch(console.error)

  if (entries) return entries;
}
