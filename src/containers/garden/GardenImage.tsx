import React from "react";
import Image from "next/image";

export const GardenImage = ({ image }) => {
  const { caption } = image?.attributes;
  return (
    <div className="w-[16.75rem] h-[11.75rem] md:w-[18.75rem] md:h-[13.75rem] lg:w-[25.75rem] lg:h-[18.75rem] relative">
      <Image
        src={image?.attributes.url}
        alt={image?.attributes.name}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {caption && <p className="landing-caption">{caption}</p>}
    </div>
  );
};
