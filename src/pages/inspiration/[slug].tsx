import FullScreenHeader from "@/components/FullScreenHeader";
import PageHeading from "@/components/PageHeading";
import { baseUrl } from "@/utils";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import styles from "../../styles/editor.module.css";
import InspirationCard from "@/components/Card/InspirationCard";
import Head from "next/head";
import Seo from "@/components/Seo";
import { Session } from "inspector";




const InspirationDetails = ({ inspiration, allInspirations }) => {
  const scrollIntoViewRef = useRef(null);
  const router = useRouter();
  const { data: session } = useSession();
 
  
  const createdAt = new Date(inspiration?.attributes?.createdAt);

  const options: any = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    createdAt
  );
  const uppercaseFormattedDate = formattedDate.toUpperCase();
  
  const fullScreenHeader = {
    sliders: inspiration?.attributes?.featured_image?.data || [],
    heading: inspiration?.attributes?.title,
    date: uppercaseFormattedDate,  // Use the uppercase formatted date here
    btnText: "VIEW MORE",
    scrollIntoViewRef,
  };
  

  const getRandomInspirations = (count, currentInspirationSlug, allInspirations) => {
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
 
// console.log(inspiration.attributes.seo);
  return (
    <>
      <Head>
    {inspiration?.attributes?.seo && (
      <Seo data={inspiration.attributes.seo} />
    )}
  </Head>
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
            __html: inspiration?.attributes?.text_editor.replace(
              '<iframe',
              `<iframe class="${session?.user?.email ? '' : 'hidden'}"`
            ),
          }}
        ></div>
      </div>

      <section className="mx-auto p-12">
        <PageHeading pageHeaderData={{ heading: "You may also like", text: "" }} />
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
