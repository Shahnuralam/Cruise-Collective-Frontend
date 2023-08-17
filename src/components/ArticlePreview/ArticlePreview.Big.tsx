import React, { useMemo, useState } from "react";
import { IArticlePreviewProps } from "./index";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import RoundedBtn from "@/atoms/RoundedBtn";
import PlayCircleIcon from "@/assets/svg/play-circle.svg";
import clsx from "clsx";
import { mapPermaLink } from "@/utils";
import Link from "next/link";

export const ArticlePreviewBig: React.FC<any> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const item = props.item.attributes;
  const contentType = mapPermaLink(item.content_type.data.attributes.name);

  const isVideo = useMemo(() => {
    return Boolean(item?.video && item?.video?.videoId);
  }, [item?.video]);

  return (
    <>
      {isVideo && isOpen && (
        <ModalVideo
          channel="youtube"
          allowFullScreen={false}
          isOpen={isOpen}
          videoId={item.video?.videoId as string}
          onClose={() => setOpen(false)}
        />
      )}
      <Link href={`${contentType.path}/${props.item.id}`}>
        <div className="flex flex-col gap-4 w-full justify-start items-center text-[#4f6355]">
          {/** image */}
          <div className="block w-[17.875rem] h-[17.875rem] xl:w-[20rem] xl:h-[20rem] 2xl:w-[30rem] 2xl:h-[30rem] relative group">
            {item?.images?.data && (
              <Image
                src={item?.images?.data[0]?.attributes.url}
                alt={item.name}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="17.875rem"
              />
            )}

            {isVideo && (
              <div
                className={clsx(
                  "transition-all ease-in-out duration-300 absolute top-0 left-0 text-white xl:opacity-0 group-hover:opacity-100 bg-black bg-opacity-20 flex justify-center items-center w-full h-full",
                  {
                    "!opacity-100": isOpen,
                  }
                )}
              >
                <button
                  type="button"
                  title="Play video"
                  onClick={() => setOpen(true)}
                >
                  <PlayCircleIcon viewBox="0 0 70 70" />
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-start items-center gap-2 flex-1">
            <h4
              dangerouslySetInnerHTML={{ __html: item.name }}
              className="text-center font-medium text-xl lg:text-2xl"
            />

            <p className="max-w-[20rem] text-center lg:text-lg text-black">
              {item.excerpt}
            </p>
          </div>

          <div className="mt-5">
            <RoundedBtn
              useLink
              href={`${contentType.path}/${props.item.id}`}
              title={contentType.buttonText}
              variant="outline-light-green"
            />
          </div>
          {Boolean(item?.moreBtn && item?.moreBtn?.action && isVideo) && (
            <div className="mt-5">
              <RoundedBtn
                title={
                  item?.moreBtn?.text ||
                  (item?.moreBtn?.action === "play" ? "Watch now" : "More")
                }
                variant="outline-light-green"
                onClick={() => setOpen(true)}
              />
            </div>
          )}
        </div>
      </Link>
    </>
  );
};
