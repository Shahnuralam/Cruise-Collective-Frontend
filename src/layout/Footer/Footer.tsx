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
      <footer className="p-[25px] lg:p-[75px]" id="footerId">
        <div className="grid md:grid-cols-4 gap-3 justify-between">

          <div className="order-4 md:order-1 justify-center md:justify-left flex md:block ">
            <img src="/images/footer-logo.png" alt="footer-logo" width={250} />
          </div>

          <div className="order-3 md:order-2">
            <div className="text-3xl text-black mb-4">Other</div>
            <ul className="pt-3">
            {footerNavItems.map((navItem, navItemIdx) => (
              <li key={`_fni_${navItem.id}-${navItemIdx}`}>
                <Link href={navItem.href} rel="nofollow" className="text-lg transition-all ease-out duration-300 text-black no-underline hover:underline">
                {navItem.name}
                </Link>
              </li>
            ))}
            </ul>
          </div>

          <div className="order-2 md:order-3">
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

          <div className="p-10 bg-[#EDECE8] order-1 md:order-4">
            <div className="flex justify-center">
              <FooterRightImage></FooterRightImage>
            </div>
             <p className="mt-6 text-black text-2xl text-center">Be the first to know about exclusive deals and join the collective.</p>
            <div className="flex pt-5">
              <input className="border outline-0 border-cruise w-full h-10 bg-[#EDECE8] px-2" />
              {/* <input  className="w-full py-4 xl:py-3 px-4 pl-10 bg-transparent hover:bg-[#c7d1a3] focus:bg-[#c7d1a3] border hover:border-[#c7d1a3] hover:border-opacity-[15%] xl:border-[#c7d1a3] xl:border-opacity-[15%] hover:bg-opacity-[15%] focus:bg-opacity-[15%] outline-0 rounded" /> */}
              <button className="bg-cruise text-white w-24 text-base apercu_medium">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="copyRightFooterContainer pt-5 text-xs text-black">
          <div>Copyright © 2023 Cruise Collective. All rights reserved.</div>
          <div>CA Seller License: 2132310-70</div>
          
          <div className="pt-5">
              <p>This website is owned and published by Our Media Ltd.</p>
              <p>www.ourmedia.co.uk© Our Media 2023</p>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
