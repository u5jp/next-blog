import Head from 'next/head';
import Link from 'next/link';
import React, { FC } from 'react';

import Navbar from './Navbar';

const PageLayout: FC<CLASS_NAME> = ({ children, className }) => {
  return (
    <>
      <Head>
        <meta name="description" content="u5jpのブログです。プログラミングや日常の出来事について記録されています。このブログはNext.js、TypeScriptで実装されています。コンテンツはヘッドレスCMSのContentfulで管理しています。このページはVercelでホスティングされています。" />
      </Head>
      <div className="ly_pageWrapper">
        <header className="ly_header">
          <Navbar/>
        </header>
        <main className={`ly_main ${className}`}>
          {children}
        </main>
        <footer className="ly_footer">
          <div>
            <Link href="/"><a
              className="hp-clickable hp-hoverable"
            >
              TOP
            </a></Link>
            {" | "}
            <a
              href="https://github.com/u5jp/"
              className="hp-clickable hp-hoverable"
            >
              GitHub
            </a>
            {" | "}
            <a
              href="https://u5jp.github.io/pf-react-ts-hooks-redux/#/"
              className="hp-clickable hp-hoverable"
            >
              SelfIntroduction
            </a>
            {" | "}
            <a
              href="https://www.wantedly.com/users/140375355"
              className="hp-clickable hp-hoverable"
            >
              Wantedly
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PageLayout;
