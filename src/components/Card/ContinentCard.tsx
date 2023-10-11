import FooterRightImage from "@/layout/Footer/FooterRightImage";
import React from "react";
import StrokeLine from "../StrokeLine";
import Link from "next/link";
import ContinentImg from "@/assets/svg/continent-map.svg";
const ContinentCard = ({ continentData }) => {
  const { id, continent, description } = continentData;
  return (
    <>
      <div className="flex items-center">
        <div className="mr-6">
          <ContinentImg />
        </div>
        <div className="h-8">
          <Link
            className="text-lg md:text-[24px] hover:text-cruise hover:border-cruise hover:border-b"
            href={`/destination/${id}`}
          >
            {continent}
          </Link>
        </div>
      </div>

      {/* <div className="card-continent p-1 md:p-7">
        <div>
          <div className="flex py-3 justify-center">
            <FooterRightImage></FooterRightImage>
          </div>

          <h3 className="text-[40px] text-center text-black">{continent}</h3>
          <div className="flex justify-center py-2">
            <StrokeLine></StrokeLine>
          </div>

          <p className="text-sm md:text-base text-center">{description}</p>

          <div className="text-center mt-7">
            <Link href={`/destination/${id}`}>
              <button className="bg-cruise w-48 h-12 text-white rounded text-xl border border-cruise apercu_medium uppercase">
                View Cruises
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContinentCard;
