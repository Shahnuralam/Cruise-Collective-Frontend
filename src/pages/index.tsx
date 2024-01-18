import Head from "next/head";

import HomeLandingPage from "@/components/LandingPage/HomeLandingPage";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Head>
        <title>Cruise Collective</title>
      </Head>  
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
