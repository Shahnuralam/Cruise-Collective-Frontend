import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Select from "react-select";
import {
  deleteUser,
  getRegistrationData,
  getUserDetailById,
  updateUser,
} from "@/queries";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import PageHeading from "@/components/PageHeading";
import { useRouter } from "next/router";
import PasswordVisibleInvisible from "@/components/Shared/PasswordVisibleInvisible";
import { successModalDto } from "@/Interface/Dto";
import SuccessfulModal from "@/components/Modal/SuccessfulModal";

const getValueAndLabelFromArr = (data) => {
  const filterData = data?.map(({ id, title }) => ({
    value: id,
    label: title,
  }));

  return filterData;
};

const MyAccount = ({ response }) => {
  const handleCloseModal = () => {
    setShowSuccessModal({});
    router.push("/");
  };
  const [showSuccessModal, setShowSuccessModal] = useState<successModalDto>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const [interests, setInterests] = useState<any>([]);
  const [destinations, setDestinations] = useState<any>([]);
  const [departures, setDepartures] = useState<any>([]);
  const [regions, setRegions] = useState<any>([]);
  const [passwordVisible, setPassWordVisible] = useState(false);
  const { data: session, update } = useSession();
  const [userData, setUserData] = useState<any>();
  const handleSelects = (e) => e.map((item) => item.value);

  useEffect(() => {
    const fetchData = async () => {
      const user: any = await getUserDetailById(session?.user?.id);
      setUserData(user?.data);

      setValue("firstname", user?.data?.firstname);
      setValue("lastname", user?.data?.lastname);
      setValue("email", user?.data?.email);
      setValue("mobile", user?.data?.mobile);

      setInterests(getValueAndLabelFromArr(user?.data?.interests));
      setRegions(getValueAndLabelFromArr(user?.data?.regions));
      setDepartures(getValueAndLabelFromArr(user?.data?.departures));
      // setValue("password", user?.data?.password);
    };

    fetchData();
  }, [session?.user?.id, setValue]);

  const onSubmit: SubmitHandler<any> = async (data) => {
    // Check if the password is provided
    if (data.password) {
      // Password is provided, update it
      const passwordResponse = await updateUser(
        {
          password: data.password,
        },
        session?.user?.id
      );
      if (!passwordResponse) {
        // Handle the error if updating the password fails
        // You can show an error message or take appropriate action here
        return;
      }
    }

    // Remove password from data object if it's empty or not provided
    delete data.password;

    // Update the rest of the user data
    const response = await updateUser(
      {
        ...data,
        interests: handleSelects(interests),
        destinations: handleSelects(destinations),
        departures: handleSelects(departures),
        regions: handleSelects(regions),
      },
      session?.user?.id
    );

    if (response) {
      setShowSuccessModal({
        type: "success",
        title: "Success",
        text: "Your account successfully saved",
      });
    } else {
      // Handle the error if updating user data fails
      // You can show an error message or take appropriate action here
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
          // Swal.fire("Deleted!", "Account has been deleted.", "success");
          setShowSuccessModal({
            type: "success",
            title: "Success",
            text: "Your account has been deleted successfully",
          });
          router.push("/");
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

  const mappedRegions = response?.regions?.map(({ id, title }) => ({
    value: id,
    label: title,
  }));

  const mappedDepartures = response?.departures
    ?.map(({ id, title }) => ({
      value: id,
      label: title,
    }))
    .filter((departure) => departure.label !== "Oslo");

  return (
    <>
      <Head>
        <title>My Account</title>
      </Head>
      <div className="container mx-auto px-5 py-[75px]">
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
                {...register("mobile")}
              />
              {/* {errors.mobile && (
                <div className="text-red text-sm">
                  Please enter a valid phone number
                </div>
              )} */}
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
                  // required: "Password is required",
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
              value={interests}
              onChange={(e) => setInterests(e)}
            />
          </div>
          {/* <div className="mb-4">
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
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Where would you like to go on a cruise?
            </label>
            <Select
              options={mappedRegions}
              isMulti
              name="regions"
              className="basic-multi-select"
              classNamePrefix="select"
              value={regions}
              onChange={(e) => setRegions(e)}
            />
          </div>
          {/* <div className="mb-4">
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
          </div> */}
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
              value={departures}
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
      {!!Object.keys(showSuccessModal).length && (
        <SuccessfulModal
          showSuccessModal={showSuccessModal}
          setShowSuccessModal={handleCloseModal}
        />
      )}
      {/* <SuccessfulModal /> */}
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
