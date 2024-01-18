import DarkCruiseCollectiveImg from "@/components/DarkCruiseCollectiveImg";
import PrimaryButton from "@/components/PrimaryButton";
import BgImage from "@/components/Shared/BgImage";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="pb-5 md:pb-8 lg:pb-[75px] ">
      <Head>
        <title>About Us</title>
      </Head>
      <div className="flex flex-col md:flex-row">
        <div className="bg-image-height w-full md:w-4/6 relative">
          <BgImage bgImgUrl="/images/about/image-split.png" />
        </div>
        <div className="bg-cruise-texture p-3 md:p-7 lg:p-[75px] w-full md:w-2/6">
          <div className="max-w-[472px]  text-[32px] text-black py-2 mt-4">
            About Cruise Collective
          </div>

          <p className="text-base  text-black mt-5 mb-3">
            Not a deals hub or a travel agent, but a place for people who love
            the adventure of Cruising to find everything they need to prepare
            for their next voyage and more… <br></br>Find adventure, luxury and
            exclusive savings with Cruise Collective; where members gain access
            to discounts, incredible competition prizes and insider knowledge
            designed to help you make the most of your next adventure at sea.
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
            <button className="border text-xs tracking-[3px] leading-4 border-[#FF9A31] py-3 px-8 hover:bg-[#FF9A31] ">
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
            <div className="text-3xl md:text-5xl">
              Join the collective today
            </div>
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

            <div>
              <h2 className="text-lg pb-5">
                Cruise Collective is your inside connection to all things
                cruise-related. As a member you’ll get:
              </h2>
              <ul className="custom-list-marker list-disc pl-5">
                <li>
                  <strong>Exclusive Access: </strong>Gain priority access to
                  unbeatable deals, significant discounts, and exciting
                  competitions, making your cruise experiences truly
                  extraordinary.
                </li>
                <li>
                  <strong>Stay Informed:</strong> Stay up-to-date with the
                  latest news directly from cruise lines, including live events
                  and informative webinars, ensuring you&apos;re always in the know
                  about upcoming voyages.
                </li>
                <li>
                  <strong>Expert Reviews:</strong> Make informed decisions with
                  our in-depth reviews of cruises and travel products. You&apos;ll
                  cruise with confidence, knowing you&apos;ve chosen the best.
                </li>
              </ul>
            </div>
            <br></br>
            <div className="mt-12">
              <div className="py-3 px-8 ">
                <PrimaryButton href="/register" btnText="Sign up today" />
              </div>
            </div>
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
      <div className=" hidden bg-cruise-texture p-4 md:p-[35px] xl:p-[50px]">
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

      <div className=" hidden pb-5 md:pb-8">
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
