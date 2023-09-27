import React from "react";
import StrokeLine from "../StrokeLine";
import ContinentModal from "../Modal/ContinentModal";

const DestinationLandingPage = ({ continentModal, setContinentModal }) => {
  return (
    <>
      <h3 className="text-4xl">Pick a continent</h3>
      <div className="pt-2">
        <StrokeLine />
      </div>
      <div className="py-5">
        <button
          onClick={() => {
            setContinentModal(true);
          }}
          className="border-[#FF9A31] border-4"
        >
          <label
            htmlFor="continent-modal"
            className="cursor-pointer block w-full p-2"
          >
            Open Modal
          </label>
        </button>
      </div>
      {continentModal && (
        <ContinentModal
          continentModal={continentModal}
          setContinentModal={setContinentModal}
        ></ContinentModal>
      )}
    </>
  );
};

export default DestinationLandingPage;
