import ContinentCard from "../Card/ContinentCard";
import Image from "next/image";
import Link from "next/link";
import { getContinents,} from "@/queries/destinations";
import { useQuery } from "react-query";

const Continents = () => {

  const { isLoading, data, refetch } = useQuery(
    "destinations?populate=deep&filters[$or][1][type][$contains]=continent",
    () => getContinents(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );



  return (
    <>
      {data?.data?.map((continent) => (
        <ContinentCard key={continent.id} continent={continent} />
      ))}
      
    </>
  );
};

export default Continents;
