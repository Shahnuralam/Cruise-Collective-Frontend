import React from "react";
import Image, { ImageProps } from "next/image";

interface ILandingImageProps {
  src: string;
  alt?: string;
  children?: React.ReactNode | React.ReactNode[];
  priority?: ImageProps["priority"];
  caption?: string;
}

const LandingImage: React.FC<ILandingImageProps> = (props) => {
  const { src, alt, children, priority = true, caption } = props;
  return (
    <div className="w-full landing-image relative">
      <Image
        src={src}
        alt={alt || "Landing Image"}
        fill
        className="z-20 hero-image"
        priority={priority}
      />

      <div className="relative w-full h-full z-30">
        {children}
        {caption && <p className="landing-caption">{caption}</p>}
      </div>
    </div>
  );
};

export default LandingImage;
