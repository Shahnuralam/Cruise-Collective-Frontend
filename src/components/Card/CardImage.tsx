import Image from "next/image";

const CardImage = ({ featuredImage, title, navigateToDetailPage}) => {
  return (
    <>
      {featuredImage ? (
        <Image
          className="transform cursor-pointer  transition duration-300 object-cover object-center"
          src={featuredImage}
          alt={title}
          onClick={navigateToDetailPage}
          fill
          sizes="17.875rem"
        />
      ) : (
        <Image
          className="transform cursor-pointer  transition duration-300 object-cover object-center"
          src="/images/default.jpg"
          alt={title}
          onClick={navigateToDetailPage}
          fill
          sizes="17.875rem"
        />
      )}
    </>
  );
};

export default CardImage;
