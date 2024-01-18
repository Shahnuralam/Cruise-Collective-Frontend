import React from "react";
import {
  ArticlePreviewListNormal,
} from "@/components/ArticlePreviewList";
import IconAndTitle from "@/atoms/IconAndTitle";
import ExclusiveContentIcon from "@/assets/svg/heading-icons/exclusive-content.svg";

export const ExclusiveContent: React.FC<any> = (props) => {
  const { items } = props;

  return (
    <div className="flex justify-center pt-11 pb-12 bg-[#c7d1a3] bg-opacity-[15%]">
      <div className="flex container flex-col gap-6">
        <IconAndTitle
          icon={ExclusiveContentIcon}
          title="Exclusive content"
          titleClassName="font-serif !leading-tight"
        />

        {/***/}
        <ArticlePreviewListNormal items={items} />
      </div>
    </div>
  );
};
