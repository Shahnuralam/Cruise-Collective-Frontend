import React from "react";
import {
  ArticlePreviewListNormal,
  IArticlePreviewListProps,
} from "@/components/ArticlePreviewList";
import IconAndTitle from "@/atoms/IconAndTitle";
import SproutIcon from "@/assets/svg/heading-icons/sprout.svg";

export const YourLatestOffers: React.FC<{
  articles: IArticlePreviewListProps["items"];
}> = (props) => {
  const { articles } = props;

  return (
    <div className="flex justify-center pt-11 pb-12 bg-[#c7d1a3] bg-opacity-[15%]">
      <div className="flex container flex-col gap-6">
        <IconAndTitle
          icon={SproutIcon}
          title="Your latest offers"
          titleClassName="font-serif !leading-tight"
        />

        {/***/}
        <ArticlePreviewListNormal items={articles} />
      </div>
    </div>
  );
};
