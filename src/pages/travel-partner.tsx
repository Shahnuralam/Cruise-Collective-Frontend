import React, { useState } from "react";
import PageHeading from "@/components/PageHeading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getTravelPartner } from "@/queries/cruise-line";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";
import InfiniteScroll from "react-infinite-scroll-component";
import TravelPartnerCard from "@/components/Card/TravelPartnerCard";
import LoginModal from "@/components/Modal/LoginModal";
import Link from "next/link";
const TravelPartner = () => {
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const { cards, hasMore, fetchMoreData } = useInfiniteScroll(getTravelPartner);

  const pageHeaderData = {
    heading: "Our Travel Partners",
    text: "From savings on travel insurance to deals on portside parking here you’ll find our carefully curated selection of essential services enhancing every aspect of your journey. Our partners are here to elevate your travel experience and ensure a seamless voyage from start to finish. Welcome to enhanced travel with Cruise Collective.",
  };

  return (
    
    <div className="px-6 xl:px-4 my-[75px] container mx-auto">
      <PageHeading pageHeaderData={pageHeaderData} />
      <InfiniteScroll
        dataLength={cards?.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={hasMore}
        loader=""
        endMessage={
          <DataLoadingFinishedText text="All Travel Partner offers loaded" />
        }
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
