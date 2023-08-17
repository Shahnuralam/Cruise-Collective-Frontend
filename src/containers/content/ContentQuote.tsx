import React, { useMemo } from 'react';

export interface IContentQuoteProps {
  text: string;
  source: string;
}

export const ContentQuote: React.FC<IContentQuoteProps> = (props) => {
  const { text, source } = props;

  const Separator = useMemo(() => {
    return <div className="max-w-[25rem] lg:max-w-[60%] w-full h-[1px] bg-[#607b53]" />;
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center max-w-[90%] lg:max-w-[60%] xl:max-w-[55%] gap-4">
        {Separator}

        <div className="flex flex-col gap-3">
          <p className="text-xl lg:text-2xl text-black text-center leading-loose text-opacity-90" dangerouslySetInnerHTML={{ __html: text }} />
          <p className="text-lg lg:text-xl leading-tight text-center font-medium text-[#36453b]" dangerouslySetInnerHTML={{ __html: source }} />
        </div>

        {Separator}
      </div>
    </div>
  );
};
