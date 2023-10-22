import { cruiseLineItemData } from "@/components/CruiseLine/data";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import DropDown from "@/components/DropDown";
import {
  CruiseDestinations,
  DeparturePort,
  PriceRange,
  SeasonData,
} from "@/components/Interface/FilterDto";
import Item from "@/components/Item";
import CouponModal from "@/components/Modal/CouponModal";
import LoginModal from "@/components/Modal/LoginModal";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import PageHeading from "@/components/PageHeading";
import { useEffect, useState } from "react";
import CruiseLineBackUp from "./cruise-line-backup";
import Select from "react-select";

const specialOffers = () => {
  const departurePorts = DeparturePort;
  const cruiseDestinations = CruiseDestinations;
  const priceRange = PriceRange;
  const seasons = SeasonData;

  const [selectedPort, setSelectedPort] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    console.log("changedPort", selectedPort);
  }, [selectedPort]);
  useEffect(() => {
    console.log("changedDestinations", selectedDestination);
  }, [selectedDestination]);
  useEffect(() => {
    console.log("changedPriceRange", selectedPriceRange);
  }, [selectedPriceRange]);
  useEffect(() => {
    console.log("changedSeason", selectedSeason);
  }, [selectedSeason]);

  return (
    <main>
      {/* <Head>
        <title>Cruise Cards</title>
      </Head> */}

      <div className="flex flex-col px-3 md:px-[32px] lg:px-[75px] pt-4 md:pt-[75px]">
        <section className="mb-12">
          <PageHeading
            pageHeaderData={{
              heading: "Exclusive Cruise Collective special offers and deals",
              text: "Explore our latest selection of exclusive cruise deals in around the world",
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
        </section>

        <div className="grid grid-cols-5 gap-3">
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
        <CruiseLineBackUp />
      </section>
    </main>
  );
};

export default specialOffers;
