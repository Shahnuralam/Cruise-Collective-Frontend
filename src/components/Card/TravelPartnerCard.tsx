import { formatDate } from "@/utils";
import { useSession } from "next-auth/react";
import React from "react";

const TravelPartnerCard = ({ card, setOpenLoginModal }) => {
  console.log(card);
  const imageUrl = card?.attributes?.featured_image?.data[0]?.attributes?.url;
  const title = card?.attributes?.title;
  const description = card?.attributes?.description;
  const logo = card?.attributes?.logo?.data?.attributes?.url;
  const offer = card?.attributes?.offer;
  const expiresdate = card?.attributes?.expires_date;
  const { data: session } = useSession();

;
  

  const formattedExpiryDate = formatDate(expiresdate);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
      {/* Left Column with Background Image */}
      <div className="w-full relative">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="md:h-full h-[250px] bg-center bg-cover relative"
        >
          <div
            className="absolute top-0 px-3 md:px-7"
            style={{ background: "rgba(255, 255, 255, 0.30)" }}
          >
            {/* Make the logo dynamic */}
            <img
              src={logo}
              alt=""
              width="150"
              height="150"
              className="mt-4" // Adjust the margin as needed
            />
          </div>
        </div>
      </div>

      {/* Right Column with Text Content */}
      <div className="bg-cruise-texture p-3 md:p-7 w-full">
        <div className="max-w-[472px] text-3xl text-black py-2 mt-4 mb-5">
          {title}
        </div>

        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="line-clamp-3 text-black text-base"
        ></p>

        <div className="text-3xl mt-8">{offer} off</div>
        <div className="button-section pt-7 pb-3">
          {!session?.user?.email && (
            <>
              <button className="border-cruise border-[2px] text-black hover:bg-cruise ">
                <label
                  onClick={(e) => {
                    setOpenLoginModal(true);
                    e.stopPropagation();
                  }}
                  className="cursor-pointer text-xl block py-1.5 px-8"
                  htmlFor="login_modal_id"
                >
                  Login to claim
                </label>
              </button>
            </>
          )}
          {session?.user?.email && (
            <>
              {/* <Link href={`/cruise-line-card-detail/${id}`}> */}
              <button className="border-[#FF9A31] border-b-[3px] py-2 px-7 text-black tex-xl xl:text-[27px] hover:bg-cruise ">
                View More
              </button>
              {/* </Link> */}
            </>
          )}
        </div>
        <div className="px-2 py-1 font-semibold text-sm tracking-[1.54px] apercu_medium uppercase">
          EXPIRES {formattedExpiryDate}
        </div>
      </div>
    </div>
  );
};

export default TravelPartnerCard;
