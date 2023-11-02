import BgImage from "@/components/Shared/BgImage";
import FullScreenHeader from "@/components/FullScreenHeader";
import LandingImage from "@/components/LandingImage";
// import InspirationLandingPage from "@/components/LandingPage/InspirationLandingPage";
import PageHeading from "@/components/PageHeading";
import SocialShare from "@/components/SocialShare";
import FooterRightImage from "@/layout/Footer/FooterRightImage";
import React, { useState } from "react";
import { baseUrl } from "@/utils";
//import competition from "../competition";
import styles from '../../styles/editor.module.css';



const CruiseLineDetail = ({cruiselines}) => {
  console.log('s',cruiselines);

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
     
      <section className="container mx-auto pt-3 ">

      <section className={`${styles.editorContainer} container mx-auto pt-3 `}>
        <div dangerouslySetInnerHTML={{ __html: cruiselines.data.attributes.excerpt }} />
      </section>
        
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
  const res = await fetch(`${baseUrl}/api/cruise-lines/${id}`);
  const cruiselines = await res.json();

  return {
    props: {
        cruiselines,
    },
  };
}
export default CruiseLineDetail;
