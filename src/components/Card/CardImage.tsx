const CardImage = ({ featuredImage, title, navigateToDetailPage, height }) => {

  return (
    <>
      {featuredImage && (
        <img
          className="transform cursor-pointer hover:scale-105 transition duration-300"
          style={{ height: height  }}
          src={featuredImage}
          alt={title}
          onClick={navigateToDetailPage}
        />
      )}
      {!featuredImage && (
        <img
          className="transform cursor-pointer hover:scale-105 transition duration-300"
          style={{ height: height }}
          src="/images/default.jpg"
          alt={title}
          onClick={navigateToDetailPage}
        />
      )}
    </>
  );
};

export default CardImage;
