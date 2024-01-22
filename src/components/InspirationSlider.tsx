import DarkCruiseCollectiveImg from "./DarkCruiseCollectiveImg";
import { InspirationImageSlider } from "@/utils";

const InspirationSlider = ({ InspirationSlider, children }) => {

    return (
        <div className="flex flex-col md:flex-row md:h-screen h-auto">
            <div className="bg-image-height w-full relative">
                {/* <BgImage bgImgUrl={fullScreenHeader?.bgImg} /> */}
                <InspirationImageSlider calloutbox={""} sliderItems={InspirationSlider?.sliders} />
                {children && children}
                {/* Display heading, text, date over the image */}
                <div className="flex w-[80%] md:w-1/3 bg-cruise-texture !bg-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  z-10 p-12">
                    <div className="flex">
                        <div className="">
                            <div className="text-[24px] md:text-[32px] text-black">
                                {InspirationSlider?.heading}
                            </div>
                            <div className="flex justify-center mt-[3%]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="300"
                                    height="3"
                                    viewBox="0 0 300 3"
                                    fill="none"
                                >
                                    <path
                                        d="M0 1.5L400 1.5"
                                        stroke="#FF9A31"
                                        strokeWidth="3"
                                        strokeMiterlimit="10"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-xs md:text-xs tracking-[2.4px] apercu_medium_pro text-black mt-5 mb-3 m-0 p-0 pt-4">
                                {InspirationSlider?.date}
                            </h4>

                            <div className="absolute !w-14 !h-14 mt-[-20%] ml-[59%]">
                                <  DarkCruiseCollectiveImg />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default InspirationSlider;
