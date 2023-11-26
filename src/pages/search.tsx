import { useEffect, useState } from "react";
import { getSearch } from "@/queries/content/index";
import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import { Loading } from "@/components/Loading";
import { useRouter } from "next/router";
import PageHeading from "@/components/PageHeading";
import SearchIcon from "@/components/SearchIcon";
import Select from "react-select";
import { getAllOffers } from "@/queries/offers";
import OfferCard from "@/components/Card/OfferCard";
import TermsAndConditionsCruiseLineModal from "@/components/Modal/TermsAndConditionsCruiseLineModal";
import LoginModal from "@/components/Modal/LoginModal";
import { ISearchDropDownInputDto, SearchLandingData } from "@/Interface/Dto";
import { getAllInspirations } from "@/queries/inspiration";
import InspirationCard from "@/components/Card/InspirationCard";
const options = SearchLandingData;



const SearchPage: NextPage = () => {
  const router = useRouter();
  const query: any = router.query;
  const [allContent, setAllContent] = useState([]);
  const [termsAndConditionsModalData, setTermsAndConditionsModalData] = useState(null);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ISearchDropDownInputDto | null>(null);

  const { isLoading, data: offers, refetch } = useQuery("offers?populate=deep", () => getAllOffers(), {
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const { isLoading: isLoadingInspirations, data: inspirations, refetch: refetchInspiration } = useQuery(
    "inspirations?populate=deep",
    () => getAllInspirations(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  const handleStatusChange = (e) => {
    if (e) {
      setSelectedItem(e);
      updateUrlFilter(e.value);
    } else {
      setSelectedItem(null); // Set to null instead of an empty object
      updateUrlFilter(null);
    }
  };
  

  const updateUrlFilter = (filterValue) => {
    const currentQuery = { ...router.query }; // Copy the current query
    if (filterValue) {
      currentQuery.filter = filterValue;
    } else {
      delete currentQuery.filter; // Remove filter from the query
    }
  
    const newUrl = {
      pathname: window.location.pathname,
      query: currentQuery,
    };
  
    router.push(newUrl, undefined, { shallow: true });
  };
  

  useEffect(() => {
    // Parse the query string to get the filter value
    const urlParams = new URLSearchParams(window.location.search);
    const filterValue = urlParams.get("filter");

    // If a filter value exists, apply it
    if (filterValue) {
      const selectedFilter = options.find((option) => option.value === filterValue);
      setSelectedItem(selectedFilter);
    }
  }, []);

  useEffect(() => {
    // Listen for the popstate event (back button)
    const handlePopState = () => {
      // Rerun the logic to update the filter based on the current URL
      const filterValue = router.query.filter;
      const selectedFilter = filterValue ? options.find((option) => option.value === filterValue) : null;
      setSelectedItem(selectedFilter);
    };
  
    window.addEventListener("popstate", handlePopState);
  
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router.query]);
  

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // This message is optional and will be shown in the confirmation dialog
      const confirmationMessage = "Are you sure you want to leave?";
  
      // Show the confirmation dialog
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  

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

      {/* <SearchLandingPage /> */}

      <section className="px-6 lg:px-3 mt-6 md:mt-[60px] container mx-auto pb-14">
        <PageHeading
          pageHeaderData={{ heading: "Search", text: "" }}
        ></PageHeading>
        {/* <div className="text-lg mb-5">Results for - “Cruises in africa”</div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-3/4">
          <div className="flex relative w-full h-10 border-cruise border items-center px-3">
            <input
              type="text"
              className="w-full transition-all duration-300 ease-in-out pl-5 lg:pl-1 bg-transparent outline-0 rounded"
              placeholder="Type here to search..."
            />
            <div className="cursor-pointer">
              <SearchIcon />
            </div>
          </div>
          <div className="flex h-full">
            <div className="text-2xl w-32">Filter by:</div>
            <Select
            key={selectedItem?.value}
              className="w-full basic-multi-select"
              defaultValue={selectedItem}
              onChange={(e) => handleStatusChange(e)}
              options={options}
              isClearable={true}
              placeholder="Please select"
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-3 mt-6 md:mt-[60px] container mx-auto pb-14">
        {(selectedItem as ISearchDropDownInputDto)?.id === 1 &&
          offers?.data?.map((card) => (
            <OfferCard
              key={card.id}
              offer={card}
              termsAndConditionsModalData={termsAndConditionsModalData}
              setTermsAndConditionsModalData={setTermsAndConditionsModalData}
              setOpenLoginModal={setOpenLoginModal}
              source="search"
            ></OfferCard>
          ))}

        {(selectedItem as ISearchDropDownInputDto)?.id === 2 &&
          offers?.data
            ?.filter((e) => e?.attributes?.is_featured)
            .map((card) => (
              <OfferCard
                key={card.id}
                offer={card}
                termsAndConditionsModalData={termsAndConditionsModalData}
                setTermsAndConditionsModalData={setTermsAndConditionsModalData}
                setOpenLoginModal={setOpenLoginModal}
                source="search"
              ></OfferCard>
            ))}
        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {(selectedItem as ISearchDropDownInputDto)?.id === 3 &&
            inspirations?.data?.map((card) => (
              <InspirationCard key={card.id} inspiration={card} />
            ))}
        </div>
      </section>

      {termsAndConditionsModalData && (
        <TermsAndConditionsCruiseLineModal
          termsAndConditionsModalData={termsAndConditionsModalData}
          setTermsAndConditionsModalData={setTermsAndConditionsModalData}
        ></TermsAndConditionsCruiseLineModal>
      )}

      {openLoginModal && (
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
    </main>
  );
};

export default SearchPage;
