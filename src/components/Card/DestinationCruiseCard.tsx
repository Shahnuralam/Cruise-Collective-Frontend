import Link from "next/link";
import { useRouter } from "next/router";

const DestinationCruiseCard = ({ cruise }) => {
  const router = useRouter();
  const { id, imageUrl, name, description } = cruise;

  const navigateToNextRoute = () => {
    router.push(`/country/${id}`);
  };
  return (
    <div className="card group">
      {imageUrl && (
        <img
          onClick={navigateToNextRoute}
          className="transform cursor-pointer hover:scale-105 transition duration-300"
          height={328}
          src={imageUrl}
          alt="card img"
        />
      )}
      <div>
        <p className="p-2 text-black text-sm md:text-base">{description}</p>
        <h5 className="text-2xl border-t border-b border-cruise py-2 px-4">
          <Link className="group-hover:underline" href={`/country/${id}`}>
            {name}
          </Link>
        </h5>
        <h5 className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
          <Link className="group-hover:underline" href={`/country/${id}`}>
            Explore Here
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default DestinationCruiseCard;
