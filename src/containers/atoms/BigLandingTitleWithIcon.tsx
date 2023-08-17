import React from "react";

export interface IBigLandingTitleWithIconProps {
  icon: any;
  title: string;
}

export const BigLandingTitleWithIcon: React.FC<
  IBigLandingTitleWithIconProps
> = (props) => {
  const { icon, title } = props;
  const iconProps = {
    viewBox: "0 0 60 60",
    className: "w-[4rem] h-[4rem]",
  };

  return (
    <div className="flex justify-center items-center bg-[#36453b] text-white pt-20 pb-10">
      <div className="flex flex-col justify-center items-center gap-4 max-w-[90%] lg:container">
        {/* <div className="text-[#c7d1a3]">{icon(iconProps)}</div> */}
        <h2 className="text-5xl font-serif text-center">{title}</h2>
      </div>
    </div>
  );
};
