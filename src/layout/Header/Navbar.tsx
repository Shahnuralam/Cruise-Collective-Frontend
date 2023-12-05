import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import useAppRouter from "@/hooks/useAppRouter";
import clsx from "clsx";
import { useRouter } from "next/router";
import SearchInput from "@/components/SearchInput";
import UserStatus from "@/components/UserStatus";
import SearchIcon from "@/components/SearchIcon";
import CloseIcon from "@/components/Shared/CloseIcon";
import useIsNavHideForSmallDevice from "@/hooks/useIsNavHideForSmallDevice";


export interface INavbarItem {
  id: string | number;
  label: string;
  href?: string;
  matcher?: RegExp;
  onClickItem?: () => void;
  sub?: Omit<INavbarItem, "sub">[];
  isMobileDrawer?: boolean;
  setIsDrawerOpen?: any;
}

const items: INavbarItem[] = [
  {
    id: 0,
    label: "DESTINATION",
    href: "/destination",
    matcher: /^\/destination\/(.*)/,
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
    matcher: /^\/cruise-line\/(.*)/,
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
    href: "#",
    matcher: /^\/\/(.*)/,
    sub: [
      {
        id: "4.1",
        label: "CRUISE LINE OFFERS",
        href: "/cruise-offers",
        matcher: /^\/special-offers\/(.*)/,
      },
      {
        id: "4.2",
        label: "PARTNER OFFERS",
        href: "/travel-partner",
        matcher: /^\/travel-partner\/(.*)/,
      },
    ],
  },

  {
    id: 5,
    label: "COMPETITIONS",
    href: "/competition",
    matcher: /^\/competition\/(.*)/,
  },
];

const NavbarItem: React.FC<
  INavbarItem & { isActive?: boolean; forMobile?: boolean }
> = (props) => {
  const router = useRouter();
  const [showChild, setShowChild] = useState(false);
  const {
    forMobile,
    sub,
    isActive = false,
    isMobileDrawer,
    setIsDrawerOpen,
  } = props;

  const className = useMemo(() => {
    if (isActive) return "text-cruise";
    return "";
  }, [isActive]);
  const ArrowIcon = () => <span className="ml-2 text-lg">&#9662;</span>; // Unicode arrow character

  const renderChild = useCallback(
    (child = props) => {
      const { href, onClickItem, label, sub } = child;

      if (href)
        return (
          <Link href={href} passHref>
            <li
              className={`${className} special text-xs leading-6 tracking-[2.4px] apercu_medium hover:text-cruise`}
              onClick={() => {
                if (onClickItem) onClickItem();
                setShowChild((p) => !p);
              }}
            >
              <span>{label}</span>
              {sub && sub.length > 0 && <ArrowIcon />} {/* Display arrow if there are submenus */}
            </li>
          </Link>
        );

      return (
        <span onClick={() => setShowChild((p) => !p)}>
          {label}
          {sub && sub.length > 0 && <ArrowIcon />} {/* Display arrow if there are submenus */}
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


  // only show sub child section 
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
              "flex flex-col gap-3 !text-xs leading-[25px] tracking-[2.4px] bg-[#F5F2EE] font-normal pt-5 pl-5 md:border-b-[2px] border-cruise px-[0.05rem] w-full #F5F2EE ",
              {
                "relative z-30 min-w-[20.5rem] pt-[1.625rem]  !p-5 pb-[1.125rem]  max-w-[15.625rem] show-shadow nav-dd !text-xs apercu_medium":
                  !forMobile,
              }
            )}
          >
            {children.map((subItem) => (
              <li key={`sub-${subItem.id}`} onClick={(event) => {if (forMobile) {setIsDrawerOpen(false);event.stopPropagation()}}} >{renderChild(subItem)}</li>
            ))}
          </ul>
        </div>
      );
    },
    [renderChild, forMobile, showChild]
  );

  if (!sub || !sub?.length)
    return (
      <li
        onClick={() => {
          forMobile ? setIsDrawerOpen(false) : "";
        }}
        className={`${isMobileDrawer
          ? "py-2 px-5 border-b border-cruise  hover:text-cruise"
          : ""
          }`}
      >
        {renderChild()}
      </li>
    );

  return (
    <>
      <Link href={props.href || ''} passHref>

        <li
          onClick={() => {
            forMobile ? setIsDrawerOpen(true) : "";
          }}
          className={clsx("relative h-full group", {
            "border-b": showChild,
            "py-2 px-5 border-b border-cruise z-[1000]  text-xs apercu_medium black ": forMobile,
          })}
        >
          {renderChild()}
          {renderSubChild(sub)}
        </li>

      </Link>
    </>
  );
};

interface INavbarProps {
  forMobile?: boolean;
  onClickItem?: INavbarItem["onClickItem"];
  isDrawerOpen?: boolean;
  handleLoginModal?: any;
  goRegistrationPage?: any;
  setIsDrawerOpen?: any;
}
const Navbar: React.FC<INavbarProps> = (props) => {
  let {
    forMobile = false,
    onClickItem,
    isDrawerOpen,
    handleLoginModal,
    goRegistrationPage,
    setIsDrawerOpen,
  } = props;

  forMobile = useIsNavHideForSmallDevice();

  const router = useAppRouter();
  const [isSearchBarHide, setIsSearchBarHide] = useState<boolean>(true);

  const newRef = useRef<HTMLDivElement | null>(null);
  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      if (!isSearchBarHide) {
        setIsSearchBarHide(true);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  return (
    <div
      ref={newRef}
      className={`flex ${!forMobile
        ? "border-b border-t"
        : isDrawerOpen
          ? "border-b border-t"
          : "border-t"
        } border-cruise px-0 ${isSearchBarHide ? "lg:px-[75px]" : "lg:pl-[75px]"
        } w-full`}
    >
      <li
        className="cursor-pointer items-center hidden lg:flex mr-14"
        onClick={() => setIsSearchBarHide(!isSearchBarHide)}
      >
        {isSearchBarHide && <SearchIcon />}
        {!isSearchBarHide && <CloseIcon />}
      </li>

      {isSearchBarHide && (
        <nav
          className={clsx("text-[#36453b]", {
            "hidden lg:flex w-full": !forMobile,
            "flex lg:hidden w-full": forMobile,
          })}
        >

          <ul
            className={clsx("flex w-full", {
              "justify-between pt-3 pb-3 items-center": !forMobile,
              "flex-col w-full pb-2 z-50": forMobile,
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
                setIsDrawerOpen={setIsDrawerOpen}
                onClickItem={onClickItem}
                forMobile={forMobile}
                isMobileDrawer={forMobile && isDrawerOpen}
              />
            ))}
            <li className="block lg:hidden mt-[250px] px-5">
              <UserStatus
                handleLoginModal={handleLoginModal}
                goRegistrationPage={goRegistrationPage}
                setIsDrawerOpen={setIsDrawerOpen}
              />
            </li>
          </ul>
        </nav>
      )}
      {!isSearchBarHide && (
        <div className="w-full hidden lg:block h-[49px]">
          <SearchInput />
        </div>
      )}
    </div>
  );
};

export default Navbar;
