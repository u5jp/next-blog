import Head from "next/head";
import Navbar from "./Navbar";

const PageLayout = ({ children, className }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="indexWrapper">
        <Navbar />
        <div className={`pageWrapper ${className}`}>{children}</div>
        <footer className="footer">
          <div>
            <a href="#">wantedly</a>
            {" | "}
            <a href="#">github</a>
            {" | "}
            <a href="#">else</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PageLayout;
