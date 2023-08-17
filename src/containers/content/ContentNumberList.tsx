import React from 'react';
import { ContentNumberListItem, IContentNumberListItem } from '@/containers/content/ContentNumberListItem';

export const ContentNumberList: React.FC<{ list: IContentNumberListItem[] }> = (props) => {
  const { list } = props;
  return (
    <div className="flex flex-col gap-4 my-5">
      {list.map((listItem, listItemIdx) => (
        <ContentNumberListItem
          key={`order-list-item-${listItem.id}-${listItem.id}-${listItemIdx}`}
          {...listItem}
          order={typeof listItem?.order !== 'undefined' ? listItem.order : listItemIdx + 1}
        />
      ))}
    </div>
  );
};
