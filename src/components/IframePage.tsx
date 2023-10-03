import React from "react";

const IframePage = ({ src }) => {
  return (
    <div>
      <iframe
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[860px]"
        src={src}
        style={{border:0}}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default IframePage;
