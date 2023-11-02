import CruiseLineOffer from "@/components/CruiseLine/CruiseLineOffer";
import { CruiseDestinations, DeparturePort, PriceRange, SeasonData } from "@/components/Interface/FilterDto";
import PageHeading from "@/components/PageHeading";
import { useState } from "react";
import Select from "react-select";

const MultiContinent = () => {
    const departurePorts = DeparturePort;
    const cruiseDestinations = CruiseDestinations;
    const priceRange = PriceRange;
    const seasons = SeasonData;

    const [selectedPort, setSelectedPort] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState(null);

  return (
    <>
      <div className="px-3 md:px-[32px] lg:px-[75px] pt-4 md:pt-[75px]">
        <section className="mb-12 ">
          <PageHeading
            pageHeaderData={{
              heading: "Multi Continent",
              text: "Explore our latest selection of multi-continent cruises",
            }}
            fontSizeValue="28px"
          />
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
          <div className="text-3xl block lg:hidden mb-2">Filter by:</div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="text-3xl hidden lg:block">Filter by:</div>

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
        </section>
      </div>

      <section>
        <CruiseLineOffer />
      </section>
    </>
  );
};

export default MultiContinent;
