import Link from "next/link";
import React from "react";
import { ICompetitionDto } from "../Interface/CompitionDto";
import { useRouter } from "next/router";

const CompetitionCard = ({ competition }) => {
  const router = useRouter();
  const {id, attributes} = competition
  const { featured_image, title, excerpt, status } = attributes;

    const featuredImage = featured_image?.data?.attributes?.url;


  const navigateToDetailPage = () => {
    router.push(`/competition/${id}`);
  };

  return (
    <div className="card group">
      <h3 className="text-2xl border-b border-cruise pb-5 mb-4 group-hover:underline decoration-2">
        <Link className="apercu_regular_pro" href={`/competition/${id}`}>{title}</Link>
      </h3>
      <div className="w-full relative hover:scale-105 transition duration-300">
        {featuredImage && (
          <img
            onClick={navigateToDetailPage}
            className="w-full transform cursor-pointer"
            src={featuredImage}
            alt="card img"
            style={{ height: "328px" }}
          />
        )}

        {!status && (
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
          <p
            className="line-clamp-3 mt-4 text-lg leading-6"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></p>
        </div>
        <h5 className="text-lg border-t border-b border-cruise uppercase font-bold mt-4 p-3 apercu_medium">
          {status && (
            <Link className="group-hover:border-b" href={`/competition/${id}`}>
              ENTER HERE
            </Link>
          )}
          {!status && (
            <Link className="group-hover:border-b" href={`/competition/${id}`}>
              VIEW THE RESULT
            </Link>
          )}
        </h5>
      </div>
    </div>
  );
};

export default CompetitionCard;
