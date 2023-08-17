import React from 'react';

export interface IContentNumberListItem {
  id: string | number;
  title: string;
  description: string;
  order?: number;
}

export interface IContentNumberListItemProps extends IContentNumberListItem {
  order: number;
}

export const ContentNumberListItem: React.FC<IContentNumberListItemProps> = (props) => {
  const { order, title, description } = props;

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-[#4f6355] text-[1.5rem] font-serif">
        {order}. <span dangerouslySetInnerHTML={{ __html: title }} />
      </h4>
      <p className="leading-relaxed max-w-full lg:max-w-[90%]" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};
