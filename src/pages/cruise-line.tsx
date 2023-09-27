// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import ExclusiveContentIcon from "@/assets/svg/heading-icons/exclusive-content.svg";
import {
  Paginate,
  contentLandingPageBreadcrumb,
} from "@/containers/ContentLanding";
import { BigLandingTitleWithIcon, Breadcrumb } from "@/containers/atoms";
import FeatureSlider, {
  IFeatureSliderItem,
} from "@/containers/atoms/FeatureSlider";
import { IContent } from "@/queries/content/content";
import { NextPage } from "next";
import Head from "next/head";
import Item from "@/components/Item";
import { cruiseLineItemData } from "@/components/CruiseLine/data";
import { useEffect, useState } from "react";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import StrokeLine from "@/components/StrokeLine";

export function mapFeatureSliderFromExclusiveContent(
  contents: IContent[]
): IFeatureSliderItem[] {
  let featureSliderItems: IFeatureSliderItem[] = [];
  contents.map((content) => {
    featureSliderItems.push({
      id: content.id,
      name: content?.attributes.name,
      description: content?.attributes?.description,
      content_type: content?.attributes?.content_type?.data?.attributes?.name,
      estate_fields: content?.attributes?.estate_fields,
      images: {
        data: content?.attributes?.images?.data,
        alt: content?.attributes?.images?.alt || "Alt tag not implemented",
        url: content?.attributes?.images?.data?.[0]?.attributes?.url,
      },
    });
  });
  return featureSliderItems;
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

const CruiseLine: NextPage = () => {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: "data",
  //   queryFn: () => getContents(),
  // });

  // if (error) return <div>Failed to load exclusive content</div>;
  // if (isLoading) return <Loading />;

  // if (!isLoading && data?.data.length === 0)
  //   return (
  //     <>
  //       <Head>
  //         <title>Exclusive Contents</title>
  //       </Head>
  //       <div className="flex m-5">
  //         <p className="mx-auto ml-auto">There are no contents</p>
  //       </div>
  //     </>
  //   );

  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState(null);

  const [cards, setCards] = useState(cruiseLineItemData.slice(0, 10)); // Initial cards
  const [loading, setLoading] = useState(false);
  const [isDataLoadedFinished, setIsDataLoadedFinished] =
    useState<boolean>(false);

  const loadMoreCards = () => {
    setLoading(true);

    // data fetching logic
    const startIndex = cards.length;
    const endIndex = startIndex + 10; //"Load more" when there are 10 items, and increase the count by 10 when needed.
    const newCards = cruiseLineItemData.slice(startIndex, endIndex);
    setCards([...cards, ...newCards]);
    setLoading(false);
  };

  // Attach scroll event listener to load more cards when reaching the bottom
  useEffect(() => {
    const footerHeight = document.getElementById("footerId").offsetHeight;
    const handleScroll = () => {
      // console.log(footerHeight);
      console.log(
        window.innerHeight + document.documentElement.scrollTop + footerHeight
      );
      console.log(document.documentElement.offsetHeight);
      if (
        window.innerHeight +
          document.documentElement.scrollTop +
          footerHeight -
          20 >=
        document.documentElement.offsetHeight
      ) {
        if (cards.length === cruiseLineItemData.length) {
          setIsDataLoadedFinished(true);
        } else {
          loadMoreCards();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cards]);

  return (
    <main className="flex flex-col">
      <Head>
        <title>Cruise Line</title>
      </Head>
      {/** Breadcrumb */}
      <div className="flex justify-center items-center py-4">
        <div className="container w-[90%] lg:w-full">
          <Breadcrumb items={contentLandingPageBreadcrumb} />
        </div>
      </div>

      <div className="container mx-auto flex flex-col">
        {cards.length &&
          cards.map((card, indx) => (
            <Item
              key={indx}
              cruiseLineItem={card}
              termsAndConditionsModalData={termsAndConditionsModalData}
              setTermsAndConditionsModalData={setTermsAndConditionsModalData}
              index={indx}
            ></Item>
          ))}
      </div>
      <div className="container mx-auto py-3">
        {loading && <p className="text-sm">Loading...</p>}
      </div>

      {isDataLoadedFinished && (
        <div className="flex flex-col items-center mb-6">
          <h4 className="text-4xl">All cruises loaded</h4>
          <div className="pt-3">
            <StrokeLine />
          </div>
        </div>
      )}

      {/* Terms and conditions modal based on cruise line item */}

      {termsAndConditionsModalData && (
        <TermsAndConditionsCruiseLineModal
          termsAndConditionsModalData={termsAndConditionsModalData}
          setTermsAndConditionsModalData={setTermsAndConditionsModalData}
        ></TermsAndConditionsCruiseLineModal>
      )}
    </main>
  );
};

export default CruiseLine;
