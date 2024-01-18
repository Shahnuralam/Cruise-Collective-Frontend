import { getContinents,  getCountriesWithPagination } from '@/queries/destinations';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';


function useCountriesAndContinents() {
  const [countries, setCountries] = useState<any>([]);
  const [countryLoading, setCountryLoading] = useState<boolean>(false);

  const { isLoading: isLoadingContinents, data: continents, refetch: refetchContinents } = useQuery(
    "destinations?populate=deep&filters[$or][1][type][$contains]=continent",
    () => getContinents(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      let page = 1;
      let allCountries: any = [];

      let hasMoreData = true;
      setCountryLoading(true);
      while (hasMoreData) {
        const response = await getCountriesWithPagination(page, 25);
        if (response?.data?.length < 25) {
          setCountryLoading(false)
          hasMoreData = false;
        }
        const resData = response.data = []
        allCountries = [...allCountries, ...resData];
        setCountries(allCountries);
        page++;
      }
    };

    fetchData();
  }, []);

  const getContinentWithCountries = () => {
    return continents?.data?.map(continent => {
      const continentCountries = countries?.filter(element => element?.attributes?.destination?.data?.id === continent.id); //element?.attributes?.destination?.data?.id === continent.id
      return { ...continent, continentCountries };
    });
  };

  return {
    isLoadingCountries: countryLoading,
    isLoadingContinents,
    countries: countries || [],
    continents: continents?.data || [],
    refetchContinents,
    getContinentWithCountries,
  };
}

export default useCountriesAndContinents;
