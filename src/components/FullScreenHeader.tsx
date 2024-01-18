import DarkCruiseCollectiveImg from "./DarkCruiseCollectiveImg";
import { FullScreenImageSlider } from "@/utils";

const FullScreenHeader = ({ fullScreenHeader, children }) => {
  const setScrollIntoViewBody = () => {
    if (fullScreenHeader?.scrollIntoViewRef.current) {
      fullScreenHeader?.scrollIntoViewRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-image-height w-full md:w-4/6 relative">
        {/* <BgImage bgImgUrl={fullScreenHeader?.bgImg} /> */}
        <FullScreenImageSlider sliderItems={fullScreenHeader?.sliders} />
        {children && children}
      </div>
      <div className="bg-cruise-texture p-3 md:p-7 lg:p-[75px] w-full md:w-2/6">
        <div className="max-w-[472px]  text-[32px] text-black py-2 mt-4">
          {fullScreenHeader?.heading}
        </div>
        <h4 className="text-xs apercu_medium_pro text-black mt-5 mb-3">
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
        <div className="pt-4 apercu_medium_pro pb-8">
          <p className="text-xs  pt-8">{fullScreenHeader?.text}</p>
        </div>

        <div className="mt-6">
          <button
            onClick={setScrollIntoViewBody}
            className="border text-xs tracking-[3px] leading-4	 apercu_medium_pro uppercase border-[#FF9A31] py-3 px-8 tracking-[3px] hover:bg-[#FF9A31] "
          >
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
