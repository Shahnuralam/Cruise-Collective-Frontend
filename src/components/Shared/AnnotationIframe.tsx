import IframePage from "../IframePage";

const AnnotationIframe = ({ data }) => {
  const { heading, src, text } = data;

  return (
    <>
      <div className="text-3xl mb-3">{heading}</div>
      <div>
        <IframePage src={src} />
      </div>
      <p className="text-sm mt-2">{text}</p>
    </>
  );
};

export default AnnotationIframe;
