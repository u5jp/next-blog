import Head from 'next/head';

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
            <a href="#">wantedly</a>
            {" | "}
            <a href="#">gitHub</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PageLayout;
