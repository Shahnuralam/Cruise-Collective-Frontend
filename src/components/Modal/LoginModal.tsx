import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormLoginInput {
  email: string;
  password: string;
}

const LoginModal = () => {
  const [open, setOpen] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLoginInput>();

  //Submit login button event handler
  const onSubmit: SubmitHandler<IFormLoginInput> = (data) => console.log(data);

  return (
    <div>
      <input type="checkbox" id="login_modal_id" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-[30px] md:p-[60px]">
          <label
            htmlFor="login_modal_id"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-7xl font-bold text-center">Sign in</h3>
          <p className="py-5 text-4xl text-center">
            To gain access to exclusive offers, events and much more…
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-7">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Your email
              </label>
              <input
                type="email"
                className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p className="text-red text-sm mt-1">Email name is required</p>
              )}
            </div>

            <div className="mb-7">
            <label className="block text-gray-700 text-lg font-bold mb-2">
                Your password
              </label>
              <input
                type="password"
                className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("password", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.password && <div className="text-red text-sm mt-1">Password is required</div>}
            </div>

           <div className="text-center">
              <input type="submit" value="Sign in" className="bg-cruise py-3 px-8 cursor-pointer rounded text-white text-xl" />
           </div>
          </form>

         <div className="mt-7 text-lg text-center">
            <Link href="/">Recover your password  </Link> / Not yet registered?  <Link className="underline" href="/">Click here!</Link>
         </div>

        </div>
      </div>
    </div>
  );
};

export default LoginModal;
