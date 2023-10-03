import React from "react";

const CruisesCard = ({ cruise }) => {
  const { imageUrl, name, description } = cruise;

  return (
    <div className="flex flex-col">
      <div className="card  bg-base-100">
        {imageUrl && (
          <img className="object-contain" height={328} src={imageUrl} alt="card img" />
        )}
        <div>
          <p className="text-sm p-2">{description}</p>
          <h5 className="text-xl border-t border-b border-cruise py-2 px-3">
            {name}
          </h5>
          <h5 className="uppercase font-bold mt-4 p-2">Explore Here</h5>
        </div>
      </div>
    </div>
  );
};

export default CruisesCard;
