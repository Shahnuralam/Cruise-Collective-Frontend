import { useState } from "react";
import { homeCruiseData } from "../Interface/CruiseHomeDto";
import HomePageCruiseCard from "../Card/HomePageCruiseCard";
import { Quote } from "@/containers/atoms";
import Link from "next/link";
import {
  ICompetitionDto,
  competitionCruiseData,
} from "../Interface/CompitionDto";
import CompetitionCard from "../Card/CompetitionCard";
import ContinentCard from "../Card/ContinentCard";
import BgImage from "../Shared/BgImage";
import DarkCruiseCollectiveImg from "../DarkCruiseCollectiveImg";
import Continents from "../Shared/Continents";
import InspirationCard from "../Card/InspirationCard";
import { useQuery } from "react-query";
import { getInspirations } from "@/queries/inspiration";
import PrimaryButton from "../PrimaryButton";
import {
  InspirationLandingData,
  inspirationData,
} from "../Interface/InspirationDataDto";
import { getHomePageData } from "@/queries";
import CruisesCard from "../Card/CruisesCard";
import { ImageSlider } from "@/utils";
const HomeLandingPage = () => {
  const [competitionCards, setCompetitionCards] = useState<ICompetitionDto[]>(
    competitionCruiseData.slice(0, 3)
  );

  const { isLoading, data, refetch } = useQuery(
    "homepage",
    () => getHomePageData(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );


  // Check if data is defined before accessing its properties
  const competitions = data?.competitions || [];
  const feature = data?.feature || null;
  const insiprations = data?.insiprations || [];
  const offers = data?.offers || [];
  const sliders = data?.sliders || [];

  // if(isLoading) {
  //   return <>Loading...</>
  // }
  return (
    <>
      <div className="hidden md:block">
      <ImageSlider sliderItems={sliders} />
      </div>

      <div className="py-7 md:py-[75PX]">
        <section>
          <div className="lg:px-5 xl:px-0 container mx-auto">
            <div className="apercu_medium_pro tracking-wider text-black text-[22px] text-center">
              OUR LATEST SELECTION OF EXCLUSIVE CRUISE PACKAGES
            </div>
            <div className="px-6 md:px-0 my-8 md:my-[80px] card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 md:gap-y-[75px]">
              {offers?.data?.map((cruise) => (
                <HomePageCruiseCard key={cruise.id} cruise={cruise} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-4 ">
          <Quote
            text="Not a deals hub or a travel agent, but a place for people who love the adventure of Cruising to find everything they need to prepare for their next voyage and more. Find adventure, luxury and exclusive savings with Cruise Collective..."
            id="1"
            source="CRUISE TESTIMONIAL"
          />
        </section>

        <section className="pt-3 lg:px-5 xl:px-0 container mx-auto mt-6 md:mt-[75px]">
          <div className="apercu_medium_pro tracking-wider text-black text-[22px] text-center ">
            OUR LATEST SELECTION OF CRUISE INSPIRATION
          </div>
          <div className="card-container px-6 md:px-0 my-8 md:my-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-4 md:gap-x-[50px]">
            {insiprations?.data?.map((inspiration) => (
              <InspirationCard
                height="300px"
                key={inspiration.id}
                inspiration={inspiration}
              />
            ))}
          </div>

          <div className="text-center my-12">
            <PrimaryButton href="/inspiration" btnText="Explore All" />
          </div>
        </section>

        <section className="mb-5 md:mb-[70px] pt-3 md:pt-[32px] lg:pt-[75px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-image-height  relative">
              {feature?.feature_image?.data?.attributes?.url && (
                <BgImage
                  bgImgUrl={feature?.feature_image?.data?.attributes?.url}
                />
              )}
            </div>
            <div className="bg-cruise-texture p-5 md:p-[50px] xl:p-[75px]">
              <p className="max-w-[472px] text-lg text-black py-2 mt-4 apercu_regular_pro">
                {feature?.title}
              </p>

              <svg
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
              </svg>
              <div className="pt-4 pb-8">
                <p className=" text-3xl md:text-5xl pt-8 max-w-[575px]">
                  {feature?.description}
                </p>
              </div>

              <div className="mt-12">
                <button className="border text-lg border-[#FF9A31] py-3 px-8 hover:bg-[#FF9A31] hover:underline apercu_regular_pro">
                  VIEW MORE
                </button>
              </div>
              <div className="flex justify-end">
                <DarkCruiseCollectiveImg />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 md:mb-[70px] container mx-auto">
          <div className="apercu_medium_pro tracking-wider text-black text-[22px] mt-6 text-center ">
            FIND AN AMAZING CRUISE DEAL ANYWHERE IN THE WORLD
          </div>
          <div className="card-container mt-12 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 border-cruise border-t border-b">
            <Continents />
          </div>
        </section>

        <section className="p-3 container mx-auto">
          <div className="apercu_medium_pro tracking-wider text-black text-[22px] text-center ">
            OUR LATEST SELECTION OF PARTNER COMPETITIONS
          </div>
          <div className="card-container my-8 md:my-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-5 md:gap-x-[75px]">
            {competitions?.data?.map((competition) => (
              <CompetitionCard key={competition.id} competition={competition} />
            ))}
          </div>

          <div className="text-center">
            <PrimaryButton href="/competition" btnText="Explore All" />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeLandingPage;
