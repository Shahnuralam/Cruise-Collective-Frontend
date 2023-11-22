import React from "react";

export interface IQuote {
  text: string;
  source: string;
  id?: string;
}

export const Quote: React.FC<IQuote> = (props) => {
  const { text, source, id } = props;

  return (
    <div className="flex justify-center w-full py-[70px] md:py-[125px] bg-cruise-texture">
      <div className="container flex flex-col gap-2 items-center text-center justify-center">
        <span className="max-w-[90%] lg:max-w-[80%] xl:max-w-[80%] text-2xl md:text-3xl text-black" >
          “{text}”
        </span>
        <span className="text-xs max-w-[90%] lg:max-w-[70%] xl:max-w-[50%] mt-4 uppercase apercu_medium_pro text-black">
          {source}
        </span>
      </div>
    </div>
  );
};
