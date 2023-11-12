import { getContinents, getCountries, getCountriesWithPagination } from '@/queries/destinations';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';


function useCountriesAndContinents() {
  const [countries, setCountries] = useState<any>([]);
  const [countryLoading, setCountryLoading] = useState<boolean>(false);
  // const { isLoading: isLoadingCountries, data: countries, refetch: refetchCountries } = useQuery(
  //   `destinations?populate=deep&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}&filters[$or][1][type][$contains]=country`,
  //   () => getCountries(),
  //   {
  //     refetchOnWindowFocus: false,
  //     enabled: true,
  //   }
  // );

  const { isLoading: isLoadingContinents, data: continents, refetch: refetchContinents } = useQuery(
    "destinations?populate=deep&filters[$or][1][type][$contains]=continent",
    () => getContinents(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  // const getContinentWithCountries = () => {
  //   if (!countries?.data || !continents?.data) {
  //     return [];
  //   }
  //   return continents?.data?.map(continent => {
  //     const continentCountries = countries?.data?.filter(element => element?.attributes?.destination?.data?.id === continent.id) || [];
  //     return { ...continent, continentCountries };
  //   });
  // };


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
        allCountries = [...allCountries, ...response?.data];
        setCountries(allCountries);
        page++;
      }
    };

    fetchData();
  }, []);

  const getContinentWithCountries = () => {
    // if (!countries?.data || !continents?.data) {
    //   return [];
    // }
    return continents?.data?.map(continent => {
      const continentCountries = countries?.filter(element => element?.attributes?.destination?.data?.id === continent.id); //element?.attributes?.destination?.data?.id === continent.id
      return { ...continent, continentCountries };
    });
  };
  const getContinentBySlug = (slug) => {
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
    // refetchCountries,
    refetchContinents,
    getContinentWithCountries,
  };
}

export default useCountriesAndContinents;
