import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageHeading from "../PageHeading";
import StrokeLine from "../StrokeLine";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
interface IFormLoginInput {
  email: string;
  password: string;
}

const LoginModal = ({ openLoginModal, setOpenLoginModal }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormLoginInput>();

  //Submit login button event handler
  const onSubmit: SubmitHandler<IFormLoginInput> = async (data) => {
    const { email, password } = data;

    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (result?.error) {
      Swal.fire({
        title: "Error!",
        text: "Authentication failed",
        icon: "error",
      });
    } else {
      setOpenLoginModal(false);
      if(router?.pathname === '/register') {
        router.push('/')
      }
      // Swal.fire({
      //   title: "Success",
      //   text: "Logged in successfully",
      //   icon: "success",
      //   timer: 3000,
      // });
    }
  };


  return (
    <div>
      <input type="checkbox" id="login_modal_id" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-[20px] md:p-[55px]">
          <label
            htmlFor="login_modal_id"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="text-3xl md:text-[40px] text-center">Sign in</div>
          <div className="py-5 flex justify-center">
            <StrokeLine />
          </div>
          <p className="mb-12 text-base md:text-[28px] text-center px-3">
            To gain access to exclusive offers, events and much more…
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-7">
              <label  className="block text-black apercu_regular text-base md:text-lg mb-2">
                Your email
              </label>
              <input
                type="email"
                placeholder="example@cruise-collective.com"
                className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none "
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p className="text-red text-sm mt-1">Email name is required</p>
              )}
            </div>

            <div className="mb-7">
              <label className="block text-black apercu_regular text-base md:text-lg mb-2">
                Your password
              </label>
              <input
                type="password"
                placeholder="password"
                className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none"
                {...register("password", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.password && (
                <div className="text-red text-sm mt-1">
                  Password is required
                </div>
              )}
            </div>

            <div className="text-center">
              <button
                disabled={!isValid || loading}
                type="submit"
                className={`bg-cruise ${
                  isValid && !loading ? "" : "opacity-50"
                } py-2.5 px-8 rounded text-white text-base md:text-lg uppercase apercu_regular`}
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-7 text-base text-center">
            <Link href="/">Recover your password </Link>&nbsp; / &nbsp; Not yet
            registered?{" "}
            <Link
              onClick={() => setOpenLoginModal(false)}
              className="underline"
              href="/register"
            >
              Click here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
