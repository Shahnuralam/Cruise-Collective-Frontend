import { RegistrationInput } from "@/types/registration";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { getUserDetailByEmail, postRegister, sendEmailConfirmation, updateUser } from "../queries/index";
import countryList from "react-select-country-list";
import Link from "next/link";
import { useRouter } from "next/router";
import LoginModal from "./Modal/LoginModal";
import PasswordVisibleInvisible from "./Shared/PasswordVisibleInvisible";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { successModalDto } from "@/Interface/Dto";
import SuccessfulModal from "./Modal/SuccessfulModal";
import { signIn } from "next-auth/react";
import ReCAPTCHA from "react-google-recaptcha";
import { showToast } from "@/utils";
import axios from "axios";

const RegistrationForm = ({ response }) => {
  const maxDate = new Date();
  const [showSuccessModal, setShowSuccessModal] = useState<successModalDto>({});
  const router = useRouter();
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const { control, register, handleSubmit, setValue, formState: { errors } } = useForm<RegistrationInput>();

  const handleRecaptchaChange = (value) => setRecaptchaToken(value);

  const [interests, setInterests] = React.useState<any>([]);
  const [destinations, setDestinations] = React.useState<any>([]);
  const [departures, setDepartures] = React.useState<any>([]);
  const [regions, setRegions] = React.useState<any>([]);
  const [passwordVisible, setPassWordVisible] = useState(false);
  const handleSelects = (e) => e.map((item) => item.value);
  const { email } = router.query;
  const [userInfoByEmail, setUserInfoByEmail] = React.useState<any>();
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const fetchUserByEmail = async () => {
      if (email) {
        setLoading(true)
        try {
          const res: any = await getUserDetailByEmail(email);
          setLoading(false)
          if (res) {
            setUserInfoByEmail(res);
            console.log(userInfoByEmail)
            const addressComponents = res.address.split(", ");

            setValue("address1", addressComponents[0] || "");
            setValue("address2", addressComponents[1] || "");
            setValue("city", addressComponents[2] || "");
            setValue("postcode", addressComponents[3] || "");
            setValue("firstname", res.firstname);
            setValue("lastname", res.lastname);
            setValue("email", res.email);
            setValue("mobile", res.mobile);
            setValue("password", "");
            setValue("dob", res.date);
            setValue("country", res.country);
          }
        } catch (error) {
          setLoading(false)
          console.error("Error fetching user data:", error);
        }
        finally {
          setLoading(false)
        }
      }
    };

    fetchUserByEmail();
  }, [email]);


  const onSubmit: SubmitHandler<any> = async (data: any) => {

    const fullAddress = [
      data.address1,
      data.address2 || "", // Add an empty string if data.address2 is undefined
      data.city || "", // Add an empty string if data.city is undefined
      data.postcode || "", // Add an empty string if data.postcode is undefined
    ]
      .filter(String)
      .join(", ");

    data.address = fullAddress;
    try {
      if (email && userInfoByEmail?.id) {
        // Update the rest of the user data
        const response: any = await updateUser({
          ...data,
          interests: handleSelects(interests),
          destinations: handleSelects(destinations),
          departures: handleSelects(departures),
          regions: handleSelects(regions),
        }, userInfoByEmail?.id);

        if(response) {
          showToast("User updated successfully.", "success");
        }

      }
      else {
        //User register
        const response: any = await postRegister({
          ...data,
          interests: handleSelects(interests),
          destinations: handleSelects(destinations),
          departures: handleSelects(departures),
          regions: handleSelects(regions),
          recaptchaToken,
        });

        if (response === false) {
          showToast(
            "This email already exist, please try another email",
            "warning"
          );
          return;
        }
      }


      const { email: userEmail, password, firstname, lastname } = data;

      const userInfo: any = {
        email: userEmail,
        password,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      const WelcomeEmail = `
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Cruise Collective's!</h1>
        <p>
          Dear ${firstname + " " + lastname},<br />
          Thank you for signing up with Cruise Collective. We're excited to have you as part of our community!
        </p>
        <p>
        To complete your registration and start enjoying our services, please verify your email address by clicking the button below:
        </p>
        <a class="button" href="https://project-cruise.vercel.app/email-confirmation?confirmation=<%= CODE %>">Verify Email</a> 
        
        <p>
        If you didn't create an account on Cruise Collective, please disregard this email.
        </p>
        <p>
        Thank you for choosing Cruise Collective. We look forward to serving you.
        </p>
        

        <p className="mt-4">Best regards, </p>
        <p className="text-gray-600 mt-8">The Cruise Collective Team</p>
      </div>
      </div>
      
      `;

      const body = {
        email: userEmail,
        subject: "Welcome to Cruise Collective's",
        emailTemplate: WelcomeEmail,
      };
      const sendGridResponse = await axios.post("/api/sendEmail", body);
      const result = await signIn("credentials", {
        redirect: false,
        email: userEmail,
        password,
      });
      showToast("Logged in successfully.", "success");

      if(userInfoByEmail?.id){
        router.push('/');
      }
      else {
        router.back();
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  const mappedInterests = response?.interests?.map(({ id, title }) => ({
    value: id,
    label: title,
  }));

  const mappedDestinations = response?.destinations?.map(({ id, title }) => ({
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

    if(loading) {
      return <p className="mt-12">Loading...</p>
    }

  return (
    <>
      <h2 className="text-base mb-4 mt-10 border-b opacity-20">
        Personal Information:
      </h2>
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
              <div className="text-red text-sm">Please enter a first name</div>
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
              Phone Number*
            </label>
            <input
              className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Phone Number"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && (
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

            <PasswordVisibleInvisible
              passwordVisible={passwordVisible}
              setPassWordVisible={setPassWordVisible}
            />

            {errors.password && (
              <div className="text-red text-sm">
                Please enter a valid password
              </div>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth*
            </label>
            <Controller
              control={control}
              name="dob"
              render={({ field }) => (
                <DatePicker
                  className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  selected={field.value}
                  onChange={(date) => setValue("dob", date)}
                  maxDate={maxDate}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  dateFormat="dd/MM/yyyy"
                  startDate={new Date(1990, 0, 1)} // Set the default start date
                  placeholderText="Date of Birth"
                />
              )}
            />
            {errors.dob && (
              <div className="text-red text-sm">
                Please enter a valid date of birth
              </div>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Country*
            </label>
            <div className="relative">
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
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4z" />
                </svg>
              </div>
            </div>
            {errors.country && (
              <div className="text-red text-sm">Please select a country</div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address Line 1*
            </label>
            <input
              className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="House Number and Street"
              {...register("address1", { required: true })}
            />
            {errors.address1 && (
              <div className="text-red text-sm">
                Please enter Address Line 1
              </div>
            )}
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address Line 2
            </label>
            <input
              className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Address Line 2"
              {...register("address2")}
            />
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              City*
            </label>
            <input
              className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="City"
              {...register("city", { required: true })}
            />
            {errors.city && (
              <div className="text-red text-sm">Please enter the city</div>
            )}
          </div>

          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Postcode*
            </label>
            <input
              className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Postcode"
              {...register("postcode", { required: true })}
            />
            {errors.postcode && (
              <div className="text-red text-sm">Please enter the postcode</div>
            )}
          </div>
        </div>
        {/* Section 2 */}
        <h2 className="text-base mb-4 mt-10 border-b opacity-20">
          Interests (Optional)
        </h2>

        <div className="mb-4 mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            What type of cruises are you interested in? (please select all that
            apply)
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
            Where would you like to go on a cruise? (please select all that
            apply)
          </label>
          <Select
            options={mappedRegions}
            isMulti
            name="regions"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setRegions(e)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Which is your preferred departure port? (please select all that
            apply)
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

        {/* GDPR Compliance */}
        <div className="mb-4 mt-10">
          <h2 className="text-base mb-2 border-b opacity-20">
            GDPR Compliance Fields:
          </h2>
          <label className="flex items-center mb-2 mt-8">
            <input
              type="checkbox"
              className="form-checkbox"
              {...register("terms", { required: true })}
            />

            <span className="ml-2 text-base">
              I agree to the{" "}
              <Link
                href="/terms-and-conditions"
                target="_blank"
                className="text-cruise"
              >
                terms and conditions
              </Link>
            </span>
            {errors.terms && (
              <div className="text-red text-base ml-2">
                Please agree to the terms and conditions
              </div>
            )}
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              className="form-checkbox"
              {...register("marketing", { required: true })}
            />
            <span className="ml-2 text-base">
              I agree to receive marketing emails from 'Cruise Collective'
            </span>
            {errors.marketing && (
              <div className="text-red text-sm ml-2">
                Please agree to receive marketing emails
              </div>
            )}
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              className="form-checkbox"
              {...register("privacy", { required: true })}
            />
            <span className="ml-2 text-base">
              I have read and understand the{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="text-cruise"
              >
                privacy policy
              </Link>
            </span>
            {errors.privacy && (
              <div className="text-red text-base ml-2">
                Please agree to the privacy policy
              </div>
            )}
          </label>
        </div>
        <div className="mb-4">
          <ReCAPTCHA
            sitekey="6LeeeCkpAAAAAFYoAmYimoLjcMbODxltRez6FO0s"
            onChange={handleRecaptchaChange}
          />
        </div>
        {/* Register Button */}
        <div className="flex flex-col gap-4 items-center mb-10">
          <button className="bg-cruise w-[200px] h-[50px] text-white  text-sm apercu_regular uppercase tracking-[1.54px] hover:underline hover:text-black">
            Register
          </button>
          <div>
            Already have an account? &nbsp;
            <label
              className="text-cruise apercu_regular_pro cursor-pointer"
              onClick={() => setOpenLoginModal(true)}
              htmlFor="login_modal_id"
            >
              Click here!
            </label>
          </div>
        </div>
      </form>

      {/* Login modal */}
      {openLoginModal && (
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}

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

export default RegistrationForm;
