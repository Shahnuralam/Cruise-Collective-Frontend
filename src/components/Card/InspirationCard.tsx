import Link from "next/link";
import React from "react";

const InspirationCard = ({ inspiration }) => {
  const { id, name, image, description } = inspiration;

  return (
    <div className="flex flex-col">
      <div className="card">
        <h3 className="text-3xl border-b border-cruise pb-5">{name}</h3>
          {image && (
            <img className="object-contain my-3" height={328} src={image} alt="card img" />
          )}
        <div>
          <p className="text-sm p-2">{description}</p>
          <h5 className="text-xl border-t border-b border-cruise uppercase font-bold mt-4 p-3 apercu_medium">
            <Link href={`/inspiration/${id}`}>Read Full Article</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
