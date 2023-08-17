// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import ExclusiveContentIcon from "@/assets/svg/heading-icons/exclusive-content.svg";
import {
  ContentBig,
  ContentNormal,
  Paginate,
  contentLandingPageBreadcrumb,
} from "@/containers/ContentLanding";
import { BigLandingTitleWithIcon, Breadcrumb } from "@/containers/atoms";
import FeatureSlider, {
  IFeatureSliderItem,
} from "@/containers/atoms/FeatureSlider";
import { IContent } from "@/queries/content/content";
import { getContents } from "@/queries/content/index";
import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import { Loading } from "@/components/Loading";
import { offersPageBreadcrumb } from "@/containers/Offers";

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
      featured: content?.attributes?.featured,
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

const AllOfers: NextPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: "data",
    queryFn: () => getContents("offer"),
  });

  if (error) return <div>Failed to load offers</div>;
  if (isLoading) return <Loading />;

  if (!isLoading && data?.data.length === 0)
    return (
      <>
        <Head>
          <title>Offers - All</title>
        </Head>
        <div className="flex m-5">
          <p className="mx-auto ml-auto">There are no exclusive contents</p>
        </div>
      </>
    );

  const exclusiveContentsRaw =
    data?.data?.filter((content) => content?.attributes?.exclusive) ?? [];

  const exclusiveContents =
    mapFeatureSliderFromExclusiveContent(exclusiveContentsRaw);

  const allContent = getAllContent(data?.data);
  const lastThreeContents = allContent.slice(0, 3);
  const featuredContent = allContent
    .filter((content) => content?.featured)
    .slice(0, 2);

  return (
    <main className="flex flex-col">
      <Head>
        <title>Offers - All</title>
      </Head>
      {/** Breadcrumb */}
      <div className="flex justify-center items-center py-4">
        <div className="container w-[90%] lg:w-full">
          <Breadcrumb items={offersPageBreadcrumb} />
        </div>
      </div>

      <BigLandingTitleWithIcon icon={ExclusiveContentIcon} title="All Offers" />

      <FeatureSlider sliderItems={exclusiveContents} />

      <div className="flex py-10 justify-center items-center">
        <div className="flex flex-col gap-6 max-w-[90%] container">
          {/* <h2 className="text-center text-5xl text-[#36453b] font-serif">
            Latest offers
          </h2> */}

          <div className="flex flex-col gap-11">
            {/** 3 cols */}
            {/* <div className="flex flex-col gap-5 lg:grid grid-cols-3">
              {lastThreeContents &&
                lastThreeContents.map((latestContent, idx) => (
                  <ContentNormal
                    key={idx}
                    featureSlider={latestContent}
                    link={`discover/${latestContent.id}`}
                  />
                ))}
            </div> */}
            {featuredContent.length > 0 &&
              featuredContent.map((featuredContent, idx) => (
                <div className="flex flex-col gap-5 lg:grid grid-cols-2">
                  <ContentBig key={idx} featuredItem={featuredContent} />
                </div>
              ))}
            <div className="flex flex-col gap-5 lg:grid grid-cols-3">
              {allContent &&
                allContent.map((currentContent, idx) => (
                  <ContentNormal
                    key={idx}
                    featureSlider={currentContent}
                    link={`offers/${currentContent.id}`}
                  />
                ))}
            </div>

            {/** TODO: implement pagination */}
            {/*<Paginate*/}
            {/*    onPageChange={(selectedPage) =>*/}
            {/*        console.log("Sayfa değişti, aktif sayfa:", selectedPage)*/}
            {/*    }*/}
            {/*/>*/}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllOfers;
