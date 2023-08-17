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
import TitleWithBorderY from "@/atoms/TitleWithBorderY";
import RoundedBtn from "@/atoms/RoundedBtn";
import { getContent, getContents } from "@/queries";
import Head from "next/head";
import { partnerEstatesBreadCrumb } from "@/containers/ExperienceDetail";
import { mapDynamicGallery } from "@/helpers/content";

const ImageSlider = dynamic(() => import("@/containers/atoms/ImageSlider"), {
  ssr: false,
  loading: () => null,
});

const EstateSingle = ({ estate }) => {
  const { attributes: data } = estate;

  const { estate_fields: field } = data;
  const rightImages = data.images.data.slice(1);

  return (
    <main className="flex flex-col">
      <Head>
        <title>{data.name}</title>
      </Head>
      {/** Breadcrumb */}
      <div className="flex justify-center items-center py-4">
        <div className="container w-[90%] lg:w-full">
          <Breadcrumb
            items={[
              ...partnerEstatesBreadCrumb,
              {
                uniqueKey: 3,
                title: data.name,
                href: "/partner-estates/" + data.id,
              },
            ]}
          />
        </div>
      </div>
      <LandingImage
        src={data.images.data[0].attributes.url}
        alt={data.name}
        caption={data.images.data[0].attributes.caption}
      />

      <div className="flex max-w-[90%] lg:max-w-full w-full container mx-auto my-10">
        <div className="flex flex-col gap-4 lg:gap-8 px-4 lg:px-0 lg:grid grid-cols-12 w-full">
          {/** Left */}
          <div className="flex flex-col gap-6 col-start-2 col-span-6">
            <TitleWithBorderY title={data.name} size="so-big" />

            <div className="flex flex-col gap-4 indent-10 text-lg leading-relaxed max-w-[90%] text-black text-opacity-90">
              <div
                className="indent-0"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            </div>

            <div className="w-fit">
              <RoundedBtn
                title="Visit website"
                href={field.booking_url}
                useLink
                variant="outline-dark-green"
              />
            </div>
          </div>

          {/** Right */}
          <div className="flex flex-col gap-4 col-span-4">
            {rightImages.map((image, i: number) => (
              <GardenImage image={image} key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex bg-[#c7d1a3] bg-opacity-[15%]">
        <div className="flex max-w-[90%] lg:max-w-full w-full container mx-auto my-10">
          <div className="flex flex-col gap-4 px-4 lg:px-0 md:grid md:grid-cols-8 lg:grid-cols-12 w-full">
            {/* col 1 */}
            <div className="flex flex-col gap-4 lg:col-start-2 col-span-3">
              <h3 className="text-2xl text-[#4f6355] font-medium">
                Opening times
              </h3>

              <div className="flex flex-col gap-2 max-w-[17.5rem] text-black text-opacity-90">
                <p>{field.opening_times}</p>
              </div>
            </div>

            {/* col 2 */}
            <div className="flex flex-col gap-4 col-span-4">
              <h3 className="text-2xl text-[#4f6355] font-medium">
                Plan your visit
              </h3>

              <div className="flex flex-col gap-4 max-w-[25rem] leading-relaxed text-black text-opacity-90">
                <p>{field.plan_visit}</p>

                <GardenAttributeList
                  items={gardenAttributeListData}
                  facilities={field.facilities}
                />
              </div>
            </div>

            {/* col 3 */}
            <div className="flex flex-col gap-4 col-span-3">
              <h3 className="text-2xl text-[#4f6355] font-medium">
                Getting here
              </h3>

              <div className="flex flex-col gap-2 max-w-[17.5rem] text-black text-opacity-90">
                <p>{field.getting_here}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-serif text-[2.75rem] text-center text-[#36453b] max-w-[90%] mx-auto mt-10 mb-3">
        {data.name} gallery
      </h1>
      {field.gallery.data.length > 0 && (
        <ImageSlider sliderItems={mapDynamicGallery(field.gallery.data)} />
      )}

      {field.quote && <Quote text={field.quote} source="" />}

      {/** not required for mvp */}
      {/* <RelatedContent articles={gardenRelatedContentData} /> */}
    </main>
  );
};

export async function getStaticPaths() {
  const { data } = await getContents("estate");

  const paths = data.map((item) => ({
    params: { slug: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: estate } = await getContent(ctx.params?.slug as string);

  return {
    props: { estate },
    revalidate: 1,
  };
};

export default EstateSingle;
