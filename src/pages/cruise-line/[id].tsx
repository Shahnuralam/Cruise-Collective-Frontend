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
import CruisesCard from "@/components/Card/CruisesCard";



const CruiseLineDetail = ({cruiselines,allcruiselines}) => {

  const createdAt = new Date(cruiselines.data.attributes.createdAt);

  const options: any = { day: '2-digit', month: 'long', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(createdAt);
  console.log('s',cruiselines);

  const [scrollTop, setScrollTop] = useState<boolean>(false);
  const fullScreenHeader = {
    bgImg: cruiselines.data.attributes.featured_image.data.attributes.url,
    heading: cruiselines.data.attributes.title,
    date: formattedDate,
    // text: "COMPETITION CLOSES ON: 05.10.2023",
    btnText: "ENTER BELOW",
  };
  const getRandomcruiselines = (count, currentInspirationId) => {
    const shuffledcruiselines = [...allcruiselines.data];
    // Filter out the current inspiration based on its ID
    const filteredcruiselines = shuffledcruiselines.filter(item => item.id !== currentInspirationId);
    for (let i = filteredcruiselines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredcruiselines[i], filteredcruiselines[j]] = [filteredcruiselines[j], filteredcruiselines[i]];
    }
    return filteredcruiselines.slice(0, count);
  };

  const relatedcruiselines = getRandomcruiselines(4, cruiselines.id); // Pass the current inspiration ID
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
          <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-12">
          {relatedcruiselines.map((item) => (
               <CruisesCard key={item.id} cruise={item} />
          ))}
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  // Fetch product data from API based on productId
  const res = await fetch(`${baseUrl}/api/cruise-lines/${id}?populate=deep`);
  const cruiselines = await res.json();

   // Fetch product data from API based on productId
   const allres = await fetch(`${baseUrl}/api/cruise-lines?populate=deep`);
   const allcruiselines = await allres.json();
   console.log(allcruiselines);
  return {
    props: {
        cruiselines,
        allcruiselines
    },
  };
}
export default CruiseLineDetail;
