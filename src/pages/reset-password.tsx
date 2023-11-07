import PageHeading from "@/components/PageHeading";
import EyeInvisible from "@/components/Shared/EyeInvisible";
import EyeVisible from "@/components/Shared/EyeVisible";
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
                {passwordVisible && <EyeVisible />}
                {!passwordVisible && <EyeInvisible />}
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
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="absolute right-3 top-9 cursor-pointer"
              >
                {confirmPasswordVisible && <EyeVisible />}
                {!confirmPasswordVisible && <EyeInvisible />}
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
