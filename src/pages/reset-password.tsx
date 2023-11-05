import PageHeading from "@/components/PageHeading";
import { resetPasswordByLink } from "@/queries";
import Head from "next/head";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const [passwordVisible, setPassWordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
    data.code = "zertyoaizndoianzodianzdonaizdoinaozdnia";
    const response = await resetPasswordByLink(data);
    if (response) {
      Swal.fire({
        title: "Success",
        text: "Your account reset successfully",
        icon: "success",
        timer: 3000,
      });
    } else {
      Swal.fire({
        title: "error",
        text: "There was an error",
        icon: "error",
        timer: 3000,
      });
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
              <div
                onClick={() => setPassWordVisible(!passwordVisible)}
                className="absolute right-3 top-9 cursor-pointer"
              >
                {passwordVisible && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
                {!passwordVisible && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </div>
              {errors.password && (
                <div className="text-red text-sm">
                  Please enter a valid password
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
                {...register("confirmationPassword", {
                  required: "Confirmation Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match", // Validate password confirmation
                })}
              />
                  <div
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute right-3 top-9 cursor-pointer"
              >
                {confirmPasswordVisible && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
                {!confirmPasswordVisible && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </div>
            </div>
            {/* Display error message for password confirmation */}
            {errors.confirmationPassword && (
              <div className="text-red text-sm">Passwords do not match</div>
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
    </>
  );
};

export default ResetPassword;
