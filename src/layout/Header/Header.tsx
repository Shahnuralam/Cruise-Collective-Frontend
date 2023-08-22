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
      <header className="flex justify-center py-2 lg:py-0 relative z-40 h-[3.75rem] md:h-[9.25rem]">
        <div className="container px-4 xl:px-0 flex items-center justify-center">
          <Link href="/">
            <Logo height={48} />
          </Link>
        </div>
        <div className="absolute right-0 hidden md:block p-10 mr-10">
          <RightIcon />
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
