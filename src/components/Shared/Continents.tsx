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
      {/* <div className="flex items-center">
        <div className="mr-6">
          <Image src="/images/continents/world map.png" width={40} height={40} alt="map icon" />
        </div>
        <div className="h-8">
          <Link
            className="text-lg md:text-[24px] hover:text-cruise hover:border-cruise hover:border-b"
            href={`/multi-continent`}
          >
            Multi-continent
          </Link>
        </div>
      </div> */}
      
    </>
  );
};

export default Continents;
