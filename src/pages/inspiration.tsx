import InspirationCard from "@/components/Card/InspirationCard";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getInspirations } from "@/queries/inspiration";
import InfiniteScroll from "react-infinite-scroll-component";

const inspiration = () => {
  const pageHeaderData = {
    heading: "Find inspiration for your next cruise",
    text: "Whether you’re seeking winter sun in the Caribbean, iceberg spotting in the Arctic or simply some handy tips for packing on your next cruise, our editorial hub has you covered; a curated space dedicated to igniting your wanderlust and providing thoughtful insights for your next cruise adventure. Delve into the narratives of distant shores, insider information about the industry and useful guides onboard experiences, your journey into inspiration begins here. ",
  };
  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getInspirations);

  return (
    <div className="py-[75px] p-[25px] lg:p-[75px]">
      <PageHeading pageHeaderData={pageHeaderData} />
      <div className="pt-3 md:pt-[32px] lg:pt-[75px]">
        <InfiniteScroll
          style={{ overflowX: "hidden" }}
          dataLength={cards?.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={hasMore}
          loader=""
          endMessage={
            cards?.length ? (
              <DataLoadingFinishedText text="All inspiration posts loaded" />
            ) : (
              ""
            )
          }
        >
          <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {cards.map((inspiration) => (
              <InspirationCard key={inspiration.id} inspiration={inspiration} />
            ))}
          </div>
          {!cards.length && !isLoading && (
            <p className="text-2xl text-center"></p>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default inspiration;
