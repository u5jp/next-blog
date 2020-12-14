import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="ly_nav">
      <Link href="/">
        <a className="bl_navTitle hp-clickable hp-hoverable">u5jp</a>
      </Link>
    </nav>
  );
};

export default Navbar;
