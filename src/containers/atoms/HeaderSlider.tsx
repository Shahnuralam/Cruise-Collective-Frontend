import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";

const HeaderImageSliderItem = (props) => {
  const { id, attributes } = props;

  return (
    <div className="bg-image-height w-full relative">
      {attributes?.url && (
        <Image
          src={attributes?.url}
          alt={attributes?.name || ""}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
    </div>
  );
};

const HeaderSlider = (props) => {
  const { sliderItems } = props;

  return (
    <div className="w-full">
      <Swiper
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation]}
        className="h-full" // Ensure Swiper takes full height of its container
      >
        {sliderItems?.map((sliderItem, sliderItemIdx) => (
          <SwiperSlide
            key={`header-slider-${sliderItem.id}-${sliderItemIdx}`}
            className="flex items-center justify-center"
          >
            <HeaderImageSliderItem {...sliderItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
