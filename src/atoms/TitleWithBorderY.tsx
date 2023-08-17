import React, { useCallback } from "react";
import classNames from "classnames";

export interface IBorderYTitle {
  title: string;
  size?: "so-big" | "big" | "normal" | "small";
  className?: string;
  fontWeight?: "medium" | "bold";
}

const TitleWithBorderY: React.FC<IBorderYTitle> = (props) => {
  const {
    size = "normal",
    title,
    className: parentClassName,
    fontWeight,
  } = props;

  const Parent = useCallback(
    (_props: {
      children?: React.ReactNode;
      className?: string;
      dangerouslySetInnerHTML?: React.DOMAttributes<HTMLHeadingElement>["dangerouslySetInnerHTML"];
    }) => {
      const { children, className, dangerouslySetInnerHTML } = _props;

      const _className = classNames(
        "border-y border-y-[#4f6355] text-[#4f6355] font-serif",
        size === "so-big" ? "py-2.5 text-[2.5rem] md:text-[2.75rem]" : "",
        size === "big" ? "py-2.5 text-[1.95rem]" : "",
        size === "small" ? "py-2.5 text-[1.25rem]" : "",
        size === "normal" ? "py-3.5 text-[1.875rem]" : "",
        fontWeight === "bold" ? "font-bold" : "",
        fontWeight === "medium" ? "font-medium" : "",
        className
      );

      if (size === "small")
        return (
          <h3
            className={_className}
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          >
            {children ? children : null}
          </h3>
        );

      return (
        <h2
          className={_className}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
          {children ? children : null}
        </h2>
      );
    },
    [size, fontWeight]
  );

  return (
    <Parent
      className={parentClassName}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default TitleWithBorderY;
