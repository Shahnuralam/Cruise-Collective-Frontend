import React from 'react';
import { ISupportItem, SupportItem } from '@/containers/MembersSupport/SupportItem';

export interface ISupportListProps {
  items: ISupportItem[];
}

export const SupportList: React.FC<ISupportListProps> = (props) => {
  const { items } = props;
  return (
    <div className="flex justify-center items-center pt-12 pb-2">
      <div className="flex items-center justify-center max-w-[90%] lg:container flex-wrap gap-5 lg:gap-4 xl:gap-5">
        {items.map((item, itemIdx) => (
          <SupportItem item={item} key={`support-item-${itemIdx}`} />
        ))}
      </div>
    </div>
  );
};
