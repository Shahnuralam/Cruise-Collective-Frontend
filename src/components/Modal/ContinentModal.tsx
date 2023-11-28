import React from "react";
import StrokeLine from "../StrokeLine";
import FooterRightImage from "@/layout/Footer/FooterRightImage";

const ContinentModal = ({ continentModal, setContinentModal }) => {
  return (
    <>
      <input type="checkbox" id="continent-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-[30px] md:p-[60px]">
          <label
            htmlFor="continent-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="flex py-3 justify-center">
            <FooterRightImage></FooterRightImage>
          </div>

          <h3 className="text-7xl font-bold text-center">Europe</h3>
          <div className="flex justify-center py-6">
            <StrokeLine></StrokeLine>
          </div>

          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est.
            Fusce egestas at felis quis volutpat..
          </p>

          <div className="text-center mt-5">
            <button
              className="bg-cruise py-3 px-10 text-white rounded text-xl uppercase"
              onClick={() => setContinentModal(null)}
            >
              View Cruises
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContinentModal;
