import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getOffers } from "@/queries/offers";
import Head from "next/head";
import FilterOffers from "@/components/Shared/FilterOffers";
import { useEffect, useState } from "react";

const specialOffers = () => {
  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);
  const [cardData, setCardData] = useState<any>([]);

  useEffect(() => {
    const filterData = cards?.filter((card) => card?.attributes?.is_featured);
    setCardData(filterData);
  }, [cards]);

  if (isLoading) {
    return <p className="min-h-screen p-[75px]">Loading...</p>;
  }

  return (
    <main>
      <Head>
        <title>Special Offers</title>
      </Head>

      <div className="flex flex-col px-3 md:px-[32px] lg:px-[75px] py-[75px]">
        <section>
          <PageHeading
            pageHeaderData={{
              heading: "Exclusive Cruise Collective special offers and deals",
              text: "Exclusive Deals at Cruise Collective. We’ve collated a treasure trove of Special Offers to help you find the perfect discount for your next voyage. At Cruise Collective, we're all about making your dream cruise a reality without emptying your wallet. Dive into an array of unmissable deals, added-value packages, and unique journeys from the world's finest cruise lines. From tropical escapes to cultural explorations, you'll discover the perfect trip to fit your budget. So read on and prepare to set sail on an unforgettable voyage with our specially curated deals. Your next cruise adventure starts here…",
            }}
          />
        </section>
        <div className="pt-3 md:pt-[32px] lg:pt-[75px]">
          <FilterOffers
            finishedText="All special offers loaded"
            offers={{ isLoading, cards: cardData, hasMore, fetchMoreData }}
            source="special_offer"
          />
        </div>
      </div>
    </main>
  );
};

export default specialOffers;
