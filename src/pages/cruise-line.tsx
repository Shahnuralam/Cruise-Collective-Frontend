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

      <div className="container mx-auto flex flex-col gap-5">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <BigLandingTitleWithIcon
        icon={ExclusiveContentIcon}
        title="Members content"
      />

      <div className="flex py-10 justify-center items-center">
        <div className="flex flex-col gap-6 max-w-[90%] container">
          <h2 className="text-center text-5xl text-[#36453b] font-serif">
            Latest content
          </h2>

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

export default CruiseLine;
