import React from 'react';

export interface IBigLandingTitleWithDescriptionProps {
  title: string;
  description: string;
}

export const BigLandingTitleWithDescription: React.FC<IBigLandingTitleWithDescriptionProps> = (props) => {
  const { title, description } = props;

  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-[#36453b] text-white py-16">
      <h2 className="text-[#c7d1a3] text-5xl font-serif text-center" dangerouslySetInnerHTML={{ __html: title }} />
      <h4 className="text-center text-lg max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] leading-smooth" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};
