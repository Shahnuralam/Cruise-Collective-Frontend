import React from "react";
import { homeCruiseData } from "../Interface/CruiseHomeDto";
import HomePageCruiseCard from "../Card/HomePageCruiseCard";

const HomeLandingPage = () => {
  return (
    <div>
      <section className="p-3 md:p-[32px] lg:p-[75px]">
        <div className="card-container my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {homeCruiseData.map((cruiseElement) => (
            <HomePageCruiseCard key={cruiseElement.id} cruise={cruiseElement} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeLandingPage;
