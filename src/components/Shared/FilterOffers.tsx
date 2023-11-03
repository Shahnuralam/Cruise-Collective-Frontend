import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getOffers } from "@/queries/offers";
import { useState } from "react";
import { PriceRange } from "../Interface/FilterDto";
import { useQuery } from "react-query";
import { getDepartures, getDestinations, getSeasons } from "@/queries";
import Select from "react-select";
import InfiniteScroll from "react-infinite-scroll-component";
import DataLoadingFinishedText from "../DataLoadingFinishedText";
import OfferCard from "../Card/OfferCard";
import CouponModal from "../Modal/CouponModal";
import LoginModal from "../Modal/LoginModal";
import TermsAndConditionsCruiseLineModal from "../Modal/TermsAndConditionsCruiseLineModal";

const priceRange = PriceRange;
const FilterOffers = ({ finishedText, offers }) => {
  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState(null);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [couponModalData, setCouponModalData] = useState<boolean>(false);
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

  const departurePorts = departures?.map(({ id, attributes: { title } }) => ({
    value: id,
    label: title,
  }));

  const cruiseDestinations = destinations?.map(
    ({ id, attributes: { title } }) => ({
      value: id,
      label: title,
    })
  );

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
    <section className="p-3 md:p-[32px] lg:p-[75px]">
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
              {filteredCards.map((card: any) => (
                <OfferCard
                  key={card.id}
                  offer={card}
                  termsAndConditionsModalData={termsAndConditionsModalData}
                  setTermsAndConditionsModalData={
                    setTermsAndConditionsModalData
                  }
                  setOpenLoginModal={setOpenLoginModal}
                  setCouponModalData={setCouponModalData}
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

        {couponModalData && (
          <CouponModal
            couponModalData={couponModalData}
            setCouponModalData={setCouponModalData}
          />
        )}
      </div>
    </section>
  );
};

export default FilterOffers;