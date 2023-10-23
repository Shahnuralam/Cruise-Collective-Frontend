import InterestCard from "@/components/Card/InterestCard";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getInterests } from "@/queries/interest";
import InfiniteScroll from "react-infinite-scroll-component";

const interest = () => {
  const { cards, hasMore, fetchMoreData } = useInfiniteScroll(getInterests);


  const pageHeaderData = {
    heading: "Cruise by interest",
    text: "Explore our latest selection of exclusive cruise deals by interest.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
  };

  return (
    <div className="p-3 md:p-[32px] lg:p-[75px]">
      <PageHeading pageHeaderData={pageHeaderData} />
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
  );
};

export default interest;
