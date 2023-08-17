import React, { useState } from "react";
import Navbar from "@/layout/Header/Navbar";
import RoundedBtn from "@/atoms/RoundedBtn";
import SearchInput from "@/components/SearchInput";
import MenuIcon from "@/assets/svg/menu.svg";
import CloseIcon from "@/assets/svg/close.svg";
import GlIconBlack from "@/assets/svg/gl-logo-black.svg";
import { signOut } from "next-auth/react";

export interface HeaderOptions {
  actionBtnIsFilled?: boolean;
}

export interface IHeaderProps {
  options?: Partial<HeaderOptions>;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { options } = props;

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handleLogout = () => signOut();

  return (
    <>
      {menuIsOpen && (
        <div className="flex flex-col fixed w-screen h-screen z-50 bg-white xl:hidden top-0">
          {/* Header clone */}
          <div className="flex justify-center py-2 lg:py-5 bg-[#c7d1a3] bg-opacity-[15%] text-[#36453b] relative z-40">
            <div className="flex w-full px-4 justify-end items-center lg:hidden">
              <button
                className="p-2"
                onClick={() => setMenuIsOpen((prev) => !prev)}
              >
                <CloseIcon viewBox="0 0 48 48" width={32} height={32} />
              </button>
            </div>
          </div>

          {/** content */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 px-4 border-b md:border-b-0 py-4">
              <RoundedBtn title="Logout" onClick={handleLogout} />
              {/* <RoundedBtn
                title="Member's Area"
                useLink
                href="/"
                variant={
                  Boolean(options?.actionBtnIsFilled)
                    ? "filled-dark-green"
                    : "outline-dark-green"
                }
              /> */}
              <SearchInput />
            </div>

            <Navbar forMobile setMenuIsOpen={setMenuIsOpen} />
          </div>
        </div>
      )}

      <header className="flex justify-center py-2 lg:py-0 bg-[#c7d1a3] bg-opacity-[15%] text-[#36453b] relative z-40 h-[3.75rem] md:h-[5.25rem]">
        <div className="container px-4 xl:px-0 flex items-center justify-between">
          <div className="hidden md:block">
            <Navbar />
          </div>

          <div className="flex flex-1 justify-between items-center md:hidden">
            <GlIconBlack />
            <button
              className="p-2"
              onClick={() => setMenuIsOpen((prev) => !prev)}
            >
              {}
              <MenuIcon viewBox="0 0 48 48" width={32} height={32} />
            </button>
          </div>

          <div className="gap-5 hidden xl:flex justify-center items-center">
            <RoundedBtn title="Logout" onClick={handleLogout} />
            <SearchInput />
            {/* <RoundedBtn
              title="Member's Area"
              useLink
              href="/"
              variant={
                Boolean(options?.actionBtnIsFilled)
                  ? "filled-dark-green"
                  : "outline-dark-green"
              }
            /> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
