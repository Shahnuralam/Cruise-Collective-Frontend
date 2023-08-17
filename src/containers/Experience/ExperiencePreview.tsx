import React, { useMemo } from "react";
import Image from "next/image";
import RoundedBtn from "@/atoms/RoundedBtn";
import clsx from "clsx";
import Link from "next/link";

export interface IExperiencePreviewItem {
  id: string;
  image: {
    src: string;
    alt?: string;
  };
  badge?: string;
  localeDateStr: string;
  name: string;
  description: string;
  attributes?: any;
}

export interface IExperiencePreviewProps {
  rtl?: boolean;
  item: IExperiencePreviewItem;
}

export const ExperiencePreview: React.FC<IExperiencePreviewProps> = (props) => {
  const { rtl = false, item } = props;

  const { attributes: data } = item;

  const featuredImage =
    data?.images?.data && data?.images?.data[0]?.attributes?.url;

  const imageContainer = useMemo(() => {
    return (
      <div className="relative w-[18.75rem] min-h-[18.75rem] xl:h-full xl:w-[24rem] xl:min-h-[24rem] xl:max-h-[26rem]">
        {data?.images?.data && (
          <Image
            src={featuredImage}
            alt={data.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        )}

        {item?.badge && (
          <div className="flex justify-center items-center absolute top-2 left-2 rounded-full bg-white w-[5.625rem] h-[5.625rem] text-[#36453b] select-none text-xl font-serif">
            <span
              className="text-center"
              dangerouslySetInnerHTML={{ __html: item.badge }}
            />
          </div>
        )}
      </div>
    );
  }, [item.badge, data.name, item.image]);

  const infoContainer = useMemo(() => {
    return (
      <div className="flex flex-col flex-1 gap-4 px-2 xl:px-0">
        <div className="flex flex-col border-b border-b-[#4f6355] font-serif text-[#4f6355] gap-2">
          {/** Date */}
          <h4 className=" border-y border-y-[#4f6355] text-xl py-2">
            {data?.experience_fields?.experience_period}
          </h4>

          {/** title */}
          <h2
            className="text-[2rem]"
            dangerouslySetInnerHTML={{ __html: data.name }}
          />
        </div>

        <p
          className="font-light leading-relaxed text-black text-sm"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        <div className="w-fit">
          <RoundedBtn
            title="Book now"
            useLink
            href={`/experiences/${item.id}`}
            variant="outline-light-green"
          />
        </div>
      </div>
    );
  }, [data.localeDateStr, data.name, data.description, data.actionBtn]);

  return (
    <Link href={`/experiences/${item.id}`}>
      {" "}
      <div
        className={clsx("flex gap-6 justify-center xl:justify-start", {
          "flex-wrap md:items-start items-center xl:items-start": !rtl,
          "flex-wrap-reverse md:items-end items-center xl:items-start": rtl,
        })}
      >
        {rtl ? infoContainer : imageContainer}
        {rtl ? imageContainer : infoContainer}
      </div>
    </Link>
  );
};
