import CompetitionCard from "@/components/Card/CompetitionCard";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import {
  ICompetitionDto,
  competitionCruiseData,
} from "@/components/Interface/CompitionDto";
import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getCompetitions } from "@/queries/competitons";
import { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

const options = [
  { value: true, label: "Open" },
  { value: false, label: "Closed" },
];


const Competition = () => {
  const { cards, hasMore, fetchMoreData } = useInfiniteScroll(getCompetitions);
  const [selectedOption, setSelectedOption] = useState<any>(null);



  const filteredCards = cards?.filter((card) => {
    
    if (selectedOption) {
      return card?.attributes?.status === selectedOption.value;
    }
    return true;
  });


  return (
    <div className="py-[75px] p-[25px] xl:p-[75px]">
      <section>
        <PageHeading
          pageHeaderData={{
            heading: "Member competitions",
            text: "Each month we feature competitions from our exclusive cruise partners…",
          }}
        />
        <p className="pt-1 max-w-4xl justify-normal text-black text-sm md:text-base mt-8">
        Dive into Cruise Collective Competitions and be in with a chance to win some incredible prizes. At Cruise Collective, we love giving you the chance to win fantastic prizes, from dreamy short getaways to unique expedition cruise experiences. Test your luck and knowledge by entering today. Whether you're after a tropical escape or a cultural adventure, there's something for everyone, read on to find out more…
        </p>
      </section>

      <section className="flex mt-12">
        <div className="text-3xl w-auto md:min-w-[150px]">Filter by:</div>
        <div className="w-auto md:min-w-[350px]">
          <Select
            value={selectedOption} // Use 'value' instead of 'defaultValue'
            onChange={(e) => setSelectedOption(e)}
            options={options}
            isClearable={true}
            placeholder="Status"

          />
        </div>
      </section>

      <section>
        <InfiniteScroll
          dataLength={cards?.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={hasMore}
          loader=""
          endMessage={
            cards?.length ? (
              <DataLoadingFinishedText text="All competitions loaded" />
            ) : (
              ""
            )
          }
        >
          <div className="card-container px-117 py-41 pr-101 pb-49 pl-117 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {filteredCards.map((card: any) => (
              <CompetitionCard
                key={card.id} competition={card} />
            ))}
          </div>
         
        </InfiniteScroll>
      </section>
    </div>
  );
};

export default Competition;
