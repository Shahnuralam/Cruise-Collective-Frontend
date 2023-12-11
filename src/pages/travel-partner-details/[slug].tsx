import DarkCruiseCollectiveImg from "@/components/DarkCruiseCollectiveImg";
import LoginModal from "@/components/Modal/LoginModal";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import ReplaceGalleryTag from "@/components/ReplaceGalleryTag";
import styles from "../../styles/editor.module.css";
import Seo from "@/components/Seo";
import BgImage from "@/components/Shared/BgImage";

import { baseUrl, formatDate } from "@/utils";
import { useSession } from "next-auth/react";

import React, { useRef, useState } from "react";

const TravelPartnerDetails = ({ travelOffer, allTravelOffers }) => {
  const scrollIntoViewRef = useRef<HTMLDivElement | null>(null);

  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState({});
  const { data: session } = useSession();

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
      {travelOffer?.attributes?.seo && (
        <Seo data={travelOffer.attributes?.seo} />
      )}
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="bg-image-height w-full md:w-4/6 relative">
            <BgImage
              bgImgUrl={
                travelOffer.attributes?.featured_image?.data[0]?.attributes.url
              }
            />
            <div
              className="absolute top-0 px-3 md:px-7"
              style={{ background: "rgba(255, 255, 255, 0.30)" }}
            >
              {/* Make the logo dynamic */}
              <img
                src={travelOffer?.attributes?.logo?.data?.attributes?.url}
                alt=""
                width="150"
                height="150"
              />
            </div>
          </div>
          <div className="bg-cruise-texture  p-3 md:p-7 lg:p-[75px] w-full md:w-2/6">
            <p className="max-w-[472px] text-[24px] text-black py-2 mt-4">
              {travelOffer?.attributes?.title}
            </p>
            <h4 className="text-xs uppercase apercu_medium_pro  text-black mt-5 mb-3">
              ENJOY {travelOffer?.attributes?.offer} OFF | Expires{" "}
              {formatDate(travelOffer?.attributes?.expires_date)}
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
                  __html: travelOffer?.attributes?.excerpt,
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
          <div
            className={`${styles.editorContainer} page-details-container pt-3 md:pt-12`}
          >
            {ReplaceGalleryTag(
              travelOffer?.attributes?.description,
              travelOffer?.attributes?.gallery?.data
            )}
          </div>
          <div className="border-[#FF9A31] border-[2px] p-[25px] flex">
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold mb-4">
                Travel Partner Offer Details
              </h2>
              <ul className="list-disc text-xl md:text-lg pl-8">
                <li>Offer: {travelOffer?.attributes?.offer}</li>

                {/* <li>
                  {travelOffer?.cruise_line?.data?.attributes?.title}{" "}
                  travelOffer price from - £{travelOffer?.offer_price}pp
                </li> */}
                <li>
                  Offer expires -{" "}
                  {formatDate(travelOffer?.attributes?.expires_date)}
                </li>
              </ul>
              {travelOffer?.attributes?.coupon_code && (
                <div className="w-full my-4 text-black font-adobe-garamond-pro text-28 font-normal">
                  Your coupon is:{" "}
                  <b className="font-semibold">
                    {travelOffer.attributes?.coupon_code}
                  </b>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8">
            {session?.user?.email && (
              <button
                onClick={(e) =>
                  goToPermaLink(e, travelOffer?.attributes?.affiliate_link)
                }
                className="border-b-[#FF9A31] border-b  border[2px] py-2 w-full text-black tex-xl xl:text-[27px] hover:bg-cruise hover:underline"
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
          <div className="mt-6 flex justify-center items-center"></div>
        </div>
      </section>

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

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;

  const res = await fetch(
    `${baseUrl}/api/travel-partner-offers?populate=deep&filters[slug][$eq]=${slug}`
  );
  const { data: travelOffer } = await res.json();

  const travelOfferRes = await fetch(
    `${baseUrl}/api/travel-partner-offers?populate=deep`
  );
  const allTravelOffers = await travelOfferRes.json();

  return {
    props: {
      travelOffer: travelOffer[0],
      allTravelOffers,
    },
  };
}

export default TravelPartnerDetails;
