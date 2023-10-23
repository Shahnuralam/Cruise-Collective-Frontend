import { useSession } from "next-auth/react";
import SvgCruiseImage from "@/assets/svg/cruise-img.svg";
import Link from "next/link";
const Item = (props) => {
  const {
    cruiseLineItem,
    setTermsAndConditionsModalData,
    index,
    setOpenLoginModal,
    setCouponModalData,
  } = props;
  const { data: session } = useSession();

  return (
    <Link href={`/cruise-line-card-detail/${cruiseLineItem.id}`}>
      <div className="cruise-card grid grid-cols-1 md:grid-cols-3 bg-[#DC7E1B] mb-6">
        {/* Image */}
        <div
          className={`cruise-image bg-center bg-cover cruise-card-bg-img h-52 sm:h-96 md:h-auto relative`}
        >
          <div
            className="absolute top-0 px-3 md:px-7"
            style={{ background: "rgba(255, 255, 255, 0.30)" }}
          >
            <img src="/images/po-cruise-line-card.png" alt="" />
          </div>
        </div>

        {/* Details */}
        <div className="cruise-details col-span-2 w-full flex flex-col p-2 md:p-5 justify-between">
          {/* Card Header */}
          <div className="card-header bg-white p-4 relative">
            <div className="flex flex-col md:flex-row">
              <div className="text-black mb-5 w-full md:w-3/5">
                <div className="grid grid-cols-2 md:grid-cols-1">
                  <p className="text-black text-base md:text-2xl mb-3 font-semibold">
                    {cruiseLineItem?.duration}
                  </p>
                  <div className="text-base block md:hidden uppercase apercu_medium mb-3">
                    DEPARTING: {cruiseLineItem?.year}
                  </div>
                </div>

                <div className="text-2xl md:text-[28px] mb-4">
                  {cruiseLineItem?.name}
                </div>
                {/* <div>EXPIRES {cruiseLineItem?.expires}</div> */}
                <div className="text-base hidden md:block uppercase apercu_medium mb-3">
                  DEPARTING: {cruiseLineItem?.year}
                </div>
                <div className="text-base uppercase apercu_medium mb-3">
                  DEPARTURE PORT: {cruiseLineItem?.port}
                </div>
                <div className="text-base uppercase apercu_medium mb-5">
                  DESTINATIONS: {cruiseLineItem?.destination}
                </div>
              </div>
              <div className="flex w-full justify-center md:w-2/5">
                <div className="">
                  <div className="uppercase text-lg font-bold pl-4">From</div>
                  <div className="flex justify-center md:justify-start">
                    <div className=" text-xl md:text-2xl xl:text-4xl line-through text-cruise mr-7">
                      £{cruiseLineItem?.price}
                    </div>
                    <div className=" text-xl md:text-2xl xl:text-4xl">
                      £{cruiseLineItem?.discountPrice}
                    </div>
                  </div>
                  {/* Button Section */}
                  <div className="button-section py-4">
                    {!session?.user?.email && (
                      <>
                        <button className="border-cruise border-[3px] text-black hover:bg-cruise hover:underline">
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
                        <Link
                          href={`/cruise-line-card-detail/${cruiseLineItem.id}`}
                        >
                          <button className="border-[#FF9A31] border-[3px] py-2 px-7 text-black tex-xl xl:text-[27px] hover:bg-cruise hover:underline">
                            View More
                          </button>
                        </Link>
                        {/* <button
                            onClick={() => {
                              setTermsAndConditionsModalData(cruiseLineItem);
                            }}
                            className="border-[#FF9A31] border-4"
                          >
                            <label
                              htmlFor="cruise-line-item-terms-and-conditions-modal"
                              className="cursor-pointer block w-full p-2 text-black text-[27px]"
                            >
                              Terms & Conditions
                            </label>
                          </button> */}
                      </>
                    )}
                  </div>
                  <div className="px-2 py-1 font-semibold text-base apercu_medium uppercase">
                    EXPIRES {cruiseLineItem?.expires}
                  </div>
                  <div className="absolute right-5 bottom-3">
                    <SvgCruiseImage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
