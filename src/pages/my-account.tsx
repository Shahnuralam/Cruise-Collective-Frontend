import { AccountSettingsInput } from "@/components/Interface/AccountSettingsDto";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Select from "react-select";
import { deleteUser, getRegistrationData, updateUser } from "@/queries";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import PageHeading from "@/components/PageHeading";
const MyAccount = ({ response }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [interests, setInterests] = useState<any>([]);
  const [destinations, setDestinations] = useState<any>([]);
  const [departures, setDepartures] = useState<any>([]);
  const [passwordVisible, setPassWordVisible] = useState(false);
  const { data: session } = useSession();
  //   console.log("session", session);

  const handleSelects = (e) => e.map((item) => item.value);
// console.log('session',session);
  useEffect(() => {
    setValue("firstname", session?.user?.firstname);
    setValue("lastname", session?.user?.lastname);
    setValue("email", session?.user?.email);
    setValue("phone", session?.user?.phone);
    setValue("password", session?.user?.password);
  }, [setValue]);

  const onSubmit: SubmitHandler<any> = async (data) => {

    const response = await updateUser(
      {
        ...data,
        interests: handleSelects(interests),
        destinations: handleSelects(destinations),
        departures: handleSelects(departures),
      },
      session?.user?.id
    );
    if (response) {
      Swal.fire({
        title: "Success",
        text: "Your account successfully saved",
        icon: "success",
        timer: 3000,
      });
    } else {
      Swal.fire({
        title: "error",
        text: "There was an error to save user information",
        icon: "error",
        timer: 3000,
      });
    }
  };

  const handleAccountDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete your account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF9A31",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteUser(
          {
            ...session?.user,
          },
          session?.user?.id
        );
        if (response) {
          signOut();
          Swal.fire("Deleted!", "Account has been deleted.", "success");
        } else {
          Swal.fire({
            title: "error",
            text: "There was an error to deleting account",
            icon: "error",
            timer: 3000,
          });
        }
      }
    });
  };

  const mappedInterests = response.interests.map(({ id, title }) => ({
    value: id,
    label: title,
  }));

  const mappedDestinations = response.destinations.map(({ id, title }) => ({
    value: id,
    label: title,
  }));

  const mappedDepartures = response.departures.map(({ id, title }) => ({
    value: id,
    label: title,
  }));

  return (
    <>
      <Head>
        <title>My Account</title>
      </Head>
      <div className="container mx-auto px-3 md:px-0 py-7 lg:py-[75px]">
        <PageHeading
          pageHeaderData={{ heading: "Account Settings", text: "" }}
        />
        <h2 className="text-xl mb-4 mt-10 border-b">Personal Information:</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name*
              </label>
              <input
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name"
                {...register("firstname", { required: true })}
              />
              {errors.firstname && (
                <div className="text-red text-sm">
                  Please enter a first name
                </div>
              )}
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name*
              </label>
              <input
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name"
                {...register("lastname", { required: true })}
              />
              {errors.lastname && (
                <div className="text-red text-sm">Please enter a last name</div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address*
              </label>
              <input
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red text-sm">
                  Please enter a valid email address
                </div>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <div className="text-red text-sm">
                  Please enter a valid phone number
                </div>
              )}
            </div>

            {/* Password and password confirm fields */}
            <div className="col-span-1 md:col-span-2 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password*
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
                {passwordVisible && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
                {!passwordVisible && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </div>
              <p className="text-black italic py-3">Change Password</p>
              {errors.password && (
                <div className="text-red text-sm">
                  Please enter a valid password
                </div>
              )}
            </div>

            {/* <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date of Birth
              </label>
              <input
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Date of Birth"
                {...register("dob", { required: true })}
              />
              {errors.dob && (
                <div className="text-red text-sm">
                  Please enter a valid date of birth
                </div>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Country
              </label>
              <select
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                {...register("country", { required: true })}
              >
                <option value="" disabled hidden>
                  Select Country
                </option>
                {countryList()
                  .getData()
                  .map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
              </select>
              {errors.country && (
                <div className="text-red text-sm">Please select a country</div>
              )}
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Address"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <div className="text-red text-sm">Please enter an address</div>
              )}
            </div> */}
          </div>
          {/* Section 2 */}
          <h2 className="text-xl mb-4 mt-10 border-b">Interests (Optional)</h2>

          <div className="mb-4 mt-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              What type of cruises are you interested in?
            </label>
            <Select
              options={mappedInterests}
              isMulti
              name="interests"
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => setInterests(e)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Where would you like to go on a cruise?
            </label>
            <Select
              options={mappedDestinations}
              isMulti
              name="destinations"
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => setDestinations(e)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Which is your preferred departure port?
            </label>
            <Select
              options={mappedDepartures}
              isMulti
              name="departures"
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => setDepartures(e)}
            />
          </div>

          {/* Register Button */}
          <div className="grid grid-cols-2 mb-10 items-center mt-[50px]">
            <div>
              <button
                type="submit"
                className="bg-cruise text-white font-bold py-3.5 apercu_regular px-10 rounded hover:underline hover:text-black"
              >
                Save
              </button>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={handleAccountDelete}
                className="text-black apercu_medium"
              >
                Delete Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await getRegistrationData();
  return {
    props: {
      response,
    },
    revalidate: 2,
  };
}

export default MyAccount;
