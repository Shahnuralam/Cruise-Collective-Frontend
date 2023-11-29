import PageHeading from "@/components/PageHeading";
import PasswordVisibleInvisible from "@/components/Shared/PasswordVisibleInvisible";
import { resetPasswordByLink } from "@/queries";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (message, type) => {
  toast[type](message, {
    autoClose: 5000, // 5 seconds
    position: "top-right", // You can adjust the position
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      // backgroundColor: "#FF9A31", // Background color
      color: "#FF9A31", // Font color
      fontFamily: "adobe-garamond-pro, serif", // Font family
      fontSize: "16px", // Font size
      latterSpacing: "2px", // Font letter spacing
    },
  });
};

const ResetPassword = () => {
  const [passwordVisible, setPassWordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const router = useRouter();
  const { code } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (!code) return;

    try {
      data.code = code;
      const response = await resetPasswordByLink(data);
   
      if (!response) {

      
        console.error(response);
      }
      showToast("Your password reset successfully.", "success");
     
      // Swal.fire({
      //   title: "Success",
      //   text: "Your password reset successfully",
      //   icon: "success",
      //   timer: 3000,
      // });
      setTimeout(() => {
        router.push("/");
      }, 4000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <div className="container mx-auto px-3 md:px-0 py-7 lg:py-[75px]">
        <PageHeading
          pageHeaderData={{ heading: "Reset your password", text: "" }}
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-5 mt-10">
            {/* Password and password confirm fields */}
            <div className="col-span-1 md:col-span-2 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter New Password*
              </label>
              <input
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={`${passwordVisible ? "text" : "password"}`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <PasswordVisibleInvisible
                passwordVisible={passwordVisible}
                setPassWordVisible={setPassWordVisible}
              />
              {errors?.password && (
                <div className="text-red text-sm">
                  {errors?.password?.message as string}
                </div>
              )}
            </div>

            <div className="col-span-1 md:col-span-2 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm New Password*
              </label>
              <input
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={`${confirmPasswordVisible ? "text" : "password"}`}
                placeholder="Confirm Password"
                {...register("passwordConfirmation", {
                  required: "Confirmation Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match", // Validate password confirmation
                })}
              />
              <PasswordVisibleInvisible
                passwordVisible={confirmPasswordVisible}
                setPassWordVisible={setConfirmPasswordVisible}
              />
            </div>
            {/* Display error message for password confirmation */}
            {errors?.passwordConfirmation && (
              <div className="text-red text-sm">
                {errors?.passwordConfirmation?.message as string}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-cruise text-white font-bold py-3.5 apercu_regular px-4 rounded hover:underline hover:text-black mt-6"
          >
            Reset your password
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ResetPassword;
