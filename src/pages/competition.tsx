import CompetitionCard from "@/components/Card/CompetitionCard";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import {
  ICompetitionDto,
  competitionCruiseData,
} from "@/components/Interface/CompitionDto";
import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getCompetitions } from "@/queries/competitons";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

const options = [
  { value: "open", label: "Open" },
  { value: "closed", label: "Closed" },
];

const competition = () => {
  const { cards, hasMore, fetchMoreData } = useInfiniteScroll(getCompetitions);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleStatusChange = (e) => {
    const selectedValue = e?.value;
    // if (selectedValue) {
    //   const filterCard = competitionCruiseData.filter(
    //     (card) => card.status.toLowerCase() === selectedValue.toLowerCase()
    //   );
    //   setCards(filterCard);
    // }
    // else {
    //   setCards(competitionCruiseData);
    // }
  };


  return (
    <div className="p-3 md:p-[32px] xl:p-[75px]">
      <section>
        <PageHeading
          pageHeaderData={{
            heading: "Member competitions",
            text: "Each month we feature competitions from our exclusive cruise partners…",
          }}
        />
        <p className="pt-1 max-w-4xl text-black text-sm md:text-base mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est.
          Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id
          efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent
          finibus ultricies mollis. Integer accumsan varius sollicitudin.
          Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta
          facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem
          convallis.
        </p>
      </section>

      <section className="flex mt-12">
        <div className="text-3xl w-auto md:min-w-[150px]">Filter by:</div>
        <div className="w-auto md:min-w-[350px]">
          <Select
            defaultValue={selectedOption}
            onChange={(e) => handleStatusChange(e)}
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
          <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {cards.map((competition) => (
              <CompetitionCard key={competition.id} competition={competition} />
            ))}
          </div>
          {/* {!cards.length && (
          <p className="text-2xl text-center">No data found!</p>
        )} */}
        </InfiniteScroll>
      </section>
    </div>
  );
};

export default competition;
