import React from "react";

const InterestCard = ({ interest }) => {
  const {
    attributes: { title, excerpt, imageUrl },
  } = interest;

  return (
    <div className="flex flex-col">
      <div className="card">
        {imageUrl && (
          <img
            className="object-contain"
            height={328}
            src={imageUrl}
            alt={title}
          />
        )}
        {!imageUrl && (
          <img
            className="object-contain"
            height={328}
            src="/dummy/interest/Rectangle (8).png"
            alt={title}
          />
        )}
        <div>
          <p className="p-2 text-black text-sm md:text-base">{excerpt}</p>
          <h5 className="text-3xl border-t border-b border-cruise py-2 px-4">
            {title}
          </h5>
          <h5 className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
            Explore Here
          </h5>
        </div>
      </div>
    </div>
  );
};

export default InterestCard;
