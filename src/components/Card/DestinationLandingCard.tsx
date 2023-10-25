import React from "react";
import PageHeading from "../PageHeading";
import Link from "next/link";
import { IDestinationData } from "../Interface/DestinationLandingDto";
import DestinationCruiseCard from "./DestinationCruiseCard";
import PrimaryButton from "../PrimaryButton";

// Define the props type for DestinationCard
interface DestinationCardProps {
  cardData: IDestinationData;
  children?: React.ReactNode;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  cardData,
  children,
}) => {
  const { id, continent, description, list: CruiseData } = cardData;

  return (
    <>
      <PageHeading
        pageHeaderData={{ heading: continent + " Cruises", text: description }}
      />

      <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {CruiseData.map((cruise) => (
          <DestinationCruiseCard key={cruise.id} cruise={cruise} />
        ))}
      </div>

      {children && (
        <div className="text-center my-12">
          <PrimaryButton href={`/destination/${id}`} btnText={children} />
        </div>
      )}
    </>
  );
};

export default DestinationCard;
