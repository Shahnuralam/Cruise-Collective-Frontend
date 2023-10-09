const UserStatus = ({ handleLoginModal, goRegistrationPage }) => {
  return (
    <div>
      {/* Sign in or register btn */}
      <div className="text-black text-base md:text-lg">
        <label
          onClick={() => handleLoginModal(true)}
          className="cursor-pointer"
          htmlFor="login_modal_id"
        >
          Sign in
        </label>
        &nbsp; / &nbsp;
        <span onClick={goRegistrationPage} className="cursor-pointer">
          Register
        </span>
      </div>
      {/* Sign in or register btn */}
    </div>
  );
};

export default UserStatus;
