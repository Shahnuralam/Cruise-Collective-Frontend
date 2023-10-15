import React from "react";
import StrokeLine from "./StrokeLine";

const PageHeading: React.FC<{ pageHeaderData: { heading: string; text: string; }; fontSizeValue?: string; }> = ({ pageHeaderData, fontSizeValue }) => {
  const { heading, text } = pageHeaderData;

  return (
    <div>
      <div className="text-3xl md:text-[40px] text-black">{heading}</div>
      <div className="py-5">
        <StrokeLine />
      </div>

      {/* <p  className="pt-1 max-w-4xl text-black text-sm md:text-base">
        { text }
      </p> */}
      <p
        className={`pt-1 max-w-4xl text-black ${
          fontSizeValue ? `text-[${fontSizeValue}]` : "text-sm"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default PageHeading;
