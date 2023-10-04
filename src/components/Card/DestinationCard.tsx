import React from "react";
import CruisesCard from "./CruisesCard";
import PageHeading from "../PageHeading";
import Link from "next/link";
import { IDestinationData } from "../Interface/DestinationLandingDto";

// Define the props type for DestinationCard
interface DestinationCardProps {
  cardData: IDestinationData;
  children?: React.ReactNode;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ cardData, children }) => {
  const { id, continent, description, list: CruiseData } = cardData;

  return (
    <>
      <PageHeading
        pageHeaderData={{ heading: continent + " Cruises", text: description }}
      />

      <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {CruiseData.map((cruise) => (
          <CruisesCard key={cruise.id} cruise={cruise} />
        ))}
      </div>

      { children && <div className="text-center my-12">
        <Link href={`/destination/${id}`}>
          <button className="bg-cruise w-48 h-12 text-white rounded text-xl apercu_medium">
            {children}
          </button>
        </Link>
      </div>
      }
    </>
  );
};

export default DestinationCard;
