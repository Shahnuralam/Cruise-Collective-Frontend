import RoundedBtn from "@/atoms/RoundedBtn";
import React from "react";
import StrokeLine from "../StrokeLine";

const TermsAndConditionsCruiseLineModal = (props) => {
  const { setTermsAndConditionsModalData, termsAndConditionsModalData } = props;
//   console.log({ termsAndConditionsModalData });


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
          <h3 className="text-7xl font-bold text-center">
            {termsAndConditionsModalData?.name}
          </h3>

          <div className="flex justify-center pt-4 pb-6">
             <StrokeLine></StrokeLine>
          </div>

          <p className="text-sm text-center">
            sum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            ultricies felis. Cras sit amet ligula velit. Sed in tortor est.
            Fusce egestas at felis quis volutpat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec sit amet ultricies felis. Cras
            sit amet ligula velit. Sed in tortor est.
          </p>
          <p className="text-sm text-center pt-2">
            Fusce egestas at felis quis volutpat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec sit amet ultricies felis. Cras
            sit amet ligula velit. Sed in tortor est. Fusce egestas at felis
            quis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec sit amet ultricies felis. Cras sit amet ligula velit.
            Sed in tortor est. Fusce egestas at felis quis volutpat.
          </p>

          <div className="text-center mt-5">
            <button
              className="bg-cruise py-3 px-10 text-white rounded text-xl"
              onClick={() => setTermsAndConditionsModalData(null)}
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
