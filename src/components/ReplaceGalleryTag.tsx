import BodyImageSlider from "@/containers/atoms/BodyImageSlider";
import {  mapDynamicGallery } from "@/utils";
import React from "react";

const ReplaceGalleryTag = (text, galleryData) => {
  const components = text.split("{gallery}");

  const replacedComponents = components.map((component, index) => {
    if (index === components.length - 1) {
      return <div key={index} dangerouslySetInnerHTML={{ __html: component }} />;
    }

    return (
      <React.Fragment key={index}>
        <div key={index} dangerouslySetInnerHTML={{ __html: component }} />
        <BodyImageSlider key={`slider_${index}`} sliderItems={mapDynamicGallery(galleryData)} />
      </React.Fragment>
    );
  });

  return <>{replacedComponents}</>;
};

export default ReplaceGalleryTag;
