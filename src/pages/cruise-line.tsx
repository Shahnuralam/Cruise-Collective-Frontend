
import { cruiseData } from "@/components/Interface/CruiseLineDataDto";
import PageHeading from "@/components/PageHeading";
import CruisesCard from "@/components/Card/CruisesCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { getCruiseLines } from "@/queries/cruise-line";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
const CruiseLineLanding = () => {

  const pageHeaderData = {
    heading: "Cruise Lines",
    text: "Explore our selected cruise partners for exclusive cruise deals by interest, destination or deals... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
  };

  const [cards, setCards] = useState<any>([]);
  const [pageIndex, setPageIndex] = useState<number>(2);
  const pageSize = 8;
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [total, setTotal] = useState(0);

  const getCardData = async () => {
    const data: any = await getCruiseLines(1, pageSize);
    setTotal(data?.meta?.pagination.total);
    setCards(data.data);
  };

  const fetchMoreData = async () => {
    if (cards?.length === total) {
      setHasMore(false);
    }
    {
      const data: any = await getCruiseLines(pageIndex, pageSize);
      setCards([...cards, ...data.data]);
      setPageIndex(pageIndex + 1);
    }
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <div className="p-3 md:p-[32px] lg:p-[75px]">
      <PageHeading pageHeaderData={pageHeaderData} />

      <InfiniteScroll
        dataLength={cards?.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<DataLoadingFinishedText text="All cruises loaded" />}
      >
        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {cards.map((cruise, indx) => (
               <CruisesCard key={cruise.id} cruise={cruise} />
          ))}
        </div>
      </InfiniteScroll>

    </div>
  );
};

export default CruiseLineLanding;
