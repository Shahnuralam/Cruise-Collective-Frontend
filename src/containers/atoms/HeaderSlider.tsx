import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {  Navigation } from "swiper";
import customPrevArrow from "/public/images/BannerAssete.png";
import customNextArrow from "/public/images/BannerAssetw.png";
import Link from "next/link";
import HeaderImageSliderItem from "./HeaderImageSliderItem";

const HeaderSlider = (props) => {
  const { sliderItems, calloutbox } = props;
  return (
    <div className="w-full h-full">
      {
        calloutbox && !!Object.keys(calloutbox)?.length && (
          <div className="callout-box z-50 w-3/4 lg:w-1/2 md:left-10 mx-sm:absolute max-sm:bottom-3 max-sm:left-12 max-sm:w-56 max-sm:h-auto ">
            <div className="md:p-4 p-3">
              <div
                className="bg-right-top bg-no-repeat relative min-h-auto md:min-h-[120px] md:bg-collective-img-url"
              >
                <div className="text-2xl md:line-clamp-3 mb-3">
                  {/* {calloutbox?.title} */}
                  Save on your next cruise
                </div>
                <p className="hidden md:block text-base line-clamp-3">
                  {/* {calloutbox?.description} */}
                  You can save thousands of pounds on your next cruise
                   adventure when you book through Cruise Collective
                </p>

              <div className="md:hidden absolute top-[6px] right-[6px]">
                <Image
                  src="/images/slider-bg-collective.svg"
                  alt="Logo"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
          <div className="bg-cruise text-[#9d4c08] px-4 py-6 text-sm md:text-base lg:text-2xl hover:underline">
            <Link href="/register">Join today and save an average of 10%</Link>
          </div>
        </div>
      )}

      <Swiper
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Navigation,]}

      >
        {sliderItems?.map((sliderItem, sliderItemIdx) => (
          <SwiperSlide key={`slider-${sliderItem.id}-${sliderItemIdx}`}>
            <HeaderImageSliderItem  {...sliderItem} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrow elements */}
      <div className=" custom-swiper-button-prev">
        <img className="slider-img" src={customPrevArrow.src} alt="Prev" />
      </div>
      <div className=" custom-swiper-button-next">
        <img className="slider-img" src={customNextArrow.src} alt="Next" />
      </div>
    </div>
  );
};

export default HeaderSlider;
