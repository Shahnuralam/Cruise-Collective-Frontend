import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper";

export interface IImageSliderItem {
  id: string | number;
  image: {
    src: string;
    alt?: string;
    caption?: string;
  };
}

const ImageSliderItem: React.FC<IImageSliderItem> = (props) => {
  const { image } = props;

  return (
    <div className="h-[20rem] md:h-[30rem] xl:h-[50rem] w-full relative">
      <Image
        src={image.src}
        alt={image?.alt || ""}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {image.caption && <p className="landing-caption">{image.caption}</p>}
    </div>
  );
};

export interface ImageSliderProps {
  sliderItems: IImageSliderItem[];
}

const ImageSlider: React.FC<ImageSliderProps> = (props) => {
  const { sliderItems } = props;

  return (
    <div className="w-full">
      <Swiper navigation={true} modules={[Navigation]}>
        {sliderItems?.map((sliderItem, sliderItemIdx) => (
          <SwiperSlide key={`slider-${sliderItem.id}-${sliderItemIdx}`}>
            <ImageSliderItem {...sliderItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
