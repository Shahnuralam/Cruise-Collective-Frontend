import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const ImageSliderItem = (props) => {
  console.log('p', props?.logo?.data?.attributes?.url);
  const { title, logo, description, image, permalink } = props;


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

      <div className=" relative flex justify-center top-20">
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
      </div>




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
      )}
    </div>
  );
};

const ImageSlider = (props) => {
  const { sliderItems } = props;

  return (
    <div className="w-full">
      <Swiper navigation={false} modules={[Navigation,Autoplay]} autoplay={{ delay: 10000 }}>
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
