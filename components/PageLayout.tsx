import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

import Navbar from './Navbar';

const PageLayout:FC<CLASS_NAME> = ({ children, className }) => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="ly_pageWrapper">
        <header>
          <Navbar/>
        </header>
        <div className={`ly_page ${className}`}>{children}</div>
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
              href="https://www.wantedly.com/id/yuu_ichihashi_d"
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
