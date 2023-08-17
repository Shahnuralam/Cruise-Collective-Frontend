import React, { useCallback, useMemo } from "react";
import Link from "next/link";
import useAppRouter from "@/hooks/useAppRouter";
import clsx from "clsx";

export interface INavbarItem {
  id: string | number;
  label: string;
  href?: string;
  matcher?: RegExp;
  onClickItem?: () => void;
}
const items: INavbarItem[] = [
  {
    id: 0,
    label: "Gardens",
    href: "/partner-estates",
  },
  {
    id: 1,
    label: "Discover",
    href: "/discover",
  },
  {
    id: 2,
    label: "Experiences",
    href: "/experiences",
    matcher: /^\/experience\/(.*)/,
  },
  {
    id: 3,
    label: "Offers",
    href: "/offers",
    matcher: /^\/offers\/(.*)/,
  },
  {
    id: 4,
    label: "FAQs",
    href: "/faqs",
  },
];

const NavbarItem: React.FC<INavbarItem & { isActive?: boolean }> = (props) => {
  const { label, href, isActive = false, onClickItem } = props;

  const className = useMemo(() => {
    if (isActive) return "font-bold";
    return "";
  }, [isActive]);

  const renderChild = useCallback(() => {
    if (href)
      return (
        <Link href={href} className={className} onClick={onClickItem}>
          <span>{label}</span>
        </Link>
      );

    return <span className={className}>{label}</span>;
  }, [href, label, className]);

  return <li className="">{renderChild()}</li>;
};

interface INavbarProps {
  forMobile?: boolean;
  onClickItem?: INavbarItem["onClickItem"];
  setMenuIsOpen?: (isOpen: boolean) => void;
}
const Navbar: React.FC<INavbarProps> = (props) => {
  const { forMobile = false, onClickItem, setMenuIsOpen } = props;
  const router = useAppRouter();

  return (
    <nav
      className={clsx("text-[#36453b]", {
        "hidden md:flex": !forMobile,
        "flex md:hidden w-full": forMobile,
      })}
    >
      <ul
        className={clsx("flex", {
          "gap-[2rem] lg:gap-[3.125rem]": !forMobile,
          "flex-col w-full text-center justify-center items-center gap-4":
            forMobile,
        })}
      >
        {items.map((item, itemIdx) => (
          <NavbarItem
            key={`nav-item-${item.id}-${itemIdx}`}
            {...item}
            isActive={
              item?.matcher
                ? item?.matcher.test(router.asPath) ||
                  router.isSame(item?.href || "")
                : item.href
                ? router.isSame(item.href)
                : false
            }
            onClickItem={() => {
              if (forMobile && setMenuIsOpen) setMenuIsOpen(false);
              if (onClickItem) onClickItem();
            }}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
