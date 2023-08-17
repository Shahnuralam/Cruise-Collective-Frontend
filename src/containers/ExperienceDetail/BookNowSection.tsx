import React from "react";
import RoundedBtn from "@/atoms/RoundedBtn";
import Link from "next/link";
import { BookNowImage } from "@/containers/ExperienceDetail/BookNowImage";

export const BookNowSection = ({ data }: any) => {
  const { experience_fields: field } = data;
  return (
    <div className="flex justify-center items-center bg-white py-10">
      <div className="container w-[90%] lg:w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-12">
          <div className="flex flex-col-reverse lg:flex-row gap-6 col-start-2 col-span-9 w-full bg-[#c7d1a3] bg-opacity-[15%] rounded-lg pt-[2.125rem] pb-[2rem] px-[1.375rem] ">
            {/** Left */}
            <div className="flex flex-col justify-between gap-6">
              {/** Left / Top */}
              <div className="flex flex-col w-full lg:max-w-[90%] gap-3">
                <h2 className="text-3xl border-b border-b-[#4f6355] text-[#4f6355] pb-3">
                  Book now
                </h2>
                <p className="text-black text-opacity-90 leading-tight">
                  {field?.book_now_description}
                </p>
              </div>

              {/** Left / Bottom */}
              <div className="flex flex-col gap-3 lg:gap-6">
                <div className="w-fit">
                  {field?.find_out_url && (
                    <RoundedBtn
                      href={field?.find_out_url || "#"}
                      useLink
                      title={field?.button_text}
                      variant="outline-dark-green-bg-white"
                    />
                  )}
                </div>

                {field?.terms_url && (<p>
                  Click{" "}
                  <Link
                    href={field?.terms_url || "#"}
                    className="text-[#607b53] underline"
                    target="_blank"
                  >
                    here
                  </Link>{" "}
                  for the full terms and conditions
                </p>)}
              </div>
            </div>

            {/***/}
            <div className="w-full">
              <BookNowImage src={field} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
