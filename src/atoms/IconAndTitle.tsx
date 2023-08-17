import React, { useMemo } from "react";
import classNames from "classnames";

export interface IconAndTitleProps {
  icon: any;
  iconsProps?: Partial<{ width: number; height: number; viewBox: string }>;
  title: string;
  titleClassName?: string;
}

const IconAndTitle: React.FC<IconAndTitleProps> = (props) => {
  const { icon, iconsProps: sentIconProps, title, titleClassName } = props;

  const iconProps = useMemo(() => {
    return {
      width: 72,
      height: 72,
      viewBox: "0 0 60 60",
      ...sentIconProps,
    };
  }, [sentIconProps]);

  return (
    <div className="flex flex-col justify-center items-center text-[#2c4338]">
      {/* icon */}
      {/* {icon(iconProps)} */}

      {/** title */}
      <h2
        className={classNames(
          "font-medium text-xl md:text-3xl lg:text-[3rem] text-[#36453b] leading-none text-center",
          titleClassName || ""
        )}
      >
        {title}
      </h2>
    </div>
  );
};

export default IconAndTitle;
