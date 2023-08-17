import React from "react";
import { Breadcrumb } from "@/containers/atoms";
import {
  AboutTheExpertSection,
  BookNowSection,
  experienceDetailBreadcrumb,
} from "@/containers/ExperienceDetail";
import Image from "next/image";
import { MasterOptions } from "@/layout/Master";
import { getContent, getContents } from "@/queries";
import { GetStaticProps } from "next";
import { IExperiencePreviewItem } from "@/containers/Experience";
import Head from "next/head";

export default function ExperienceDetailPage({
  experience,
}: {
  experience: IExperiencePreviewItem;
}) {
  // if (!experience) return <div>Failed to load experience</div>;
  const { attributes: data } = experience;

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
              ...experienceDetailBreadcrumb,
              {
                uniqueKey: 3,
                title: data.name,
                href: "/experiences/" + data.id,
              },
            ]}
          />
        </div>
      </div>

      {/***/}
      <div className="flex justify-center items-center bg-[#36453b] py-10">
        <div className="container w-[90%] lg:w-full">
          <div className="text-white flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-12">
            {/** Left */}
            <div className="flex flex-col gap-6 col-start-2 col-span-5">
              {/***/}
              <div className="flex flex-col border-b border-y-white font-serif text-white gap-2">
                {/** Date */}
                <h4 className=" border-y border-y-white text-xl py-2">
                  {data?.experience_fields?.experience_period}
                </h4>

                {/** title */}
                <h2 className="text-[2rem]">{data.name}</h2>
              </div>

              {/***/}
              <div
                className="text-white leading-relaxed text-opacity-90"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            </div>

            {/** Right*/}
            <div className="flex col-start-8 col-span-4">
              <div className="relative w-[17.5rem] h-[18.75rem] lg:w-[20.5rem] lg:h-[21.75rem] xl:w-[22.5rem] xl:h-[23.75rem] bg-[#d1d1d1]">
                {data.images.data && (
                  <Image
                    src={data.images.data[0].attributes.url}
                    alt={data.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                )}
                {data.images.data[0].attributes.caption && (
                  <p className="landing-caption">
                    {data.images.data[0].attributes.caption}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AboutTheExpertSection /> */}

      <BookNowSection data={data} />
    </main>
  );
}

// Get static paths
export async function getStaticPaths() {
  const { data } = await getContents("experience");

  const paths = data.map((item) => ({
    params: { slug: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getContent(ctx.params?.slug as string);

  return {
    props: { experience: data },
    revalidate: 1,
  };
};

ExperienceDetailPage.masterOptions = {
  footer: {
    socialBarIsWhite: true,
  },
} as MasterOptions;
