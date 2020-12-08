import client from "./contentful";

export async function getAllBlogs() {
  const entryId = "ENTRY_ID";
  const results = await client.getEntry(entryId);
  return results;
}
