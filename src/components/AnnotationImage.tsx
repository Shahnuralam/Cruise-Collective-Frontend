import BgImage from "./BgImage";

const AnnotationImage = ({ data }) => {
  const { imgUrl, heading, text } = data;

  return (
    <>
      <div className="text-3xl mb-3">{heading}</div>
      <div className="annotation-image-height">
        <BgImage bgImgUrl={imgUrl}></BgImage>
      </div>
      <p className="text-sm mt-2">{text}</p>
    </>
  );
};

export default AnnotationImage;
