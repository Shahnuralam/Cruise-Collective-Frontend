import { useState } from "react";
import { homeCruiseData } from "../Interface/CruiseHomeDto";
import HomePageCruiseCard from "../Card/HomePageCruiseCard";
import { Quote } from "@/containers/atoms";
import InspirationLandingPage from "./InspirationLandingPage";
import Link from "next/link";
import {
  ICompetitionDto,
  competitionCruiseData,
} from "../Interface/CompitionDto";
import CompetitionCard from "../Card/CompetitionCard";
import { destinationPageData } from "../Interface/DestinationLandingDto";
import ContinentCard from "../Card/ContinentCard";
import BgImage from "../Shared/BgImage";
import DarkCruiseCollectiveImg from "../DarkCruiseCollectiveImg";
import Continents from "../Shared/Continents";

const HomeLandingPage = () => {
  const [competitionCards, setCompetitionCards] = useState<ICompetitionDto[]>(
    competitionCruiseData.slice(0, 4)
  );

  return (
    <div className="py-12">
      <div className="p-3 container mx-auto">
        <div className="apercu_regular_pro text-black text-2xl pb-6 text-center ">
          OUR LATEST SELECTION OF EXCLUSIVE CRUISE PACKAGES
        </div>
        <div className="card-container my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 md:gap-y-14">
          {homeCruiseData.map((cruiseElement) => (
            <HomePageCruiseCard key={cruiseElement.id} cruise={cruiseElement} />
          ))}
        </div>
      </div>

      <section className="mt-4">
        <Quote
          text="Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed diam nonummy nibh euismod dolore magna."
          id="1"
          source="CRUISE TESTIMONIAL"
        />
      </section>

      <section className="p-3 md:p-[32px] lg:p-[75px]">
        <div className="apercu_regular_pro text-black text-2xl pb-6 text-center ">
          OUR LATEST SELECTION OF CRUISE INSPIRATION
        </div>
        <InspirationLandingPage isInfiniteDataLoading={false} />

        <div className="text-center my-12">
          <Link href={`/inspiration`}>
            <button className="bg-cruise w-48 h-12 text-white rounded text-xl apercu_medium uppercase">
              Explore All
            </button>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-image-height  relative">
            <BgImage bgImgUrl="/dummy/competition/Rectangle (16).png" />
          </div>
          <div className="inspiration-bg p-3 md:p-7 lg:p-[75px]">
            <p className="max-w-[472px] text-lg text-black py-2 mt-4">
              LOREM IPSUM MAGNA
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
              <p className="text-2xl pt-8">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod dolore magna.{" "}
              </p>
            </div>

            <div className="mt-6">
              <button className="border text-lg border-[#FF9A31] py-3 px-8">
                VIEW MORE
              </button>
            </div>
            <div className="flex justify-end">
              <DarkCruiseCollectiveImg />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12 container mx-auto">
        <div className="apercu_regular_pro text-black text-2xl pb-6 text-center ">
          FIND AN AMAZING CRUISE DEAL ANYWHERE IN THE WORLD
        </div>
        <div className="card-container my-10 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 border-cruise border-t border-b">
          <Continents />
        </div>
      </section>

      <section className="p-3 container mx-auto">
        <div className="apercu_regular_pro text-black text-2xl pb-6 text-center ">
          OUR LATEST SELECTION OF PARTNER COMPETITIONS
        </div>
        <div className="card-container my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {competitionCards.map((cruiseElement) => (
            <CompetitionCard key={cruiseElement.id} cruise={cruiseElement} />
          ))}
        </div>

        <div className="text-center my-12">
          <Link href={`/competition`}>
            <button className="bg-cruise w-48 h-12 text-white rounded text-xl apercu_medium uppercase">
              Explore All
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeLandingPage;
