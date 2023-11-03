import PageHeading from "@/components/PageHeading";
import FilterOffers from "@/components/Shared/FilterOffers";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getOffers } from "@/queries/offers";
import { baseUrl } from "@/utils";
import { collectGenerateParams } from "next/dist/build/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MultiContinent = ({ multiContinent }) => {

  const router = useRouter();
  const { id } = router.query;
  const [cardData, setCardData] = useState<any>([]);
  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);
  console.log('cards....', cards);

  useEffect(() => {
    const filterData = cards?.filter((card) =>
      card?.attributes?.destinations?.data?.some((item) => item?.id === Number(id))
    );
    setCardData(filterData);
  }, [id, cards]);

  console.log(multiContinent)
  if (isLoading) {
    return <p className="min-h-screen p-[75px]">Loading</p>;
  }

  return (
    <div className="px-3 md:px-[32px] lg:px-[75px] pt-4 md:pt-[75px]">
      <section>
        <PageHeading
          pageHeaderData={{
            heading: multiContinent?.data?.attributes?.title,
            text: "Explore our latest selection of multi-continent cruises",
          }}
          fontSizeValue="28px"
        />
        <p className="mt-6 text-base" dangerouslySetInnerHTML={{ __html: multiContinent?.data?.attributes?.title }}>

        </p>
      </section>
      <div className="pt-3 md:pt-[32px] lg:pt-[75px]">
        <FilterOffers
          finishedText="All offers loaded"
          offers={{ isLoading, cards: cardData, hasMore, fetchMoreData }}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  // Fetch product data from API based on productId
  const res = await fetch(`${baseUrl}/api/destinations/${id}?populate=deep`);
  const multiContinent = await res.json();

  return {
    props: {
      multiContinent,
    },
  };
}


export default MultiContinent;
