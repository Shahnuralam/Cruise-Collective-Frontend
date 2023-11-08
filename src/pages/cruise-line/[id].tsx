import BgImage from "@/components/Shared/BgImage";
import FullScreenHeader from "@/components/FullScreenHeader";
import LandingImage from "@/components/LandingImage";
// import InspirationLandingPage from "@/components/LandingPage/InspirationLandingPage";
import PageHeading from "@/components/PageHeading";
import SocialShare from "@/components/SocialShare";
import FooterRightImage from "@/layout/Footer/FooterRightImage";
import React, { useEffect, useState } from "react";
import { baseUrl } from "@/utils";
//import competition from "../competition";
import styles from "../../styles/editor.module.css";
import CruisesCard from "@/components/Card/CruisesCard";
import DarkCruiseCollectiveImg from "@/components/DarkCruiseCollectiveImg";
import StrokeLine from "@/components/StrokeLine";
import { getOffers } from "@/queries/offers";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useRouter } from "next/router";
import FilterOffers from "@/components/Shared/FilterOffers";

const CruiseLineDetail = ({ cruiselines }) => {
  const [scrollTop, setScrollTop] = useState<boolean>(false);
  const [cardData, setCardData] = useState<any>([]);
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);

  const createdAt = new Date(cruiselines?.data?.attributes?.createdAt);
  const options: any = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    createdAt
  );
  const bgImg =
    cruiselines?.data?.attributes?.featured_image.data?.attributes.url;
  const heading = cruiselines?.data?.attributes?.title;
  const date = formattedDate;
  const logo = cruiselines?.data?.attributes?.logo?.data?.attributes?.url;

  useEffect(() => {
    // card?.attributes?.cruise_line?.data?.some((item) => item?.id === Number(id))
    const filterData = cards?.filter(
      (card) => card?.attributes?.cruise_line?.data?.id === Number(id)
    );
    setCardData(filterData);
  }, [id, cards]);

  if (isLoading) {
    return <p className="min-h-screen p-[75px]">Loading</p>;
  }

  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="bg-image-height w-full md:w-4/6 relative">
            <BgImage bgImgUrl={bgImg} />
            <div className="absolute top-0 p-5">
              {logo && <img className="w-20 md:w-36" src={logo} alt="" />}
            </div>
          </div>
          <div className="bg-cruise-texture p-3 md:p-7 lg:p-[75px] w-full md:w-2/6">
            <p className="max-w-[472px] text-[32px] text-black py-2 mt-4">
              {heading}
            </p>
            <div className="py-5">
              <StrokeLine />
            </div>
            {/* <h4 className="text-[28px] text-black mt-5 mb-3">
              {date}
            </h4> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="210"
              height="3"
              viewBox="0 0 210 3"
              fill="none"
            >
              <path
                d="M0.671875 1.79736L209.084 1.79738"
                stroke="#FF9A31"
                strokeWidth="1.73"
                strokeMiterlimit="10"
              />
            </svg> */}
            <div className="pt-4 pb-8">
              <p className="text-xs pt-8">
                {cruiselines?.data?.attributes?.description}
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setScrollTop(true)}
                className="border ApercuProMedium  uppercase text-base border-[#FF9A31] py-3 px-8 hover:bg-[#FF9A31] hover:underline"
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

      <section className="p-3 md:p-[32px] lg:p-[75px]">
        <div className="page-details-container">
          <div className="text-3xl md:text-[32px] text-black">{heading}</div>
          <div className="py-5">
            <StrokeLine />
          </div>

          <p
            className="pt-1 max-w-4xl  text-black text-sm md:text-base"
            dangerouslySetInnerHTML={{
              __html: cruiselines?.data?.attributes?.excerpt,
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
  const id = params.id;

  const res = await fetch(`${baseUrl}/api/cruise-lines/${id}?populate=deep`);
  const cruiselines = await res.json();
  return {
    props: {
      cruiselines,
    },
  };
}
export default CruiseLineDetail;
