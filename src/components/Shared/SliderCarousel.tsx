import { useEffect, useState } from "react";
import { homePageSliderData } from "../Interface/CarouselDto";
import CarouselItem from "./CarouselItem";
import { IHomeCruiseData } from "../Interface/CruiseHomeDto";

const SliderCarousel = () => {
  const [sliderLength, setSliderLength] = useState<number>(
    homePageSliderData?.length
  );

  useEffect(() => {
    setSliderLength(homePageSliderData.length);
  }, []);

  return (
    <div className="carousel w-full py-10">
      {homePageSliderData?.length && homePageSliderData.map((slide, index) => (
     <CarouselItem
     key={slide.id}
     slide={slide}
     indexId={index + 1}
     prev={index === 0 ? `${sliderLength}` : `${index}`}
     next={index === sliderLength - 1 ? `${sliderLength - index}` : `${index + 2}`}
   ></CarouselItem>
   
      ))}
    </div>
  );
};

export default SliderCarousel;
