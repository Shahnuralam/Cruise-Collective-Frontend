import DropDown from "@/components/DropDown";
import { PriceRange } from "@/components/Interface/FilterDto";
import PageHeading from "@/components/PageHeading";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import CruiseLineOffer from "@/components/CruiseLine/CruiseLineOffer";
import FilterOffers from "@/components/Shared/FilterOffers";
import { getDestinationById } from "@/queries/destinations";
import StrokeLine from "@/components/StrokeLine";
import { getOffers } from "@/queries/offers";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
const priceRange = PriceRange;
const CountryLandingPage = () => {
  const [country, setCountry] = useState<any>({});
  const [cardData, setCardData] = useState<any>([]);
  const { isLoading, cards, hasMore, fetchMoreData } =
    useInfiniteScroll(getOffers);

  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {

    const fetchData = async () => {
      const { data } = await getDestinationById(id as string, "country");
      console.log(data);
      setCountry(data);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const filterData = cards?.filter((card) =>
      card?.attributes?.destinations?.data?.some((item) => item?.id === Number(id))
    );
    setCardData(filterData);
  }, [id, cards]);

  if (isLoading) {
    return <p className="min-h-screen p-[75px]">Loading</p>;
  }


  return (
      <div className="p-3 md:px-[40px] lg:px-[75px] pt-[75px]">
        <section>
          <div>
            <div className="text-3xl md:text-[32px] text-black">
              {country?.attributes?.title}
            </div>
            <div className="py-5">
              <StrokeLine />
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: country?.attributes?.excerpt }}
              className="pt-1 max-w-4xl text-black text-base text-justify"
            ></p>
          </div>
        </section>
        <div className="pt-3 md:pt-[32px] lg:pt-[75px]">
          <FilterOffers finishedText="All offers loaded" offers={{ isLoading, cards: cardData, hasMore, fetchMoreData }} />
        </div>
      </div>
  );
};

export default CountryLandingPage;
