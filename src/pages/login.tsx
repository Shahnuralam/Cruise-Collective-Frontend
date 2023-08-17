import React, { useState } from "react";
import LandingImage from "@/components/LandingImage";
import { MasterOptions } from "@/layout/Master";
import RoundedBtn from "@/atoms/RoundedBtn";
import { signIn } from "next-auth/react";
import Head from "next/head";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();

    if (!email || !password) return alert(`Please fill in all fields`);

    // Sign in and redirect homepage
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);

    if (result?.error) alert(`Unable to sign in`);
    else {
      window.location.replace("/");
    }
  };
  const loginForm = () => {
    return (
      <>
        <Head>
          <title>GI Login</title>
        </Head>
        {/** Left */}
        <div className="flex flex-col gap-2 justify-between text-[#36453b] md:w-[50%]">
          <div className="flex flex-col gap-4 px-[1rem] py-[1rem] md:px-[1.5rem] lg:px-[3rem] md:pb-2 lg:py-5 w-full bg-[#F7F8F2]">
            <h2 className="text-[4.5rem] md:text-[4rem] xl:text-[5.125rem] text-center w-full">
              Sign in
            </h2>

            <form className="flex flex-col gap-8 w-full">
              {/** inputs */}
              <div className="flex flex-col gap-4">
                {/** email */}
                <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap lg:flex-wrap md:items-center justify-between gap-2 w-full">
                  <label
                    htmlFor="#email-input"
                    className="font-normal uppercase md:text-xs md:font-medium lg:text-[1rem] lg:font-normal"
                  >
                    EMAIL
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email-input"
                    className="bg-white outline-0 rounded-full px-4 py-2.5 lg:min-w-[15rem] border border-[#36453b]"
                  />
                </div>

                {/** password */}
                <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap lg:flex-wrap md:items-center justify-between gap-2 w-full">
                  <label
                    htmlFor="#password-input"
                    className="font-normal uppercase md:text-xs md:font-medium lg:text-[1rem] lg:font-normal"
                  >
                    MEMBERSHIP NO.
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    // type="password"
                    id="password-input"
                    className="bg-white outline-0 rounded-full px-4 py-2.5 lg:min-w-[15rem] border border-[#36453b]"
                  />
                </div>

                {/** membership no */}
                {/* <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap lg:flex-wrap md:items-center justify-between gap-2 w-full">
                  <label
                    htmlFor="#membership-no-input"
                    className="font-normal uppercase md:text-xs md:font-medium lg:text-[1rem] lg:font-normal"
                  >
                    MEMBERSHIP NO.
                  </label>
                  <input
                    type="text"
                    id="membership-no-input"
                    className="bg-white outline-0 rounded-full px-4 py-2.5 lg:min-w-[15rem] border border-[#36453b]"
                  />
                </div> */}
              </div>

              <RoundedBtn
                onClick={submit}
                title={loading ? "LOADING" : "ENTER"}
                type="submit"
                variant="filled-dark-green"
                className="font-normal"
                disabled={loading}
              />
            </form>
          </div>

          <div className="flex bg-white w-full py-2 px-4">
            <p className="text-xs text-center w-full">
              Forgot your login details? Please email
              gimembership@ourmedia.co.uk
            </p>
          </div>
        </div>

        {/** Right */}
        <div className="flex bg-[#36453b] py-[2rem] md:px-[1rem] lg:px-[3.5rem] md:py-10 lg:py-20 md:w-[50%]">
          <div className="flex flex-col justify-center items-center gap-8">
            <h3 className="text-[#c7d1a3] text-[1.75rem] text-center">
              NOT A MEMBER?
            </h3>

            <p className="font-normal text-white max-w-[90%] xl:max-w-[60%] text-left">
              Join thousands of liked minded garden experts and get exclusive
              content, inspirational videos and special offers to some of the
              best gardens in the UK.
            </p>

            <div className="w-fit">
              <RoundedBtn
                title="FIND OUT MORE"
                variant="filled-so-light-green"
                useLink
                href="mailto:gimembership@ourmedia.co.uk?subject=Membership%20Enquiry"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <main className="flex flex-col">
      {/** Mobile */}
      <div className="flex flex-col md:hidden">{loginForm()}</div>

      <div className="hidden w-screen h-screen md:block">
        <LandingImage src="/images/login-bg.jpg">
          <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full">
            {/***/}
            <div className="flex flex-wrap xl:flex-nowrap justify-stretch items-stretch bg-[#F7F8F2] md:w-[97%] xl:w-[70%] 2xl:w-[65%] rounded-sm overflow-hidden">
              {loginForm()}
            </div>
          </div>
        </LandingImage>
      </div>
    </main>
  );
}

LoginPage.masterOptions = {
  header: {
    actionBtnIsFilled: true,
  },
  footer: {
    noFooter: true,
  },
} as MasterOptions;
