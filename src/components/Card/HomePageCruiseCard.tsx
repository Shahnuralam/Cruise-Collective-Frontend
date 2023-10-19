const HomePageCruiseCard = ({ cruise }) => {
  const { imageUrl, title, excerpt } = cruise;

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
          <p className="p-2 text-black text-sm md:text-xl">{excerpt}</p>
          <h5 className="text-[28px] border-t border-b border-cruise py-2 px-4">
            {title}
          </h5>
          <h5 className="uppercase cursor-pointer mt-2 py-2.5 px-4 text-black text-base apercu_regular_pro hover:bg-cruise">
            EXPIRES 7·31·23
          </h5>
        </div>
      </div>
    </div>
  );
};
export default HomePageCruiseCard;
