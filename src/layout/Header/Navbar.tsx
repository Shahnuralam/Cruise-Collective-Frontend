import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import useAppRouter from "@/hooks/useAppRouter";
import clsx from "clsx";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/isMobile";
import SearchIcon from "@/assets/svg/search.svg";
import SearchInput from "@/components/SearchInput";
export interface INavbarItem {
  id: string | number;
  label: string;
  href?: string;
  matcher?: RegExp;
  onClickItem?: () => void;
  sub?: Omit<INavbarItem, "sub">[];
}

const items: INavbarItem[] = [
  {
    id: 0,
    label: "DESTINATION",
    href: "/destination",
    // sub: [
    //   {
    //     id: "sub-menu-1",
    //     label: "Sub menu 1",
    //     href: "/",
    //   },
    // ],
  },
  {
    id: 1,
    label: "CRUISE LINE",
    href: "/cruise-line",
  },
  // {
  //   id: 2,
  //   label: "INTEREST",
  //   href: "/experiences",
  //   matcher: /^\/experience\/(.*)/,
  // },
  {
    id: 2,
    label: "INTEREST",
    href: "/interest",
    matcher: /^\/interest\/(.*)/,
  },
  {
    id: 3,
    label: "INSPIRATION",
    href: "/inspiration",
    matcher: /^\/inspiration\/(.*)/,
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

const NavbarItem: React.FC<
  INavbarItem & { isActive?: boolean; forMobile?: boolean }
> = (props) => {
  const router = useRouter();
  const [showChild, setShowChild] = useState(false);
  const { forMobile, sub, isActive = false } = props;

  const className = useMemo(() => {
    if (isActive) return "text-cruise";
    return "";
  }, [isActive]);

  const renderChild = useCallback(
    (child = props) => {
      const { href, onClickItem, label } = child;
      if (href)
        return (
          <Link
            href={href}
            className={className}
            onClick={() => {
              if (onClickItem) onClickItem();
              setShowChild((p) => !p);
            }}
          >
            <span>{label}</span>
          </Link>
        );

      return (
        <span className={className} onClick={() => setShowChild((p) => !p)}>
          {label}
        </span>
      );
    },
    [className, props]
  );

  useEffect(() => {
    setShowChild(false);
  }, [router.pathname]);

  useEffect(() => {
    if (isActive) setShowChild(true);
  }, [isActive]);

  const renderSubChild = useCallback(
    (children: INavbarItem["sub"]) => {
      if (!children) return <></>;
      return (
        <div
          className={clsx("", {
            hidden: forMobile && !showChild,
            "hidden group-hover:block absolute top-[calc(100%)] show-dd-shadow":
              !forMobile,
          })}
        >
          <ul
            className={clsx(
              "flex flex-col gap-3 text-[#36453b] px-[1.25rem] py-2 w-full !bg-white",
              {
                "relative z-30 min-w-[10.5rem] pt-[1.625rem] pb-[1.125rem] max-w-[15.625rem] show-shadow nav-dd text-sm":
                  !forMobile,
              }
            )}
          >
            {children.map((subItem) => (
              <li key={`sub-${subItem.id}`}>{renderChild(subItem)}</li>
            ))}
          </ul>
        </div>
      );
    },
    [renderChild, forMobile, showChild]
  );

  if (!sub || !sub?.length) return <li className="">{renderChild()}</li>;

  return (
    <>
      <li
        className={clsx("relative h-full group", {
          "border-b": showChild,
        })}
      >
        {renderChild()}

        {renderSubChild(sub)}
      </li>
    </>
  );
};

interface INavbarProps {
  forMobile?: boolean;
  onClickItem?: INavbarItem["onClickItem"];
  isDrawerOpen?: boolean;
}
const Navbar: React.FC<INavbarProps> = (props) => {
  let { forMobile = false, onClickItem, isDrawerOpen } = props;

  forMobile = useIsMobile();

  const router = useAppRouter();
  const [isSearchBarHide, setSearchBarHide] = useState<boolean>(true);

  return (
    <div className="flex border-b border-t border-cruise px-[25px] md:px-[75px] w-full">
      <li
        className="cursor-pointer items-center hidden md:flex mr-7"
        onClick={() => setSearchBarHide(!isSearchBarHide)}
      >
        <SearchIcon viewBox="0 0 48 48" width={24} height={24} />
      </li>

      {isSearchBarHide && (
        <nav
          className={clsx("text-[#36453b] container", {
            "hidden md:flex w-full": !forMobile,
            "flex md:hidden w-full": forMobile,
          })}
        >
          <ul
            className={clsx("flex w-full", {
              "justify-between pt-3 pb-3": !forMobile,
              "flex-col w-full gap-3": forMobile,
              block: forMobile && isDrawerOpen,
              hidden: forMobile && !isDrawerOpen,
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
                onClickItem={onClickItem}
                forMobile={forMobile}
              />
            ))}
          </ul>
        </nav>
      )}
      {!isSearchBarHide && (
        <div className="w-full hidden md:block">
          <SearchInput />
        </div>
      )}
    </div>
  );
};

export default Navbar;
