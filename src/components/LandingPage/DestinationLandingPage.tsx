import React from "react";
import ContinentCard from "../Card/ContinentCard";
import DestinationCard from "../Card/DestinationCard";
import PageHeading from "../PageHeading";
import { destinationPageData } from "../Interface/DestinationLandingDto";

const DestinationLandingPage = () => {
  const pageHeaderData = {
    heading: "Pick a continent",
    text: "Your next Cruise adventure starts here. From the sun-kissed shores of the Caribbean and the majestic fjords of Norway, to the cultural treasures of the Mediterranean to the wild beauty of Alaska, our destination guide will provide you with insights, tips, and recommendations that will transform your cruise dreams into reality.",
  };

  return (
    <div className="p-6 md:p-16">
      <section>
        <PageHeading pageHeaderData={pageHeaderData} />

        <div className="card-container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {destinationPageData.map((continent) => (
            <ContinentCard key={continent.id} continentData={continent} />
          ))}
        </div>
      </section>

      <section>
        {destinationPageData.map((destinationCruise) => (
          <DestinationCard
            key={destinationCruise.id}
            cardData={destinationCruise}
          >
            Explore all
          </DestinationCard>
        ))}
      </section>
    </div>
  );
};

export default DestinationLandingPage;
