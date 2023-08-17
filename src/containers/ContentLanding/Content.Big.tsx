import React from "react";
import Image from "next/image";
import { IFeatureSliderItem } from "@/containers/atoms/FeatureSlider";
import ReactHtmlParser from "react-html-parser";

export const ContentBig = ({ featuredContent }: IFeatureSliderItem) => {
  return (
    <div className="flex flex-col bg-[#36453b] text-white">
      <div className="block relative w-full min-w-[17.5rem] h-[20rem] lg:h-[16rem] xl:h-[25rem]">
        {featuredContent?.images?.url && (
          <Image
            src={featuredContent?.images?.url}
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="bg-[#eaeaea]"
          />
        )}
        {!featuredContent?.images?.url && (
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="bg-[#eaeaea]"
          />
        )}
      </div>

      {/** Content */}
      <div className="flex flex-col gap-2 text-left p-6 pt-7">
        <div className="flex flex-col gap-1">
          <h5 className="font-bold text-[#c7d1a3] text-sm">Discover</h5>
          <h3 className="text-2xl font-normal">{featuredContent?.name}</h3>
        </div>

        {featuredContent?.description?.length > 100 && (
          <p className="text-white text-opacity-90 leading-relaxed max-w-[16rem] md:max-w-[18rem] lg:max-w-[20rem] xl:max-w-[25rem]">
            {/* {ReactHtmlParser(featureSlider?.description.slice(0, 100))}...} */}
          </p>
        )}
        {featuredContent?.description?.length <= 100 && (
          <p className="text-white text-opacity-90 leading-relaxed max-w-[16rem] md:max-w-[18rem] lg:max-w-[20rem] xl:max-w-[25rem]">
            {/* {ReactHtmlParser(featureSlider?.description)} */}
          </p>
        )}
      </div>
    </div>
  );
};
