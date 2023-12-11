import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getTermsConditionData } from "@/queries";

const TermsCondition = () => {
  const { data } = useQuery("TermsCondition", () => getTermsConditionData(), {
    refetchOnWindowFocus: false,
    enabled: true,
  });
  console.log(data);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: data?.description,
      }}
      className="p-8 md:p-[75px]"
    ></div>
  );
};

export default TermsCondition;
