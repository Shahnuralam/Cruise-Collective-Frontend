// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { contentLandingPageBreadcrumb } from "@/containers/ContentLanding";
import { Breadcrumb } from "@/containers/atoms";
import { IFeatureSliderItem } from "@/containers/atoms/FeatureSlider";
import { IContent } from "@/queries/content/content";
import { NextPage } from "next";
import Head from "next/head";
import Item from "@/components/Item";
import { cruiseLineItemData } from "@/components/CruiseLine/data";
import { useEffect, useState } from "react";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import DataLoadingFinishedText from "@/components/DataLoadingFinishedText";

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
  const [termsAndConditionsModalData, setTermsAndConditionsModalData] =
    useState(null);

  const [cards, setCards] = useState(cruiseLineItemData.slice(0, 10)); // Initial cards
  const [loading, setLoading] = useState(false);
  const [isDataLoadingFinished, setIsDataLoadingFinished] =
    useState<boolean>(false);

  const loadMoreCards = () => {
    setLoading(true);
    setTimeout(() => {
      // data fetching logic
      const startIndex = cards.length;
      const endIndex = startIndex + 10; //"Load more" when there are 10 items, and increase the count by 10 when needed.
      const newCards = cruiseLineItemData.slice(startIndex, endIndex);
      setCards([...cards, ...newCards]);
      setLoading(false);
    }, 1500);
  };

  // Attach scroll event listener to load more cards when reaching the bottom
  useEffect(() => {
    const footerHeight = document.getElementById("footerId").offsetHeight;
    const handleScroll = () => {
      if (
        window.innerHeight +
          document.documentElement.scrollTop +
          footerHeight -
          80 >=
        document.documentElement.offsetHeight
      ) {
        if (cards.length === cruiseLineItemData.length) {
          setIsDataLoadingFinished(true);
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

      {isDataLoadingFinished && (
        <DataLoadingFinishedText text="All cruises loaded" />
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
