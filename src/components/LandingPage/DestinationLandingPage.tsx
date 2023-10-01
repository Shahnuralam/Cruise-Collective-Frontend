import React from "react";
import StrokeLine from "../StrokeLine";
import ContinentModal from "../Modal/ContinentModal";
import CruisesCard from "../Card/CruisesCard";
import ContinentCard from "../Card/ContinentCard";
import { IDestinationLandingData } from "./ContinentLandingPage";
import DestinationCard from "../Card/DestinationCard";

export interface DestinationLandingData {
  id: number;
  continent: string;
  description: string;
  list: IDestinationLandingData[];
}
export interface PickContinentData {
  id: number;
  description: string;
  countryName: string;
}

const DestinationLandingPage = ({ continentModal, setContinentModal }) => {
  const data: DestinationLandingData[] = [
    {
      id: 1,
      description:
        "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
      continent: "Europe Cruises",
      list: [
        {
          id: 1,
          imageUrl: "/dummy/destination/Group (1).png",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          countryName: "Russia",
        },
        {
          id: 2,
          imageUrl: "/dummy/destination/Group (2).png",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          countryName: "France",
        },
        {
          id: 3,
          imageUrl: "/dummy/destination/Group (3).png",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          countryName: "Italy",
        },
        {
          id: 4,
          imageUrl: "/dummy/destination/Group (4).png",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          countryName: "Spain",
        },
      ],
    },
    {
      id: 2,
      description:
        "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
      continent: "Asia Cruises",
      list: [
        {
          id: 1,
          imageUrl: "/dummy/destination/Group (1).png",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          countryName: "Thiland",
        },
        {
          id: 2,
          imageUrl: "/dummy/destination/Group (2).png",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          countryName: "China",
        },
        {
          id: 3,
          imageUrl: "/dummy/destination/Group (3).png",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          countryName: "Japan",
        },
        {
          id: 4,
          imageUrl: "/dummy/destination/Group (4).png",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          countryName: "South Korea",
        },
      ],
    },
  ];

  const pickContinentData: PickContinentData[] = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
      countryName: "Europe",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
      countryName: "North America",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
      countryName: "Asia",
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
      countryName: "South America",
    },
    {
      id: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
      countryName: "Africa",
    },
    {
      id: 6,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
      countryName: "Australia",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <section>
        <h3 className="text-[40px]">Pick a continent</h3>
        <div className="py-5">
          <StrokeLine />
        </div>
        <p className="pt-1 max-w-4xl">
          Your next Cruise adventure starts here. From the sun-kissed shores of
          the Caribbean and the majestic fjords of Norway, to the cultural
          treasures of the Mediterranean to the wild beauty of Alaska, our
          destination guide will provide you with insights, tips, and
          recommendations that will transform your cruise dreams into reality.
        </p>

        <div className="card-container my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {pickContinentData.map((continent) => (
            <ContinentCard key={continent.id} continent={continent} />
          ))}
        </div>
      </section>

      <section>
        {data.map((destinationCruise) => (
          <DestinationCard
            key={destinationCruise.id}
            cardData={destinationCruise}
          />
        ))}
      </section>

      {continentModal && (
        <ContinentModal
          continentModal={continentModal}
          setContinentModal={setContinentModal}
        ></ContinentModal>
      )}
    </div>
  );
};

export default DestinationLandingPage;
