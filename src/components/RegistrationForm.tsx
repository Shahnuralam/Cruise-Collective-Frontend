import React from "react";

const RegistrationForm = () => {
  return (
    <>
      <h2 className="text-xl mb-4 mt-10 border-b">Personal Information:</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth
          </label>
          <input
            className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            placeholder="Date of Birth"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Country
          </label>
          <select
            className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Country
            </option>
            <option value="usa">USA</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <input
            className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Address"
          />
        </div>
      </div>
      {/* Section 2 */}
      <h2 className="text-xl mb-4 mt-10 border-b">Interests (Optional)</h2>

      <div className="mb-4 mt-5">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          What type of cruises are you interested in?
        </label>
        <input
          className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Cruises"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Where would you like to go on a cruise?
        </label>
        <input
          className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Destination"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Which is your preferred departure port?
        </label>
        <input
          className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Departure Port"
        />
      </div>

      {/* GDPR Compliance */}
      <div className="mb-4 mt-10">
        <h2 className="text-xl mb-2 border-b">GDPR Compliance Fields:</h2>
        <label className="flex items-center mb-2 mt-8">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-sm">
            I agree to the terms and conditions
          </span>
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-sm">
            I agree to receive marketing emails from 'Cruise Collective'
          </span>
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-sm">
            I have read and understand the privacy policy
          </span>
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
    </>
  );
};

export default RegistrationForm;
