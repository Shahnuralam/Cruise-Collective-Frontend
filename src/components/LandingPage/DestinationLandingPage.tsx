import React from "react";
import DestinationCard from "../Card/DestinationLandingCard";
import PageHeading from "../PageHeading";
import Continents from "../Shared/Continents";

import useCountriesAndContinents from "@/hooks/useCountriesAndContinents";
import Head from "next/head";

const DestinationLandingPage = () => {
  // const [countries, setCountries] = useState<any>([]);
  const pageHeaderData = {
    heading: "Pick a continent",
    text: "Your next Cruise adventure starts here. From the sun-kissed shores of the Caribbean and the majestic fjords of Norway, to the cultural treasures of the Mediterranean to the wild beauty of Alaska, our destination guide will provide you with insights, tips, and recommendations that will transform your cruise dreams into reality.",
  };
  const {
    isLoadingCountries,
    isLoadingContinents,
    getContinentWithCountries,
  } = useCountriesAndContinents();

  const continentWithCountries = getContinentWithCountries();

  if (isLoadingContinents) {
    return <p className="text-lg p-8 min-h-screen">Loading...</p>;
  }

  return (
    <div className="py-[75px] p-[25px] lg:p-[75px]">
       <Head>
      <title>
        Destinations
      </title>
    </Head>
      <section>
        <PageHeading pageHeaderData={pageHeaderData} />

        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-7 w-full 2xl:w-3/4">
          <Continents />
        </div>
      </section>

      <section className="pt-3 md:pt-[32px] lg:pt-[75px]">
        {isLoadingCountries && (
          <p className="text-lg p-8 min-h-screen">Loading...</p>
        )}

        {!!continentWithCountries?.length &&
          continentWithCountries?.map((continentCountry) => (
            <DestinationCard
              key={continentCountry.id}
              source="four"
              cardData={continentCountry}
            >
              Explore all
            </DestinationCard>
          ))}
      </section>
    </div>
  );
};

export default DestinationLandingPage;
