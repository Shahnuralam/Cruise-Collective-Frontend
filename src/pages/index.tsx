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

export default function Home({ data }) {
  // const {
  //   attributes: { exclusive_contents, experiences, masters, offers, partners },
  // } = data;

  return (
    <main className="flex flex-col">
      <Head>
        <title>Cruise Collective</title>
      </Head>
      <LandingImage
        src="/images/landing-1.png"
        alt="Landing Image 1"
        caption="Jason Ingram"
      >
        <Link
          href="#exploreOurPartnerEstates"
          scroll={false}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-bold"
          type="button"
        >
          <LandingMoreIcon
            viewBox="0 0 60 60"
            className="w-[3.375rem] h-[3.375rem] lg:w-[4.375rem] lg:h-[4.375rem]"
          />
        </Link>
      </LandingImage>

      <BannerImage
        src="/images/banner-1.jpg"
        alt="Banner Image 2"
        href="https://try.gardensillustrated.com/membershipbackcatalogue/

"
      />

      {/* <ExploreOurPartnerEstates items={partners} />

      <ExclusiveContent items={exclusive_contents} />

      <VIPExperiences articles={experiences} />

      <YourLatestOffers articles={offers} />

      <TakeAMasterClass articles={masters} /> */}
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
