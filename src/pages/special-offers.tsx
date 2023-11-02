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
import { Key, useEffect, useState } from "react";
import CruiseLineBackUp from "./cruise-line-backup";
import Select from "react-select";
import CruiseLineOffer from "@/components/CruiseLine/CruiseLineOffer";
import { useRouter } from "next/router";
import { getDepartures, getDestinations, getSeasons } from "@/queries";
import { useQuery } from "react-query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getOffers } from "@/queries/offers";
import InfiniteScroll from "react-infinite-scroll-component";
import OfferCard from "@/components/Card/OfferCard";

const specialOffers = () => {


  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState(null);

  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [couponModalData, setCouponModalData] = useState<boolean>(false);

  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);

  // const departurePorts = DeparturePort;
  // const cruiseDestinations = CruiseDestinations;
  const priceRange = PriceRange;
  //const seasons = SeasonData;
  
  const [selectedPort, setSelectedPort] = useState<any>(null);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>(null);
  const [selectedSeason, setSelectedSeason] = useState<any>(null);
  const { isLoading: isLoadingDepartures, data: departures, refetch: refetchDepartures } = useQuery(
    "departures",
    () => getDepartures(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  const { isLoading: isLoadingSeasons, data: season, refetch: refetchSeasons } = useQuery(
    "seasons",
    () => getSeasons(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );
  const { isLoading: isLoadingDestinations, data: destinations, refetch: refetchDestinations } = useQuery(
    "destinations",
    () => getDestinations(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );
  // const { isLoading: isLoadingPrices, data: offers, refetch: refetchOffers } = useQuery(
  //   "Offer",
  //   () => getprices(),
  //   {
  //     refetchOnWindowFocus: false,
  //     enabled: true,
  //   }
  // );

  // console.log('s', departures);
   console.log('s', season);
    console.log('c',cards);

  const departurePorts = departures?.map(({ id, attributes: { title } }) => ({
    value: id,
    label: title,
  }));

  const cruiseDestinations = destinations?.map(({ id, attributes: { title } }) => ({
    value: id,
    label: title,
  }));

  const seasons = season?.map(({ id, attributes: { title } }) => ({
    value: id,
    label: title,
  }));
  // const priceRange = offers?.map(({ id, attributes: { offer_price  } }) => ({
  //   value: id,
  //   label: offer_price
  //   ,
  // }));

  // useEffect(() => {

  //    const d = cards.filter(e => e?.attributes?.destinations?.data?.attributes?.title == selectedDestination?.lebel);
  //    console.log(d);
  // }, [selectedDestination])

  const filteredCards = cards.filter((card) => {
    if (selectedPort) {
      return card?.attributes?.departure?.data?.attributes?.title === selectedPort.label;
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
      return card?.attributes?.season?.data?.attributes?.title === selectedSeason.label;
    }
    
    // If none of the conditions are met, include the card in the result.
    return true;
  });
    
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
              text: "",
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

      <section>
        {/* <CruiseLineOffer /> */}


        <main className="flex flex-col p-3 md:p-[32px] lg:p-[75px]">
          {/* <Head>
        <title>Cruise Cards</title>
      </Head> */}

          {isLoading && <>Loading...</>}

          <div className="flex flex-col">

            <InfiniteScroll
              dataLength={cards?.length} //This is important field to render the next data
              next={fetchMoreData}
              hasMore={hasMore}
              loader=""
              endMessage={
                cards?.length ? (
                  <DataLoadingFinishedText text="All special offers loaded" />
                ) : (
                  ""
                )
              }
            >
              <div className="flex flex-col">
                {filteredCards.map((card: { id: Key | null | undefined; }, indx: any) => (
                  <OfferCard
                    key={card.id}
                    offer={card}
                    termsAndConditionsModalData={termsAndConditionsModalData}
                    setTermsAndConditionsModalData={setTermsAndConditionsModalData}
                    setOpenLoginModal={setOpenLoginModal}
                    setCouponModalData={setCouponModalData}
                  ></OfferCard>
                ))}
              </div>
            </InfiniteScroll>
          </div>

          {/* Terms and conditions modal based on cruise line item */}

          {termsAndConditionsModalData && (
            <TermsAndConditionsCruiseLineModal
              termsAndConditionsModalData={termsAndConditionsModalData}
              setTermsAndConditionsModalData={setTermsAndConditionsModalData}
            ></TermsAndConditionsCruiseLineModal>
          )}

          {/* Login modal */}
          {openLoginModal && (
            <LoginModal
              openLoginModal={openLoginModal}
              setOpenLoginModal={setOpenLoginModal}
            />
          )}

          {/* Coupon modal */}
          {couponModalData && (
            <CouponModal
              couponModalData={couponModalData}
              setCouponModalData={setCouponModalData}
            />
          )}
        </main>

      </section>
    </main>
  );
};

export default specialOffers;
