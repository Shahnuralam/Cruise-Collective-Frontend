import { useSession } from "next-auth/react";

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
    <div className="cruise-card grid grid-cols-1 md:grid-cols-3 bg-[#DC7E1B] mb-6">
      {/* Image */}
      <div className="cruise-image bg-center bg-cover bg-[url('/dummy/demo.png')] h-52 sm:h-96 md:h-auto"></div>

      {/* Details */}
      <div className="cruise-details col-span-2 w-full flex flex-col px-2 py-2 md:py-5 justify-between md:px-7">
        <div className="flex flex-col gap-2">
          {/* Card Header */}
          <div className="card-header bg-white">
            <div className="p-2 md:p-5 flex flex-col">
              <div className="grid grid-cols-3 md:hidden text-base text-black mb-5">
                <div>{cruiseLineItem?.duration}</div>
                <div>Winter {cruiseLineItem?.year}</div>
                <div>EXPIRES {cruiseLineItem?.expires}</div>
              </div>

              <div className="flex flex-col md:flex-row w-full gap-4 mb-3">
                <div className="text-xl md:text-4xl w-full md:w-1/2">
                  {cruiseLineItem?.name}
                </div>
                <div className="text-4xl w-full md:w-1/4 hidden md:block">
                  {cruiseLineItem?.duration}
                </div>
                <div className="w-full md:w-1/4 hidden md:block">
                  <div className="bg-cruise px-2 py-1 font-semibold text-base apercu_medium">
                    EXPIRES {cruiseLineItem?.expires}
                  </div>
                </div>
              </div>

              <div className="text-lg font-bold uppercase apercu_medium md:block hidden mb-1">
                Winter {cruiseLineItem?.year}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-lg uppercase apercu_medium mb-3">
                    DEPARTURE PORT: {cruiseLineItem?.port}
                  </div>
                  <div className="text-lg uppercase apercu_medium">
                    DESTINATIONS: {cruiseLineItem?.destination}
                  </div>
                  <button className="bg-cruise cursor-pointer mt-2">
                    <label
                      className="cursor-pointer py-2 px-6 block"
                      onClick={() => {
                        setCouponModalData(true);
                      }}
                      htmlFor="show_coupon_id"
                    >
                      Show Coupon
                    </label>
                  </button>
                </div>

                <div className="border-b-2 border-cruise pb-4 relative">
                  <div className="uppercase text-lg font-bold pl-4">From</div>
                  <div className="flex">
                    <div className="text-4xl line-through text-cruise mr-7">
                      £{cruiseLineItem?.price}
                    </div>
                    <div className="text-4xl">
                      £{cruiseLineItem?.discountPrice}
                    </div>
                  </div>
                  <div className="bg-[url('/images/banner-cruise-image.svg')] bg-right bg-no-repeat bg-contain absolute h-34 w-48 right-0 -bottom-8"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
                <div className="order-2 md:order-1 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <div className="text-lg pl-3">
                    <u className="cursor-pointer">
                      Read more about this cruise here
                    </u>
                  </div>
                </div>
                <div className="order-1 md:order-2 text-lg text-center apercu_medium md:py-1 py-3">
                  LUXURY CRUISES
                </div>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="button-section grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {!session?.user?.email && (
              <>
                <button className="border-[#FF9A31] border-4 p-2 text-black text-[27px] ">
                  <label
                    onClick={() => {
                      setOpenLoginModal(true);
                    }}
                    className="cursor-pointer"
                    htmlFor="login_modal_id"
                  >
                    Login to access
                  </label>
                </button>
                <button className="border-[#FF9A31] border-4">
                  <label
                    htmlFor="cruise-line-item-terms-and-conditions-modal"
                    className="cursor-pointer block w-full p-2 text-black text-[27px]"
                  >
                    Sign up to access
                  </label>
                </button>
              </>
            )}
            {session?.user?.email && (
              <>
                <button className="border-[#FF9A31] border-4 p-2 text-black text-[27px] ">
                  Book this cruise deal
                </button>
                <button
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
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
