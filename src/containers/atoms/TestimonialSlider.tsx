import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import Image from "next/image";
import "swiper/css/bundle";
// Import your custom arrow images as regular images
import customPrevArrow from "/public/images/BannerAssete.png";
import customNextArrow from "/public/images/BannerAssetw.png";

import { Quote, IQuote } from "./Quote"; // Make sure to adjust the path

interface TestimonialSliderProps {
  testimonials: IQuote[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  // Initialize the variables here
  const customNextArrowImage = (
    <div className="custom-swiper-button-next">
      <Image
        src={customNextArrow}
        alt="Next Arrow"
        width={50}
        height={50}
        className="custom-arrow-image"
      />
    </div>
  );

  const customPrevArrowImage = (
    <div className="custom-swiper-button-prev">
      <Image
        src={customPrevArrow}
        alt="Prev Arrow"
        width={50}
        height={50}
        className="custom-arrow-image"
      />
    </div>
  );

  return (
    <Swiper
      navigation={{
        prevEl: ".custom-swiper-button-prev",
        nextEl: ".custom-swiper-button-next",
      }}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 6000 }}
    >
      {testimonials.map((testimonial: any) => (
        <SwiperSlide key={testimonial.id}>
          <Quote
            text={testimonial?.description.replace(/<\/?p>/gi, "")}
            source={testimonial?.author.replace(/<\/?p>/gi, "")}
          />
        </SwiperSlide>
      ))}
      {/* Add custom arrow components directly inside the Swiper component */}
      {customNextArrowImage}
      {customPrevArrowImage}
    </Swiper>
  );
};

export default TestimonialSlider;
