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
    caption?: {
      title?: string;
      description?: string;
      text?: string;
    };
  };
}

const ImageSliderItem: React.FC<IImageSliderItem> = (props) => {
  const { image } = props;

  return (
    <div className="bg-image-height w-full relative">
      <Image
        src={image.src}
        alt={image?.alt || ""}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {image?.caption && (
        <div className="landing-caption w-3/4 md:w-full p-3 md:p-6 left-10 md:left-20">
          <div className="bg-collective-image-url bg-right-bottom bg-no-repeat">
            <div className="text-2xl mb-3">{image?.caption?.title}</div>
            <p className="text-base"> {image?.caption?.description}</p>
            <div className="bg-image-url"></div>
            <div className="text-xl mt-10">{image?.caption?.text}</div>
          </div>
        </div>
      )}
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
