import React from "react";
import AppLogo from "@/assets/svg/app-logo.svg";
import OurMediaLogo from "@/assets/svg/ourmedia-logo.svg";
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
      <footer className="flex justify-center items-center bg-[#36453b] text-white py-4">
        <div className="max-w-[90%] md:container flex flex-col gap-8 lg:gap-5">
          {/** Footer Nav */}
          {/* <FooterNav items={footerNavItems} /> */}

          {/***/}
          <div className="flex flex-col md:flex-row gap-4 h-full justify-stretch items-stretch">
            {/** Logo-2 */}
            <div>
              <Link
                href="https://www.ourmedia.co.uk"
                target="_blank"
                rel="nofollow"
              >
                <OurMediaLogo
                  viewBox="0 0 80 60"
                  width={ourMediaSize.width}
                  height={ourMediaSize.height}
                />
              </Link>
            </div>

            {/** Right */}
            <div
              className="flex flex-col justify-center items-start h-full w-full flex-1 border-y py-3"
              style={{ minHeight: ourMediaSize.height }}
            >
              <p>
                This website is owned and published by{" "}
                <Link
                  href="https://www.ourmedia.co.uk"
                  target="_blank"
                  rel="nofollow"
                  className="hover:underline"
                >
                  Our Media Ltd (an Immediate Group Company). www.ourmedia.co.uk
                </Link>, <Link href="https://policies.immediate.co.uk/advertising-terms-and-conditions/" target="_blank"
                  rel="nofollow">view our Terms & Conditions.</Link>
              </p>
              <p>© Immediate Media Company Ltd. 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
