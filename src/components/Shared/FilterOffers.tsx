import { useState } from "react";
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

  
  console.log(offers);
  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState(null);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const { isLoading, cards, hasMore, fetchMoreData } = offers;

  const [selectedPort, setSelectedPort] = useState<any>(null);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>(null);
  const [selectedSeason, setSelectedSeason] = useState<any>(null);

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
console.log('dddd',destinations);
  const departurePorts = departures?.map(({ id, attributes: { title } }) => ({
    value: id,
    label: title,
  }));

  const groupedDestinations = destinations?.reduce(
    (acc, { id, attributes: { title, type } }) => {
      const groupLabel =
        type === "continent"
          ? "Continent"
          : type === "place"
          ? "Place.."
          : type === "country"
          ? "Country"
          : "Other";

      if (!acc[groupLabel]) {
        acc[groupLabel] = [];
      }

      acc[groupLabel].push({
        value: id,
        label: title, // Removed `${}` to make label non-clickable
        type: type, // Include type for checking "place" later
      });

      return acc;
    },
    {}
  );

  const cruiseDestinations = groupedDestinations
    ? Object.keys(groupedDestinations).flatMap((groupLabel) => [
        { value: `${groupLabel}-label`, label: groupLabel, isDisabled: true }, // Make label non-selectable
        ...groupedDestinations[groupLabel],
      ])
    : [];

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     backgroundColor: state.isSelected ? "#FF9A31" : null, // Highlight selected option
  //   }),
  // };

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
            options={departurePorts}
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
            options={priceRange}
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
