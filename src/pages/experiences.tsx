import React from "react";
import LandingImage from "@/components/LandingImage";
import LandingMoreIcon from "@/assets/svg/landing-more-icon.svg";
import Link from "next/link";
import { Quote } from "@/containers/atoms";
import {
  experienceItems,
  ExperiencePreviewList,
  IExperiencePreviewListProps,
  WatchAGardensIllustratedMasterclass,
  watchAGardensIllustratedMasterclassData,
} from "@/containers/Experience";
import { MasterOptions } from "@/layout/Master";
import { useQuery } from "react-query";
import { getExperiences } from "@/queries";
import Head from "next/head";
import { Loading } from "@/components/Loading";

export default function ExperiencePage() {
  const { isLoading, error, data } = useQuery<any>(
    "experiences",
    getExperiences
  );

  if (isLoading) return <Loading />;

  if (error) return <div>Failed to load experiences</div>;

  return (
    <main className="flex flex-col">
      <Head>
        <title>Experiences</title>
      </Head>
      <LandingImage src="/images/landing-2.jpg" alt="Landing Image 2">
        <Link
          href="#exp-start"
          scroll={false}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-bold"
          type="button"
        >
          <LandingMoreIcon
            viewBox="0 0 60 60"
            className="w-[3.375rem] h-[3.375rem] lg:w-[4.375rem] lg:h-[4.375rem]"
          />
        </Link>
      </LandingImage>

      <Quote
        text="The glory of gardening: hands in the dirt, head in the sun, heart with nature. To nurture a garden is to feed not just the body, but the soul."
        source="English poet, Alfred Austin (1835 – 1913)"
        id="exp-start"
      />

      <div className="flex w-full justify-center py-10">
        <div className="flex flex-col container lg:max-w-[70%] xl:max-w-[60%] gap-6">
          <h3 className="text-center text-[2.75rem] text-[#36453b] font-serif">
            Your latest exclusive experiences
          </h3>

          {/***/}
          {!isLoading && data?.data?.length === 0 && (
            <div className="text-center">
              There are no exclusive experiences
            </div>
          )}
          <div className="flex flex-col gap-[3.75rem]">
            {!isLoading && <ExperiencePreviewList items={data.data} />}
          </div>
        </div>
      </div>

      {/* <WatchAGardensIllustratedMasterclass
        articles={watchAGardensIllustratedMasterclassData}
      /> */}
    </main>
  );
}

ExperiencePage.masterOptions = {
  footer: {
    socialBarIsWhite: true,
  },
} as MasterOptions;
