import React, { useState } from "react";

import Link from "next/link";

import { footerNavItems} from "@/layout/Footer/data";

import FooterRightImage from "./FooterRightImage";
import axios from "axios";
import { INewsLetterInputDto, successModalDto } from "@/Interface/Dto";
import { SubmitHandler, useForm } from "react-hook-form";

import { useSession } from "next-auth/react";
import SuccessfulModal from "@/components/Modal/SuccessfulModal";
export interface FooterOptions {
  socialBarIsWhite: boolean;
  noFooter: boolean;
}

export interface IFooterProps {
  options?: Partial<FooterOptions>;
}

const Footer: React.FC<IFooterProps> = (props) => {
  const [showSuccessModal, setShowSuccessModal] = useState<successModalDto>({});

  const { data: session } = useSession();
  const { options = {} } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewsLetterInputDto>();

  const onSubmit: SubmitHandler<INewsLetterInputDto> = async (data) => {
    const name = data.email.split("@")[0];
    const subject = "Newsletter Email from Cruise Collective";
    try {
      const NewsletterTemplate = `
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Cruise Collective's Newsletter!</h1>
        <p>
          Dear ${name},<br />
          Welcome to Cruise Collective's Newsletter! We are thrilled to have you on board.
        </p>
        <p>
          Thank you for subscribing to our newsletter. By joining our community, you'll be the first to receive exciting updates, exclusive offers, and valuable insights from the world of travel and adventure.
        </p>
        <p>Here's what you can expect from our newsletter:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Travel Tips and Tricks</li>
          <li>Destination Spotlights</li>
          <li>Exclusive Promotions and Discounts</li>
          <li>Inspiring Travel Stories</li>
        </ul>
        <p>
          Stay connected with Cruise Collective to embark on incredible journeys and discover new horizons. Your wanderlust will thank you for it!
        </p>
        <p>
          If you ever have any questions, feedback, or simply want to share your travel stories with us, please feel free to reach out at <a className="text-blue-500 hover:underline" href="mailto:hello@cruise-collective.com">hello@cruise-collective.com</a>.
        </p>
        <p>
          To get started, keep an eye on your inbox for our upcoming newsletter. You won't want to miss it!
        </p>
        <p className="mt-4">Once again, welcome to Cruise Collective. We can't wait to explore the world together!</p>
        <p className="text-gray-600 mt-8">Bon voyage!</p>
      </div>
      </div>
      
      `;

      const { email } = data;
      const body = {
        email,
        subject,
        emailTemplate: NewsletterTemplate,
      };

      await axios.post("/api/sendEmail", body);
      setShowSuccessModal({
        type: "success",
        title: "Success",
        text: "Please check your email and stay Cruise Collective Newsletter",
      });
  
    } catch (error) {
      console.error(error);
    
    }
  };

  if (options?.noFooter) return <></>;
  return (
    <>
      {/** Footer */}
      <footer
        className="p-[20px] md:p-[25px] lg:p-[75px] bg-cruise-texture"
        id="footerId"
      >
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <div className="order-4 lg:order-1 justify-center lg:justify-left flex lg:block w-full lg:w-[350px] mt-[50] mb-9 lg:mt-0 lg:mb-0">
            <img
              className="w-72"
              src="/images/footer-logo.png"
              alt="footer-logo"
            />
          </div>

          <div className="w-48 order-3 lg:order-2">
            <div className="text-3xl text-black mb-3 md:mb-12">Other</div>
            <ul>
              {footerNavItems.map((navItem, navItemIdx) => {
                if (navItem.id === "fi-account-3") {
                  if (session?.user?.email) {
                    // Show "Account settings" if the user is logged in
                    return (
                      <li key={`_fni_${navItem.id}-${navItemIdx}`}>
                        <Link
                          href={navItem.href}
                          rel="nofollow"
                          className="text-lg transition-all ease-out duration-300 text-black no-underline hover:underline"
                        >
                          {navItem.name}
                        </Link>
                      </li>
                    );
                  } else {
                    // Don't show "Account settings" if the user is not logged in
                    return null;
                  }
                } else {
                  // For other items in the list, always render them
                  return (
                    <li key={`_fni_${navItem.id}-${navItemIdx}`}>
                      <Link
                        href={navItem.href}
                        rel="nofollow"
                        className="text-lg transition-all ease-out duration-300 text-black no-underline hover:underline"
                      >
                        {navItem.name}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="w-52 order-2 lg:order-3">
            <div className="text-3xl text-black mb-3 md:mb-12">Contact us</div>
            <div>
              <div className="tel text-lg">
                {" "}
                {/* <a href="tel:1-877-734-6858" className="tel text-lg">
                  1 (877) 734-6858
                </a> */}
              </div>
              <div className="email text-lg">
                <a
                  href="mailto:hello@cruise-collective.com"
                  className="email text-lg"
                >
                  hello@cruise-collective.com
                </a>
              </div>
            </div>

            <div className="pt-3 flex flex-col gap-1 text-lg">
              <Link
                href="https://www.instagram.com/cruisecollectiveuk/"
                target="_blank"
              >
                Instagram
              </Link>
              <Link href="https://twitter.com/Cruis_Collectiv" target="_blank">
                Twitter
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61554439305290"
                target="_blank"
              >
                Facebook
              </Link>
            </div>
          </div>

          <div className="flex-auto order-1 lg:order-4 ">
            <div className="flex justify-center">
              <div className="max-w-[400px] bg-[#EDECE8] p-3 md:p-6">
                <div className="flex justify-center">
                  <FooterRightImage></FooterRightImage>
                </div>
                <p className="mt-2 text-black text-2xl text-center">
                  Be the first to know about exclusive deals and join the
                  collective.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex pt-3">
                    <input
                      className="border outline-0 border-cruise w-full h-10 bg-[#EDECE8] px-2"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    <button className="bg-cruise text-white w-32 text-[10px] tracking-[2px] apercu_medium uppercase hover:text-black hover:underline">
                      Subscribe
                    </button>
                  </div>
                  {errors.email && (
                    <div className="text-red text-sm">
                      Please enter a valid email address
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyRightFooterContainer font-sans pt-5 text-xs text-black w-full md:max-w-md">
          <div>Copyright © 2023 Cruise Collective. All rights reserved.</div>
          <div>Our Media Limited, Eagle House, Colston Avenue, Bristol, <br></br> BS1 4ST, Tel: +44(0)117 9279009. </div>
        </div>
      </footer>
      {!!Object.keys(showSuccessModal).length && (
        <SuccessfulModal
          showSuccessModal={showSuccessModal}
          setShowSuccessModal={setShowSuccessModal}
        />
      )}
      {/* <SuccessfulModal /> */}
    </>
  );
};

export default Footer;
