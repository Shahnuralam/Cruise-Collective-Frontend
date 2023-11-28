import BgImage from "@/components/Shared/BgImage";
import FullScreenHeader from "@/components/FullScreenHeader";
import LandingImage from "@/components/LandingImage";
// import InspirationLandingPage from "@/components/LandingPage/InspirationLandingPage";
import PageHeading from "@/components/PageHeading";
import SocialShare from "@/components/SocialShare";
import FooterRightImage from "@/layout/Footer/FooterRightImage";
import React, { useEffect, useRef, useState } from "react";
import { FullScreenImageSlider, baseUrl } from "@/utils";
//import competition from "../competition";

import CruisesCard from "@/components/Card/CruisesCard";
import DarkCruiseCollectiveImg from "@/components/DarkCruiseCollectiveImg";
import StrokeLine from "@/components/StrokeLine";
import { getOffers } from "@/queries/offers";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useRouter } from "next/router";
import FilterOffers from "@/components/Shared/FilterOffers";

import Image from "next/image";
import Head from "next/head";
import Seo from "@/components/Seo";
const CruiseLineDetail = ({ cruiseLine }) => {
  const scrollIntoViewRef: any = useRef(null);
  const [cardData, setCardData] = useState<any>([]);
  const router = useRouter();
  const { slug } = router.query;
  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);

  const createdAt = new Date(cruiseLine.attributes?.createdAt);
  const options: any = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    createdAt
  );
  const sliders = cruiseLine?.attributes?.featured_image?.data?.length
    ? cruiseLine?.attributes?.featured_image?.data
    : [];
  const heading = cruiseLine?.attributes?.title;
  const date = formattedDate;
  const logo = cruiseLine?.attributes?.logo?.data?.attributes?.url;

  useEffect(() => {
    // card?.attributes?.cruise_line?.data?.some((item) => item?.id === Number(id))
    const filterData = cards?.filter(
      (card) => card?.attributes?.cruise_line?.data?.attributes?.slug === slug
    );
    setCardData(filterData);
  }, [slug, cards]);

  const setScrollIntoViewBody = () => {
    if (scrollIntoViewRef.current) {
      scrollIntoViewRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  if (isLoading) {
    return <p className="min-h-screen p-[75px]">Loading</p>;
  }

  return (
    <>
      {cruiseLine?.attributes?.seo && <Seo data={cruiseLine.attributes.seo} />}
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="bg-image-height w-full md:w-4/6 relative">
            {/* <BgImage bgImgUrl={bgImg} /> */}
            <FullScreenImageSlider sliderItems={sliders} />

            <div className="absolute top-0  z-40">
              {logo && (
                <Image
                  alt=""
                  width={150}
                  height={100}
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    width: "95%",
                  }}
                  src={logo}
                />
              )}
            </div>
            {/* 
            <div className="absolute top-0 p-5 z-40">
              {logo && <Image className="w-44 md:w-44 bg-transparent " src={logo} alt="" />}
            </div> */}
          </div>
          <div className="bg-cruise-texture p-3 md:p-7 lg:p-[75px] w-full md:w-2/6">
            <p className="max-w-[472px] text-[32px] text-black py-2 mt-4">
              {heading}
            </p>
            <div className=" Padding-Top">
              <StrokeLine />
            </div>

            <div className="   pb-8">
              <p
                className="  !text-lg	 pt-8"
                dangerouslySetInnerHTML={{
                  __html: cruiseLine?.attributes?.excerpt,
                }}
              ></p>
            </div>

            <div className="mt-6">
              <button
                onClick={setScrollIntoViewBody}
                className="border apercu_medium_pro  uppercase text-xs tracking-[3px] leading-4 border-[#FF9A31] py-3 px-8 hover:bg-[#FF9A31] "
              >
                View More
              </button>
            </div>
            <div className="flex justify-end">
              <DarkCruiseCollectiveImg />
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 md:p-[32px] lg:p-[75px]" ref={scrollIntoViewRef}>
        <div className="">
          <div className="text-3xl md:text-[32px] text-black">{heading}</div>
          <div className="py-5">
            <StrokeLine />
          </div>

          <p
            className="pt-1 max-w-4xl editor-page text-black "
            dangerouslySetInnerHTML={{
              __html: cruiseLine?.attributes?.description,
            }}
          ></p>
        </div>
        <div className="pt-[32px] lg:pt-[75px]">
          <FilterOffers
            finishedText="All offers loaded"
            offers={{ isLoading, cards: cardData, hasMore, fetchMoreData }}
            source="cruise_line"
          />
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;

  const res = await fetch(
    `${baseUrl}/api/cruise-lines?populate=deep&filters[slug][$eq]=${slug}`
  );
  const { data: cruiseLines } = await res.json();
  return {
    props: {
      cruiseLine: cruiseLines[0],
    },
  };
}
export default CruiseLineDetail;
