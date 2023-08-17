import { NextPage } from "next";
import { Breadcrumb, TextAndActionBtnSection } from "@/containers/atoms";
import {
  BigLandingTitleWithDescription,
  membersSupportPageBreadcrumb,
  SupportList,
} from "@/containers/MembersSupport";
import LandingImage from "@/components/LandingImage";
import Head from "next/head";
import { Accordions } from "@/containers/Faqs/Accordion";
import { baseUrl } from "@/utils";
import axios from "axios";

const FaqPage = ({ faqs }) => {
  return (
    <main className="flex flex-col">
      <Head>
        <title>FAQs</title>
      </Head>
      {/** Breadcrumb */}
      <div className="flex justify-center items-center py-4">
        <div className="container w-[90%] lg:w-full">
          <Breadcrumb items={membersSupportPageBreadcrumb} />
        </div>
      </div>

      {/***/}
      <LandingImage src="/images/landing-4.png" caption="Jason Ingram" />

      {/***/}
      <BigLandingTitleWithDescription
        title={`Frequently asked questions`}
        description=""
      />

      {/***/}
      <Accordions items={faqs.data} />
      {/* <SupportList items={membersSupportPageSupportListData} /> */}

      {/***/}
      <TextAndActionBtnSection
        title="Need more help?"
        description="Can’t find the answer you’re looking for? <br /> Don’t worry we’re here to help!"
        actionBtn={{
          title: "Contact us",
          href: "mailto:gimembership@ourmedia.co.uk?subject=Member%20questions",
        }}
      />
    </main>
  );
};

export const getStaticProps = async () => {
  const { data: faqs } = await axios.get(`${baseUrl}/api/faqs`);

  return {
    props: {
      faqs,
    },
    revalidate: 10,
  };
};

export default FaqPage;
