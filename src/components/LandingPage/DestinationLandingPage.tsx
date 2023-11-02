import React from "react";
import ContinentCard from "../Card/ContinentCard";
import DestinationCard from "../Card/DestinationLandingCard";
import PageHeading from "../PageHeading";
import Continents from "../Shared/Continents";
import { useQuery } from "react-query";
import { getContinents, getCountries } from "@/queries/destinations";
import useCountriesAndContinents from "@/hooks/useCountriesAndContinents";

const DestinationLandingPage = () => {
  const pageHeaderData = {
    heading: "Pick a continent",
    text: "Your next Cruise adventure starts here. From the sun-kissed shores of the Caribbean and the majestic fjords of Norway, to the cultural treasures of the Mediterranean to the wild beauty of Alaska, our destination guide will provide you with insights, tips, and recommendations that will transform your cruise dreams into reality.",
  };
  const {
    isLoadingCountries,
    isLoadingContinents,
    continents,
    refetchCountries,
    refetchContinents,
    getContinentWithCountries,
  } = useCountriesAndContinents();
  const continentWithCountries = getContinentWithCountries();

  // const { isLoading, data: countries, refetch } = useQuery(
  //   "destinations?populate=deep&filters[$or][1][type][$contains]=country",
  //   () => getCountries(),
  //   {
  //     refetchOnWindowFocus: false,
  //     enabled: true,
  //   }
  // );

  // const { isLoading: isLoading2, data: continents, refetch: refetch2 } = useQuery(
  //   "destinations?populate=deep&filters[$or][1][type][$contains]=continent",
  //   () => getContinents(),
  //   {
  //     refetchOnWindowFocus: false,
  //     enabled: true,
  //   }
  // );



  // const continentWithCountries = (continents?.data || []).map(continent => {
  //   const continentCountries = (countries?.data || []).filter(element => element?.attributes?.destination?.data?.id === continent.id);
  //   return { ...continent, continentCountries };
  // });
  
  if(isLoadingContinents || isLoadingCountries) {
    return <p className="text-lg p-8 min-h-screen">Loading</p>
  }
 

  return (
    <div className="p-3 md:p-[32px] lg:p-[75px]">
      <section>
        <PageHeading pageHeaderData={pageHeaderData} />

        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-7 w-full xl:w-3/4">
          <Continents />
        </div>
      </section>

      <section>
        {continentWithCountries?.map((continentCountry) => (
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
