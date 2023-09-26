import React, { useState } from "react";
import Navbar from "@/layout/Header/Navbar";
import RoundedBtn from "@/atoms/RoundedBtn";
import SearchInput from "@/components/SearchInput";
import MenuIcon from "@/assets/svg/menu.svg";
import CloseIcon from "@/assets/svg/close.svg";
import Logo from "@/assets/svg/logo.svg";
import RightIcon from "@/assets/svg/right-icon.svg";
import { signOut } from "next-auth/react";
import Link from "next/link";
import classNames from "classnames";
import LoginModal from "../../components/Modal/LoginModal";

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
  const handleLogout = () => signOut();

  const handleLoginModal = (value: boolean) => {
    setOpenLoginModal(value);
  };

  return (
    <>
      <header className="flex justify-between py-2 lg:py-0 relative z-40 h-[3.75rem] md:h-[9.25rem] items-center px-[25px] md:px-[75px] ">
        <div className="hidden md:block">
          <Link href="/">
            <RightIcon />
          </Link>
        </div>

        <div className="container px-4 xl:px-0 flex items-center justify-center">
          <Link href="/">
            <Logo className="hidden w-full md:block" />
            <Logo className="md:hidden w-full" viewBox="250 -20 75 75" />
          </Link>
        </div>

        <div className="text-black hidden md:block">
          <label
            onClick={() => handleLoginModal(true)}
            className="cursor-pointer"
            htmlFor="login_modal_id"
          >
            Sign in
          </label>
          &nbsp; / &nbsp;<span className="cursor-pointer">Register</span>
        </div>
      </header>
      <Navbar />
      <div className=" hidden md:flex md:justify-around items-center border border-cruise border-t-0">
        <div className="">
          Be the first to know about exclusive deals and join the collective.
        </div>

        <div className="">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 border-l border-cruise "
          />
          <button className="bg-cruise px-4 py-2">Sign Up</button>
        </div>
      </div>

      {openLoginModal && <LoginModal />}
    </>
  );
};

export default Header;
