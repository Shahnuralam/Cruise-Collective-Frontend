import BgImage from "@/components/Shared/BgImage";
import FullScreenHeader from "@/components/FullScreenHeader";
import LandingImage from "@/components/LandingImage";
// import InspirationLandingPage from "@/components/LandingPage/InspirationLandingPage";
import PageHeading from "@/components/PageHeading";
import SocialShare from "@/components/SocialShare";
import FooterRightImage from "@/layout/Footer/FooterRightImage";
import React, { useState } from "react";
import { baseUrl } from "@/utils";
import competition from "../competition";
import styles from '../../styles/editor.module.css';



const CompetitionDetailPage = ({competition}) => {
  console.log('s',competition);

  const [scrollTop, setScrollTop] = useState<boolean>(false);
  const fullScreenHeader = {
    bgImg: "/dummy/competition/Rectangle (14).png",
    heading: "Win a 5 night cruise in Alaska with Cunard",
    date: "08 March 2023 by Joe Blogs",
    text: "COMPETITION CLOSES ON: 05.10.2023",
    btnText: "ENTER BELOW",
  };

  return (
    <>
      <section>
        <FullScreenHeader setScrollTop={setScrollTop} fullScreenHeader={fullScreenHeader}>
          <div
            className="absolute top-0 p-2"
            style={{ background: "rgba(255, 255, 255, 0.20)" }}
          >
            <img src="/dummy/competition/cunard 2.png" alt="" />
          </div>
        </FullScreenHeader>
      </section>
      {/* <section>
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="h-[400px] md:h-auto relative">
            <BgImage bgImgUrl="/dummy/competition/Rectangle (14).png" />
            <div
              className="absolute top-0 p-2"
              style={{ background: "rgba(255, 255, 255, 0.20)" }}
            >
              <img src="/dummy/competition/cunard 2.png" alt="" />
            </div>
          </div>
          <div className="bg-cruise-texture p-6 md:p-12">
            <p className="max-w-[472px] text-5xl text-black py-2 mt-12">
              Win a 5 night cruise in Alaska with Cunard
            </p>
            <h4 className="text-[28px] text-black mt-5 mb-3">
              08 March 2023 by Joe Blogs
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
            <div className="pt-4 pb-8 max-w-[472px] min-h-[170px]">
              <p className="text-lg pt-8">COMPETITION CLOSES ON: 05.10.2023</p>
            </div>

            <div>
              <button className="border text-lg py-3 px-8">
                ENTER BELOW
              </button>
            </div>
            <div className="flex justify-end">
              <FooterRightImage></FooterRightImage>
            </div>
          </div>
        </div>
      </section> */}
      <section className="container mx-auto pt-3 ">

      <section className={`${styles.editorContainer} container mx-auto pt-3 `}>
        <div dangerouslySetInnerHTML={{ __html: competition.data.attributes.text_editor }} />
      </section>
        {/* <p className="text-3xl">
          Strapline text goes hereLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula
          velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam
          placerat auctor nisl, id efficitur urna. Nam non fermentum diam,
          vehicula euismod dui. Praesent finibus ultricies mollis.
        </p>
        <div className="pt-3 md:pt-[75px]">
          <LandingImage
            src="/dummy/competition/image 2.png"
            alt="Landing Image 2"
          />
        </div>
        <div className="pt-3 md:pt-[75px]">
          <PageHeading pageHeaderData={{ heading: "Enter below", text: "" }} />
        </div>
        <div className="p-3 md:p-12 h-[551px] flex justify-center items-center bg-[#D9D9D9] text-4xl  md:text-[80px]">
          Riddle OR Jotform Competition
        </div>
        <div className="pt-3 md:pt-[75px]">
          <PageHeading
            pageHeaderData={{ heading: "Terms & Conditions", text: "" }}
          />
        </div>
        <p>
          Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis. Standard paragraph text goes hereLorem ipsum dolor sit amet,
        </p>
        <SocialShare /> */}
      </section>

      <section className="p-3 md:p-[75px]">
        <PageHeading
          pageHeaderData={{ heading: "You may also like", text: "" }}
        />

      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  // Fetch product data from API based on productId
  const res = await fetch(`${baseUrl}/api/competitions/${id}`);
  const competition = await res.json();

  return {
    props: {
      competition,
    },
  };
}
export default CompetitionDetailPage;
