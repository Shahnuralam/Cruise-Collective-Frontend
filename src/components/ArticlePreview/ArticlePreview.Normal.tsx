import React from "react";
// import { IArticlePreviewProps } from "@/components/ArticlePreview/index";
import Image from "next/image";
import RoundedBtn from "@/atoms/RoundedBtn";
import { mapPermaLink, shortenDescription } from "@/utils";
import Link from "next/link";

export const ArticlePreviewNormal: React.FC<any> = (props) => {
  const item = props.item.attributes;
  const contentType = mapPermaLink(item.content_type.data.attributes.name);

  return (
    <div className="flex flex-col gap-4 w-full justify-start items-center text-[#4f6355]">
      {/** image */}
      <div className="block w-[17rem] h-[17rem] lg:w-[15rem] lg:h-[15rem] xl:w-[17rem] xl:h-[17rem] 2xl:w-[20rem] 2xl:h-[20rem] relative">
        <Link href={`${contentType.path}/${props.item.id}`}>
          <Image
            src={item?.images?.data[0].attributes.url}
            alt={item.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="17.875rem"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-start items-center gap-2 flex-1">
        <Link href={`${contentType.path}/${props.item.id}`}>
          <h4
            dangerouslySetInnerHTML={{ __html: item.name }}
            className="text-center font-medium text-xl lg:text-2xl"
          />
        </Link>

        <p className="max-w-[20rem] text-center lg:text-lg text-black">
          {item.excerpt}
        </p>
      </div>

      <div className="mt-5">
        <RoundedBtn
          useLink
          href={`${contentType.path}/${props.item.id}`}
          title={contentType.buttonText}
          variant="outline-light-green"
        />
      </div>
    </div>
  );
};
