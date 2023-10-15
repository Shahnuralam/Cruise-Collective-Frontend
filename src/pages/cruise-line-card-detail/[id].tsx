import DarkCruiseCollectiveImg from "@/components/DarkCruiseCollectiveImg";
import InspirationLandingPage from "@/components/LandingPage/InspirationLandingPage";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import PageHeading from "@/components/PageHeading";
import BgImage from "@/components/Shared/BgImage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const cruiseLineCardDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState({});
  const { data: session } = useSession();

  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="bg-image-height w-full md:w-55 relative">
            <BgImage bgImgUrl="/dummy/inspiration/image 4.png" />
          </div>
          <div className="inspiration-bg p-3 md:p-7 lg:p-[75px] w-full md:w-45">
            <p className="max-w-[472px] text-5xl text-black py-2 mt-4">
              {/* {fullScreenHeader?.heading}
               */}
              Luxury Madagascar Roundtrip
            </p>
            <h4 className="text-[28px] text-black mt-5 mb-3">
              14 Nights <br />
              Autumn 2023 <br />
              Expires 20.08.2023
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
              <p className="text-lg pt-8 text-black">
                {/* {fullScreenHeader?.country} */}
                ADVENTURE CRUISE, LUXURY CRUISE
              </p>
            </div>

            <div className="mt-6">
              <button className="border text-lg border-[#FF9A31] py-3 px-8">
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

      <section className="p-6 md:container md:mx-auto">
        <div className="max-w-[850px] mx-auto">
          <p className="pb-8 text-xl md:text-lg">
            Description text goes hereLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec sit amet ultricies felis. Cras sit amet
            ligula velit. Sed in tortor est. Fusce egestas at felis quis
            volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
            fermentum diam, vehicula euismod dui. Praesent finibus ultricies
            mollis.
          </p>

          <ul className="list-desc text-xl md:text-lg">
            <li>Nights: 14</li>
            <li>Departure port - Newcastle</li>
            <li>Departure date - 10th September 2023</li>
            <li>Destinations - Monaco, Seville, Cape Town,</li>
            <li> Madagascar Exclusive offer price from - £240pp</li>
            <li>Offer expires - 20.08.2023</li>
          </ul>

          <div className="w-full my-4">
            Your coupon is: <b> MADAGASCAR2023</b>
          </div>

          <div className="mt-8">
            {session?.user?.email && (
              <button className="border-[#FF9A31] border-[3px] py-2 w-full text-black tex-xl xl:text-[27px]">
                Book this cruise deal
              </button>
            )}
            {!session?.user?.email && (
              <button className="border-[#FF9A31] border-[3px] py-2 w-full text-black tex-xl xl:text-[27px]">
                Sign in to access this deal
              </button>
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
                  setTermsAndConditionsModalData({ name: "Test modal" })
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

      <section className="mx-auto p-12">
        <PageHeading
          pageHeaderData={{ heading: "You may also like", text: "" }}
        />
        <InspirationLandingPage isInfiniteDataLoading={false} />
      </section>

      {/* Terms and conditions modal based on cruise line item */}

      {Object?.keys(termsAndConditionsModalData)?.length && (
        <TermsAndConditionsCruiseLineModal
          termsAndConditionsModalData={termsAndConditionsModalData}
          setTermsAndConditionsModalData={setTermsAndConditionsModalData}
        ></TermsAndConditionsCruiseLineModal>
      )}
    </>
  );
};

export default cruiseLineCardDetail;
