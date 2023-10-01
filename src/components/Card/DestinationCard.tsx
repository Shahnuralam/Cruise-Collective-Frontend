import React from "react";
import StrokeLine from "../StrokeLine";
import CruisesCard from "./CruisesCard";

const DestinationCard = ({ cardData }) => {
  const { continent, description, list: CruiseData } = cardData;

  return (
    <>
      <h3 className="text-[40px] font-bold">{continent}</h3>
      <div className="py-5">
        <StrokeLine></StrokeLine>
      </div>
      <p className="pt-1 max-w-4xl">{description}</p>

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
