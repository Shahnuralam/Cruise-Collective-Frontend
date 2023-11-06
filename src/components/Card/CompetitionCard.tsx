import Link from "next/link";
import React from "react";
import { ICompetitionDto } from "../Interface/CompitionDto";
import { useRouter } from "next/router";
import CardImage from "./CardImage";

const CompetitionCard = ({ competition }) => {
  const router = useRouter();
  const { id, attributes } = competition;

  const { featured_image, title, excerpt, status } = attributes;

  const featuredImage = featured_image?.data?.attributes?.url;

  const navigateToDetailPage = () => {
    router.push(`/competition/${id}`);
  };

  return (
    <div className="card group">
      <h3 className="text-2xl border-b border-cruise pb-5 mb-4 group-hover:underline decoration-2">
        <Link href={`/competition/${id}`}>{title}</Link>
      </h3>
      <div className="w-full relative">
        <div className="w-full h-[20.375rem] relative">
          <CardImage
            navigateToDetailPage={navigateToDetailPage}
            featuredImage={featuredImage}
            title={title}
          />
        </div>

        {!status && (
          <div
            className="py-3 px-4 text-black absolute top-0 text-lg"
            style={{ background: "rgb(255 255 255 / 27%)" }}
          >
            Closed
          </div>
        )}
      </div>

      <div>
        <div className="h-20 px-4">
          <p
            className="line-clamp-3 mt-4 text-lg leading-6"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></p>
        </div>
        <div className="text-lg border-t border-b border-cruise uppercase font-bold mt-4 p-4 apercu_medium">
          {status && (
            <Link
              className="group-hover:border-b tracking-[3px]"
              href={`/competition/${id}`}
            >
              ENTER HERE
            </Link>
          )}
          {!status && (
            <Link
              className="group-hover:border-b tracking-[3px]"
              href={`/competition/${id}`}
            >
              VIEW THE RESULT
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
