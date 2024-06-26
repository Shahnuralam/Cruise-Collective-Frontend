import InspirationImageSlider from "@/components/InspirationSlider";
import PageHeading from "@/components/PageHeading";
import {  baseUrl } from "@/utils";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import InspirationCard from "@/components/Card/InspirationCard";
import styles from "../../styles/inspiration.module.css";
import Seo from "@/components/Seo";
import ReplaceGalleryTag from "@/components/ReplaceGalleryTag";


const InspirationDetails = ({ inspiration, allInspirations }) => {

 
  const scrollIntoViewRef = useRef(null);
  const { data: session } = useSession();

  const createdAt = new Date(inspiration?.attributes?.createdAt);

  const options: any = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    createdAt
  );
  const uppercaseFormattedDate = formattedDate.toUpperCase();

  const InspirationSlider = {
    sliders: inspiration?.attributes?.featured_image?.data || [],
    heading: inspiration?.attributes?.title,
    date: uppercaseFormattedDate, // Use the uppercase formatted date here
    btnText: "VIEW MORE",
    scrollIntoViewRef,
  };

  const getRandomInspirations = (
    count,
    currentInspirationSlug,
    allInspirations
  ) => {
    const shuffledInspirations = [...allInspirations];

    // Filter out the current inspiration based on its slug
    const filteredInspirations = shuffledInspirations.filter(
      (item) => item?.attributes?.slug !== currentInspirationSlug
    );

    // Shuffle the filtered inspirations
    for (let i = filteredInspirations.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredInspirations[i], filteredInspirations[j]] = [
        filteredInspirations[j],
        filteredInspirations[i],
      ];
    }

    // Return the sliced array of inspirations
    return filteredInspirations.slice(0, count);
  };

  // Usage in your component
  const relatedInspirations = getRandomInspirations(
    4,
    inspiration?.attributes?.slug,
    allInspirations.data
  );

  
  return (
    <>
      {inspiration?.attributes?.seo && (
        <Seo data={inspiration.attributes.seo} />
      )}
      <section>
        <InspirationImageSlider InspirationSlider={InspirationSlider}>
          {" "}
        </InspirationImageSlider>
      </section>
      <div className="px-5" ref={scrollIntoViewRef}>
        <div
          className={`${styles.inspirationContainer} insPage-details-container mx-auto pt-3 md:pt-[75px]`}
          >
           {ReplaceGalleryTag(inspiration?.attributes?.description.replace(
              "<iframe",
              `<iframe class="${session?.user?.email ? "" : "hidden"}"`
            ), inspiration?.attributes?.gallery?.data)}
        </div>
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

export async function getServerSideProps(context) {
  const { params, query } = context;
  const slug = params.slug;
  const isPreview = query?.preview

  const apiUrl =  `${baseUrl}/api/insiprations?populate=deep&filters[slug][$eq]=${slug}${isPreview ? '&publicationState=preview' : ''}`
  const res = await fetch(apiUrl);

  const { data: insipration } = await res.json();

  const inspirationsRes = await fetch(`${baseUrl}/api/insiprations?populate=deep`);
  const allInspirations = await inspirationsRes.json();

  return {
    props: {
      inspiration: insipration[0],
      allInspirations,
    },
  };
}

export default InspirationDetails;
