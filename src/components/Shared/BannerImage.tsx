import React from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  alt?: string;
  children?: React.ReactNode | React.ReactNode[];
  href: string;
}

const BannerImage: React.FC<Props> = (props) => {
  const { src, alt, children, href } = props;
  return (
    <div className="banner-image">
      <Link href={href} target="_blank">
        <Image
          src={src}
          alt={alt || "Landing Image"}
          width={970}
          height={250}
          className="z-30"
        />
      </Link>
    </div>
  );
};

export default BannerImage;
