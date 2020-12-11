import client from "./contentful";

export async function getAllBlogs() {
  const entries = await client.getEntries({
    content_type: "blogs",
    // skip: 3,
    // limit: 2,
  });

  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function getBlogBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "blogs",
    "fields.slug[all]": slug,
  });

  if (entries.items[0]) return entries.items[0];
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function getAllCate() {
  const entries = await client.getEntries({
    content_type: "categories",
  });

  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function getCate(cate) {
  console.log("lib/apiテスト", cate);
  const entries = await client.getEntries({
    content_type: "categories",
    "fields.slug[all]": cate,
  });

  if (entries.items[0]) return entries.items[0];
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function getBlogsContainCate(id) {
  const entries = await client.getEntries({
    content_type: "blogs",
    links_to_entry: id,
  });

  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}
