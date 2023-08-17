import React from "react";
import SunnyDayIcon from "@/assets/svg/heading-icons/sunny-day.svg";
import IconAndTitle from "@/atoms/IconAndTitle";
import { ArticlePreviewListBig } from "@/components/ArticlePreviewList";

export const ExploreOurPartnerEstates: React.FC<{
  items: any;
}> = (props) => {
  const { items } = props;

  return (
    <div
      className="flex justify-center pt-11 pb-12"
      id="exploreOurPartnerEstates"
    >
      <div className="flex container flex-col gap-6">
        <IconAndTitle
          icon={SunnyDayIcon}
          title="Explore our partner gardens"
          titleClassName="font-serif !leading-tight"
        />

        {/***/}
        <ArticlePreviewListBig items={items} />
      </div>
    </div>
  );
};
