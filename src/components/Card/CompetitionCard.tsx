import Link from "next/link";
import React from "react";
import { ICompetitionDto } from "../Interface/CompitionDto";

const CompetitionCard = ({ cruise }) => {
  const { id, imageUrl, name, description, status } = cruise as ICompetitionDto;


  return (
    <div className="flex flex-col">
      <div className="card  bg-base-100">
        <h3 className="text-3xl border-b border-cruise pb-5 mb-4">{name}</h3>
        <div className="w-full relative">
          {imageUrl && (
            <img
              className="object-contain w-full"
              src={imageUrl}
              alt="card img"
            />
          )}

          {status && status?.toLowerCase() === "close" && (
            <div
              className="py-3 px-4 text-black absolute top-0 text-lg"
              style={{ background: "rgba(255, 255, 255, 0.40)" }}
            >
              Closed
            </div>
          )}
        </div>

        <div>
          <p className="text-sm p-2 min-h-[80px]">{description}</p>
          <h5 className="text-lg border-t border-b border-cruise uppercase font-bold mt-4 p-3 apercu_medium">
            {status && status?.toLowerCase() === "open" && (
              <Link href={`/competition/${id}`}>ENTER HERE</Link>
            )}
            {status && status?.toLowerCase() === "close" && (
              <Link href={`/competition/${id}`}>VIEW THE RESULT</Link>
            )}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
