import PageHeading from "@/components/PageHeading";
import FilterOffers from "@/components/Shared/FilterOffers";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getOffers } from "@/queries/offers";
import { baseUrl } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MultiContinent = () => {

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

  if (isLoading) {
    return <p className="min-h-screen p-[75px]">Loading</p>;
  }

  return (
    <>
      <div className="px-3 md:px-[32px] lg:px-[75px] pt-4 md:pt-[75px]">
        <section className="mb-12 ">
          <PageHeading
            pageHeaderData={{
              heading: "Multi Continent",
              text: "Explore our latest selection of multi-continent cruises",
            }}
            fontSizeValue="28px"
          />
          <p className="mt-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est.
            Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id
            efficitur urna. Nam non fermentum diam, vehicula euismod dui.
            Praesent finibus ultricies mollis. Integer accumsan varius
            sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit
            vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et
            placerat lorem convallis.
          </p>
        </section>
      </div>
      <FilterOffers
        finishedText="All offers loaded"
        offers={{ isLoading, cards: cardData, hasMore, fetchMoreData }}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  // Fetch product data from API based on productId
  const res = await fetch(`${baseUrl}/api/destinations/${id}?populate=deep`);
  const interest = await res.json();

  return {
    props: {
      interest,
    },
  };
}


export default MultiContinent;
