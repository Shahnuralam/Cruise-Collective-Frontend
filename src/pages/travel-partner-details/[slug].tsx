import DarkCruiseCollectiveImg from "@/components/DarkCruiseCollectiveImg";
import LoginModal from "@/components/Modal/LoginModal";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import Seo from "@/components/Seo";
import BgImage from "@/components/Shared/BgImage";
import { getTravelOfferBySlug } from "@/queries/offers";
import { formatDate } from "@/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const TravelPartnerDetails = () => {
  const scrollIntoViewRef = useRef<HTMLDivElement | null>(null);
  const [travelOffer, setTravel] = useState<any>({});
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const router = useRouter();
  const { slug } = router.query;
  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState({});
  const { data: session } = useSession();

  const getTravelOfferDetail = async () => {
    const { data } = await getTravelOfferBySlug(slug);
    console.log(data[0]?.attributes);
    setTravel(data[0]?.attributes);
  };

  useEffect(() => {
    if (slug) getTravelOfferDetail();
  }, [slug]);

  const goToPermaLink = (e, href) => {
    // href="https://www.google.com"
    e.preventDefault();
    window.open(href, "_blank");
  };

  const setScrollIntoViewBody = () => {
    if (scrollIntoViewRef.current) {
      scrollIntoViewRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {travelOffer?.seo && <Seo data={travelOffer.seo} />}
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="bg-image-height w-full md:w-4/6 relative">
            <BgImage
              bgImgUrl={travelOffer.featured_image?.data[0]?.attributes.url}
            />
            <div
              className="absolute top-0 px-3 md:px-7"
              style={{ background: "rgba(255, 255, 255, 0.30)" }}
            >
              {/* Make the logo dynamic */}
              <img
                src={travelOffer?.logo?.data?.attributes?.url}
                alt=""
                width="150"
                height="150"
              />
            </div>
          </div>
          <div className="bg-cruise-texture  p-3 md:p-7 lg:p-[75px] w-full md:w-2/6">
            <p className="max-w-[472px] text-[32px] text-black py-2 mt-4">
              {travelOffer?.title}
            </p>
            <h4 className="text-xs uppercase apercu_medium_pro  text-black mt-5 mb-3">
              ENJOY {travelOffer?.offer} OFF | Expires{" "}
              {formatDate(travelOffer?.expires_date)}
            </h4>
            <div className="mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="210"
                height="3"
                viewBox="0 0 210 3"
                fill="none"
              >
                <path
                  d="M0.671875 1.79736L209.084 1.79738"
                  stroke="#FF9A31"
                  strokeWidth="1.73"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <div className="pt-4 pb-8">
              <p
                className="!text-lg	 pt-8 "
                dangerouslySetInnerHTML={{
                  __html: travelOffer?.excerpt,
                }}
              ></p>
            </div>
            <div className="mt-6">
              <button
                onClick={setScrollIntoViewBody}
                className="border text-xs	 apercu_medium_pro border-[#FF9A31] py-3 px-8 uppercase tracking-[3px] hover:bg-[#FF9A31] "
              >
                Book Below
                {/* {fullScreenHeader?.btnText} */}
              </button>
            </div>
            <div className="flex justify-end">
              <DarkCruiseCollectiveImg />
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 md:container md:mx-auto" ref={scrollIntoViewRef}>
        <div className="max-w-[850px] mx-auto">
          <p
            className="pb-8 text-xl md:text-lg"
            dangerouslySetInnerHTML={{ __html: travelOffer?.description }}
          ></p>
          <div className="border-[#FF9A31] border-[2px] p-[25px] flex">
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold mb-4">
                Travel Partner Offer Details
              </h2>
              <ul className="list-disc text-xl md:text-lg pl-8">
                <li>Offer: {travelOffer?.offer}</li>

                {/* <li>
                  {travelOffer?.cruise_line?.data?.attributes?.title}{" "}
                  travelOffer price from - £{travelOffer?.offer_price}pp
                </li> */}
                <li>Offer expires - {formatDate(travelOffer?.expires_date)}</li>
              </ul>
              {travelOffer?.coupon_code && (
                <div className="w-full my-4 text-black font-adobe-garamond-pro text-28 font-normal">
                  Your coupon is:{" "}
                  <b className="font-semibold">{travelOffer.coupon_code}</b>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8">
            {session?.user?.email && (
              <button
                onClick={(e) => goToPermaLink(e, travelOffer?.affiliate_link)}
                className="border-[#FF9A31] border-[2px] py-2 w-full text-black tex-xl xl:text-[27px] hover:bg-cruise hover:underline"
              >
                Book this deal
              </button>
            )}
            {!session?.user?.email && (
              // <button
              //   className=""
              //
              // >
              <label
                onClick={(e) => setOpenLoginModal(true)}
                className="flex cursor-pointer border-[#FF9A31] justify-center border-[2px] py-2 w-full text-black tex-xl xl:text-[27px] hover:bg-cruise "
                htmlFor="login_modal_id"
              >
                Sign in to access this deal
              </label>
              // </button>
            )}
          </div>
          <div className="mt-6 flex justify-center items-center">
            {/* <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 6.5V14H9.75V6.5H8.25Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 3.99996V5.66663H9.75V3.99996H8.25Z"
                fill="black"
              />
            </svg> */}
            {/* <div className="text-base text-black">
              <span
                className="cursor-pointer"
                onClick={() =>
                  setTermsAndConditionsModalData({
                    name: travelOffer?.title,
                    terms_conditions: travelOffer?.terms_conditions,
                  })
                }
              >
                <label
                  htmlFor="cruise-line-item-terms-and-conditions-modal"
                  className="cursor-pointer block w-full p-2 text-black text-base"
                >
                  Terms & Conditions
                </label>
              </span>
            </div> */}
          </div>
        </div>
      </section>
      {/* <section className="mx-auto p-12">
        <PageHeading
          pageHeaderData={{ heading: "You may also like", text: "" }}
        />
        <InspirationLandingPage isInfiniteDataLoading={false} />
      </section> */}
      {openLoginModal && (
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
      {/* Terms and conditions modal based on cruise line item */}
      {!!Object?.keys(termsAndConditionsModalData)?.length && (
        <TermsAndConditionsCruiseLineModal
          termsAndConditionsModalData={termsAndConditionsModalData}
          setTermsAndConditionsModalData={setTermsAndConditionsModalData}
        ></TermsAndConditionsCruiseLineModal>
      )}
    </>
  );
};
// export async function getServerSideProps(context) {
//   const { params } = context;
//   const id = params.id;
//   // Fetch product data from API based on productId
//   const res = await fetch(`${baseUrl}/api/offers/${id}?populate=deep`);
//   const travelOffer = await res.json();
//   return {
//     props: {
//       travelOffer,
//     },
//   };
// }
export default TravelPartnerDetails;
