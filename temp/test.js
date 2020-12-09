//クエリテスト用
// lib/test.js

const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_API_KEY,
});

export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: "blogs",
    // postのslugの値を取得
    // select: "fields.slug",
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// 全てのpostを取得
// export async function getAllPosts() {
//   const entries = await client.getEntries({
//     // Content typeがpostのデータだけ取得
//     content_type: "blogPost",

//     // postが作られた時間順に取得
//     // order: "-fields.date",
//   });
//   if (entries.items) {
//     return entries.items;
//   }
//   console.log(`Error getting Entries for ${contentType.name}.`);
// }

// // URLごとにpostを取得
// export async function getPostBySlug(slug) {
//   const entries = await client.getEntries({
//     content_type: "post",

//     // 取得データの数
//     limit: 1,

//     // slugの値が引数slugと等しいpostを取得
//     "fields.slug[in]": slug,
//   });
//   if (entries.items) {
//     return entries.items[0];
//   }
//   console.log(`Error getting Entries for ${contentType.name}.`);
// }

// // 最新のpostsを3つ取得
// export async function getMorePosts(slug) {
//   const entries = await client.getEntries({
//     content_type: "post",
//     limit: 3,
//     order: "-fields.date",

//     // slugの値が引数slugと等しくないpost
//     "fields.slug[nin]": slug,
//   });

//   if (entries.items) {
//     return entries.items;
//   }
//   console.log(`Error getting Entries for ${contentType.name}.`);
// }

// function parsePostSlug({ fields }) {
//   return {
//     slug: fields.slug,
//   };
// }

// function parsePostSlugEntries(entries, cb = parsePostSlug) {
//   return entries?.items?.map(cb);
// }

// // 全てのpostのURLを取得
// export async function getAllPostsWithSlug() {
//   const entries = await client.getEntries({
//     content_type: "post",

//     // postのslugの値を取得
//     select: "fields.slug",
//   });
//   return parsePostSlugEntries(entries, (post) => post.fields);
// }
