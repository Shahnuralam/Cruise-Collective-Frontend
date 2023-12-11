import StrokeLine from "@/components/StrokeLine";
import Head from "next/head";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = async (data) => {
    // Handle form submission
    // Send data to JotForm API
    const apiKey = "963dd0ad95156ea7dc66053c8a923a6a";
    const apiUrl = `https://api.jotform.com/form?apiKey=${apiKey}`;

    const { name, email, message } = data;

    const jotformData = {
      submission: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jotformData),
    });

    if (response.ok) {
      // Request was successful, you can handle the success here
    } else {
      // Request failed, handle the error
      console.error("Error submitting the form to JotForm");
    }
  };

  return (
    <div className="p-8 md:p-[75px]">
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="container mx-auto px-4">
        <div>
          <div className="max-w-[540px] mx-auto">
            <h1 className="text-black text-4xl md:text-5xl font-normal mb-4">
              Contact Cruise Collective
            </h1>
            <StrokeLine />
          </div>
          <iframe
            id="JotFormIFrame-232840631975865"
            title="Cruise Collective Contact Us Form"
            allow="geolocation; microphone; camera"
            src="https://ourmedia.jotform.com/232840631975865"
            frameBorder="0"
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: "539px",
              border: "none",
            }}
            scrolling="no"
          ></iframe>
        </div>

        <div className=" hidden md:w-3/4 mt-12 md:pr-7">
          <h1 className="text-black text-[40px] font-normal text-left">
            Contact Cruise Collective
          </h1>
          <div className="border-solid border border-cruise w-32 mt-5" />
          <div>
            <p className="mt-5 md:pr-12">
              Some information about cruise collective... Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Donec sit amet ultricies felis.
              Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at
              felis quis volutpat. Nam placerat auctor nisl, id efficitur urna.
              Nam non fermentum diam, vehicula euismod dui. Praesent finibus
              ultricies mollis. Integer accumsan varius sollicitudin. Vivamus
              sollicitudin efficitur lectus. Nunc sed elit vel metus porta
              facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem
              convallis.
            </p>
            <br />
            <br />
            <div className="grid grid-cols-2 ml-3">
              <div>
                <ul className="list-disc custom-list-marker">
                  <li>Terms & Conditions</li>
                  <li>Terms & Conditions</li>
                  <li>Terms & Conditions</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc custom-list-marker">
                  <li>Terms & Conditions</li>
                  <li>Terms & Conditions</li>
                  <li>Terms & Conditions</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden max-auto container px-4 m-5 ml-15p">
        <h1 className="mb-4   text-black text-[40px] font-normal ">
          Contact us directly
        </h1>
        <div className="border-solid border border-cruise w-32 mt-5" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 md:mt-8 ml-3 md:ml-0 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name*
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
              {errors.name && (
                <div className="text-red text-sm">Please enter your name</div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address*
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
              {errors.email && (
                <div className="text-red text-sm">
                  Please enter a valid email address
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone")}
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
              />
            </div>

            <div className="mb-4 ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                How can we help?
              </label>
              <select {...register("help")} className="custom-select">
                <option value="" disabled>
                  Please select an option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                {/* Add more options as needed */}
              </select>

              {errors.help && (
                <div className="text-red text-sm">
                  Please select how we can help
                </div>
              )}
            </div>
            <div className="mb-4 md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message*
              </label>
              <textarea
                {...register("message", { required: true })}
                className="appearance-none border border-cruise rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                rows={parseInt("4")} // Convert the string to a number
              />

              {errors.message && (
                <div className="text-red text-sm">Please enter a message</div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center mt-5">
            <button
              className="bg-cruise text-white font-bold py-2.5 px-10 rounded hover:underline hover:text-black"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
