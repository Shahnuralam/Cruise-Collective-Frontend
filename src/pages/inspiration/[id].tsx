import PageHeading from "@/components/PageHeading";
import FooterRightImage from "@/layout/Footer/FooterRightImage";
import { useRouter } from "next/router";

const InspirationDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <div>
      <section>
        
        <div className="grid grid-cols-2">
          <div className="h-[600px]">
            <div className="inspiration-img"></div>
          </div>
          <div className="inspiration-bg p-12">
            <h4 className="text-xl font-bold py-2">ADVENTURE CRUISE, EUROPE</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="210"
              height="3"
              viewBox="0 0 210 3"
              fill="none"
            >
              <path
                d="M0.671875 1.79736L209.084 1.79738"
                stroke="#FF9A31"
                strokeWidth="1.73"
                strokeMiterlimit="10"
              />
            </svg>
            <div className="pt-4 pb-8 max-w-[472px] min-h-[270px]">
              <h3 className="text-4xl pt-8">
                Three Beautiful Cruise Line Destinations You Haven’t Heard of
              </h3>
              <p className="pt-5">08 March 2023 by Joe Bloggs.</p>
            </div>

            <div>
              <button className="border border-[#FF9A31] py-3 px-8">
                VIEW MORE
              </button>
            </div>
            <div className="flex justify-end">
              <FooterRightImage></FooterRightImage>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-[75px]">
        <div className="py-5">
        <h4 className="text-4xl">This is article page: {id}</h4>
        </div>
        <p className="pb-8">
          Strapline text goes hereLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula
          velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam
          placerat auctor nisl, id efficitur urna. Nam non fermentum diam,
          vehicula euismod dui. Praesent finibus ultricies mollis.
        </p>
        <PageHeading
          pageHeaderData={{ heading: "Mt Kubba, Indonesia", text: "" }}
        />
        <p className="mb-4">
          Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis. Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis.
        </p>
        <p>
          Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis.
        </p>
        <div className="h-[432px] py-4">
          <img
            className="w-full h-full"
            style={{ objectFit: "contain" }}
            src="/dummy/inspiration/Rectangle (1).png"
            alt=""
          />
        </div>
        <p className="mb-4">
          Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis. Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis.
        </p>
        <p>
          Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis.
        </p>

        <div className="mt-12">
          <div className="text-lg">
            The best cruise we have been on. We really loved it... Nam placerat
            auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula
            euismod dui. Praesent finibus ultricies mollis.
          </div>
        </div>

        <PageHeading
          pageHeaderData={{ heading: "River Xu, China", text: "" }}
        />

        <p className="mb-4">
          Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis. Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis.
        </p>
        <p>
          Standard paragraph text goes hereLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis.
        </p>

        <ul className="list-disc text-cruise">
          <li className="text-black">asd</li>
          <li className="text-black">asd</li>
          <li className="text-black">asd</li>
          <li className="text-black">asd</li>
        </ul>

        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="2"
            viewBox="0 0 600 2"
            fill="none"
          >
            <path
              d="M0 1L600 0.999948"
              stroke="#FF9A31"
              strokeWidth="1.78"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="text-center py-12">
            <p>Share Via</p>
            <div className="flex gap-3 justify-center mt-4">
                <img className="cursor-pointer" src="/dummy/socialicon/Social Icons.png" alt="" />
                <img className="cursor-pointer" src="/dummy/socialicon/Social Icons (1).png" alt="" />
                <img className="cursor-pointer" src="/dummy/socialicon/Social Icons (2).png" alt="" />
                <img className="cursor-pointer" src="/dummy/socialicon/Social Icons (3).png" alt="" />
                <img className="cursor-pointer" src="/dummy/socialicon/Social Icons (4).png" alt="" />
          
            </div>
        </div>

      </section>
    </div>
  );
};

export default InspirationDetails;
