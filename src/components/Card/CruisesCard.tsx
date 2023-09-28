import React from "react";

const CruisesCard = ({ cruise }) => {
  const { imageUrl, countryName, description } = cruise;
console.log(imageUrl);
  return (
    <>
      <div className="card  bg-base-100 hover:shadow-xl">
        {imageUrl && <img height={327} src={imageUrl} alt="card img" />}
        <div>
          <p className="text-sm p-2">{description}</p>
          <h5 className="text-xl border-t border-b border-cruise py-2 px-3">
            {countryName}
          </h5>
          <h5 className="uppercase font-bold mt-4 p-2">Explore Here</h5>
        </div>
      </div>
    </>
  );
};

export default CruisesCard;
