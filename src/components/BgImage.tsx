const BgImage = ({ bgImgUrl }) => {
  return (
    <div
      className="w-full h-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('${bgImgUrl}')`,
      }}
    ></div>
  );
};

export default BgImage;
