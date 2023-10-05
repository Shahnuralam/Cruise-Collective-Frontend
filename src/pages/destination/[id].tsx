import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  IDestinationData,
  destinationPageData,
} from "@/components/Interface/DestinationLandingDto";
import PageHeading from "@/components/PageHeading";
import ContinentCard from "@/components/Card/ContinentCard";
import DestinationCard from "@/components/Card/DestinationCard";

const ContinentLandingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [continentPageData, setContinentPageData] = useState<
    IDestinationData[]
  >([]);
  const pageHeaderData = {
    heading: "Pick a continent",
    text: "Your next Cruise adventure starts here. From the sun-kissed shores of the Caribbean and the majestic fjords of Norway, to the cultural treasures of the Mediterranean to the wild beauty of Alaska, our destination guide will provide you with insights, tips, and recommendations that will transform your cruise dreams into reality.",
  };

  useEffect(() => {
    const data = destinationPageData.filter(
      (desPageElement) => desPageElement.id === Number(id)
    );
    setContinentPageData(data);
  }, [id]);

  return (
    <main className="flex flex-col">
      <Head>
        <title>Cruise Collective</title>
      </Head>

      <div className=" p-3 md:p-[32px] lg:p-[75px]">
        <section>
          {continentPageData.map((destinationCruise) => (
            <DestinationCard
              key={destinationCruise.id}
              cardData={destinationCruise}
            />
          ))}
        </section>

        <section>
          <PageHeading pageHeaderData={pageHeaderData} />
          <div className="card-container my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
            {destinationPageData.map((continent) => (
              <ContinentCard key={continent.id} continentData={continent} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContinentLandingPage;
