import { GetStaticProps, NextPage } from "next";
import LandingImage from "@/components/LandingImage";
import React from "react";
import dynamic from "next/dynamic";
import {
  GardenAttributeList,
  gardenAttributeListData,
  GardenImage,
  gardenRelatedContentData,
  RelatedContent,
} from "@/containers/garden";
import { Breadcrumb, Quote } from "@/containers/atoms";
import { getContent, getContents } from "@/queries";
import Head from "next/head";
import { partnerEstatesBreadCrumb } from "@/containers/ExperienceDetail";
import { ContentNormal } from "@/containers/ContentLanding";
import { mapFeatureSliderFromExclusiveContent } from "@/pages/cruise-line";

const ImageSlider = dynamic(() => import("@/containers/atoms/ImageSlider"), {
  ssr: false,
  loading: () => null,
});

const AllGardens = ({ gardens }) => {
  return (
    <main className="flex flex-col">
      <Head>
        <title>Partner Gardens</title>
      </Head>
      {/** Breadcrumb */}
      <div className="flex justify-center items-center py-4">
        <div className="container w-[90%] lg:w-full">
          <Breadcrumb items={partnerEstatesBreadCrumb} />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex flex-col container lg:max-w-[80%] xl:max-w-[80%] gap-6">
          <div className="flex justify-center items-center mx-auto text-white pt-20 pb-10">
            <div className="flex flex-col gap-5 lg:grid grid-cols-3">
              {gardens?.length > 0 &&
                gardens?.map((es) => (
                  <ContentNormal
                    featureSlider={es}
                    link={`partner-estates/${es.id}`}
                    elipsis={false}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: estate } = await getContents("estate");
  const gardens = mapFeatureSliderFromExclusiveContent(estate);
  return {
    props: { gardens },
    revalidate: 1,
  };
};

export default AllGardens;
