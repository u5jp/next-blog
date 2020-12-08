import Navbar from "./Navbar";

export default function PageLayout({ children, className }) {
  return (
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
  );
}
