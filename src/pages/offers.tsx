// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { NextPage } from "next";
import {
  BigLandingTitleWithIcon,
  Breadcrumb,
  TextAndActionBtnSection,
} from "@/containers/atoms";
import { offersPageBreadcrumb } from "@/containers/Offers";
import SunnyDayIcon from "@/assets/svg/heading-icons/sunny-day.svg";
import FeatureSlider, {
  IFeatureSliderItem,
} from "@/containers/atoms/FeatureSlider";
import Head from "next/head";
import { getOffers } from "@/queries";
import { mapFeaturedSlider } from "@/helpers/content";
import { ContentNormal } from "@/containers/ContentLanding";
import { mapFeatureSliderFromExclusiveContent } from "./all-offers";
import { IContent } from "@/queries/content/content";

interface Props {
  offers: any;
}
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

const OffersPage: NextPage<Props> = ({ offers }) => {
  const allContent = getAllContent(offers);

  // filter out the featured content
  const featureSliderItems: IFeatureSliderItem[] = allContent.filter(
    (content) => content.featured
  );

  // if featureSliderItems included in allContent, remove it
  const allContentWithoutFeatureSliderItems: IFeatureSliderItem[] =
    allContent.filter((content) => !featureSliderItems.includes(content));

  return (
    <main className="flex flex-col">
      <Head>
        <title>Offers</title>
      </Head>
      {/** Breadcrumb */}
      <div className="flex justify-center items-center py-4">
        <div className="container w-[90%] lg:w-full">
          <Breadcrumb items={offersPageBreadcrumb} />
        </div>
      </div>

      <BigLandingTitleWithIcon icon={SunnyDayIcon} title="Featured offers" />

      {featureSliderItems.length > 0 && (
        <FeatureSlider sliderItems={featureSliderItems} />
      )}
      <div className="flex py-10 justify-center items-center">
        <div className="flex flex-col gap-6 max-w-[90%] container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 lg:grid grid-cols-3">
              {allContentWithoutFeatureSliderItems &&
                allContentWithoutFeatureSliderItems.map(
                  (currentContent, idx) => (
                    <ContentNormal
                      key={idx}
                      featureSlider={currentContent}
                      link={`offers/${currentContent.id}`}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
      {/* <OfferList items={offerListData} /> */}
    </main>
  );
};

export const getStaticProps = async () => {
  const { data: offers } = await getOffers();

  return {
    props: {
      offers,
      revalidate: 1,
    },
  };
};

export default OffersPage;
