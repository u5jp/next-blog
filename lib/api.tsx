import client, { previewClient } from './contentful';

const getClient = preview => preview ? previewClient : client

//全てのブログの取得
export async function getAllBlogs() {
  const entries = await client
    .getEntries({
      content_type: "blogs",
      order: "-fields.date",
    })
    .then((res) => res.items);

  if (entries) return entries;
  // if (entries.items) return entries.items;
  console.log(`Error getting Entries.`);
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
    });

  if (entry) return entry;
  console.log(`Error getting Entries.`);
}

//全てのカテゴリーの取得
export async function getAllCate() {
  const entries = await client
    .getEntries({
      content_type: "categories",
    })
    .then((res) => res.items);

  if (entries) return entries;
  console.log(`Error getting Entries.`);
}

//カテゴリslug判別による個別カテゴリの取得
export async function getCate(cate) {
  const entry = await client
    .getEntries({
      content_type: "categories",
      "fields.slug[all]": cate,
    })
    .then((res) => res.items[0]);

  if (entry) return entry;
  console.log(`Error getting Entries.`);
}

//カテゴリid判別によるブログエントリの取得
export async function getBlogsContainCate(id) {
  const entries = await client
    .getEntries({
      content_type: "blogs",
      links_to_entry: `${id}`,
      order: "-fields.date",
    })
    .then((res) => res.items);

  if (entries) return entries;
  console.log(`Error getting Entries.`);
}

//ブログ分割ページごとの取得
//limitはactions/pagination.jsと連動しているので要注意
export async function getPaginatedBlogs({ offset = 0 } = { offset: 0 }) {
  const entries = await client
    .getEntries({
      content_type: "blogs",
      skip: `${offset}`,
      limit: 3,
      order: "-fields.date",
    })
    .then((res) => res.items);

  if (entries) return entries;
  console.log(`Error getting Entries.`);
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
      limit: 3,
      order: "-fields.date",
    })
    .then((res) => res.items);

  if (entries) return entries;
  console.log(`Error getting Entries.`);
}
