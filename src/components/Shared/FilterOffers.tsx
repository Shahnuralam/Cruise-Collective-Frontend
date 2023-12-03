import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getDepartures, getDestinations, getSeasons } from "@/queries";
import Select from "react-select";
import InfiniteScroll from "react-infinite-scroll-component";
import DataLoadingFinishedText from "../DataLoadingFinishedText";
import OfferCard from "../Card/OfferCard";
import LoginModal from "../Modal/LoginModal";
import TermsAndConditionsCruiseLineModal from "../Modal/TermsAndConditionsCruiseLineModal";
import { PriceRange } from "@/Interface/Dto";

const priceRange = PriceRange;
const FilterOffers = ({ finishedText, offers, source }) => {

  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState(null);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const { isLoading, cards, hasMore, fetchMoreData } = offers;

  const savedFiltersJSON = sessionStorage.getItem("savedFilters");
  const savedFilters = savedFiltersJSON ? JSON.parse(savedFiltersJSON) : {};

  // Initialize state with saved filters or defaults
  const [selectedPort, setSelectedPort] = useState(
    savedFilters.selectedPort || null
  );
  const [selectedDestination, setSelectedDestination] = useState(
    savedFilters.selectedDestination || null
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    savedFilters.selectedPriceRange || null
  );
  const [selectedSeason, setSelectedSeason] = useState(
    savedFilters.selectedSeason || null
  );

  useEffect(() => {
    sessionStorage.setItem(
      "savedFilters",
      JSON.stringify({
        selectedPort: selectedPort !== null ? selectedPort : "",
        selectedDestination:
          selectedDestination !== null ? selectedDestination : "",
        selectedPriceRange:
          selectedPriceRange !== null ? selectedPriceRange : "",
        selectedSeason: selectedSeason !== null ? selectedSeason : "",
      })
    );
  }, [selectedPort, selectedDestination, selectedPriceRange, selectedSeason]);

  const {
    isLoading: isLoadingDepartures,
    data: departures,
    refetch: refetchDepartures,
  } = useQuery("departures", () => getDepartures(), {
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const {
    isLoading: isLoadingSeasons,
    data: season,
    refetch: refetchSeasons,
  } = useQuery("seasons", () => getSeasons(), {
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const {
    isLoading: isLoadingDestinations,
    data: destinations,
    refetch: refetchDestinations,
  } = useQuery("destinations", () => getDestinations(), {
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const departurePorts = departures?.map(({ id, attributes: { title } }) => ({
    value: id,
    label: title,
  }));

  const countByType = {
    Continent: 0,
    Country: 0,
    Place: 0,
    Other: 0,
  };

  const groupedDestinations = destinations?.reduce(
    (acc, { id, attributes: { title, type } }) => {
      const groupLabel =
        type === "continent"
          ? "Continent"
          : type === "place"
          ? "Place"
          : type === "country"
          ? "Country"
          : "Other";

      countByType[groupLabel] += 1;

      if (!acc[groupLabel]) {
        acc[groupLabel] = [];
      }

      acc[groupLabel].push({
        value: id,
        label: title,
        type: type,
      });

      return acc;
    },
    {}
  );

  
  const filteredCardsWithOfferPrice = cards.filter(
    (card) => card?.attributes?.offer_price
  );
  
  const cruiseDestinations = groupedDestinations
    ? Object.keys(groupedDestinations).flatMap((groupLabel) => [
        {
          value: `${groupLabel}-label`,
          label: (
            <span
              style={{ fontWeight: "bold", fontSize: "20px", color: "#FF9A31" }}
            >
              {groupLabel} ({countByType[groupLabel]})
            </span>
          ),
          isDisabled: true,
        },
        ...groupedDestinations[groupLabel],
      ])
      .filter(destination => {
        // Include destinations with cards that have offer prices
        return filteredCardsWithOfferPrice.some(card => destination.label === card.attributes?.destinations?.data[0]?.attributes?.title);
      })
    : [];
  

    const filteredPriceRange = priceRange.filter(({ min, max }) => {
      // Check if any card falls within the current price range
      return filteredCardsWithOfferPrice.some(
        (card) =>
          card?.attributes?.offer_price >= min && card?.attributes?.offer_price <= max
      );
    });

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     backgroundColor: state.isSelected ? "#FF9A31" : null, // Highlight selected option
  //   }),
  // };

  const filteredDeparturePorts = departurePorts?.filter((port) => {
    // Check if any card has an offer price for this departure port
    return filteredCardsWithOfferPrice.some(
      (card) =>
        card?.attributes?.departure?.data?.attributes?.title === port.label
    );
  });
  

  const seasons = season?.map(({ id, attributes: { title } }) => ({
    value: id,
    label: title,
  }));

  const filteredCards = cards.filter((card) => {
    if (selectedPort) {
      return (
        card?.attributes?.departure?.data?.attributes?.title ===
        selectedPort.label
      );
    }
    if (selectedDestination) {
      const hasMatchingDestination = card?.attributes?.destinations?.data?.some(
        (item) => item?.attributes?.title.includes(selectedDestination.label)
      );
      return hasMatchingDestination;
    }
    if (selectedPriceRange) {
      return (
        card?.attributes?.offer_price >= selectedPriceRange.min &&
        card?.attributes?.offer_price <= selectedPriceRange.max
      );
    }
    if (selectedSeason) {
      return (
        card?.attributes?.season?.data?.attributes?.title ===
        selectedSeason.label
      );
    }
    // If none of the conditions are met, include the card in the result.
    return true;
  });

  return (
    <section>
      <div className="mb-8 md:mb-[75px]">
        <div className="text-3xl block lg:hidden mb-2">Filter by:</div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="text-3xl hidden lg:block">Filter by:</div>

          <Select
            className="w-full"
            defaultValue={selectedPort}
            isClearable={true}
            options={filteredDeparturePorts}
            placeholder="Departure ports"
            onChange={(e) => setSelectedPort(e)}
          />
          <Select
            className="w-full"
            defaultValue={selectedDestination}
            isClearable={true}
            options={cruiseDestinations}
            placeholder="Cruise destinations"
            onChange={(e) => setSelectedDestination(e)}
            // styles={customStyles} // Apply custom styles
          />
          <Select
            className="w-full"
            defaultValue={selectedPriceRange}
            isClearable={true}
            options={filteredPriceRange}
            placeholder="Price range"
            onChange={(e) => setSelectedPriceRange(e)}
          />

          <Select
            className="w-full"
            defaultValue={selectedSeason}
            isClearable={true}
            options={seasons}
            placeholder="Season"
            onChange={(e) => setSelectedSeason(e)}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col">
          <InfiniteScroll
            dataLength={cards?.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={hasMore}
            loader=""
            endMessage={
              filteredCards?.length ? (
                <DataLoadingFinishedText text={finishedText} />
              ) : (
                ""
              )
            }
          >
            <div className="flex flex-col">
              {!filteredCards?.length ? <p></p> : ""}
              {filteredCards.map((card: any) => (
                <OfferCard
                  key={card.id}
                  offer={card}
                  termsAndConditionsModalData={termsAndConditionsModalData}
                  setTermsAndConditionsModalData={
                    setTermsAndConditionsModalData
                  }
                  setOpenLoginModal={setOpenLoginModal}
                  source={source}
                ></OfferCard>
              ))}
            </div>
          </InfiniteScroll>
        </div>

        {termsAndConditionsModalData && (
          <TermsAndConditionsCruiseLineModal
            termsAndConditionsModalData={termsAndConditionsModalData}
            setTermsAndConditionsModalData={setTermsAndConditionsModalData}
          ></TermsAndConditionsCruiseLineModal>
        )}

        {openLoginModal && (
          <LoginModal
            openLoginModal={openLoginModal}
            setOpenLoginModal={setOpenLoginModal}
          />
        )}
      </div>
    </section>
  );
};

export default FilterOffers;
