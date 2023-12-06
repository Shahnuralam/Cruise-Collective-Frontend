import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/bundle";

// Import your custom arrow images as regular images
import customPrevArrow from "/public/images/BannerAssete.png";
import customNextArrow from "/public/images/BannerAssetw.png";
import clsx from "clsx";
import useIsMobile from "@/hooks/useIsMobile";

const ImageSliderItem = (props) => {
  const { title, description, image, video, permalink } = props;
  const isMobile = useIsMobile();



  const renderMedia = () => {
    if (image?.data?.attributes?.url) {
      return (
        <Image
          src={image?.data?.attributes?.url}
          alt={image?.data?.attributes?.name || ""}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={true}
        />
      );
    } else if (video?.url) {
      return (
        <iframe
          className="video-iframe"
          src={video?.url}
          frameBorder="0"
          allow="autoplay; fullscreen; muted"
          allowFullScreen
        ></iframe>
      );
    }

    return null;
  };

  return (
    <div className="bg-image-height-home w-full relative">
      {renderMedia()}

     

      {(title || description || permalink) && !video?.url && (
        <div className="landing-caption w-full md:w-1/4 p-3 md:p-4 left-10 mx-sm:absolute max-sm:bottom-3 max-sm:left-6 max-sm:w-64 max-sm:h-32 ">
          <div
            className={clsx("bg-right-bottom bg-no-repeat min-h-[155px] ", {
              "bg-collective-image-url": !isMobile,
            })}
          >
            <div className="text-2xl md:line-clamp-3 line-clamp-1 mb-3">
              {title}
            </div>

            <p className="hidden md:block text-base line-clamp-3">
              {description}
            </p>

            <div className="text-xl hover:text-cruise mt-10">
              <Link href={permalink} target="_blank">
                Read More
              </Link>
            </div>

            <div className=" md:hidden absolute bottom-[6px] right-[6px]">
              <Image
                src="/images/slider-bg-collective.svg"
                alt="Logo"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      )}
      
    </div>

    
  );
};

const ImageSlider = (props) => {
  const { sliderItems ,video} = props;

  return (
    <div className="w-full">
       {video?.url ? null : (
       <div className="hidden md:flex fixed-logo">
       <div>
         <Image
           src="/images/Banner_Asset_cc.png" // Replace with the actual path to your static image
           alt="Logo"
           width={230}
           height={230}
         />
       </div>
     </div>
     
  
      )}

      <Swiper
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Navigation]}
      >
        {sliderItems?.map((sliderItem, sliderItemIdx) => (
          <SwiperSlide key={`slider-${sliderItem.id}-${sliderItemIdx}`}>
            <ImageSliderItem {...sliderItem} />
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
export default ImageSlider;
