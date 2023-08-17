import React from "react";
import FastDayIcon from "@/assets/svg/heading-icons/fast-day.svg";
import IconAndTitle from "@/atoms/IconAndTitle";
import {
  ArticlePreviewListBig,
  IArticlePreviewListProps,
} from "@/components/ArticlePreviewList";

export const VIPExperiences: React.FC<{
  articles: IArticlePreviewListProps["items"];
}> = (props) => {
  const { articles } = props;

  return (
    <div className="flex justify-center pt-11 pb-12">
      <div className="flex container flex-col gap-6">
        <IconAndTitle
          icon={FastDayIcon}
          title="VIP experiences"
          titleClassName="font-serif !leading-tight"
        />

        {/***/}
        <ArticlePreviewListBig items={articles} />
      </div>
    </div>
  );
};
