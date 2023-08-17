import React from 'react';

export interface IQuote {
  text: string;
  source: string;
  id?: string;
}

export const Quote: React.FC<IQuote> = (props) => {
  const { text, source, id } = props;

  return (
    <div className="flex justify-center w-full py-12 bg-[#c7d1a3] bg-opacity-[15%] text-[#4f6355]" id={id}>
      <div className="container flex flex-col gap-2 items-center text-center justify-center">
        <p className="font-serif max-w-[90%] lg:max-w-[70%] xl:max-w-[50%] text-[2rem] leading-tight">“{text}”</p>
        <p className="text-lg max-w-[90%] lg:max-w-[70%] xl:max-w-[50%] text-[2rem] ">{source}</p>
      </div>
    </div>
  );
};
