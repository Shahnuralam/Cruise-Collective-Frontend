const Item = () => {
  return (
    <div className="cruise-card grid grid-cols-3 bg-cruise">
      {/* Image */}
      <div className="cruise-image bg-center bg-cover bg-[url('/dummy/demo.png')]"></div>

      {/* Details */}
      <div className="cruise-details col-span-2 w-full p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          {/* Card Header */}
          <div className="card-header bg-white">
            <div className="p-4 flex h-40">
              {/* Left Column */}
              <div className="left-column w-full flex flex-col">
                <div className="uppercase font-bold">3 NIGHTS</div>
                <div className="text-xl">Le Hare Short Break</div>
                <span className="text-xs mt-1 font-bold">AUTUMN 2023</span>
                <span className="text-xs">DEPARTURE PORT: SOUTHAMPTON</span>
                <span className="text-xs">
                  DESTINATIONS: LE HAVRE - SOUTHAMPTON
                </span>
              </div>

              {/* Right Column */}
              <div className="right-column bg-[#dee] w-full flex flex-col justify-center">
                <div className="uppercase font-bold">From</div>
                <div className="text-xl">£1,000</div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex px-4 mb-3">
              <div className="w-1/2 flex">
                <span className="text-xs bg-cruise pr-10 pl-2  font-semibold">
                  EXPIRES 7-31-23
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
            <button className="border p-2">Enquire</button>
            <button className="border p-2">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
