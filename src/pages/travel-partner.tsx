import React, { useState } from "react";
import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getTravelPartner } from "@/queries/cruise-line";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import InfiniteScroll from "react-infinite-scroll-component";
import TravelPartnerCard from "@/components/Card/TravelPartnerCard";
import LoginModal from "@/components/Modal/LoginModal";
const TravelPartner = () => {
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const { cards, hasMore, fetchMoreData } = useInfiniteScroll(getTravelPartner);

  const pageHeaderData = {
    heading: "Our Travel Partners",
    text: "Exclusive Deals at Cruise Collective. We’ve collated a treasure trove of Special Offers to help you find the perfect discount for your next voyage. At Cruise Collective, we're all about making your dream cruise a reality without emptying your wallet. Dive into an array of unmissable deals, added-value packages, and unique journeys from the world's finest cruise lines. From tropical escapes to cultural explorations, you'll discover the perfect trip to fit your budget. So read on and prepare to set sail on an unforgettable voyage with our specially curated deals. Your next cruise adventure starts here…",
  };

  return (
    <div className="px-6 xl:px-4 my-[75px] container mx-auto">
      <PageHeading pageHeaderData={pageHeaderData} />
      <InfiniteScroll
        dataLength={cards?.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={hasMore}
        loader=""
        endMessage={<DataLoadingFinishedText text="All Travel Partner offers loaded" />}
      >
        <div className="card-container my-10 grid md:grid-cols-2 grid-cols-1 gap-8">
          {cards?.map((card, indx) => (
            <TravelPartnerCard
              key={card.id}
              card={card}
              setOpenLoginModal={setOpenLoginModal}
            />
          ))}
        </div>
      </InfiniteScroll>

      {openLoginModal && (
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
    </div>
  );
};

export default TravelPartner;
