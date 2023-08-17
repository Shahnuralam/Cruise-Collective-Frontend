import React from 'react';
import ClassPlayIcon from '@/assets/svg/heading-icons/class-play-icon.svg';
import IconAndTitle from '@/atoms/IconAndTitle';
import { ArticlePreviewListBig, IArticlePreviewListProps } from '@/components/ArticlePreviewList';

export const TakeAMasterClass: React.FC<{ articles: IArticlePreviewListProps['items'] }> = (props) => {
  const { articles } = props;

  return (
    <div className="flex justify-center pt-11 pb-12">
      <div className="flex container flex-col gap-6">
        <IconAndTitle icon={ClassPlayIcon} title="View Gardens Illustrated masterclass" titleClassName="font-serif !leading-tight" />

        {/***/}
        <ArticlePreviewListBig items={articles} />
      </div>
    </div>
  );
};
