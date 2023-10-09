const HomePageCruiseCard = ({ cruise }) => {
  const { imageUrl, name, description } = cruise;

  return (
    <div className="flex flex-col">
      <div className="card">
        {imageUrl && (
          <img
            className="object-contain"
            height={328}
            src={imageUrl}
            alt="card img"
          />
        )}
        <div>
          <p className="p-2 text-black text-sm md:text-base">{description}</p>
          <h5 className="text-3xl border-t border-b border-cruise py-2 px-4">
            {name}
          </h5>
          <h5 className="uppercase mt-2 py-3 px-4 text-black text-base apercu_regular_pro">
            EXPIRES 7·31·23
          </h5>
        </div>
      </div>
    </div>
  );
};
export default HomePageCruiseCard;
