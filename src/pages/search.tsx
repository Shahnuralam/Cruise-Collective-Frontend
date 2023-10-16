// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import ExclusiveContentIcon from "@/assets/svg/heading-icons/exclusive-content.svg";
import { ContentNormal2 } from "@/containers/ContentLanding";
import { BigLandingTitleWithIcon, Breadcrumb } from "@/containers/atoms";
import { useEffect, useState } from "react";
import { getSearch } from "@/queries/content/index";
import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import { Loading } from "@/components/Loading";
import { searchPageBreadcrumb } from "@/containers/Offers";
import { useRouter } from "next/router";
import PageHeading from "@/components/PageHeading";
import SearchLandingPage from "./search-landing-page";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [allContent, setAllContent] = useState([]);

  const { isLoading, data, refetch } = useQuery(
    "search",
    () => getSearch(query),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (query) refetch();
  }, [query]);

  useEffect(() => {
    if (data) setAllContent(data?.data);
  }, [data]);

  if (isLoading) return <Loading />;

  const totalContent = allContent?.length;

  return (
    <main className="flex flex-col">
      <Head>
        <title>Search{query && ` - ${query} results`}</title>
      </Head>
      {/** Breadcrumb */}
      {/* <div className="flex justify-center items-center py-4">
        <div className="container w-[90%] lg:w-full">
          <Breadcrumb items={searchPageBreadcrumb} />
        </div>
      </div>

      <BigLandingTitleWithIcon
        icon={ExclusiveContentIcon}
        title={`Search results for "${query}"`}
      />

      <div className="flex py-10 justify-center items-center">
        <div className="flex flex-col gap-6 max-w-[90%] container">
          {totalContent === 0 && (
            <h4 className="text-center">No results found for "{query}"</h4>
          )}
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 lg:grid grid-cols-3">
              {!isLoading &&
                allContent.map((currentContent, idx) => (
                  <ContentNormal2 key={idx} data={currentContent} />
                ))}
            </div>
          </div>
        </div>
      </div> */}

      <SearchLandingPage />
 
    </main>
  );
};

export default SearchPage;
