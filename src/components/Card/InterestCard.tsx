
const InterestCard = ({ interest }) => {

  const { title, excerpt,  featured_image: {data} } = interest?.attributes;
  const featuredImage =  data?.length ?  data[0]?.attributes?.url : '';

  return (
    // <div className="flex flex-col">
      <div className="card">
        {featuredImage && (
          <img
            style={{ height: "328px" }}
            src={featuredImage}
            alt={title}
          />
        )}
        {!featuredImage && (
          <img
            style={{ height: "328px" }}
            src="/images/default.jpg"
            alt={title}
          />
        )}
        <div>
          <p className="p-2 text-black text-sm md:text-base">{excerpt}</p>
          <h5 className="text-3xl border-t border-b border-cruise py-2 px-4">
            {title}
          </h5>
          <h5 className="uppercase mt-2 py-3 px-4 text-black text-xl apercu_medium">
            Explore Here
          </h5>
        </div>
      </div>
    // </div>
  );
};

export default InterestCard;
