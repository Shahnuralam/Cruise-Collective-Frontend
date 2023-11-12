import StrokeLine from "@/components/StrokeLine";
import { registerEmailConfirmation } from "@/queries";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EmailConfirmation = () => {
  const [successErrMsg, setSuccessErrMsg] = useState("");
  const [showModal, setShowModal] = useState(true); // Set to true to show the modal by default
  const router = useRouter();
  const { confirmation } = router.query;

  useEffect(() => {
    const emailConfirmationWithCode = async () => {
      try {
        const response = await registerEmailConfirmation(confirmation);
        if (!response) {
          setSuccessErrMsg("Something went wrong. Please try again later!");
        } else {
          setSuccessErrMsg("Your account verified successfully");
        }
      } catch (error) {
        setSuccessErrMsg("There was an error confirming your email.");
      } finally {
        // Close the modal after a delay
        setTimeout(() => {
          setShowModal(false);
          // router.push("/");
        }, 30000);
      }
    };

    if (confirmation) emailConfirmationWithCode();
  }, [confirmation, router]);

  return (
    <div>
      <main className="p-8">
        {" "}
        {/* Add padding to the main container */}
        {showModal && (
          <>
            <input
              type="checkbox"
              id="cruise-line-item-terms-and-conditions-modal"
              className="modal-toggle"
              checked={showModal}
            />
            <div className="modal">
              <div className="modal-box max-w-3xl relative p-6 md:p-12">
                {" "}
                {/* Add padding to the modal box */}
                <label
                  onClick={() => setShowModal(false)}
                  className="btn btn-sm btn-circle absolute right-2 top-2 cursor-pointer"
                >
                  ✕
                </label>
                <h3 className="text-[32px] text-center">Email Confirmation</h3>
                <div className="flex justify-center pt-4 pb-6">
                  <StrokeLine />
                </div>
                <div className="text-3xl">{successErrMsg}</div>
                <div className="text-center mt-5">
                  <Link href="/">
                    {" "}
                    {/* Add Link component to navigate to login page */}
                    <a>
                      <button
                        onClick={() => setShowModal(false)}
                        className="bg-cruise w-[200px] h-[50px] text-white text-sm apercu_regular uppercase hover:underline hover:text-black tracking-[1.54px] opacity-90 "
                      >
                        Close
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default EmailConfirmation;
