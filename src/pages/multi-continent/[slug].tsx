import PageHeading from "@/components/PageHeading";
import FilterOffers from "@/components/Shared/FilterOffers";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getOffers } from "@/queries/offers";
import { baseUrl } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MultiContinent = ({ multiContinent }) => {
 

  const router = useRouter();
  const { slug} = router.query;
  const [cardData, setCardData] = useState<any>([]);
  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);

    useEffect(() => {
      const filterData = cards?.filter((card) =>
        card?.attributes?.destinations?.data?.some((item) => item?.attributes?.slug === slug)
      );
      setCardData(filterData);
    }, [slug, cards]);



  if (isLoading) {
    return <p className="min-h-screen p-[75px]">Loading</p>;
  }

  return (
    <div className="px-3 md:px-[32px] lg:px-[75px] pt-4 md:pt-[75px]">
      <section>
        <PageHeading
          pageHeaderData={{
            heading: multiContinent?.attributes?.title,
            text: "Explore our latest selection of multi-continent cruises",
          }}
          fontSizeValue="28px"
        />
        <p className="mt-6 text-base" dangerouslySetInnerHTML={{ __html: multiContinent?.data?.attributes?.title }}>

        </p>
      </section>
      <div className="pt-3 pb-[75px] md:pt-[32px] lg:pt-[75px]">
        <FilterOffers
          finishedText="All offers loaded"
          offers={{ isLoading, cards: cardData, hasMore, fetchMoreData }}
          // source="multi_continent"
        />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;

  // Fetch product data from API based on productId
  const res = await fetch(`${baseUrl}/api/destinations?populate=deep&filters[slug][$eq]=${slug}`);
  const {data:multiContinent} = await res.json();

  return {
    props: {
      multiContinent : multiContinent[0],
    },
  };
}


export default MultiContinent;
