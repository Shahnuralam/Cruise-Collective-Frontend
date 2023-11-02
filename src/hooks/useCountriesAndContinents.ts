import { getContinents, getCountries } from '@/queries/destinations';
import { useQuery } from 'react-query';


function useCountriesAndContinents() {
  const { isLoading: isLoadingCountries, data: countries, refetch: refetchCountries } = useQuery(
    "destinations?populate=deep&filters[$or][1][type][$contains]=country",
    () => getCountries(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  const { isLoading: isLoadingContinents, data: continents, refetch: refetchContinents } = useQuery(
    "destinations?populate=deep&filters[$or][1][type][$contains]=continent",
    () => getContinents(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  const getContinentWithCountries = () => {
    if (!countries?.data || !continents?.data) {
      return [];
    }
    return continents.data.map(continent => {
      const continentCountries = countries.data.filter(element => element?.attributes?.destination?.data?.id === continent.id);
      return { ...continent, continentCountries };
    });
  };

  return {
    isLoadingCountries,
    isLoadingContinents,
    countries: countries?.data || [],
    continents: continents?.data || [],
    refetchCountries,
    refetchContinents,
    getContinentWithCountries,
  };
}

export default useCountriesAndContinents;
