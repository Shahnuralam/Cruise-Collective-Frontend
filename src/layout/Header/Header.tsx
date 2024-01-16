import React, { useState } from "react";
import Navbar from "@/layout/Header/Navbar";
import RoundedBtn from "@/atoms/RoundedBtn";
import SearchInput from "@/components/SearchInput";
import MenuIcon from "@/assets/svg/menu.svg";
import Logo from "@/assets/svg/logo.svg";
import RightIcon from "@/assets/svg/right-icon.svg";

import Link from "next/link";
import LoginModal from "../../components/Modal/LoginModal";
import { useRouter } from "next/router";
import UserStatus from "@/components/UserStatus";
import SearchIcon from "@/components/SearchIcon";
import CloseIcon from "@/components/Shared/CloseIcon";
import { SubmitHandler, useForm } from "react-hook-form";
import { INewsLetterInputDto, successModalDto } from "@/Interface/Dto";
import { sendNewsLetterEmail } from "@/utils";
import SuccessfulModal from "@/components/Modal/SuccessfulModal";
export interface HeaderOptions {
  actionBtnIsFilled?: boolean;
}

export interface IHeaderProps {
  options?: Partial<HeaderOptions>;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const [showSuccessModal, setShowSuccessModal] = useState<successModalDto>({});
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSearchBarMobile, setSearchBarMobile] = useState<boolean>(false);
  const handleLoginModal = (value: boolean) => {
    setOpenLoginModal(value);
  };

  const router = useRouter();

  const goRegistrationPage = () => router.push("/register");


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<INewsLetterInputDto>();

  const onSubmit: SubmitHandler<INewsLetterInputDto> = async (data) => {
    console.log(data);
   await sendNewsLetterEmail(data);
    setShowSuccessModal({
      type: "success",
      title: "Success",
      text: "Please check your email and stay Cruise Collective Newsletter",
    });
  }


  return (
    <>
      <header className="flex justify-between py-2 lg:py-0 relative z-40 h-[3.75rem] md:h-[9.25rem] items-center px-[16px] md:px-[25px] lg:px-[75px] ">
        {/* Right logo icon started here*/}
        <div className="hidden lg:flex min-w-[120px]">
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
            <Logo className="hidden md:block" />
            <Logo
              className="md:hidden"
              width="100%"
              max-width="500"
              viewBox="0 0 500 29"
              style={{ transform: "scale(0.8)" }}
            />
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
            setIsDrawerOpen={setIsDrawerOpen}
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

     <div className="hidden md:flex md:justify-around items-center border-b border-cruise border-t-0 h-14">
        <p className="text-black text-sm md:text-xl lg:text-2xl text-center">
           Be the first to know about exclusive deals and join the collective.
        </p>

        <div className="border-l-2 border-cruise h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="flex h-full">
          <input className="w-[330px] outline-0 bg-[#F5F2EE] px-2"
                  placeholder="Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Please enter a valid email",
                          },
                        })}
                      />
            {/* <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 outline-0 bg-[#F5F2EE]"
            /> */}
            <button className="bg-cruise px-4 text-white text-sm tracking-[2px] apercu_medium uppercase hover:text-black hover:underline w-[7rem]">Sign up</button>
            </form>
        </div>
      </div>

      {/* Login modal */}
      {openLoginModal && (
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}

    {!!Object.keys(showSuccessModal).length && (
        <SuccessfulModal
          showSuccessModal={showSuccessModal}
          setShowSuccessModal={setShowSuccessModal}
        />
      )}

    </>
  );
};

export default Header;
