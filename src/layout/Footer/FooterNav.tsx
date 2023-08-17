import React from 'react';
import Link from 'next/link';

export interface IFooterNavItem {
  id: string | number;
  name: string;
  href: string;
}

export interface IFooterNavProps {
  items: IFooterNavItem[];
}

const FooterNav: React.FC<IFooterNavProps> = (props) => {
  const { items } = props;

  return (
    <div className="flex gap-6 flex-wrap justify-between w-full">
      {items.map((navItem, navItemIdx) => (
        <Link key={`_fni-${navItem.id}-${navItemIdx}`} href={navItem.href} rel="nofollow" className="transition-all ease-out duration-300 text-white no-underline hover:underline">
          {navItem.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterNav;
