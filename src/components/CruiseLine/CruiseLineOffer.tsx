// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { NextPage } from "next";
import { useEffect, useState } from "react";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import LoginModal from "@/components/Modal/LoginModal";
import CouponModal from "@/components/Modal/CouponModal";
import { getOffers } from "@/queries/offers";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Item from "../Item";
import OfferCard from "../Card/OfferCard";

const CruiseLineOffer = () => {
  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState(null);

  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [couponModalData, setCouponModalData] = useState<boolean>(false);

  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);

  return (
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
              <DataLoadingFinishedText text="All cruises loaded" />
            ) : (
              ""
            )
          }
        >
          <div className="flex flex-col">
            {cards.map((card, indx) => (
              <OfferCard
                key={indx}
                offer={card}
                termsAndConditionsModalData={termsAndConditionsModalData}
                setTermsAndConditionsModalData={setTermsAndConditionsModalData}
                index={indx}
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
  );
};

export default CruiseLineOffer;
