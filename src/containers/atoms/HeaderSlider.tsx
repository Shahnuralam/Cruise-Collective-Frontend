import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
// Import your custom arrow images as regular images
import customPrevArrow from '/public/images/BannerAssete.png';
import customNextArrow from '/public/images/BannerAssetw.png';
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
        navigation={{
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next'
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 6000 }}
      >
        {sliderItems?.map((sliderItem, sliderItemIdx) => (
          <SwiperSlide key={`slider-${sliderItem.id}-${sliderItemIdx}`}>
            <HeaderImageSliderItem {...sliderItem} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrow elements */}
      <div className=" custom-swiper-button-prev">
        <img className="slider-img"src={customPrevArrow.src} alt="Prev" />
      </div>
      <div className=" custom-swiper-button-next">
        <img className="slider-img" src={customNextArrow.src} alt="Next" />
      </div>
    </div>
  );
};

export default HeaderSlider;
