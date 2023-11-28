import React, { useEffect, useState } from "react";
import PageHeading from "../PageHeading";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import StrokeLine from "../StrokeLine";
import { DestinationCountryCard } from "./DestinationCountryCard";
const shuffleArray = (array) => {
  let newArray = array?.slice();
  for (let i = newArray?.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
const DestinationCard = (props) => {
  const { cardData, source, children } = props;
  const { id, continentCountries, attributes } = cardData;

  const [shuffledCountries, setShuffledCountries] = useState<any>([]);

  useEffect(() => {
    // Shuffle the array when source or continentCountries changes
    setShuffledCountries(shuffleArray(continentCountries));
  }, [continentCountries]);

  const { slug } = attributes;

  return (
    <>
      <div>
        <div className="text-2xl md:text-[32px] text-black">
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
        {source == "four" &&
        slug !== "multi-continent" &&
        !continentCountries?.length ? (
          <p className="text-lg font-bold">Coming Soon...</p>
        ) : (
          ""
        )}
        {source === "four"
          ? shuffledCountries
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
                ? `/destination/${slug}`
                : `/multi-continent/${slug}`
            }
            btnText={children}
          />
        </div>
      )}
    </>
  );
};

export default DestinationCard;
