import PrimaryButton from "../PrimaryButton";
import StrokeLine from "../StrokeLine";
import { DestinationCountryCard } from "./DestinationCountryCard";

const DestinationCard = (props) => {
 
  const { cardData, source, children } = props;
  const {  continentCountries, attributes } = cardData;
  const { slug } = attributes;

  return (
    <>
      <div>
        <div className="text-2xl md:text-[32px] text-black">
          {attributes?.title}
        </div>
        <div className="py-5">
          <StrokeLine />
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: attributes?.excerpt }}
          className="pt-1 max-w-4xl text-black text-base"
        ></p>
      </div>

      <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
     {source === "four"
          ? continentCountries
              ?.filter((cruise) => cruise?.attributes?.offer?.data !== null)
              ?.slice(0, 4)
              ?.map((cruise) => (
                <DestinationCountryCard key={cruise.id} cruise={cruise} />
              ))
          : continentCountries
              ?.filter((cruise) => cruise?.attributes?.offer?.data !== null)
              ?.map((cruise) => (
                <DestinationCountryCard key={cruise.id} cruise={cruise} />
              ))}
      </div>

      {children && (
        <div className="text-center my-12">
          <PrimaryButton
            href={
              slug !== "multi-continent"
                ? `/destination/${slug}`
                : `/multi-continent/${slug}`
            }
            btnText={children}
          />
        </div>
      )}
    </>
  );
};

export default DestinationCard;
