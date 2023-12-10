import PageHeading from "@/components/PageHeading";
import PasswordVisibleInvisible from "@/components/Shared/PasswordVisibleInvisible";
import { resetPasswordByLink } from "@/queries";
import { showToast } from "@/utils";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
        return;
      }

      const result = await signIn("credentials", {
        redirect: false,
        email:response?.data?.user?.email ,
        password: data?.password,
      });
 


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
    </>
  );
};

export default ResetPassword;
