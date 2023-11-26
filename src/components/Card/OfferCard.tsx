import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const OfferCard = ({
  offer,
  termsAndConditionsModalData,
  setTermsAndConditionsModalData,
  setOpenLoginModal,
  source,
}) => {
  
  const { id, attributes } = offer;

  const {
    slug,
    nights,
    price,
    offer_price,
    expiry_date,
    title,
    departure,
    departure_date,
    destinations,
  } = attributes;
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const formattedExpiryDate = formatDate(expiry_date);
  const { data: session } = useSession();
  // Check if the offer has expired
  // const hasExpired = new Date(expiry_date) < new Date();

  // // Do not render the offer card if it has expired
  // if (hasExpired) {
  //   return null;
  // }

  return (
    <Link href={`/cruise-line-card-detail/${slug}`}>
      <div className="cruise-card grid grid-cols-1 md:grid-cols-3 bg-cruise-texture mb-6">
        <div
          className={`cruise-image bg-center bg-cover cruise-card-bg-img h-52 sm:h-96 md:h-auto relative`}
          style={{
            backgroundImage: `url(${attributes?.featured_image?.data[0]?.attributes.url})`,
          }}
        >
          <div
            className="absolute top-0 px-3 md:px-7"
            style={{ background: "rgba(255, 255, 255, 0.30)" }}
          >
            {/* Make the logo dynamic */}
            <img
              src={
                attributes?.cruise_line?.data?.attributes?.logo?.data
                  ?.attributes?.url
              }
              alt=""
              width="150"
              height="150"
            />
          </div>
        </div>

        {/* Details */}
        <div className="cruise-details col-span-2 w-full flex flex-col p-2 md:p-5 justify-between">
          {/* Card Header */}
          <div className="card-header bg-[#EFEDE4] p-4 relative">
            <div className="flex bg-dark-icon-offer flex-col md:flex-row">
              <div className="text-black tracking-[1.54px] mb-5 w-full md:w-3/5">
                <div className="grid grid-cols-2 md:grid-cols-1">
                  <p className="text-black !tracking-[0px] text-base md:text-2xl mb-3 font-normal">
                    {nights} Nights
                  </p>
                  <div className="text-sm block  md:hidden uppercase apercu_medium mb-3">
                    DEPARTING: {departure_date}
                  </div>
                </div>

                <div className="text-2xl !tracking-[0px]  md:text-[24px] mb-4">
                  {title}
                </div>
                {/* <div>EXPIRES {cruiseLineItem?.expires}</div> */}
                <div className="text-sm hidden md:block uppercase apercu_medium mb-3">
                  DEPARTING: {departure_date}
                </div>
                <div className="text-sm uppercase apercu_medium mb-3">
                  DEPARTURE PORT: {departure?.data?.attributes?.title}
                </div>
                <div className="text-sm uppercase apercu_medium mb-5">
                  DESTINATIONS:{" "}
                  {destinations?.data
                    ?.filter((item) => item?.attributes?.type === "place")
                    .map((item, indx, array) => (
                      <span key={item.id}>
                        {item?.attributes?.title}
                        {indx !== array?.length - 1 && (
                          <span className="mx-1 relative -top-[4px]">.</span>
                        )}
                      </span>
                    ))}
                  {/* {(source === "special_offer" || source === "cruise_line") &&
                  destinations?.data?.map((item, indx) => (
                    <span key={item.id}>
                      {item?.attributes?.title}
                      {indx !== destinations?.data?.length - 1 && (
                        <span className="mx-1 relative -top-[4px]">.</span>
                      )}
                    </span>
                  ))} */}
                </div>
              </div>
              <div className="flex w-full justify-center md:w-2/5">
                <div className="">
                  <div className="uppercase text-xs font-bold pl-4 apercu_medium">
                    From
                  </div>
                  <div className="flex justify-center md:justify-center">
                    <div
                      className={`text-xl md:text-2xl xl:text-2xl text-cruise mr-7 ${
                        offer_price ? "line-through" : ""
                      }`}
                    >
                      £{price.toLocaleString()}
                    </div>
                    <div className="text-xl md:text-2xl xl:text-2xl">
                      {offer_price && <>£{offer_price.toLocaleString()}</>}
                    </div>
                  </div>

                  {/* Button Section */}
                  <div className="button-section pt-7 pb-3">
                    {!session?.user?.email && (
                      <>
                        <button className="border-cruise border-b-[3px] text-black hover:bg-cruise ">
                          <label
                            onClick={(e) => {
                              setOpenLoginModal(true);
                              e.stopPropagation();
                            }}
                            className="cursor-pointer tex-xl xl:text-[27px] block py-1.5 px-8"
                            htmlFor="login_modal_id"
                          >
                            Login to claim
                          </label>
                        </button>
                      </>
                    )}
                    {session?.user?.email && (
                      <>
                        {/* <Link href={`/cruise-line-card-detail/${id}`}> */}
                        <button className="border-[#FF9A31] border-b-[3px] py-2 px-7 text-black tex-xl xl:text-[27px] hover:bg-cruise ">
                          View More
                        </button>
                        {/* </Link> */}
                      </>
                    )}
                  </div>
                  <div className="px-2 py-1 font-semibold text-sm tracking-[1.54px] text-center apercu_medium uppercase">
                  EXPIRES {formattedExpiryDate}
                  </div>
                  {/* <div className="absolute right-5">
                    <SvgCruiseImage />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OfferCard;
