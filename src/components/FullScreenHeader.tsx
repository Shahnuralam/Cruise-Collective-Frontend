import BgImage from "./Shared/BgImage";
import DarkCruiseCollectiveImg from "./DarkCruiseCollectiveImg";

const FullScreenHeader = ({ fullScreenHeader, children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-image-height w-full md:w-55 relative">
        <BgImage bgImgUrl={fullScreenHeader?.bgImg} />
        {children && children}
      </div>
      <div className="inspiration-bg p-3 md:p-7 lg:p-[75px] w-full md:w-45">
        <p className="max-w-[472px] text-5xl text-black py-2 mt-4">
          {fullScreenHeader?.heading}
        </p>
        <h4 className="text-[28px] text-black mt-5 mb-3">
          {fullScreenHeader?.date}
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
          <p className="text-lg pt-8">{fullScreenHeader?.country}</p>
        </div>

        <div className="mt-6">
          <button className="border text-lg border-[#FF9A31] py-3 px-8">
            {fullScreenHeader?.btnText}
          </button>
        </div>
        <div className="flex justify-end">
          <DarkCruiseCollectiveImg />
        </div>
      </div>
    </div>
  );
};

export default FullScreenHeader;
