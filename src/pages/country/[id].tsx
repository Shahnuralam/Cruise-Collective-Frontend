import DropDown from "@/components/DropDown";
import { PriceRange } from "@/components/Interface/FilterDto";
import PageHeading from "@/components/PageHeading";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import CruiseLineOffer from "@/components/CruiseLine/CruiseLineOffer";
import FilterOffers from "@/components/Shared/FilterOffers";
import { getDestinationById } from "@/queries/destinations";
import StrokeLine from "@/components/StrokeLine";
const priceRange = PriceRange;
const CountryLandingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [country, setCountry] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDestinationById(id as string, "country");
      console.log(data);
      setCountry(data);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="p-3 md:px-[40px] lg:px-[75px] pt-[75px]">
        <section>
          <div>
            <div className="text-3xl md:text-[40px] text-black">
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
      </div>

      <FilterOffers finishedText="All offers loaded" />
    </>
  );
};

export default CountryLandingPage;
