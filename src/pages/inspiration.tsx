import InspirationCard from "@/components/Card/InspirationCard";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getInspirations } from "@/queries/inspiration";
import InfiniteScroll from "react-infinite-scroll-component";

const inspiration = () => {
  const pageHeaderData = {
    heading: "Find inspiration for your next cruise",
    text: "Explore our latest selection of articles designed to give you an inside look at the cruise industry and tips for your next trip... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
  };
  const { cards, hasMore, fetchMoreData } = useInfiniteScroll(getInspirations);

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
          {cards.map((inspiration) => (
            <InspirationCard height="328px" key={inspiration.id} inspiration={inspiration} />
          ))}
        </div>
        {!cards.length && (
            <p className="text-2xl text-center">No data found!</p>
          )}
      </InfiniteScroll>
    </div>
  );
};

export default inspiration;
