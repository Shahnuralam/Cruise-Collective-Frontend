import { IOfferItem, OfferItem } from '@/containers/Offers/OfferItem';
import React from 'react';

export interface IOfferListProps {
  items: IOfferItem[];
}

export const OfferList: React.FC<IOfferListProps> = (props) => {
  const { items } = props;
  return (
    <div className="flex justify-center items-center py-12 pb-14">
      <div className="flex flex-col max-w-[90%] lg:max-w-[70%] xl:max-w-[50%] w-full">
        <div className="flex flex-wrap w-full gap-5 justify-center">
          {items.map((item, itemIdx) => (
            <OfferItem item={item} key={`offer-${item.id}-${itemIdx}`} />
          ))}
        </div>
      </div>
    </div>
  );
};
