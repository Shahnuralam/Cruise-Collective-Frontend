import CompetitionCard from "@/components/Card/CompetitionCard";
import { ICompetitionDto, competitionCruiseData } from "@/components/Interface/CompitionDto";
import PageHeading from "@/components/PageHeading";
import { useState } from "react";

const competition = () => {
    const [cards, setCards] = useState<ICompetitionDto[]>(competitionCruiseData);

    const handleStatusChange = (e) => {
        const selectedValue = e.target.value;
        if(selectedValue){
            const filterCard = competitionCruiseData.filter(card => card.status.toLowerCase() === selectedValue.toLowerCase());
            setCards(filterCard);
        }
      };


  return (
    <div className="p-3 md:p-[32px] xl:p-[75px]">
      <section>
        <PageHeading
          pageHeaderData={{
            heading: "Member competitions",
            text: "Each month we feature competitions from our exclusive cruise partners…",
            class: "text-sm"
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
          <select
            onChange={handleStatusChange}
            className="min-w-[150px] max-w-[300px] border-cruise border rounded-sm cursor-pointer outline-0 p-2 text-base"
          >
            <option className="text-base" disabled selected>
              Status
            </option>
            <option className="text-base" value="Open">
              Open
            </option>
            <option className="text-base" value="Close">
              Close
            </option>
          </select>
        </div>
      </section>

      <section>
        <div className="card-container my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {cards.map((cruiseElement) => (
            <CompetitionCard key={cruiseElement.id} cruise={cruiseElement} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default competition;
