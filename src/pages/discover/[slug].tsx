// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from "react";
import { GetStaticProps } from "next";
import { getContent, getContents } from "@/queries";
import Head from "next/head";
import { IContent } from "@/queries/content/content";
import LandingImage from "@/components/LandingImage";
import { Breadcrumb } from "@/containers/atoms";
import { discoverBreadCrumb } from "@/containers/ExperienceDetail";
import ReplaceGalleryTax from "@/components/ReplaceGalleryTag";

const DiscoverPage = ({ discover }: IContent) => {
  const { attributes: data } = discover;

  const landingImage = data?.images?.data?.[0].attributes?.url;

  const { discover_fields: field } = data;

  const description = data?.description;

  return (
    <main className="flex flex-col">
      <Head>
        <title>{data.name}</title>
      </Head>
      {landingImage && <LandingImage src={landingImage} alt={data.name} />}

      <div className="flex justify-center items-center">
        <div className="flex flex-col container max-w-[90%] lg:max-w-[80%] w-full py-4 gap-4">
          <div className="flex flex-col gap-4 xl:max-w-[90%]">
            <Breadcrumb
              items={[
                ...discoverBreadCrumb,
                {
                  uniqueKey: 3,
                  title: data.name,
                  href: "/discover/" + data.id,
                },
              ]}
            />

            {/** Big Title and Desc*/}
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-[#36453b] text-[2.75rem] leading-tight">
                {data.name}
              </h2>
              <div className="text-lg text-black text-opacity-90 max-w-screen-md">
                {ReplaceGalleryTax(description, field?.gallery?.data)}
              </div>
            </div>
          </div>

          {/** */}
          <div className="flex flex-col xl:grid xl:grid-cols-12 gap-6 lg:gap-10">
            {/** Left / Content Area */}
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  const { data } = await getContents("content");

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
    props: { discover: data },
    revalidate: 1,
  };
};

export default DiscoverPage;
