

const CarouselItem = ({ slide, prev, next, indexId }) => {
  const { image, id } = slide;
  return (
    <div id={`slide${indexId}`} className="carousel-item relative w-full">

         <img src={image} className="w-full h-[700px]" />
  
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;

