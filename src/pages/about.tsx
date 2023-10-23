import DarkCruiseCollectiveImg from "@/components/DarkCruiseCollectiveImg";
import BgImage from "@/components/Shared/BgImage";
import { AboutTheExpertSection } from "@/containers/ExperienceDetail";
import React from "react";

const About = () => {
  return (
    <div className="pb-5 md:pb-8 lg:pb-[75px] ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-image-height relative">
          <BgImage bgImgUrl="/dummy/competition/Rectangle (18).png" />
        </div>
        <div className="bg-cruise-texture p-4 md:p-[35px] xl:p-[50px]">
          <div className="text-3xl md:text-5xl">About Cruise Collective</div>

          <p className="text-base text-black py-2 mt-4">
            Some information about cruise collective... Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec sit amet ultricies felis.
            Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at
            felis quis volutpat. Nam placerat auctor nisl, id efficitur urna.
            Nam non fermentum diam, vehicula euismod dui. Praesent finibus
            ultricies mollis. Integer accumsan varius sollicitudin. Vivamus
            sollicitudin efficitur lectus. Nunc sed elit vel metus porta
            facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem
            convallis.
          </p>

          <div className="pt-2 pb-12">
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

          <div className="mt-12">
            <button className="border text-lg border-[#FF9A31] py-3 px-8 hover:bg-[#FF9A31] hover:underline">
              VIEW MORE
            </button>
          </div>
          <div className="flex justify-end">
            <DarkCruiseCollectiveImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
