import Link from 'next/link';
import { FC } from 'react';

const Navbar:FC = () => {
  return (
    <nav className="ly_nav">
      <Link href="/">
        <a className="bl_navTitle hp-clickable hp-hoverable">u5jp</a>
      </Link>
    </nav>
  );
};

export default Navbar;
