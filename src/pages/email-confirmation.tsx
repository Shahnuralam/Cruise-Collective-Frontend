import React, { useEffect } from "react";
import { useRouter } from "next/router";


const EmailConfirmation = () => {
  const router = useRouter();
  const { confirmation } = router.query;

  useEffect(() => {
    const emailConfirmationWithCode = async () => {
      router.push("/");
    };

    emailConfirmationWithCode();
  }, [confirmation, router]);

  return (
    <div>
      <main className="p-8">
      </main>
    </div>
  );
};

export default EmailConfirmation;
