import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContinentCard = ({ continent }) => {
  const {  attributes } = continent;
  const { title,  slug } = attributes;

  const imgUrl =
    continent.attributes?.featured_image.data?.attributes.url || "";

  return (
    <>
      <div className="flex items-center">
        <div className="mr-6">
          {imgUrl && (
            <Image src={imgUrl} width={40} height={40} alt="map icon" />
          )}
        </div>
        <div className="h-8">
          <Link
            className="text-lg md:text-[24px] hover:text-cruise"
            href={
              slug !== "multi-continent"
                ? `/destination/${slug}`
                : `/multi-continent/${slug}`
            }
          >
            {title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContinentCard;
