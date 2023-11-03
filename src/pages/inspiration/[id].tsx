import AnnotationIframe from "@/components/Shared/AnnotationIframe";
import AnnotationImage from "@/components/Shared/AnnotationImage";
import BgImage from "@/components/Shared/BgImage";
import FullScreenHeader from "@/components/FullScreenHeader";
import IframePage from "@/components/IframePage";
import LandingImage from "@/components/LandingImage";
// import InspirationLandingPage from "@/components/LandingPage/InspirationLandingPage";
import PageHeading from "@/components/PageHeading";
import QuotationPage from "@/components/QuotationPage";
import SocialShare from "@/components/SocialShare";
// import { contentSliderData } from "@/containers/content";
import FooterRightImage from "@/layout/Footer/FooterRightImage";
import { ImageSlider, baseUrl } from "@/utils";
import { useRouter } from "next/router";
import UnOrderList from "@/components/UnOrderList";
import { useEffect, useState } from "react";
import styles from '../../styles/editor.module.css';
import InspirationCard from "@/components/Card/InspirationCard";


  function InspirationDetails({ inspiration,allInspirations }) {

    const router = useRouter();
    const { id } = router.query;
    const [scrollTop, setScrollTop] = useState<boolean>(false);

    const pageScrollTop = () => {
      window.scrollTo(0, 0);
    };

    useEffect(() => {
      pageScrollTop();
    }, [scrollTop]);

    const createdAt = new Date(inspiration.data.attributes.createdAt);

    const options: any = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(createdAt);



    const fullScreenHeader = {
      bgImg: inspiration.data.attributes.featured_image.data.attributes.url,
      heading: inspiration.data.attributes.title,
      date: formattedDate, // Use the formatted date
      // country: "ADVENTURE CRUISE, EUROPE",
      btnText: "VIEW MORE",
    };

    const getRandomInspirations = (count, currentInspirationId) => {
      const shuffledInspirations = [...allInspirations.data];
      // Filter out the current inspiration based on its ID
      const filteredInspirations = shuffledInspirations.filter(item => item.id !== currentInspirationId);
      for (let i = filteredInspirations.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredInspirations[i], filteredInspirations[j]] = [filteredInspirations[j], filteredInspirations[i]];
      }
      return filteredInspirations.slice(0, count);
    };

    const relatedInspirations = getRandomInspirations(4, inspiration.id); // Pass the current inspiration ID




    return (
      <>
        <section>
          <FullScreenHeader
            fullScreenHeader={fullScreenHeader}
            setScrollTop={setScrollTop}
          >
            {" "}
          </FullScreenHeader>
        </section>
        <div className="flex flex-col gap-4">

          <div>


            <section className={`${styles.editorContainer} container mx-auto pt-3 md:pt-[75px]`}>
              <div dangerouslySetInnerHTML={{ __html: inspiration.data.attributes.text_editor }} />
            </section>

          </div>
        </div>
        {/* <section className="p-6 md:container md:mx-auto">
        <div className="text-3xl md:text-[40px] mb-4">Strapline text</div>
        <p className="pb-8 text-xl md:text-lg">
          Strapline text goes hereLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula
          velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam
          placerat auctor nisl, id efficitur urna. Nam non fermentum diam,
          vehicula euismod dui. Praesent finibus ultricies mollis.
        </p>
        <PageHeading
          pageHeaderData={{ heading: "Mt Kubba, Indonesia", text: "" }} />
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

        <div className="w-full my-6">
          <AnnotationImage
            data={{
              imgUrl: "/dummy/inspiration/Rectangle (1).png",
              heading: "Annotated image insert",
              text: "Two P&O cruises exploring the vast wonders of Mt Kubba in Indonesia",
            }} />
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

        <div className="my-12">
          <QuotationPage
            data={{
              description: "The best cruise we have been on. We really loved it... Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis.",
              text: "CHLOE WATKINS, 28 YEARS OLD, P&O PASSENGER IN 2023",
            }} />
        </div>

        <PageHeading
          pageHeaderData={{ heading: "River Xu, China", text: "" }} />

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

        <div className="py-6">
          <AnnotationIframe
            data={{
              heading: "Video embed + annotation insert",
              src: "https://www.youtube.com/embed/s4BibernJxU?si=fvonp4_MTUpdP0OE",
              text: "Video of a cruise travelling down the River Xu in China",
            }} />
        </div>

        <p className="my-6">
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

        <PageHeading
          pageHeaderData={{ heading: "Muca Puna, Colombia", text: "" }} />

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

        <div className="my-6">
           <ImageSlider sliderItems={contentSliderData} /> }
        </></div>

        // <p className="mb-4">
        //   Standard paragraph text goes hereLorem ipsum dolor sit amet,
        //   consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
        //   amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
        //   volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
        //   fermentum diam, vehicula euismod dui. Praesent finibus ultricies
        //   mollis. Standard paragraph text goes hereLorem ipsum dolor sit amet,
        //   consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
        //   amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
        //   volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
        //   fermentum diam, vehicula euismod dui. Praesent finibus ultricies
        //   mollis.
        // </p>
        // <p className="mb-8">
        //   Standard paragraph text goes hereLorem ipsum dolor sit amet,
        //   consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
        //   amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
        //   volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
        //   fermentum diam, vehicula euismod dui. Praesent finibus ultricies
        //   mollis.
        // </p>

        // <div className="my-6">
        //   <UnOrderList lists={lists} />
        // </div>

        {/* <div className="flex justify-center">
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
    
           <SocialShare /> */}
        {/* </section> */}



        <section className="mx-auto p-12">
          <PageHeading
            pageHeaderData={{ heading: "You may also like", text: "" }} />
          <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {relatedInspirations.map((item) => (
              <InspirationCard height="328px" key={item.id} inspiration={item} />
            ))}
          </div>
        </section>
      </>
    );
  }

  export async function getServerSideProps(context: { params: any; }) {
    const { params } = context;
    const id = params.id;

    // Fetch product data from API based on productId
    const res = await fetch(`${baseUrl}/api/insiprations/${id}?populate=deep`);
    const inspiration = await res.json();

    const relateds = await fetch(`${baseUrl}/api/insiprations?populate=deep`);
    const allInspirations = await relateds.json();

    return {
      props: {
        inspiration,
        allInspirations,
      },
    };
  }

  export default InspirationDetails;
