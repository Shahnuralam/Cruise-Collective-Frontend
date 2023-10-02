import React from "react";
import StrokeLine from "./StrokeLine";

const PageHeading = ({ pageHeaderData }) => {

    const {heading, text } = pageHeaderData;

  return (
    <div>
      <h3 className="text-[40px]">{ heading }</h3>
      <div className="pt-5 pb-6">
        <StrokeLine />
      </div>
      <p className="pt-1 max-w-4xl">
        { text }
      </p>
    </div>
  );
};

export default PageHeading;