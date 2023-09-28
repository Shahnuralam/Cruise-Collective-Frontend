import FooterRightImage from '@/layout/Footer/FooterRightImage';
import React from 'react';
import StrokeLine from '../StrokeLine';

const ContinentCard = ({continent}) => {

  const { countryName, description } = continent;
  return (
    <>
      <div className="card-continent p-7">
        <div>
       
        <div className="flex py-3 justify-center">
            <FooterRightImage></FooterRightImage>
          </div>

          <h3 className="text-[40px] font-bold text-center">{countryName}</h3>
          <div className="flex justify-center py-2">
            <StrokeLine></StrokeLine>
          </div>

          <p className="text-sm text-center">
            { description }
          </p>

          <div className="text-center mt-7">
            <button
              className="bg-cruise py-3 px-10 text-white rounded text-xl"
            >
              View Cruises
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContinentCard;