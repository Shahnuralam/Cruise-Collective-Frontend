import { registerEmailConfirmation, resetPasswordByLink } from "@/queries";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EmailConfirmation = () => {
  const [successErrMsg, setSuccessErrMsg] = useState("");
  const router = useRouter();
  const { confirmation } = router.query;

  useEffect(() => {
    if (confirmation) emailConfirmationWithCode();
  }, []);

  const emailConfirmationWithCode = async () => {
    try {
      const response = await registerEmailConfirmation(confirmation);
      if (!response) {
        setSuccessErrMsg("Something went wrong, Please try again later!");
      }
      setSuccessErrMsg("Your account verified successfully");
        router.push("/");
    } catch (error) {

      Swal.fire({
        title: "error",
        text: "There was an error",
        icon: "error",
        timer: 3000,
      });
    }
  };
  return (
    <div>
      <main>
        <Head>
          <title>Email Confirmation</title>
        </Head>
        <div className="p-[75px]">
          <div className="text-3xl">{successErrMsg}</div>
          <Link className="underline text-lg" href="/">Back to home</Link>
        </div>
      </main>
    </div>
  );
};

export default EmailConfirmation;
