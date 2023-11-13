import React from "react";
import { MasterOptions } from "@/layout/Master";
import Head from "next/head";
import RegistrationForm from "@/components/RegistrationForm";
import Image from "next/image";
import { getRegistrationData } from "@/queries";

export default function RegisterPage({ response }) {
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>
      <div className="flex items-center ">
        <div className=" mx-auto px-4 flex flex-col md:flex-row">
          <div className="md:w-3/4 mt-12 md:pr-7 p-[75px]">
            <h1 className="text-black text-[40px] font-normal text-left">
              Join the collective
            </h1>
            <div className="border-solid border border-cruise w-32 mt-5" />

            <p className="mt-5 md:pr-12">
              Not a deals hub or a travel agent, but a place for people who love
              the adventure of Cruising to find everything they need to prepare
              for their next voyage and more…
              <br />
              <br /> Find adventure, luxury and exclusive savings with Cruise
              Collective; where members gain access to discounts, incredible
              competition prizes and insider knowledge designed to help you make
              the most of your next adventurenat sea.
            </p>

            <RegistrationForm response={response} />
          </div>
          <div className="hidden md:block w-full md:w-1/2">
            <Image
              src="/images/register-bg.png"
              width={765}
              height={600}
              style={{height: '100%'}}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Get getRegistrationData static props
export async function getStaticProps() {
  const response = await getRegistrationData();
  return {
    props: {
      response,
    },
    revalidate: 2,
  };
}

RegisterPage.masterOptions = {
  header: {
    actionBtnIsFilled: true,
  },
} as MasterOptions;
