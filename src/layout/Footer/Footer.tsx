import React from "react";
import AppLogo from "@/assets/svg/app-logo.svg";
import FooterLogo from "@/assets/svg/footer-logo.svg";
import Link from "next/link";
import SocialIcons from "@/layout/Footer/SocialIcons";
import { footerNavItems, socialIcons } from "@/layout/Footer/data";
import FooterNav from "@/layout/Footer/FooterNav";
import clsx from "clsx";

export interface FooterOptions {
  socialBarIsWhite: boolean;
  noFooter: boolean;
}

export interface IFooterProps {
  options?: Partial<FooterOptions>;
}

const Footer: React.FC<IFooterProps> = (props) => {
  const { options = {} } = props;

  const ourMediaSize = {
    width: 80 * 1.5,
    height: 60 * 1.5,
  };

  if (Boolean(options?.noFooter)) return <></>;
  return (
    <>
      {/** Footer Top */}
      <div
        className={clsx("flex justify-center items-center py-8", {
          "bg-[#c7d1a3] bg-opacity-[15%]": !options?.socialBarIsWhite,
        })}
      >
        <div className="flex flex-wrap gap-8 lg:gap-20">
          {/** Logo*/}
          <div className="flex w-full lg:w-auto justify-center items-center">
            <Link href="https://www.gardensillustrated.com/" target="_blank">
              <AppLogo viewBox="0 0 300 65" width={300} height={65} />
            </Link>
          </div>

          {/** Social*/}
          <div className="flex justify-center items-center w-full lg:w-auto">
            <SocialIcons icons={socialIcons} />
          </div>
        </div>
      </div>

      {/** Footer */}
      <footer className="grid grid-cols-4 gap-4 p-6 justify-items-center bg-[url('/images/ft-g.png')] ">
        <div>
          <img src="/images/footer-logo.png" alt="footer-logo" width={250} />
        </div>
        <div>
          <div className="footer-title text-lg">Find a Cruise</div>
          <ul className="pt-3">
            <li>Cruise Search</li>
            <li>Destinations</li>
            <li>Experiences</li>
            <li>Specials Cruise</li>
            <li>Lines FAQs</li>
          </ul>
        </div>
        <div>
          <div className="footer-title text-lg">Contact us</div>
          <div className="pt-3">
            <div className="tel"> 1 (877) 734-6858</div>
            <div className="email">hello@cruisecollective.com</div>
          </div>
          <div className="pt-3 flex flex-col gap-1">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
          </div>
        </div>
        <div className="p-10 bg-[#EDECE8]">
          Be the first to know about exclusive deals and join the collective.
          <div className="flex pt-3">
            <input className="border border-cruise w-full  bg-[#EDECE8]" />
            <button className="bg-cruise">Sign Up</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
