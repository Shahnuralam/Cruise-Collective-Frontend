import React, { useState } from "react";
import Navbar from "@/layout/Header/Navbar";
import RoundedBtn from "@/atoms/RoundedBtn";
import SearchInput from "@/components/SearchInput";
import MenuIcon from "@/assets/svg/menu.svg";
import Logo from "@/assets/svg/logo.svg";
import RightIcon from "@/assets/svg/right-icon.svg";

import Link from "next/link";
import classNames from "classnames";
import LoginModal from "../../components/Modal/LoginModal";
import { useRouter } from "next/router";
import UserStatus from "@/components/UserStatus";
import SearchIcon from "@/components/SearchIcon";
import CloseIcon from "@/components/Shared/CloseIcon";
export interface HeaderOptions {
  actionBtnIsFilled?: boolean;
}

export interface IHeaderProps {
  options?: Partial<HeaderOptions>;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { options } = props;

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSearchBarMobile, setSearchBarMobile] = useState<boolean>(false);
  const handleLoginModal = (value: boolean) => {
    setOpenLoginModal(value);
  };

  const router = useRouter();

  const goRegistrationPage = () => router.push("/register");

  return (
    <>
      <header className="flex justify-between py-2 lg:py-0 relative z-40 h-[3.75rem] md:h-[9.25rem] items-center px-[16px] md:px-[25px] lg:px-[75px] ">
        {/* Right logo icon started here*/}
        <div className="hidden lg:block min-w-[80px]">
          <Link href="/">
            <RightIcon />
          </Link>
        </div>
        {/* Right logo icon ended here*/}

        {/* Mobile screen search icon started here */}
        <div
          className="cursor-pointer block lg:hidden"
          onClick={() => setSearchBarMobile(!isSearchBarMobile)}
        >
          {!isSearchBarMobile && <SearchIcon />}
          {isSearchBarMobile && <CloseIcon />}
        </div>
        {/* Mobile screen search icon ended here */}

        {/* Logo image */}
        <div>
          <Link href="/">
            <Logo className="hidden w-full md:block" />
            <Logo className="md:hidden w-full"/>
            {/* <h3 className="text-black font-bold text-xl">CRUISE COLLECTIVE</h3> */}
          </Link>
        </div>
        {/* Logo image */}

        {/* Hamburger menu and close icon toggle started here */}
        <div
          className="lg:hidden"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {!isDrawerOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}

          {isDrawerOpen && (
            <div>
              <CloseIcon />
            </div>
          )}
        </div>
        {/* Hamburger menu and close icon toggle ended here */}
        <div className="hidden lg:block">
          <UserStatus
            handleLoginModal={handleLoginModal}
            goRegistrationPage={goRegistrationPage}
          />
        </div>
      </header>

      {isSearchBarMobile && (
        <div className="w-full block border-t border-cruise lg:hidden">
          <SearchInput />
        </div>
      )}

      <Navbar
        handleLoginModal={handleLoginModal}
        goRegistrationPage={goRegistrationPage}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      {/* <div className=" hidden md:flex md:justify-around items-center border border-cruise border-t-0">
        <div className="">
          Be the first to know about exclusive deals and join the collective.
        </div>

        <div className="">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 border-l border-cruise outline-0"
          />
          <button className="bg-cruise px-4 py-2 uppercase">Sign Up</button>
        </div>
      </div> */}

      {/* Login modal */}
      {openLoginModal && (
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
    </>
  );
};

export default Header;
