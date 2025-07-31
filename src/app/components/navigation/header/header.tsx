'use client';

import Link from 'next/link';
import FoxySvg from '@/app/images/FoxySvg';
import pages from '../pages';
import { usePathname } from 'next/navigation';

const TEXT_COLOR = 'text-pink-800';
const FILL_COLOR = `fill-pink-800`;

const foxy = <FoxySvg key="foxPic" width={40} height={40} />;

const Header = () => {
  const pathName = usePathname();

  const links = Object.values(pages).map((page) => {
    const isActivePage = page.url === pathName;

    return (
      <Link
        key={page.url}
        className={`text-xl ${isActivePage ? 'font-semibold' : ''} p-2`}
        href={page.url}
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
      className={`w-full flex align-middle justify-center gap-9 p-4 ${FILL_COLOR} ${TEXT_COLOR} bg-linear-115 from-pink-300/30 to-pink-500/30 bg-white`}
    >
      {linksWithFoxy}
    </div>
  );
};

export default Header;
