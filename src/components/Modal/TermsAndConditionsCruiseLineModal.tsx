import RoundedBtn from "@/atoms/RoundedBtn";
import React from "react";
import StrokeLine from "../StrokeLine";

const TermsAndConditionsCruiseLineModal = (props) => {
  const { setTermsAndConditionsModalData, termsAndConditionsModalData } = props;


  return (
    <>
      <input
        type="checkbox"
        id="cruise-line-item-terms-and-conditions-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-3xl relative p-[30px] md:p-[60px]">
          <label
            htmlFor="cruise-line-item-terms-and-conditions-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-[32px] text-center">
            {termsAndConditionsModalData?.name}
          </h3>

          <div className="flex justify-center pt-4 pb-6">
             <StrokeLine></StrokeLine>
          </div>

          <p className=" text-center">
         {termsAndConditionsModalData?.terms_conditions}
          </p>
      

          <div className="text-center mt-5">
            <button
              className="bg-cruise w-[200px] h-[50px] text-white text-sm apercu_regular uppercase  hover:underline hover:text-black tracking-[1.54px] opacity-90 "
              onClick={() => setTermsAndConditionsModalData({})}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsCruiseLineModal;
