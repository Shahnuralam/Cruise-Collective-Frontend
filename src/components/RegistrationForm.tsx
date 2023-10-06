import { RegistrationInput } from "@/types/registration";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Select from "react-select";

const RegistrationForm = ({ response }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationInput>();

  const onSubmit: SubmitHandler<RegistrationInput> = (data) =>
    console.log(data);

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
      <h2 className="text-xl mb-4 mt-10 border-b">Personal Information:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
              {...(register("firstName"), { required: true })}
            />
            {errors.firstName && (
              <div className="text-red text-sm">Please enter a first name</div>
            )}
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
              {...(register("lastName"), { required: true })}
            />
            {errors.lastName && (
              <div className="text-red text-sm">Please enter a last name</div>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
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
          <div>
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
              <option value="usa">USA</option>
              {/* Add more options as needed */}
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
          </div>
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
          />
        </div>

        {/* GDPR Compliance */}
        <div className="mb-4 mt-10">
          <h2 className="text-xl mb-2 border-b">GDPR Compliance Fields:</h2>
          <label className="flex items-center mb-2 mt-8">
            <input
              type="checkbox"
              className="form-checkbox"
              {...register("gdpr", { required: true })}
            />

            <span className="ml-2 text-sm">
              I agree to the terms and conditions
            </span>
            {errors.gdpr && (
              <div className="text-red text-sm ml-2">
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
            <span className="ml-2 text-sm">
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
            <span className="ml-2 text-sm">
              I have read and understand the privacy policy
            </span>
            {errors.privacy && (
              <div className="text-red text-sm ml-2">
                Please agree to the privacy policy
              </div>
            )}
          </label>
        </div>

        {/* Register Button */}
        <div className="flex flex-col gap-4 items-center mb-10">
          <button className="bg-cruise text-white font-bold py-2 px-10">
            Register
          </button>
          <div>
            Already have an account? &nbsp;
            <a href="/login" className="text-cruise">
              Click here!
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
