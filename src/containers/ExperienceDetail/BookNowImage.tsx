import React from "react";
import Image from "next/image";
interface Props {
  src: any;
}
export const BookNowImage: React.FC<Props> = ({ src }) => {
  const rightImage = src?.image?.data?.attributes?.url;

  if (!rightImage) return null;

  const caption = src?.image?.data?.attributes?.caption;

  return (
    <div className="flex relative w-[15.625rem] h-[12.5rem] lg:h-[15rem] xl:w-[34.125rem] xl:h-[21.25rem] bg-[#d1d1d1] flex-1 lg:w-full">
      <Image
        src={rightImage}
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {caption && <p className="landing-caption">{caption}</p>}
    </div>
  );
};
