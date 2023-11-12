import FullScreenHeader from "@/components/FullScreenHeader";
import PageHeading from "@/components/PageHeading";
import React, { useRef, useState } from "react";
import { baseUrl } from "@/utils";
import styles from "../../styles/editor.module.css";
import CompetitionCard from "@/components/Card/CompetitionCard";

const CompetitionDetailPage = ({ competition, competitions }) => {
  const scrollIntoViewRef = useRef(null);

  const createdAt = new Date(competition?.attributes?.createdAt);

  const options: any = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options)?.format(
    createdAt
  );


  const fullScreenHeader = {
    sliders: competition?.attributes?.featured_image?.data,
    heading: competition?.attributes?.title,
    date: formattedDate,
    // text: "COMPETITION CLOSES ON: 05.10.2023",
    btnText: "ENTER BELOW",
    scrollIntoViewRef
  };

  const getRandomCompetitions = (count, currentCompetitionSlug) => {
    const shuffledCompetitions = [...competitions.data];
    // Filter out the current competition based on its slug
    const filteredCompetitions = shuffledCompetitions.filter(
      (item) => item?.attributes?.slug !== currentCompetitionSlug
    );
    for (let i = filteredCompetitions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCompetitions[i], filteredCompetitions[j]] = [
        filteredCompetitions[j],
        filteredCompetitions[i],
      ];
    }
    return filteredCompetitions.slice(0, count);
  };

  const relatedCompetitions = getRandomCompetitions(
    4,
    competitions?.attributes?.slug
  );

  return (
    <>
<section className="relative">
  <FullScreenHeader fullScreenHeader={fullScreenHeader}>
    <div className="absolute top-0 p-4 md:p-6 lg:p-8 xl:p-12 z-40">
      {competition?.attributes?.logo?.data?.attributes?.url && (
        <img
          src={competition?.attributes?.logo?.data?.attributes?.url}
          alt={competition?.attributes?.logo?.data?.attributes?.name}
          className="w-16 md:w-28 lg:w-36 xl:w-48"
        />
      )}
    </div>
  </FullScreenHeader>
</section>

  
    <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-16 xl:px-32">
      <div
        className={`${styles.editorContainer} page-details-container pt-3 md:pt-12`}
        dangerouslySetInnerHTML={{
          __html: competition?.attributes?.text_editor,
        }}
      ></div>
    </div>
  
    <section className="p-3 md:p-12">
      <PageHeading pageHeaderData={{ heading: "You may also like", text: "" }} />
      <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {relatedCompetitions.map((item) => (
          <CompetitionCard key={item.slug} competition={item} />
        ))}
      </div>
    </section>
  </>
  
  );
};
export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;

  // Fetch product data from API based on productId
  const res = await fetch(
    `${baseUrl}/api/competitions?populate=deep&filters[slug][$eq]=${slug}`
  );
  const { data: competition } = await res.json();

  const competitionRes = await fetch(
    `${baseUrl}/api/competitions?populate=deep`
  );
  const competitions = await competitionRes.json();

  return {
    props: {
      competition: competition[0],
      competitions,
    },
  };
}
export default CompetitionDetailPage;
