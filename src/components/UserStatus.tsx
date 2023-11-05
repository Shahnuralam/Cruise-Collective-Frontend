import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const UserStatus = ({ handleLoginModal, goRegistrationPage, setIsDrawerOpen }) => {
  const [logoutModal, setLogoutModal] = useState<boolean>(false);
  const handleLogout = () => {
    signOut().then((result) => {

    });
    setLogoutModal(false);
  };
  const { data: session, status } = useSession();

  if (status === "loading") return <></>;

  return (
    <div>
      <div className="text-black text-base md:text-lg">
        {/* Sign in or register btn */}
        {!session?.user?.email && (
          <>
            <label
              onClick={() => {handleLoginModal(true), setIsDrawerOpen(false)}}
              className="cursor-pointer"
              htmlFor="login_modal_id"
            >
              Sign in
            </label>
            &nbsp; / &nbsp;
            <span onClick={() => {goRegistrationPage(), setIsDrawerOpen(false)}} className="cursor-pointer">
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
            <label
              htmlFor="logout_modal_id"
              onClick={() => setLogoutModal(true)}
              className="cursor-pointer"
            >
              Logout
            </label>
          </>
        )}
        {/* user logged in */}
      </div>

      {logoutModal && (
        <div>
          <input
            type="checkbox"
            id="logout_modal_id"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative px-[20px] py-[40px]">
              {/* <label
                htmlFor="logout_modal_id"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label> */}

              <div className="text-3xl text-center mb-[40px]">Are you sure do you want to logout?</div>

              <div className="modal-action text-base apercu_medium">
                <button
                  onClick={handleLogout}
                  className="py-2.5 px-7 rounded bg-cruise text-white"
                >
                  YES
                </button>{" "}
                &nbsp;
                <button
                  className="py-2.5 px-4 rounded bg-red text-white"
                  onClick={() => setLogoutModal(false)}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserStatus;
