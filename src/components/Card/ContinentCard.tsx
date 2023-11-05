import FooterRightImage from "@/layout/Footer/FooterRightImage";
import React from "react";
import StrokeLine from "../StrokeLine";
import Link from "next/link";
import ContinentImg from "@/assets/svg/continent-map.svg";
import Image from "next/image";
const ContinentCard = ({ continent }) => {
  const { id, attributes } = continent;
  const { title, featured_image, slug } = attributes;

  const imgUrl = featured_image?.data
    ? featured_image?.data?.attributes?.url
    : "";

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
            href={slug !== 'multi-continent' ? `/destination/${id}` : `/multi-continent/${id}`}
          >
            {title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContinentCard;
