import ContinentLandingPage from "@/components/LandingPage/ContinentLandingPage";
import Head from "next/head";
import React, { useState } from "react";

const continentPage = () => {

    const [continentModal, setContinentModal] = useState<boolean>(false);

  return (
    <div>
      <main className="flex flex-col">
        <Head>
          <title>Cruise Collective</title>
        </Head>

        <ContinentLandingPage
          continentModal={continentModal}
          setContinentModal={setContinentModal}
        />
      </main>
    </div>
  );
};

export default continentPage;
