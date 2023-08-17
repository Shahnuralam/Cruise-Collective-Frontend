import React from 'react';
import { ArticlePreviewListBig, IArticlePreviewListProps } from '@/components/ArticlePreviewList';
import IconAndTitle from '@/atoms/IconAndTitle';
import PlayWithStars from '@/assets/svg/heading-icons/play-with-stars.svg';

export const WatchAGardensIllustratedMasterclass: React.FC<{ articles: IArticlePreviewListProps['items'] }> = (props) => {
  const { articles } = props;

  return (
    <div className="flex justify-center pt-11 pb-12 bg-[#c7d1a3] bg-opacity-[15%]">
      <div className="flex container flex-col gap-6">
        <IconAndTitle icon={PlayWithStars} title="Watch a Gardens Illustrated masterclass" titleClassName="font-serif !leading-tight" />

        {/***/}
        <ArticlePreviewListBig items={articles} />
      </div>
    </div>
  );
};
