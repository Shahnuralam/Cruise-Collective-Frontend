import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getOffers } from "@/queries/offers";
import Head from "next/head";
import FilterOffers from "@/components/Shared/FilterOffers";
import { useEffect, useState } from "react";

const specialOffers = () => {
  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);
  const [cardData, setCardData] = useState<any>([]);

  useEffect(() => {
    const filterData = cards?.filter((card) => card?.attributes?.is_featured);
    setCardData(filterData);
  }, [cards]);

  if (isLoading) {
    return <p className="min-h-screen p-[75px]">Loading</p>;
  }

  return (
    <main>
      <Head>
        <title>Special Offers</title>
      </Head>

      <div className="flex flex-col px-3 md:px-[32px] lg:px-[75px] pt-4 md:pt-[75px]">
        <section>
          <PageHeading
            pageHeaderData={{
              heading: "Exclusive Cruise Collective special offers and deals",
              text: "Exclusive Deals at Cruise Collective. We’ve collated a treasure trove of Special Offers to help you find the perfect discount for your next voyage. At Cruise Collective, we're all about making your dream cruise a reality without emptying your wallet. Dive into an array of unmissable deals, added-value packages, and unique journeys from the world's finest cruise lines. From tropical escapes to cultural explorations, you'll discover the perfect trip to fit your budget. So read on and prepare to set sail on an unforgettable voyage with our specially curated deals. Your next cruise adventure starts here…",
            }}
          />
        </section>
        <div className="pt-3 md:pt-[32px] lg:pt-[75px]">
          <FilterOffers
            finishedText="All special offers loaded"
            offers={{ isLoading, cards: cardData, hasMore, fetchMoreData }}
          />
        </div>
      </div>

      {/* <section className="p-3 md:p-[32px] lg:p-[75px]">
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
      </section> */}
    </main>
  );
};

export default specialOffers;
