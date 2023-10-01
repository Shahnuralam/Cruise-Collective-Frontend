import Link from "next/link";
import React from "react";

const InspirationCard = ({ inspiration }) => {
  const { id, name, image, description } = inspiration;

  return (
    <div className="flex flex-col">
      <div className="card  bg-base-100">
        <h3 className="text-3xl border-b border-cruise pb-5">{name}</h3>

        <div className="py-4">
          {image && <img height={327} src={image} alt="card img" />}
        </div>
        <div>
          <p className="text-sm p-2">{description}</p>
          <h5 className="text-xl border-t border-b border-cruise uppercase font-bold mt-4 p-2">
            <Link href={`/inspiration/${id}`}>Read Full Article</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
