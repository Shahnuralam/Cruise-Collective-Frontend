import React from "react";
import StrokeLine from "../StrokeLine";

const SuccessfulModal = (props) => {
  const { showSuccessModal, setShowSuccessModal } = props;

  return (
    <>
      <input
        type="checkbox"
        id="cruise-line-item-terms-and-conditions-modal"
        className="modal-toggle"
        checked={!!showSuccessModal.title}
      />
      <div className="modal">
        <div className="modal-box max-w-3xl relative p-[30px] md:p-[60px]">
          <label
            onClick={() => setShowSuccessModal({})}
            className="btn btn-sm btn-circle absolute right-2 top-2 cursor-pointer"
          >
            ✕
          </label>
          <h3 className="text-[32px] text-center">{showSuccessModal.title}</h3>

          <div className="flex justify-center pt-4 pb-6">
            <StrokeLine></StrokeLine>
          </div>

          <p className=" text-center">{showSuccessModal.text}</p>

          <div className="text-center mt-5">
            <button
              className="bg-cruise w-[200px] h-[50px] text-white text-sm apercu_regular uppercase  hover:underline hover:text-black tracking-[1.54px] opacity-90 "
              onClick={() => setShowSuccessModal({})}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessfulModal;
