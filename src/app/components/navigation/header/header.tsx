'use client';

import Link from 'next/link';
import FoxySvg from '@/app/images/FoxySvg';
import pages from '../pages';
import { usePathname } from 'next/navigation';
import HamburgerBtn from '../../common/hamburger-btn/HamburgerBtn';
import { useState } from 'react';

const TEXT_COLOR = 'text-pink-800';
const FILL_COLOR = `fill-pink-800`;

const foxy = <FoxySvg key="foxPic" width={40} height={40} />;

const bg = 'bg-linear-90 from-pink-300/30 to-pink-500/30 bg-white';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  const links = Object.values(pages).map((page) => {
    const isActivePage = page.url === pathName;

    return (
      <Link
        key={page.url}
        className={`${isActivePage ? 'font-semibold underline' : ''} p-2`}
        href={page.url}
        onClick={() => setIsMenuOpen(false)}
      >
        {page.name}
      </Link>
    );
  });

  const linksWithFoxy = [
    ...links.slice(0, links.length / 2),
    foxy,
    links.slice(links.length / 2),
  ];

  return (
    <div
      className={`w-full h-20 md:h-19 sticky z-10 top-0 left-0 right-0 bottom-20 md:static ${FILL_COLOR} ${TEXT_COLOR} ${bg}`}
    >
      <div className="hidden md:flex w-full justify-center gap-9 p-4 ">
        {linksWithFoxy}
      </div>
      <div className="flex md:hidden relative w-full justify-between items-center gap-9 px-2">
        <HamburgerBtn
          isActive={isMenuOpen}
          onClick={() => setIsMenuOpen((open: boolean) => !open)}
        />
        {foxy}
        <div className="w-20" />
        <div
          className={`${
            isMenuOpen ? '' : '-translate-x-full'
          } transition duration-75 fixed top-20 bottom-0 left-0 right-0 p-4 ${bg} text-5xl flex flex-col gap-8`}
        >
          {links}
        </div>
      </div>
    </div>
  );
};

export default Header;
