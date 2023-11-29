import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import SuccessfulModal from "./Modal/SuccessfulModal";
import { successModalDto } from "@/Interface/Dto";
import { useRouter } from "next/router";
import { showToast } from "@/utils";

const UserStatus = ({
  handleLoginModal,
  goRegistrationPage,
  setIsDrawerOpen,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState<successModalDto>({});
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/");
      // Redirect to the home page or any other page
      // Show toast notification for 20 seconds


      showToast("You have been successfully logged out!","success")

    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (status === "loading") return <></>;

  return (
    <>
      <div className="text-black text-base">
        {/* Sign in or register btn */}
        {!session?.user?.email && (
          <>
            <label
              onClick={() => {
                handleLoginModal(true), setIsDrawerOpen(false);
              }}
              className="cursor-pointer"
              htmlFor="login_modal_id"
            >
              Sign in
            </label>
            &nbsp; / &nbsp;
            <span
              onClick={() => {
                goRegistrationPage(), setIsDrawerOpen(false);
              }}
              className="cursor-pointer"
            >
              Register
            </span>
          </>
        )}
        {/* Sign in or register btn */}

        {/* user logged in */}
        {session?.user?.email && (
          <>
            <Link href="/my-account" className="cursor-pointer">
              My Account
            </Link>
            &nbsp; / &nbsp;
            <span onClick={handleLogout} className="cursor-pointer">
              Logout
            </span>
          </>
        )}
        {/* user logged in */}
      </div>

      {/* Success modal */}
      {!!Object.keys(showSuccessModal).length && (
        <SuccessfulModal
          showSuccessModal={showSuccessModal}
          setShowSuccessModal={setShowSuccessModal}
        />
      )}
    </>
  );
};

export default UserStatus;
