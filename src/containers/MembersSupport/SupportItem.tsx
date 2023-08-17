import React from 'react';
import Link from 'next/link';

export interface ISupportItem {
  icon: any;
  title: string;
  href: string;
}

export interface IISupportItemProps {
  item: ISupportItem;
}

export const SupportItem: React.FC<IISupportItemProps> = (props) => {
  const { item } = props;

  const iconProps = {
    className: 'w-16 h-16',
    viewBox: '0 0 64 64',
  };

  return (
    <Link
      href={item.href}
      className="flex flex-col items-center justify-center w-full max-w-full lg:max-w-[30%] min-h-[20rem] bg-[#c7d1a3] bg-opacity-[15%] px-6 py-8 text-[#36453b] gap-4 hover:bg-[#36453b] hover:bg-opacity-100 hover:text-[#c7d1a3] transition-all ease-in-out duration-300 cursor-pointer"
    >
      {item.icon(iconProps)}
      <span className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-3xl text-center" dangerouslySetInnerHTML={{ __html: item.title }} />
    </Link>
  );
};
