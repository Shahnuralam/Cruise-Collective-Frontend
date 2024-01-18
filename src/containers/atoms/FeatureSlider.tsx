import { shortenDescription } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export interface IFeatureSliderItem {
  id: string | number;
  name: string;
  description: string;
  images: any;
  content_type: string;
  featuredContent?: any;
  featured?: boolean;
  featureSlider?: any;
  link?: string;
  estate_fields?: any;
  offer_fields?: any;
}

const urlPath = {
  offer: "/offers",
  estate: "/partner-estates",
  content: "/discover",
};

const FeatureSliderItem: React.FC<IFeatureSliderItem> = (props) => {
  const {
    images,
    name,
    description,
    id,
    content_type,
    estate_fields,
  } = props;

  const contentFieldMapping = {
    estate: estate_fields?.excerpt,
    content: null,
    offer: shortenDescription(description),
  };

  return (
    <div className="flex justify-center items-center pb-14">
      <Link href={`${urlPath[content_type]}/${id}`}>
        <div className="flex flex-col items-center justify-center lg:justify-start lg:flex-row gap-8 max-w-[90%] lg:max-w-full">
          {/***/}
          <div className="block relative w-[15.625rem] h-[16rem] lg:w-[23.125rem] lg:h-[23.531rem]">
            <Image
              src={images.data[0]?.attributes?.url || ""}
              alt={name}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="bg-[#eaeaea]"
            />
          </div>
          {/***/}
          <div className="flex h-full flex-1 flex-col justify-center gap-6">
            <div className="flex flex-col gap-4">
              <h4
                className="text-2xl text-[#36453b] whitespace-normal overflow-hidden w-64"
                dangerouslySetInnerHTML={{ __html: name }}
              />

              <p
                className="max-w-[17.5rem] text-black text-opacity-90 leading-tight"
                // dangerouslySetInnerHTML={{ __html: description }}
              >
                {contentFieldMapping[content_type]}
              </p>
            </div>

            <div className="w-fit">
              {/* <RoundedBtn useLink href={actionBtn?.href} title={actionBtn?.title || 'View offer'} /> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export interface IFeatureSlider {
  sliderItems: IFeatureSliderItem[];
  title?: string;
}

const FeatureSlider: React.FC<IFeatureSlider> = (props) => {
  const { sliderItems, title } = props;

  return (
    <div
      className={clsx(
        "flex justify-center items-center w-full bg-[#c7d1a3] bg-opacity-[15%] pb-10",
        {
          "pt-12": !title,
          "pt-10": !!title,
        }
      )}
    >
      <div className="container flex flex-col gap-6 justify-center items-center">
        {title && (
          <h4 className="text-center text-4xl font-serif text-[#36453b]">
            {title}
          </h4>
        )}

        <div className="w-full">
          <Swiper
            slidesPerGroup={1}
            navigation={true}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
          >
            {sliderItems?.map((sliderItem, sliderItemIdx) => (
              <SwiperSlide key={`slider-${sliderItem.id}-${sliderItemIdx}`}>
                <FeatureSliderItem {...sliderItem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;
