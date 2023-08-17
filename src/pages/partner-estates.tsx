// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import SunnyDayIcon from "@/assets/svg/heading-icons/sunny-day.svg";
import { partnerEstatesBreadCrumb } from "@/containers/PartnerEstates";
import { BigLandingTitleWithIcon, Breadcrumb } from "@/containers/atoms";
import FeatureSlider, {
  IFeatureSliderItem,
} from "@/containers/atoms/FeatureSlider";
import { getEstates } from "../queries/index";
import { IContent } from "@/queries/content/content";
import Head from "next/head";
import { mapFeatureSliderFromExclusiveContent } from "./all-offers";
import { ContentNormal } from "@/containers/ContentLanding/Content.Normal";

// need to use in the utils - repeated code
function getAllContent(contents: IContent): IFeatureSliderItem[] {
  const contentsSortedByDateDescendingOrder: IContent[] = contents.sort(
    (a, b) => {
      const firstDate: DateTime = new Date(a.createdAt);
      const secondDate: DateTime = new Date(b.createdAt);
      return secondDate - firstDate;
    }
  );

  return (
    mapFeatureSliderFromExclusiveContent(contentsSortedByDateDescendingOrder) ??
    []
  );
}

const PartnerEstatesPage = ({ estates }) => {
  const allContent = getAllContent(estates);

  // get last 3 estates
  const lastThreeEstates = allContent.slice(0, 3);

  const featureSliderItems: IFeatureSliderItem[] = allContent.filter(
    (content) => content.featured
  );

  console.log("featureSliderItems", featureSliderItems);

  const allContentWithoutFeatureSliderItems: IFeatureSliderItem[] =
    allContent.filter((content) => !lastThreeEstates.includes(content));

  return (
    <main className="flex flex-col">
      <Head>
        <title>Partner Gardens</title>
      </Head>
      {/** Breadcrumb */}
      <div className="flex justify-center items-center py-4">
        <div className="container w-[90%] lg:w-full">
          <Breadcrumb items={partnerEstatesBreadCrumb} />
        </div>
      </div>

      {/***/}
      <BigLandingTitleWithIcon
        icon={SunnyDayIcon}
        title="Explore our partner gardens"
      />

      {estates.length > 0 && (
        <FeatureSlider
          sliderItems={lastThreeEstates}
          title="Featured partner gardens"
        />
      )}
      <div className="flex py-10 justify-center items-center">
        <div className="flex flex-col gap-6 max-w-[90%] container">
          <h2 className="text-center text-5xl text-[#36453b] font-serif">
            Latest partner gardens
          </h2>

          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 lg:grid grid-cols-3">
              {allContentWithoutFeatureSliderItems &&
                allContentWithoutFeatureSliderItems.map(
                  (currentContent, idx) => (
                    <ContentNormal
                      key={idx}
                      featureSlider={currentContent}
                      link={`partner-estates/${currentContent.id}`}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps = async () => {
  const { data: estates } = await getEstates();

  return {
    props: {
      estates,
      revalidate: 1,
    },
  };
};

export default PartnerEstatesPage;
