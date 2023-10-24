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
import Select from "react-select";
import CruiseLineOffer from "@/components/CruiseLine/CruiseLineOffer";

const CountryLandingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [countriesData, setCountriesData] = useState<countryData>({});
  const departurePorts = DeparturePort;
  const cruiseDestinations = CruiseDestinations;
  const priceRange = PriceRange;
  const seasons = SeasonData;

  const [selectedPort, setSelectedPort] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

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

          <Select
            className="w-full"
            defaultValue={selectedPort}
            isClearable={true}
            options={departurePorts}
            placeholder="Departure ports"
          />
          <Select
            className="w-full"
            defaultValue={selectedDestination}
            isClearable={true}
            options={cruiseDestinations}
            placeholder="Cruise destinations"
          />
          <Select
            className="w-full"
            defaultValue={selectedPriceRange}
            isClearable={true}
            options={priceRange}
            placeholder="Price range"
          />

          <Select
            className="w-full"
            defaultValue={selectedSeason}
            isClearable={true}
            options={seasons}
            placeholder="Season"
          />
        </div>
      </div>
      <section>
        <CruiseLineOffer />
      </section>
    </>
  );
};

export default CountryLandingPage;
