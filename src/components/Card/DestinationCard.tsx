import React from "react";
import CruisesCard from "./CruisesCard";
import PageHeading from "../PageHeading";

const DestinationCard = ({ cardData }) => {
  const { continent, description, list: CruiseData } = cardData;

  return (
    <>
      <PageHeading pageHeaderData={{ heading: continent, text: description }} />

      <div className="card-container my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {CruiseData.map((cruise) => (
          <CruisesCard key={cruise.id} cruise={cruise} />
        ))}
      </div>

      <div className="text-center mt-7">
        <button className="bg-cruise py-3 px-10 text-white rounded text-xl">
          Explore All
        </button>
      </div>
    </>
  );
};

export default DestinationCard;
