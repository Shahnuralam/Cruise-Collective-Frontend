import React from "react";
import PageHeading from "../PageHeading";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import StrokeLine from "../StrokeLine";
import { DestinationCountryCard } from "./DestinationCountryCard";

const DestinationCard = (props) => {
  const { cardData, children } = props;
  const { id, continentCountries, attributes } = cardData;
  const { slug } = attributes

  return (
    <>
      <div>
        <div className="text-3xl md:text-[40px] text-black">
          {attributes?.title}
        </div>
        <div className="py-5">
          <StrokeLine />
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: attributes?.excerpt }}
          className="pt-1 max-w-4xl text-black text-base"
        ></p>
      </div>

      <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {!continentCountries?.length ? (
          <p className="text-lg">No data found</p>
        ) : (
          ""
        )}
        {continentCountries?.map((cruise) => (
          <DestinationCountryCard key={cruise.id} cruise={cruise} />
        ))}
      </div>

      {children && (
        <div className="text-center my-12">
          <PrimaryButton  href={slug !== 'multi-continent' ? `/destination/${id}` : '/multi-continent'} btnText={children} />
        </div>
      )}
    </>
  );
};

export default DestinationCard;
