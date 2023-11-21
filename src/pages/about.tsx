import DarkCruiseCollectiveImg from "@/components/DarkCruiseCollectiveImg";
import BgImage from "@/components/Shared/BgImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="pb-5 md:pb-8 lg:pb-[75px] ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-image-height relative">
          <BgImage bgImgUrl="/images/about/Rectangle (18).png" />
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
            <button className="border text-xs tracking-[3px] leading-4 border-[#FF9A31] py-3 px-8 hover:bg-[#FF9A31] hover:underline">
              VIEW MORE
            </button>
          </div>
          <div className="flex justify-end">
            <DarkCruiseCollectiveImg />
          </div>
        </div>
      </div>
      <div className="pb-5 md:pb-8  ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-4 md:p-[35px] xl:p-[50px]">
            <div className="text-3xl md:text-5xl">Why book with us</div>
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
            <p>
              <ul className="custom-list-marker list-disc pl-5">
                <li>
                  Our experts are well known within the cruise line industry.
                </li>
                <li>We provide you with various options.</li>
                <li>We make the process easy for you.</li>
                <li>We offer what others can't.</li>
              </ul>
            </p>
            <br></br>
            <p>
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
          </div>

          <div className="p-4 md:p-[35px] xl:p-[50px]">
            <img
              src="/images/about/image(12).png"
              alt="Your Image"
              className="w-861 h-432 flex-shrink-0"
            />
          </div>
        </div>
      </div>
      <div className="bg-cruise-texture p-4 md:p-[35px] xl:p-[50px]">
        <div className="text-3xl md:text-5xl">Our Partners</div>
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

        <div className="flex flex-wrap justify-center">
          <Image
            src="/images/about/image.png"
            alt="Logo 1"
            width={250}
            height={100}
          />
          <Image
            src="/images/about/image(1).png"
            alt="Logo 2"
            width={250}
            height={250}
          />
          <Image
            src="/images/about/image(2).png"
            alt="Logo 3"
            width={250}
            height={250}
          />
          <Image
            src="/images/about/image(3).png"
            alt="Logo 4"
            width={250}
            height={250}
          />
          <Image
            src="/images/about/image(4).png"
            alt="Logo 5"
            width={250}
            height={250}
          />
          <Image
            src="/images/about/image(5).png"
            alt="Logo 6"
            width={250}
            height={250}
          />
          <Image
            src="/images/about/image(6).png"
            alt="Logo 7"
            width={250}
            height={250}
          />
        </div>

        <div className="mt-12 text-center font-semibold leading-100 tracking-[0.81px]">
          <button className="border text-lg border-[#FF9A31] py-3 px-8 hover:bg-[#FF9A31] hover:underline">
            Explore their latest offers
          </button>
        </div>
      </div>

      <div className="pb-5 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-4 md:p-[35px] xl:p-[50px]">
            <div className="text-3xl md:text-5xl">Not a member yet?</div>
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
            <img
              src="/images/about/image(11).png"
              alt="Your Image"
              className="w-861 h-432 flex-shrink-0"
            />
          </div>

          <div className="p-4 md:p-[35px] xl:p-[50px]">
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

            <br></br>
            <div className="mt-12">
              <button className="border text-lg border-[#FF9A31] py-3 px-8 hover:bg-[#FF9A31] hover:underline">
                <Link href="/register">BECOME A MEMBER</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
