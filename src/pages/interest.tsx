import InterestCard from "@/components/Card/InterestCard";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getInterests } from "@/queries/interest";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";

const interest = () => {
  const { cards, hasMore, fetchMoreData } = useInfiniteScroll(getInterests);

  const pageHeaderData = {
    heading: "Cruise by interest",
    text: "Take your pick from a range of different cruises, whether you're looking for a once-in-a-lifetime adventure or a spontaneous last-minute break. Want to rest easy knowing that everything will be taken care of during your trip? Then select one of our all-inclusive cruises, where you every need is anticipated. Looking for a holiday that the whole family can enjoy? Our family cruises are tailored to the interests of both young and old, so there's something for everyone. Plus there cruises that are packed with exploration, tranquil river cruises and so much more.",
  };

  return (
    <div className="py-[75px] p-[25px] lg:p-[75px]">
      <Head>
        <title>Interest</title>
      </Head>
      <PageHeading pageHeaderData={pageHeaderData} />
      <div className="pt-3 md:pt-[32px] lg:pt-[75px]">
        <InfiniteScroll
          dataLength={cards?.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={hasMore}
          loader=""
          endMessage={
            cards?.length ? (
              <DataLoadingFinishedText text="All interest loaded" />
            ) : (
              ""
            )
          }
        >
          <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {cards.map((interest, indx) => (
              <InterestCard key={indx} interest={interest} />
            ))}
          </div>
          {/* {!cards.length && (
          <p className="text-2xl text-center">No data found!</p>
        )} */}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default interest;
