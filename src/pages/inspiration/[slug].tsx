import FullScreenHeader from "@/components/FullScreenHeader";
import PageHeading from "@/components/PageHeading";
import { baseUrl } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/editor.module.css";
import InspirationCard from "@/components/Card/InspirationCard";

const InspirationDetails = ({ inspiration, allInspirations }) => {
  const scrollIntoViewRef = useRef(null);
  const router = useRouter();
  const { slug } = router.query;

  const createdAt = new Date(inspiration?.attributes?.createdAt);

  const options: any = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    createdAt
  );

  const fullScreenHeader = {
    sliders: inspiration?.attributes?.featured_image?.data || [],
    heading: inspiration?.attributes?.title,
    date: formattedDate, // Use the formatted date
    // country: "ADVENTURE CRUISE, EUROPE",
    btnText: "VIEW MORE",
    scrollIntoViewRef,
  };

  const getRandomInspirations = (count, currentInspirationSlug) => {
    const shuffledInspirations = [...allInspirations.data];
    // Filter out the current insipration based on its ID
    const filteredInspirations = shuffledInspirations.filter(
      (item) => item?.attributes?.slug !== currentInspirationSlug
    );
    for (let i = filteredInspirations.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredInspirations[i], filteredInspirations[j]] = [
        filteredInspirations[j],
        filteredInspirations[i],
      ];
    }
    return filteredInspirations.slice(0, count);
  };

  const relatedInspirations = getRandomInspirations(
    4,
    inspiration?.attributes?.slug
  ); // Pass the current insipration ID

  return (
    <>
      <section>
        <FullScreenHeader
          fullScreenHeader={fullScreenHeader}
        >
          {" "}
        </FullScreenHeader>
      </section>
      <div className="px-5" ref={scrollIntoViewRef}>
        <div
          className={`${styles.editorContainer} page-details-container mx-auto pt-3 md:pt-[75px]`}
          dangerouslySetInnerHTML={{
            __html: inspiration?.attributes?.text_editor,
          }}
        ></div>
      </div>

      <section className="mx-auto p-12">
        <PageHeading
          pageHeaderData={{ heading: "You may also like", text: "" }}
        />
        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relatedInspirations.map((item) => (
            <InspirationCard key={item.id} inspiration={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context: { params: any }) {
  const { params } = context;
  const slug = params.slug;

  const res = await fetch(
    `${baseUrl}/api/insiprations?populate=deep&filters[slug][$eq]=${slug}`
  );
  const { data: insipration } = await res.json();

  const inspirationsRes = await fetch(
    `${baseUrl}/api/insiprations?populate=deep`
  );
  const allInspirations = await inspirationsRes.json();

  return {
    props: {
      inspiration: insipration[0],
      allInspirations,
    },
  };
}

export default InspirationDetails;
