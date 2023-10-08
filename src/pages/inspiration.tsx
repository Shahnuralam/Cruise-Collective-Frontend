import InspirationLandingPage from "@/components/LandingPage/InspirationLandingPage";
import PageHeading from "@/components/PageHeading";
import React from "react";

const inspiration = () => {
  const pageHeaderData = {
    heading: "Find inspiration for your next cruise",
    text: "Explore our latest selection of articles designed to give you an inside look at the cruise industry and tips for your next trip... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    class: "text-sm"
  };
  return (
    <div>
      <div className="p-3 md:p-[32px] lg:p-[75px]">
        <PageHeading pageHeaderData={pageHeaderData} />
        <InspirationLandingPage isInfiniteDataLoading={true} />
      </div>
    </div>
  );
};

export default inspiration;
