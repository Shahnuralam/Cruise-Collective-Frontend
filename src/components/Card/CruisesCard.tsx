import React from "react";

const CruisesCard = ({ cruise }) => {
  const { imageUrl, name, description } = cruise;

  return (
    <div className="flex flex-col">
      <div className="card bg-base-100">
        {imageUrl && (
          <img
            className="object-contain"
            height={328}
            src={imageUrl}
            alt="card img"
          />
        )}
        <div>
          <p className="p-2 text-black text-sm md:text-base">{description}</p>
          <h5 className="text-3xl border-t border-b border-cruise py-2 px-4">
            {name}
          </h5>
          <h5 className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">Explore Here</h5>
        </div>
      </div>
    </div>
  );
};

export default CruisesCard;
