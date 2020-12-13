import Head from 'next/head';
import Link from 'next/link';

import Navbar from './Navbar';

type PropsOptional = {
  className?: string;
  children: React.ReactNode;
};

const PageLayout = ({ children, className }:PropsOptional) => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <div className="indexWrapper">
        <Navbar />
        <div className={`pageWrapper ${className}`}>{children}</div>
        <footer className="footer">
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
