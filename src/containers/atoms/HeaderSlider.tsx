import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const HeaderImageSliderItem = (props) => {
  const { id, attributes } = props;

  return (
    <div className="bg-image-height w-full relative">
      {attributes?.url && (
        <Image
          src={attributes?.url}
          alt={attributes?.name || ""}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={true}
        />
      )}

      {/* <div className=" relative flex justify-center top-20">
        <div >
          {logo?.data?.attributes?.url && (
            <Image
              src={logo?.data?.attributes?.url}
              alt=""
              width={150}
              height={150}
            />
          )}
        </div>
      </div> */}

      {/* 
      {(title || description || permalink) && (
        <div className="landing-caption w-3/4 md:w-[400px] p-3 md:p-6 left-10 md:left-20">
          <div className="bg-collective-image-url bg-right-bottom bg-no-repeat min-h-[155px]">
            <div className="text-2xl line-clamp-1 mb-3">{title}</div>
            <p className="text-base line-clamp-3"> {description}</p>
            <div className="bg-image-url"></div>
            <div className="text-xl mt-10">
              <Link href={permalink} target="_blank">Read More</Link>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

const HeaderSlider = (props) => {
  const { sliderItems } = props;

  return (
    <div className="w-full">
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
      >
        {sliderItems?.map((sliderItem, sliderItemIdx) => (
          <SwiperSlide key={`header-slider-${sliderItem.id}-${sliderItemIdx}`}>
            <HeaderImageSliderItem {...sliderItem} />
          </SwiperSlide>
        ))}
              {/* Custom arrow icons for navigation */}
      <div className="swiper-button-prev">
       {/* <p className="z-50 text-white">Ashraf Prev</p> */}
      </div>
      <div className="swiper-button-next">
      {/* <p className="z-50 text-white">Ashraf Newxt</p> */}
      </div>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
