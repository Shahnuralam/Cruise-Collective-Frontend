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
import CompetitionCard from "@/components/Card/CompetitionCard";



const CompetitionDetailPage = ({ competition,allcompetition }) => {
  const createdAt = new Date(competition.data.attributes.createdAt);

  const options: any = { day: '2-digit', month: 'long', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(createdAt);
  console.log('s', competition.data.attributes.createdAt);

  const [scrollTop, setScrollTop] = useState<boolean>(false);
  const fullScreenHeader = {
    bgImg: competition.data.attributes.featured_image.data.attributes.url,
    heading: competition.data.attributes.title,
    date: formattedDate,
    // text: "COMPETITION CLOSES ON: 05.10.2023",
    btnText: "ENTER BELOW",
  };

  const getRandomCompetitions = (count, currentCompetitionId) => {
    const shuffledCompetitions = [...allcompetition.data];
    // Filter out the current competition based on its ID
    const filteredCompetitions = shuffledCompetitions.filter(item => item.id !== currentCompetitionId);
    for (let i = filteredCompetitions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCompetitions[i], filteredCompetitions[j]] = [filteredCompetitions[j], filteredCompetitions[i]];
    }
    return filteredCompetitions.slice(0, count);
  };
  
  const relatedCompetitions = getRandomCompetitions(4, competition.id);
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
          <div dangerouslySetInnerHTML={{ __html: competition.data.attributes.text_editor }} />
        </section>

      </section>

      <section className="p-3 md:p-[75px]">
        <PageHeading
          pageHeaderData={{ heading: "You may also like", text: "" }}
        />
        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {relatedCompetitions.map((item) => (
    <CompetitionCard  key={item.id} competition={item} />
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
  const res = await fetch(`${baseUrl}/api/competitions/${id}?populate=deep`);
  const competition = await res.json();

  const allres = await fetch(`${baseUrl}/api/competitions?populate=deep`);
  const allcompetition = await allres.json();

  return {
    props: {
      competition,
      allcompetition
    },
  };
}
export default CompetitionDetailPage;
