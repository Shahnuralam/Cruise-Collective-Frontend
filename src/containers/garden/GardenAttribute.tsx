import React from "react";
import Image from "next/image";

export interface IGardenAttribute {
  id: string | number;
  image: {
    src: string;
    alt?: string;
  };
  title?: string;
  type: string;
}

export interface IGardenAttributeProps {
  item: IGardenAttribute;
}

export const GardenAttribute: React.FC<IGardenAttributeProps> = (props) => {
  const { item } = props;
  return (
    <div className="relative w-[1.5rem] h-[1.5rem]" title={item.title}>
      <Image
        src={item.image.src}
        alt={item.image.alt || ""}
        fill
        style={{ objectFit: "fill", objectPosition: "center" }}
      />
    </div>
  );
};
