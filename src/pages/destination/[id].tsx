import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  IDestinationData,
  destinationPageData,
} from "@/components/Interface/DestinationLandingDto";
import PageHeading from "@/components/PageHeading";
import ContinentCard from "@/components/Card/ContinentCard";
import DestinationCard from "@/components/Card/DestinationLandingCard";

const ContinentLandingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [continentPageData, setContinentPageData] = useState<
    IDestinationData[]
  >([]);

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

        <section className="mb-12 container mx-auto mt-6 md:mt-[75px]">
          <div className="apercu_regular_pro text-black text-2xl pb-6 text-center ">
            FIND AN AMAZING CRUISE DEAL ANYWHERE IN THE WORLD
          </div>
          <div className="card-container my-10 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 border-cruise border-t border-b">
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
