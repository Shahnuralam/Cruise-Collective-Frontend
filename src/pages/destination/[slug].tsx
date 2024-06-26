import Head from "next/head";
import { useRouter } from "next/router";
import DestinationCard from "@/components/Card/DestinationLandingCard";
import Continents from "@/components/Shared/Continents";
import useCountriesAndContinents from "@/hooks/useCountriesAndContinents";

const ContinentLandingPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    isLoadingCountries,
    isLoadingContinents,
    getContinentWithCountries,
  } = useCountriesAndContinents();
  const continentWithCountries = getContinentWithCountries();
  let filteredData: any[] = [];
  if (continentWithCountries?.length) {
    filteredData = continentWithCountries?.filter(
      (e) => e?.attributes?.slug === slug
    );
  }

  if (isLoadingContinents) {
    return <p className="text-lg p-8 min-h-screen">Loading...</p>;
  }
  return (
    <main className="flex flex-col">
      <Head>
        <title>Cruise Collective</title>
      </Head>

      <div className=" p-3 md:p-[32px] lg:p-[75px]">
        <section>
          {isLoadingCountries && (
            <p className="text-lg p-8 min-h-screen">Loading...</p>
          )}

          {filteredData
            ?.sort((a, b) => a.name.localeCompare(b.name))
            .map((continentCountry) => (
              <DestinationCard
                key={continentCountry.id}
                source="all"
                cardData={continentCountry}
              ></DestinationCard>
            ))}
        </section>

        <section className="mb-12 container mx-auto mt-6 md:mt-[75px]">
          <div className="apercu_regular_pro text-black text-2xl pb-6 text-center ">
            FIND AN AMAZING CRUISE DEAL ANYWHERE IN THE WORLD
          </div>
          <div className="card-container my-10 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 border-cruise border-t border-b">
            <Continents />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContinentLandingPage;
