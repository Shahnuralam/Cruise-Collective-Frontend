import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { registerEmailConfirmation } from "@/queries";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailConfirmation = () => {
  // const [successErrMsg, setSuccessErrMsg] = useState("");
  // const [showModal, setShowModal] = useState(false); 
  const router = useRouter();
  const { confirmation } = router.query;
  const isNotificationShown = useRef(false); 

  useEffect(() => {
    const emailConfirmationWithCode = async () => {
      // if (!confirmation || isNotificationShown.current) return;

      try {
        
        await registerEmailConfirmation(confirmation);
        const userInfoJSON = localStorage.getItem("userInfo");
        const userInfo = userInfoJSON ? JSON.parse(userInfoJSON) : null;
      console.log({userInfo});
        if (userInfo) {
          console.log('inside');
          const { email, password } = userInfo;
          await signIn("credentials", { redirect: false, email, password });
          localStorage.removeItem("userInfo");
          
          console.log(email, password);
        
          toast.success("Your email has been verified.", {
            autoClose: 5000, // 10 seconds
          });
          // isNotificationShown.current = true; 
      
          setTimeout(() => {
            router.push("/");
          }, 4000);

        } else {
          
        }
      } catch (error) {
        console.error("Error confirming email:", error);
       
        toast.error("Error confirming your email.", {
          autoClose: 10000, 
        });

        // isNotificationShown.current = true; 
      }
    };

    emailConfirmationWithCode();
  }, [confirmation, router]);

// const clickMe = () => {
//   toast.success("Your email has been verified.", {
//     autoClose: 10000, // 10 seconds
//   });
// }

  return (
    <div>
      <main className="p-8">
        <ToastContainer />
         {/* <button onClick={clickMe}>click me</button> */}
      </main>
    </div>
  );
};

export default EmailConfirmation;

