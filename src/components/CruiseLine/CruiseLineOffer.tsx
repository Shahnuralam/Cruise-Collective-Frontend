// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck


import {useState } from "react";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import LoginModal from "@/components/Modal/LoginModal";
import { getOffers } from "@/queries/offers";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

import OfferCard from "../Card/OfferCard";

const CruiseLineOffer = () => {
  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState(null);

  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

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
              <DataLoadingFinishedText text="All special offers loaded" />
            ) : (
              ""
            )
          }
        >
          <div className="flex flex-col">
            {cards?.map((card) => (
              <OfferCard
                key={card.id}
                offer={card}
                termsAndConditionsModalData={termsAndConditionsModalData}
                setTermsAndConditionsModalData={setTermsAndConditionsModalData}
                setOpenLoginModal={setOpenLoginModal}
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
    </main>
  );
};

export default CruiseLineOffer;
