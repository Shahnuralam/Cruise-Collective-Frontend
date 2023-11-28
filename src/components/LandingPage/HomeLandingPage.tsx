import HomePageCruiseCard from "../Card/HomePageCruiseCard";

import CompetitionCard from "../Card/CompetitionCard";
import BgImage from "../Shared/BgImage";
import DarkCruiseCollectiveImg from "../DarkCruiseCollectiveImg";
import Continents from "../Shared/Continents";
import InspirationCard from "../Card/InspirationCard";
import { useQuery } from "react-query";
import PrimaryButton from "../PrimaryButton";
import { getHomePageData } from "@/queries";
import { ImageSlider } from "@/utils";
import TestimonialSlider from "@/containers/atoms/TestimonialSlider";

import Seo from "../Seo";

const HomeLandingPage = () => {
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
  const testimonial = data?.testimonial || [];

  // if(isLoading) {
  //   return <>Loading...</>
  // }

  return (
    <>
      {data?.seo && <Seo data={data.seo} />}
      
      <div className="hidden md:block">
        <ImageSlider sliderItems={sliders} />
      </div>

      <div className="py-[75px] md:py-[75PX] px-5">
        <section className="container mx-auto cruise-offers">
          <div className="apercu_medium_pro tracking-[2.4px] text-black text-xs text-center">
            OUR LATEST SELECTION OF EXCLUSIVE CRUISE PACKAGES
          </div>
          <div className="my-8 md:my-[80px] card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 md:gap-y-[75px]">
            {offers?.data?.map((cruise) => (
              <HomePageCruiseCard key={cruise.id} cruise={cruise} />
            ))}
          </div>
        </section>

        <section className="mt-4 quote">
          <TestimonialSlider testimonials={testimonial} />
        </section>

        <section className="pt-3 container mx-auto mt-6 md:mt-[75px] inspiration">
          <div className="apercu_medium_pro tracking-[2.4px] text-black text-xs text-center">
            OUR LATEST SELECTION OF CRUISE INSPIRATION
          </div>
          <div className="card-container my-8 md:my-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-4 gap-x-10 md:gap-x-[50px]">
            {insiprations?.data?.map((inspiration) => (
              <InspirationCard key={inspiration.id} inspiration={inspiration} />
            ))}
          </div>

          <div className="text-center my-12">
            <PrimaryButton href="/inspiration" btnText="Explore All" />
          </div>
        </section>

        <section className="mb-5 md:mb-[70px] pt-3 md:pt-[32px] lg:pt-[75px]">
          <div className="flex flex-col md:flex-row">
            <div className="bg-image-height  relative w-full md:w-4/6">
              {feature?.feature_image?.data?.attributes?.url && (
                <BgImage
                  bgImgUrl={feature?.feature_image?.data?.attributes?.url}
                />
              )}
            </div>
            <div className="bg-cruise-texture p-5 md:p-[50px] xl:p-[75px] md:w-2/6">
              <p className="max-w-[472px] text-[32px] text-black py-2 mt-4 ">
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

              <div className="pt-4 pb-8 ">
                <div
                  className="   editor-page  pt-8 max-w-[575px]"
                  dangerouslySetInnerHTML={{
                    __html: feature?.description,
                  }}
                ></div>
              </div>

              <div className="mt-12">
                <button className="border-[1.5px] text-xs tracking-[3px] leading-4  border-[#FF9A31] py-3 px-8 hover:bg-[#FF9A31] apercu_medium_pro">
                  VIEW MORE
                </button>
              </div>
              <div className="flex justify-end">
                <DarkCruiseCollectiveImg />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-[70px] container mx-auto">
          <div className="apercu_medium_pro tracking-[2.4px] text-black text-xs mt-14 md:mt-6 text-center ">
            FIND AN AMAZING CRUISE DEAL ANYWHERE IN THE WORLD
          </div>
          <div className="card-container mt-12 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 border-cruise border-t border-b">
            <Continents />
          </div>
        </section>

        <section className="container mx-auto">
          <div className="apercu_medium_pro tracking-[2.4px] text-black text-xs text-center ">
            OUR LATEST SELECTION OF PARTNER COMPETITIONS
          </div>
          <div className="card-container my-8 md:my-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-5 gap-x-10 md:gap-x-[75px]">
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
