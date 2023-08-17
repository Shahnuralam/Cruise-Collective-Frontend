import React from 'react';
import { ArticlePreviewListNormal, IArticlePreviewListProps } from '@/components/ArticlePreviewList';
import IconAndTitle from '@/atoms/IconAndTitle';
import ExclusiveContentIcon from '@/assets/svg/heading-icons/exclusive-content.svg';

export const RelatedContent: React.FC<{ articles: IArticlePreviewListProps['items'] }> = (props) => {
  const { articles } = props;

  return (
    <div className="flex justify-center pt-11 pb-12 bg-white">
      <div className="flex container flex-col gap-6">
        <IconAndTitle icon={ExclusiveContentIcon} title="Related content" titleClassName="font-serif !leading-tight" />

        {/***/}
        <ArticlePreviewListNormal items={articles} />
      </div>
    </div>
  );
};
