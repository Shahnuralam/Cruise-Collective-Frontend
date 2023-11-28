import Head from "next/head";

import HomeLandingPage from "@/components/LandingPage/HomeLandingPage";
export default function Home({  }) {
  return (
    <main className="flex flex-col">
      <Head>
        <title>Cruise Collective</title>
      </Head>
      {/* <LandingImage
        src="/images/landing-1.png"
        alt="Landing Image 1"
        caption="Sardenia with Ambassador"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Clogo className="hidden md:block" />
        </div>
      </LandingImage> */}
  
      <HomeLandingPage />
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
