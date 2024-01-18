import PageHeading from "@/components/PageHeading";
import CruisesCard from "@/components/Card/CruisesCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCruiseLines } from "@/queries/cruise-line";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Head from "next/head";
const CruiseLineLanding = () => {
  const pageHeaderData = {
    heading: "Cruise Lines",
    text: "Whatever your chosen destinations, you can be confident that our carefully selected cruise partners will ensure that your holiday is an experience that you will cherish. Enjoy true luxury travel around the world with Regent Seven Seas Cruises, or experience stunning destinations and West End-style entertainment with Ambassador Cruise Line, which sails from eight regional UK ports. Or you can explore Norway's breathtaking landscapes and rich heritage with Hurtigruten Coastal Express, while Hurtigruten Expeditions offers a gateway to some of the planet's most remote destinations.",
  };

  const { cards, hasMore, fetchMoreData } = useInfiniteScroll(getCruiseLines);

  return (
    <div className="py-[75px] p-[25px] xl:p-[75px]">
      <Head>
        <title>Cruise Lines</title>
      </Head>
      <PageHeading pageHeaderData={pageHeaderData} />

      <div className="pt-3 md:pt-[32px] lg:pt-[75px]">
        <InfiniteScroll
          dataLength={cards?.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={hasMore}
          loader=""
          endMessage={
            <DataLoadingFinishedText text="All cruise lines loaded" />
          }
        >
          <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12">
            {cards?.map((cruise) => (
              <CruisesCard key={cruise.id} cruise={cruise} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default CruiseLineLanding;
