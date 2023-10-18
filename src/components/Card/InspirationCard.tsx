import Link from "next/link";
import React from "react";

const InspirationCard = ({ inspiration }) => {
  const {
    attributes: { id, title, excerpt, imageUrl },
  } = inspiration;


  return (
    <div className="flex flex-col">
      <div className="card">
        <h3 className="text-3xl border-b border-cruise pb-5">{title}</h3>

        {imageUrl && (
          <img
            className="object-contain my-3"
            height={328}
            src={imageUrl}
            alt={title}
          />
        )}
        {!imageUrl && (
          <img
            className="object-contain"
            height={328}
            src="/dummy/inspiration/Rectangle (7).png"
            alt={title}
          />
        )}

  
        <div>
          <p className="text-sm p-2">{excerpt}</p>
          <h5 className="text-xl border-t border-b border-cruise uppercase font-bold mt-4 p-3 apercu_medium">
            <Link href={`/inspiration/${id}`}>Read Full Article</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
