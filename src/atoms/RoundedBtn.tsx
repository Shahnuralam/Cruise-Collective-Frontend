import React, { useMemo } from "react";
import classNames from "classnames";
import Link from "next/link";

export type IRoundedBtnVariant =
  | "outline-dark-green"
  | "outline-light-green"
  | "filled-dark-green"
  | "filled-light-green"
  | "filled-so-light-green"
  | "filled-red"
  | "outline-dark-green-bg-white";
export interface IRoundedBtnProps {
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
  variant?: IRoundedBtnVariant;
  useLink?: boolean;
  href?: string;
  onClick?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
  type?: React.ButtonHTMLAttributes<any>["type"];
  className?: string;
  disabled?: boolean;
}

const RoundedBtn: React.FC<IRoundedBtnProps> = (props) => {
  const {
    children,
    title,
    variant = "outline-dark-green",
    useLink = false,
    href,
    onClick,
    type,
    className,
    disabled = false,
  } = props;

  const containerClassName = useMemo(() => {
    return classNames(
      "flex justify-center items-center rounded-full py-3 px-6 cursor-pointer transition-all duration-300 ease-out border",
      variant === "outline-dark-green-bg-white"
        ? "text-[#36453b] border-[#36453b] bg-white hover:bg-[#36453b] hover:text-white"
        : "",
      variant === "outline-dark-green"
        ? "text-[#36453b] border-[#36453b] hover:bg-[#36453b] hover:text-white"
        : "",
      variant === "outline-light-green"
        ? "text-[#36453b] border-[#607b53] hover:bg-[#607b53] hover:text-white"
        : "",
      variant === "filled-dark-green"
        ? "border-[#36453b] bg-[#36453b] text-white hover:border-[#607b53] hover:bg-[#607b53]"
        : "",
      variant === "filled-red"
        ? "border-[#FF1744] bg-[#FF1744] text-white hover:border-[#EF5350] hover:bg-[#EF5350]"
        : "",
      variant === "filled-light-green"
        ? "border-[#607b53] bg-[#607b53] text-white hover:border-[#36453b] hover:bg-[#36453b]"
        : "",
      variant === "filled-so-light-green"
        ? "border-[#F7F8F2] bg-[#F7F8F2] text-[#36453b] hover:border-[#c7d1a3] hover:bg-[#c7d1a3]"
        : "",
      className
    );
  }, [variant, className]);

  if (!children && !title)
    throw new Error(
      "Please send 'children' or 'title' props to RoundedBtn component!"
    );
  if (useLink && (!href || !href?.length))
    throw new Error("Please send 'href' props to RoundedBtn component!");

  if (useLink) {
    return (
      <Link href={href as string} className={containerClassName}>
        {Boolean(children) ? children : <span>{title}</span>}
      </Link>
    );
  }
  return (
    <button
      disabled={disabled}
      type={type || "button"}
      className={containerClassName}
      onClick={onClick as () => void}
    >
      {Boolean(children) ? children : <span>{title}</span>}
    </button>
  );
};

export default RoundedBtn;
