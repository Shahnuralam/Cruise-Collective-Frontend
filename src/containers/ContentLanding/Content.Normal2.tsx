import React from "react";
import Image from "next/image";
import { mapPermaLink, shortenDescription } from "@/utils";

interface ContentNormalProps {
  data: any;
  link?: string;
  elipsis?: boolean;
}

export const ContentNormal2 = ({
  data,
  elipsis = true,
}: ContentNormalProps) => {
  const { estate_fields, content_type, name, description, images } =
    data.attributes;
  const contentType = mapPermaLink(content_type?.data.attributes.name);

  const mapped = mapPermaLink(content_type);

  const descMap = (type: string) => {
    const map = {
      estate: estate_fields?.excerpt,
      content: "",
    };
    if (!map[type]) return shortenDescription(description);
    return map[type];
  };

  const featuredImage = images?.data && images?.data[0]?.attributes?.url;

  return (
    <a className="flex flex-col gap-5" href={`${contentType.path}/${data.id}`}>
      {/** image */}
      {featuredImage && (
        <div className="block relative w-full min-w-[17.5rem] h-[20rem] lg:h-[16rem] xl:h-[20rem]">
          <Image
            src={featuredImage}
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="bg-[#eaeaea]"
          />
        </div>
      )}
      {!featuredImage && (
        <div className="block relative w-full min-w-[17.5rem] h-[20rem] lg:h-[16rem] xl:h-[20rem]">
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="bg-[#eaeaea]"
          />
        </div>
      )}

      {/** Content */}
      <div className="flex flex-col justify-center items-center gap-2.5 text-center text-[#4f6355]">
        <h5 className="font-bold">{mapped?.categoryName} </h5>

        {/***/}
        <div className="flex flex-col gap-2 justify-center items-center">
          <h3 className="text-2xl font-normal">
            {name} <br />
          </h3>
          <p
            className={`max-h-24 text-black text-opacity-90 leading-tight max-w-[16rem] lg:max-w-[18rem] ${
              elipsis
                ? "overflow-hidden whitespace-nowrap overflow-ellipsis"
                : ""
            }`}
          >
            {descMap(content_type?.data.attributes.name)}
          </p>
        </div>
      </div>
    </a>
  );
};
