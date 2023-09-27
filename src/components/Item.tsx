const Item = (props) => {
  const { cruiseLineItem, setTermsAndConditionsModalData, index } = props;

  return (
    <div className="cruise-card grid grid-cols-3 bg-[#DC7E1B] mb-6">
      {/* Image */}
      <div className="cruise-image bg-center bg-cover bg-[url('/dummy/demo.png')]"></div>

      {/* Details */}
      <div className="cruise-details col-span-2 w-full p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          {/* Card Header */}
          <div className="card-header bg-white">
            <div className="p-4 flex gap-4">
              {/* Left Column */}
              <div className="left-column w-full flex flex-col">
                <div className="uppercase font-bold text-xl">
                  {cruiseLineItem?.duration}
                </div>
                <div className="text-4xl">{cruiseLineItem?.name}</div>
                <span className="text-lg mt-2.5 font-bold uppercase">
                  AUTUMN {cruiseLineItem?.year}
                </span>
                <span className="text-lg mt-3 uppercase">
                  DEPARTURE PORT: {cruiseLineItem?.port}
                </span>
                <span className="text-lg mt-3 uppercase">
                  DESTINATIONS: {cruiseLineItem?.destination}
                </span>
              </div>

              {/* Right Column */}
              <div className="right-column w-full flex flex-col justify-end">
                <div>Index: {index}</div>
                <div className="uppercase font-bold text-sm font-bold">From</div>
                <div className="flex w-full">
                  <div className="text-xl w-1/2 line-through text-cruise">
                    {" "}
                    £{cruiseLineItem?.price}
                  </div>
                  <div className="text-xl w-1/2">
                    £{cruiseLineItem?.discountPrice}
                  </div>
                </div>
                <div className="w-full py-2">
                  <button className="border-[#FF9A31] border-4 p-2 w-full">Log In or Sign Up to access this discount</button>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex px-4 mb-3 gap-4">
              <div className="w-1/2 flex">
                <span className="text-xs bg-cruise pr-10 pl-2 py-1 font-semibold">
                  EXPIRES {cruiseLineItem?.expires}
                </span>
              </div>
              <div className="w-1/2 flex flex-row justify-between">
                <span className="text-xs">MINI CRUISES</span>
                <span className="text-xs">LUXURY CRUISES</span>
                <span className="text-xs">RIVER CRUISES</span>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="button-section grid grid-cols-2 gap-4">
            <button className="border-[#FF9A31] border-4 p-2">Enquire</button>
            <button
              onClick={() => {
                setTermsAndConditionsModalData(cruiseLineItem);
              }}
              className="border-[#FF9A31] border-4"
            >
              <label htmlFor="cruise-line-item-terms-and-conditions-modal" className="cursor-pointer block w-full p-2">
                Terms & Conditions
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
