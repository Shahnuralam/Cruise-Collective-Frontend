import React from "react";

export interface IQuote {
  text: string;
  source: string;
  id?: string;
}

export const Quote: React.FC<IQuote> = (props) => {
  const { text, source, id } = props;

  return (
    <div className="flex justify-center w-full py-[75px] bg-cruise-texture">
      <div className="container flex flex-col gap-2 items-center text-center justify-center">
        <p className="max-w-[90%] lg:max-w-[70%] xl:max-w-[50%] text-2xl md:text-5xl text-black">
          “{text}”
        </p>
        <p className="text-lg max-w-[90%] lg:max-w-[70%] xl:max-w-[50%] mt-4 apercu_regular_pro text-black">
          {source}
        </p>
      </div>
    </div>
  );
};
