
import { cruiseData } from "@/components/Interface/CruiseLineDataDto";
import PageHeading from "@/components/PageHeading";
import CruisesCard from "@/components/Card/CruisesCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCruiseLines } from "@/queries/cruise-line";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
const CruiseLineLanding = () => {

  const pageHeaderData = {
    heading: "Cruise Lines",
    text: "Explore our selected cruise partners for exclusive cruise deals by interest, destination or deals... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
  };

  const { cards, hasMore, fetchMoreData } = useInfiniteScroll(getCruiseLines);

  return (
    <div className="px-6 xl:px-4 my-8 md:my-[75px] container mx-auto">
      <PageHeading pageHeaderData={pageHeaderData} />
      
      <InfiniteScroll
        dataLength={cards?.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={hasMore}
        loader=""
        endMessage={<DataLoadingFinishedText text="All cruises loaded" />}
      >
        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {cards.map((cruise, indx) => (
               <CruisesCard key={cruise.id} cruise={cruise} />
          ))}
        </div>
        {/* {!cards.length && (
            <p className="text-2xl text-center">No data found!</p>
          )} */}
      </InfiniteScroll>

    </div>
  );
};

export default CruiseLineLanding;
