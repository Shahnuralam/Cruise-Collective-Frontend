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
    label: "DESTINATION",
    href: "/",
  },
  {
    id: 1,
    label: "CRUISE LINE",
    href: "/discover",
  },
  {
    id: 2,
    label: "INTEREST",
    href: "/experiences",
    matcher: /^\/experience\/(.*)/,
  },
  {
    id: 3,
    label: "INSPIRATION",
    href: "/offers",
    matcher: /^\/offers\/(.*)/,
  },
  {
    id: 4,
    label: "SPECIAL OFFERS",
    href: "/faqs",
  },
  {
    id: 5,
    label: "COMPETETIONS",
    href: "/competitions",
  },
];

const NavbarItem: React.FC<INavbarItem & { isActive?: boolean }> = (props) => {
  const { label, href, isActive = false, onClickItem } = props;

  const className = useMemo(() => {
    if (isActive) return "text-cruise";
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
    <div className="flex justify-center border-b border-t border-cruise">
      <nav
        className={clsx("text-[#36453b] container mx-auto ", {
          "hidden md:flex w-full": !forMobile,
          "flex md:hidden w-full": forMobile,
        })}
      >
        <ul
          className={clsx("flex justify-around w-full", {
            "pt-3 pb-3": !forMobile,
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
    </div>
  );
};

export default Navbar;
