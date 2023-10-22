import Link from "next/link";

const DestinationCruiseCard = ({ cruise }) => {
  
  const { id, imageUrl, name, description } = cruise;

  return (
    <div className="flex flex-col">
      <div className="card">
        {imageUrl && (
          <img
            className="transform cursor-pointer hover:scale-105 transition duration-300"
            height={328}
            src={imageUrl}
            alt="card img"
          />
        )}
        <div>
          <p className="p-2 text-black text-sm md:text-base">{description}</p>
          <h5 className="text-3xl border-t border-b border-cruise py-2 px-4">
            <Link href={`/country/${id}`}>{name}</Link>
          </h5>
          <h5 className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
            Explore Here
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DestinationCruiseCard;
