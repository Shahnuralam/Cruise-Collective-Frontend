import React from "react";
import { destinationPageData } from "../Interface/DestinationLandingDto";
import ContinentCard from "../Card/ContinentCard";

const Continents = () => {
  return (
    <>
      {destinationPageData.map((continent) => (
        <ContinentCard key={continent.id} continentData={continent} />
      ))}
    </>
  );
};

export default Continents;
