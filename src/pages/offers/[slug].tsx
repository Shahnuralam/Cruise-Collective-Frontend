import React from "react";
import LandingImage from "@/components/LandingImage";
import Link from "next/link";
import {
  competitionBreadcrumbItems,
  competitionCourseData,
  CompetitionCourseList,
  Question,
} from "@/containers/Competition";
import TitleWithBorderY from "@/atoms/TitleWithBorderY";
import AlsoLikeItem from "@/containers/Landing/AlsoLikeItem";
import { Breadcrumb } from "@/containers/atoms";
import { GetStaticProps } from "next";
import { getContent, getContents } from "@/queries";
import Head from "next/head";
import RoundedBtn from "@/atoms/RoundedBtn";
import { replaceUrlWithLink } from "@/utils";

const CompetitionPage = ({ offer }) => {
  const { attributes: data } = offer;
  const { offer_fields: field } = data;

  const landingImage = data?.images?.data[0].attributes?.url;

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
                ...competitionBreadcrumbItems,
                {
                  uniqueKey: 3,
                  title: data.name,
                  href: "/offers/" + data.id,
                },
              ]}
            />
            {/** Big Title and Desc*/}
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-[#36453b] text-[2.75rem] leading-tight">
                {data.name}
              </h2>
              <div
                className="text-lg text-black text-opacity-90 max-w-screen-md"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            </div>
          </div>

          {/** */}
          <div className="flex flex-col xl:grid xl:grid-cols-12 gap-6 lg:gap-10">
            {/** Left / Content Area */}
            <div className="flex flex-col gap-4 col-span-7 lg:w-[27.5rem] xl:w-[40.5rem]">
              {/* <TitleWithBorderY
                title="Three current courses to book"
                fontWeight="medium"
              /> */}

              {/* <CompetitionCourseList items={competitionCourseData} /> */}

              <div className="flex flex-col gap-5 py-4">
                <p>{field.offer_description}</p>

                {/* <div className="flex flex-col gap-3">
                  <Question
                    question="Often called England’s greatest gardener, what is Capability Brown’s given first name?"
                    answers={[
                      {
                        value: "gawain",
                        label: "Gawain",
                      },
                      {
                        value: "lancelot",
                        label: "Lancelot",
                      },
                      {
                        value: "galahad",
                        label: "Galahad",
                      },
                    ]}
                  />

                  <p>
                    Click{" "}
                    <Link href="/terms" className="text-[#607b53] underline">
                      here
                    </Link>{" "}
                    for the full terms and conditions
                  </p>
                </div> */}
              </div>
              <div className="w-1/2">
                <RoundedBtn
                  href={field.button_url || "#"}
                  useLink
                  title={field.button_text}
                  variant="outline-dark-green-bg-white"
                />
              </div>

              {field?.terms_description && (
                <div
                  className="gap-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      `<p>TERMS AND CONDITIONS</br>` +
                      replaceUrlWithLink(field.terms_description) +
                      `</p>`,
                  }}
                />
              )}
            </div>

            {/** Right / Sidebar */}
            {/* <div className="col-span-5">
              <TitleWithBorderY title="You may also like" size="small" />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-12 py-4">
                <AlsoLikeItem />
                <AlsoLikeItem />
                <AlsoLikeItem />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  const { data } = await getContents("offer");

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
    props: { offer: data },
    revalidate: 1,
  };
};

export default CompetitionPage;
