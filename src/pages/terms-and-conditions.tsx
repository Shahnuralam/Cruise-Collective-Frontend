import React from "react";
import { useQuery } from "react-query";
import { getTermsConditionData } from "@/queries";
import Head from "next/head";

const TermsCondition = () => {
  const { data } = useQuery("TermsCondition", () => getTermsConditionData(), {
    refetchOnWindowFocus: false,
    enabled: true,
  });

  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div
        dangerouslySetInnerHTML={{
          __html: data?.description,
        }}
        className="p-8 md:p-[75px]"
      ></div>
    </>
  );
};

export default TermsCondition;
