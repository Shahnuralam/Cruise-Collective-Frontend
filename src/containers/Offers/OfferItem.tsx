import React from 'react';
import Link from 'next/link';

export interface IOfferItem {
  id: string | number;
  title: string;
  href: string;
}

export interface IOfferItemProps {
  item: IOfferItem;
}

export const OfferItem: React.FC<IOfferItemProps> = (props) => {
  const { item } = props;
  return (
    <Link
      href={item.href}
      className="flex justify-center items-center text-3xl font-medium text-[#36453b] w-[17.5rem] h-[15.5rem] xl:w-[21rem] xl:h-[19rem] bg-[#c7d1a3] bg-opacity-[15%] hover:bg-[#36453b] hover:bg-opacity-100 hover:text-[#c7d1a3] transition-all ease-in-out duration-300 cursor-pointer"
      dangerouslySetInnerHTML={{ __html: item.title }}
    />
  );
};
