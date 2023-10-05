import StrokeLine from "../StrokeLine";


const CouponModal = ({couponModalData, setCouponModalData}) => {



    return (
      <>
        <input
          type="checkbox"
          id="show_coupon_id"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box max-w-3xl relative p-[30px] md:p-[60px]">
            <label
              htmlFor="show_coupon_id"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-7xl font-bold text-center">
              Coupon Code: 34245
            </h3>
  
            {/* <div className="flex justify-center pt-4 pb-6">
               <StrokeLine></StrokeLine>
            </div> */}

            <div className="text-center mt-5">
              <button
                className="bg-cruise py-3 px-10 text-white rounded text-xl"
                onClick={() => setCouponModalData(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default CouponModal;