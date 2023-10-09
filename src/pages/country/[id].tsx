import DropDown from "@/components/DropDown";
import {
  IDestinationData,
  countryData,
  destinationPageData,
} from "@/components/Interface/DestinationLandingDto";
import {
  CruiseDestinations,
  DeparturePort,
  PriceRange,
  SeasonData,
} from "@/components/Interface/FilterDto";
import PageHeading from "@/components/PageHeading";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CruiseLineBackUp from "../cruise-line-backup";

const CountryLandingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [countriesData, setCountriesData] = useState<countryData>({});
  const [departurePorts, setDeparturePorts] = useState(DeparturePort);

  const cruiseDestinations = CruiseDestinations;
  const priceRange = PriceRange;
  const seasons = SeasonData;

  useEffect(() => {
    let flatCountryData: any = [];
    for (const country of destinationPageData) {
      flatCountryData = [...flatCountryData, ...country.list];
    }
    const dataObj = flatCountryData.find(
      (country) => country.id === Number(id)
    );
    setCountriesData(dataObj);
  }, [id]);

  useEffect(() => {
    console.log("hello1", departurePorts);
    console.log("hello2", cruiseDestinations);
    console.log("hello3", priceRange);
    console.log("hello4", seasons);
  }, [departurePorts, cruiseDestinations, priceRange, seasons]);

  if (!countriesData || !departurePorts) {
    return <>loading...</>;
  }

  return (
    <>
      <div className="p-3 md:px-[40px] lg:px-[75px] pt-[75px]">
        <section>
          <PageHeading
            pageHeaderData={{
              heading: countriesData?.name || "",
              text: "",
            }}
          />
          <p className="text-[28px]">{countriesData?.description}</p>
          <p className="mt-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est.
            Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id
            efficitur urna. Nam non fermentum diam, vehicula euismod dui.
            Praesent finibus ultricies mollis. Integer accumsan varius
            sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit
            vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et
            placerat lorem convallis.
          </p>
        </section>

        <div className="grid grid-cols-5 mt-12 gap-2">
          <div className="text-3xl">Filter by:</div>

          <DropDown items={departurePorts} placeholder="Departure ports" />
          <DropDown
            items={cruiseDestinations}
            placeholder="Cruise destinations"
          />
          <DropDown items={priceRange} placeholder="Price range" />
          <DropDown items={seasons} placeholder="Season" />
        </div>
      </div>
      <section>
        <CruiseLineBackUp />
      </section>
    </>
  );
};

export default CountryLandingPage;
