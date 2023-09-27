import LandingImage from "@/components/LandingImage";
import LandingMoreIcon from "@/assets/svg/landing-more-icon.svg";
import {
  ExclusiveContent,
  exclusiveContentData,
  ExploreOurPartnerEstates,
  exploreOurPartnerEstatesData,
  TakeAMasterClass,
  VIPExperiences,
  YourLatestOffers,
} from "@/containers/Landing";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { baseUrl } from "@/utils";
import BannerImage from "@/components/BannerImage";
import Clogo from "@/assets/svg/c.svg";
import classNames from "classnames";
import DestinationLandingPage from "@/components/LandingPage/DestinationLandingPage";
import { useState } from "react";
export default function Home({ data }) {
  // const {
  //   attributes: { exclusive_contents, experiences, masters, offers, partners },
  // } = data;

  const [continentModal, setContinentModal] = useState<boolean>(false);

  return (
    <main className="flex flex-col">
      <Head>
        <title>Cruise Collective</title>
      </Head>
      <LandingImage
        src="/images/landing-1.png"
        alt="Landing Image 1"
        caption="Sardenia with Ambassador"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Clogo className="hidden md:block" />
        </div>
      </LandingImage>

      <div className="p-5">
        <DestinationLandingPage
          continentModal={continentModal}
          setContinentModal={setContinentModal}
        />
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  // const { data } = await axios.get(`${baseUrl}/api/homepage?populate=deep`);

  return {
    props: {},
    revalidate: 1,
  };
};
