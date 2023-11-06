import React from "react";
import PageHeading from "../PageHeading";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import StrokeLine from "../StrokeLine";
import { DestinationCountryCard } from "./DestinationCountryCard";

const DestinationCard = (props) => {
  const { cardData, source, children } = props;
  const { id, continentCountries, attributes } = cardData;
  console.log(continentCountries);
  const { slug } = attributes;

  return (
    <>
      <div>
        <div className="text-3xl md:text-[32px] text-black">
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
          <p className="text-lg">Coming Soon </p>
        ) : (
          ""
        )}
        {source === "four"
          ? continentCountries
              ?.slice(0, 4)
              ?.map((cruise) => (
                <DestinationCountryCard key={cruise.id} cruise={cruise} />
              ))
          : continentCountries?.map((cruise) => (
              <DestinationCountryCard key={cruise.id} cruise={cruise} />
            ))}
      </div>

      {children && (
        <div className="text-center my-12">
          <PrimaryButton
            href={
              slug !== "multi-continent"
                ? `/destination/${id}`
                : `/multi-continent/${id}`
            }
            btnText={children}
          />
        </div>
      )}
    </>
  );
};

export default DestinationCard;
