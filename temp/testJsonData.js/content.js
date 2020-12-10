export default [
  {
    sys: {
      space: { sys: { type: "Link", linkType: "Space", id: "pkdqkxr7d7m4" } },
      id: "4ycWGVam6bpbzUkXTCXGDz",
      type: "Entry",
      createdAt: "2020-12-08T18:24:38.073Z",
      updatedAt: "2020-12-10T08:44:57.219Z",
      environment: {
        sys: { id: "master", type: "Link", linkType: "Environment" },
      },
      revision: 16,
      contentType: {
        sys: { type: "Link", linkType: "ContentType", id: "blogs" },
      },
      locale: "en-US",
    },
    fields: {
      slug: "my-first-blog",
      title: "My first blog",
      subtitle: "My first blog subtitle",
      date: "2020-12-09T00:00+09:00",
      thumbnail: {
        sys: {
          space: {
            sys: { type: "Link", linkType: "Space", id: "pkdqkxr7d7m4" },
          },
          id: "5TWUis4z1w0BGouaPOzJvg",
          type: "Asset",
          createdAt: "2020-12-08T18:24:09.529Z",
          updatedAt: "2020-12-09T10:51:35.669Z",
          environment: {
            sys: { id: "master", type: "Link", linkType: "Environment" },
          },
          revision: 3,
          locale: "en-US",
        },
        fields: {
          title: "keyboard",
          file: {
            url:
              "//images.ctfassets.net/pkdqkxr7d7m4/5TWUis4z1w0BGouaPOzJvg/30fd3bc86a6ff759f72450b3046d6d79/keyboard.jpeg",
            details: { size: 32741, image: { width: 1000, height: 631 } },
            fileName: "keyboard.jpeg",
            contentType: "image/jpeg",
          },
        },
      },
      body: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value: "ボディテスト",
                marks: [
                  { type: "bold" },
                  { type: "italic" },
                  { type: "underline" },
                ],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value: "",
                marks: [
                  { type: "bold" },
                  { type: "italic" },
                  { type: "underline" },
                ],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: "embedded-asset-block",
            content: [],
            data: {
              target: {
                sys: {
                  space: {
                    sys: {
                      type: "Link",
                      linkType: "Space",
                      id: "pkdqkxr7d7m4",
                    },
                  },
                  id: "uqEatMMAdpTIsf3lmlWv9",
                  type: "Asset",
                  createdAt: "2020-12-08T18:28:10.802Z",
                  updatedAt: "2020-12-08T18:28:10.802Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  locale: "en-US",
                },
                fields: {
                  title: "reading",
                  file: {
                    url:
                      "//images.ctfassets.net/pkdqkxr7d7m4/uqEatMMAdpTIsf3lmlWv9/d486c8f89320b47f7e610fb426f6fea2/reading.jpeg",
                    details: {
                      size: 51674,
                      image: { width: 1000, height: 667 },
                    },
                    fileName: "reading.jpeg",
                    contentType: "image/jpeg",
                  },
                },
              },
            },
          },
          {
            nodeType: "paragraph",
            content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            data: {},
          },
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value:
                  '//test.js\nimport { createRef, useEffect } from "react";\nimport { findDOMNode } from "react-dom";\nimport highlight from "highlight.js";\n\nconst HighlightCode = ({ children }) => {  const code = createRef();\n  useEffect(() => {    highlight.highlightBlock(findDOMNode(code.current));  });\n  return (<pre><code ref={code}>{children}</code></pre>);}\n\nexport default HighlightCode;',
                marks: [{ type: "code" }],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value: "これはテスト用テキストです。",
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value:
                  "私たちの仕事は、「今ないものを作っていく」仕事です。\nこれから取り組んでいく領域は、不動産やインバウンドには縛られないかも知れません。\n仲間として必要な素養は、「自律性」「事業家マインド」「諦めの悪さ」。\nゆくゆくはみんながそれぞれ事業の責任者として\n複数の事業を束ねるような会社になっていきたいと思っています。\n「会社」というより、「事業家集団」ということばの方が、\nもしかしたら似合うかも知れません。",
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value:
                  "与えられたタスクを追う仕事よりも、自分の事業をやってみたい。\n事業家同士で、切磋琢磨し合う環境に身を置きたい。\nそんな方のご応募を期待しています。",
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value: "これはテスト用テキストです。",
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
        ],
      },
      categories: [
        {
          sys: {
            space: {
              sys: { type: "Link", linkType: "Space", id: "pkdqkxr7d7m4" },
            },
            id: "2XEzQm5EPhuyQm8gkAQ9UV",
            type: "Entry",
            createdAt: "2020-12-08T20:35:32.927Z",
            updatedAt: "2020-12-08T20:35:32.927Z",
            environment: {
              sys: { id: "master", type: "Link", linkType: "Environment" },
            },
            revision: 1,
            contentType: {
              sys: { type: "Link", linkType: "ContentType", id: "category" },
            },
            locale: "en-US",
          },
          fields: { category: "Efficiency" },
        },
      ],
    },
  },
];
