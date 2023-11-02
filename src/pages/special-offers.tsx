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
import Head from "next/head";
import FilterOffers from "@/components/Shared/FilterOffers";
const priceRange = PriceRange;

const specialOffers = () => {


  return (
    <main>
      <Head>
        <title>Special Offers</title>
      </Head>


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
      </div>


      <FilterOffers finishedText="All special offers loaded" />

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
