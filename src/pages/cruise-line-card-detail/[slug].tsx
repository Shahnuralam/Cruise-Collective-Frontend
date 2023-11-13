import DarkCruiseCollectiveImg from "@/components/DarkCruiseCollectiveImg";
import LoginModal from "@/components/Modal/LoginModal";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import BgImage from "@/components/Shared/BgImage";
import { getOfferBySlug } from "@/queries/offers";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
const CruiseLineCardDetail = () => {
  const scrollIntoViewRef = useRef<HTMLDivElement | null>(null)
  const [offer, setOffer] = useState<any>({});
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const router = useRouter();
  const { slug } = router.query;
  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState({});
  const { data: session } = useSession();
  const getOfferDetail = async () => {
    const { data } = await getOfferBySlug(slug);
    setOffer(data[0]?.attributes);
  };
  useEffect(() => {
    if (slug) getOfferDetail();
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
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="bg-image-height w-full md:w-4/6 relative">
            <BgImage bgImgUrl="/dummy/inspiration/image 4.png" />
          </div>
          <div className="bg-cruise-texture apercu_medium_pro uppercase p-3 md:p-7 lg:p-[75px] w-full md:w-2/6">
            <p className="max-w-[472px] text-[32px] text-black py-2 mt-4">
              {offer?.title}
            </p>
            <h4 className="text-base text-black mt-5 mb-3">
              {offer?.nights} Nights <br />
              {offer?.season?.data?.attributes?.title} <br />
              Expires {offer?.expiry_date}
            </h4>
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
            <div className="pt-4 pb-8">
              <p className="text-base pt-8 text-black uppercase">
                {offer?.interests?.data?.map((e) => {
                  e?.attributes?.title;
                })}
                {offer?.interests?.data?.map((item, indx) => (
                  <span key={item.id}>
                    {item?.attributes?.title}
                    {indx !== offer?.interests?.data?.length - 1 && (
                      <span className="mx-1 relative">,</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
            <div className="mt-6">
              <button onClick={setScrollIntoViewBody} 
              className="border text-xs	 apercu_medium_pro border-[#FF9A31] py-3 px-8 uppercase tracking-[3px] hover:bg-[#FF9A31] hover:underline">
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
            dangerouslySetInnerHTML={{ __html: offer?.excerpt }}
          ></p>
          <div className="border-[#FF9A31] border-[2px] p-[25px] flex">
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold mb-4">Cruise Details</h2>
              <ul className="list-disc text-xl md:text-lg pl-8">
                <li>Nights: {offer?.nights}</li>
                <li>
                  Departure port - {offer?.departure?.data?.attributes?.title}
                </li>
                <li>Departure date - {offer?.departure_date}</li>
                <li>
                  Destinations -{" "}
                  {offer?.destinations?.data
                    ?.filter((e) => e?.attributes?.type === "place")
                    ?.map((item, indx, array) => (
                      <span key={item.id}>
                        {item?.attributes?.title}
                        {indx !== array?.length - 1 && (
                          <span className="mx-1 relative -top-[4px]">,</span>
                        )}
                      </span>
                    ))}
                </li>
                <li>
                  {offer?.cruise_line?.data?.attributes?.title} offer price from
                  - £{offer?.offer_price}pp
                </li>
                <li>Offer expires - {offer?.expiry_date}</li>
              </ul>
              <div className="w-full my-4 text-black font-adobe-garamond-pro text-28 font-normal">
                Your coupon is: <b className="font-semibold">{offer?.coupon}</b>
              </div>
            </div>
            <div className="flex-shrink-0">
              {/* Conditional rendering for offer images */}
              {offer?.editors_choice && (
                <img
                  src="/images/editor-choice.png"
                  alt="Editor's Choice"
                  className="w-[137px] h-[137px]"
                />
              )}
              {offer?.new_world_cruise && (
                <img
                  src="/images/new-world-cruise.png"
                  alt="New World Cruise"
                  className="w-[137px] h-[137px]"
                />
              )}
              {offer?.recommended && (
                <img
                  src="/images/recommended.png"
                  alt="Recommended"
                  className="w-[137px] h-[137px]"
                />
              )}
              {/* Default image if none of the conditions are true */}
              {!offer?.editors_choice &&
                !offer?.new_world_cruise &&
                !offer?.recommended && (
                  <img
                    src="/images/offer-dareker-icon.png"
                    alt="Logo"
                    className="w-[137px] h-[137px]"
                    style={{
                      background:
                        'url("/images/offer-dareker-icon.png"), 50% center / cover no-repeat',
                    }}
                  />
                )}
            </div>
          </div>
          <div className="mt-8">
            {session?.user?.email && (
              <button
                onClick={(e) => goToPermaLink(e, offer?.affiliate_link)}
                className="border-[#FF9A31] border-[2px] py-2 w-full text-black tex-xl xl:text-[27px] hover:bg-cruise hover:underline"
              >
                Book this cruise deal
              </button>
            )}
            {!session?.user?.email && (
              // <button
              //   className=""
              //
              // >
              <label
                onClick={(e) => setOpenLoginModal(true)}
                className="flex cursor-pointer border-[#FF9A31] justify-center border-[2px] py-2 w-full text-black tex-xl xl:text-[27px] hover:bg-cruise hover:underline"
                htmlFor="login_modal_id"
              >
                Sign in to access this deal
              </label>
              // </button>
            )}
          </div>
          <div className="mt-6 flex justify-center items-center">
            <svg
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
            </svg>
            <div className="text-base text-black">
              <span
                className="cursor-pointer"
                onClick={() =>
                  setTermsAndConditionsModalData({
                    name: offer?.title,
                    terms_conditions: offer?.terms_conditions,
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
            </div>
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
//   const offer = await res.json();
//   return {
//     props: {
//       offer,
//     },
//   };
// }
export default CruiseLineCardDetail;