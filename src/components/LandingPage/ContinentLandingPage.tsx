import React from "react";
import StrokeLine from "../StrokeLine";
import ContinentModal from "../Modal/ContinentModal";
import CruisesCard from "../Card/CruisesCard";
import ContinentCard from "../Card/ContinentCard";
import PageHeading from "../PageHeading";

export interface IDestinationLandingData {
  id: number;
  imageUrl: string;
  description: string;
  countryName: string;
}
export interface PickContinentData {
  id: number;
  description: string;
  countryName: string;
}

const ContinentLandingPage = ({ continentModal, setContinentModal }) => {
  const pageHeaderData = {
    heading: "Europe Cruises",
    text: "Explore our selected cruise partners for exclusive cruise deals by interest, destination or deals... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
  };
  const pageHeaderPickContinentData = {
    heading: "Pick a continent",
    text: "Your next Cruise adventure starts here. From the sun-kissed shores of the Caribbean and the majestic fjords of Norway, to the cultural treasures of the Mediterranean to the wild beauty of Alaska, our destination guide will provide you with insights, tips, and recommendations that will transform your cruise dreams into reality.",
  };

  const data: IDestinationLandingData[] = [
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
    {
      id: 5,
      imageUrl: "/dummy/destination/Group (1).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
      countryName: "United Kingdom",
    },
    {
      id: 6,
      imageUrl: "/dummy/destination/Group (2).png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
      countryName: "Ireland",
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
        <PageHeading pageHeaderData={pageHeaderData} />

        <div className="card-container my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {data.map((cruise) => (
            <CruisesCard key={cruise.id} cruise={cruise} />
          ))}
        </div>
      </section>

      <section>
        <PageHeading pageHeaderData={pageHeaderPickContinentData} />

        <div className="card-container my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {pickContinentData.map((continent) => (
            <ContinentCard key={continent.id} continent={continent} />
          ))}
        </div>
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

export default ContinentLandingPage;
