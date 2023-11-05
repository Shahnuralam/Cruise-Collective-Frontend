import React from "react";
import AppLogo from "@/assets/svg/app-logo.svg";
import FooterLogo from "@/assets/svg/footer-logo.svg";
import Link from "next/link";
import SocialIcons from "@/layout/Footer/SocialIcons";
import { footerNavItems, socialIcons } from "@/layout/Footer/data";
import FooterNav from "@/layout/Footer/FooterNav";
import clsx from "clsx";
import FooterRightImage from "./FooterRightImage";

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
      {/** Footer */}
      <footer className="p-[16px] md:p-[25px] lg:p-[75px] bg-cruise-texture" id="footerId">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <div className="order-4 lg:order-1 justify-center lg:justify-left flex lg:block w-full lg:w-[350px] mt-[50] mb-9 lg:mt-0 lg:mb-0">
            <img src="/images/footer-logo.png" alt="footer-logo" />
          </div>

          {/* <div className="flex-1 w-36 order-2 grid grid-cols-1 md:grid-cols-2">
           <div>
            <div className="text-3xl text-black mb-4">Other</div>
            <ul className="pt-3">
              {footerNavItems.map((navItem, navItemIdx) => (
                <li key={`_fni_${navItem.id}-${navItemIdx}`}>
                  <Link
                    href={navItem.href}
                    rel="nofollow"
                    className="text-lg transition-all ease-out duration-300 text-black no-underline hover:underline"
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
           </div>

            <div >
            <div className="text-3xl text-black mb-4">Contact us</div>
            <div className="pt-3">
              <div className="tel text-lg"> 1 (877) 734-6858</div>
              <div className="email text-lg">hello@cruisecollective.com</div>
            </div>
            <div className="pt-3 flex flex-col gap-1 text-lg">
              <Link href="#">Instagram</Link>
              <Link href="#">Facebook</Link>
            </div>
            </div>
        </div> */}
          <div className="w-48 order-3 lg:order-2">
            <div className="text-3xl text-black mb-12">Other</div>
            <ul>
              {footerNavItems.map((navItem, navItemIdx) => (
                <li key={`_fni_${navItem.id}-${navItemIdx}`}>
                  <Link
                    href={navItem.href}
                    rel="nofollow"
                    className="text-lg transition-all ease-out duration-300 text-black no-underline hover:underline"
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-48 order-2 lg:order-3">
            <div className="text-3xl text-black mb-12">Contact us</div>
            <div>
              <div className="tel text-lg"> 1 (877) 734-6858</div>
              <div className="email text-lg">hello@cruisecollective.com</div>
            </div>
            <div className="pt-3 flex flex-col gap-1 text-lg">
              <Link href="#">Instagram</Link>
              <Link href="#">Facebook</Link>
            </div>
          </div>

          <div className="flex-auto order-1 lg:order-4 ">
            <div className="flex justify-left lg:justify-center">
                <div className="max-w-[400px] bg-[#EDECE8] p-3 md:p-6">
                <div className="flex justify-center">
                <FooterRightImage></FooterRightImage>
              </div>
              <p className="mt-2 text-black text-lg text-center">
                Be the first to know about exclusive deals and join the
                collective.
              </p>
              <div className="flex pt-3">
                <input className="border outline-0 border-cruise w-full h-10 bg-[#EDECE8] px-2" />
                <button className="bg-cruise text-white w-24 text-[10px] apercu_medium uppercase hover:text-black hover:underline">
                  Sign Up
                </button>
              </div>
                </div>
            </div>
          </div>
        </div>

        <div className="copyRightFooterContainer pt-5 text-xs text-black w-full md:max-w-md">
          <div>Copyright © 2023 Cruise Collective. All rights reserved.</div>
          <div>CA Seller License: 2132310-70</div>

          {/* <div className="pt-5">
            <p>This website is owned and published by Our Media Ltd. www.ourmedia.co.uk© Our Media 2023</p>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
