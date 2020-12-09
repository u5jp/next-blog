import client from "./contentful";

export async function getAllBlogs() {
  const entries = await client.getEntries({
    content_type: "blogs",
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

export async function test(slug) {
  const entries = await client.getEntries({
    content_type: "blogs",
    "fields.slug[all]": slug,
  });

  if (entries.items[0]) return entries.items[0];
  console.log(`Error getting Entries for ${contentType.name}.`);
}
