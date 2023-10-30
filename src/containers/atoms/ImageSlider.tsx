import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper";
import Link from "next/link";

const ImageSliderItem = (props) => {
  const { title, description, image, permalink } = props;


  return (
    <div className="bg-image-height w-full relative">
      {image?.data?.attributes?.url && (
        <Image
          src={image?.data?.attributes?.url}
          alt={image?.data?.attributes?.name || ""}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={true}
        />
      )}
      {(title || description || permalink) && (
        <div className="landing-caption w-3/4 md:w-full p-3 md:p-6 left-10 md:left-20">
          <div className="bg-collective-image-url bg-right-bottom bg-no-repeat min-h-[155px]">
            <div className="text-2xl mb-3">{title}</div>
            <p className="text-base"> {description}</p>
            <div className="bg-image-url"></div>
            <div className="text-xl mt-10">
              <Link href={permalink} target="_blank">Read More</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ImageSlider = (props) => {
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
