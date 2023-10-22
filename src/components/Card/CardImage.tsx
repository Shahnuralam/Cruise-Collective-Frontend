const CardImage = ({featuredImage, title, navigateToDetailPage}) => {
    return (
        <>
            {featuredImage && (
          <img className="transform cursor-pointer hover:scale-105 transition duration-300"
            style={{ height: "328px" }}
            src={featuredImage}
            alt={title}
            onClick={navigateToDetailPage}
          />
        )}
        {!featuredImage && (
          <img className="transform cursor-pointer hover:scale-105 transition duration-300"
            style={{ height: "328px" }}
            src="/images/default.jpg"
            alt={title}
            onClick={navigateToDetailPage}
          />
        )} 
        </>
    );
};

export default CardImage;