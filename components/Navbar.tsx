import Link from 'next/link';
import React, { FC } from 'react';

const Navbar: FC = () => {
  console.log("navbar描画")
  return (
    <nav className="ly_nav">
      <Link href="/">
        <a className="skip-link bl_navTitle hp-clickable hp-hoverable">u5jp</a>
      </Link>
    </nav>
  );
};

export default React.memo(Navbar);
