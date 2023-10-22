import Link from "next/link";
import React from "react";
import { ICompetitionDto } from "../Interface/CompitionDto";
import { useRouter } from "next/router";

const CompetitionCard = ({ cruise }) => {
  const router = useRouter();
  const { id, featuredImage, title, excerpt, status } =
    cruise as ICompetitionDto;

  const navigateToDetailPage = () => {
    router.push(`/competition/${id}`);
  };

  return (
    <div className="flex flex-col">
      <div className="card">
        <h3 className="text-3xl border-b border-cruise pb-5 mb-4">
          <Link href={`/competition/${id}`}>{title}</Link>
        </h3>
        <div className="w-full relative hover:scale-105 transition duration-300">
          {featuredImage && (
            <img
              onClick={navigateToDetailPage}
              className="object-contain w-full transform cursor-pointer"
              src={featuredImage}
              alt="card img"
            />
          )}

          {status && status?.toLowerCase() === "closed" && (
            <div
              className="py-3 px-4 text-black absolute top-0 text-lg"
              style={{ background: "rgba(255, 255, 255, 0.40)" }}
            >
              Closed
            </div>
          )}
        </div>

        <div>
          {/* <p className="text-sm line-clamp-5"></p> */}
          <div className="h-20">
            <p className="line-clamp-3 mt-4 text-lg leading-6">{excerpt}</p>
          </div>
          <h5 className="text-lg border-t border-b border-cruise uppercase font-bold mt-4 p-3 apercu_medium">
            {status && status?.toLowerCase() === "open" && (
              <Link href={`/competition/${id}`}>ENTER HERE</Link>
            )}
            {status?.toLowerCase() === "closed" && (
              <Link href={`/competition/${id}`}>VIEW THE RESULT</Link>
            )}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
