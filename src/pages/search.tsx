import { useEffect, useState } from "react";
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

  const [termsAndConditionsModalData, setTermsAndConditionsModalData] = useState(null);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ISearchDropDownInputDto | null>(options[0]);
  const [searchQuery, setSearchQuery] = useState<string>(query?.query || ""); // Set initial search query from router

  const {
    isLoading,
    data: offers,
  } = useQuery("offers?populate=deep", () => getAllOffers(), {
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const {
    data: inspirations,
  } = useQuery("inspirations?populate=deep", () => getAllInspirations(), {
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const handleSearchInputChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
  };

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
    // Listen for the popstate event (back button)
    const handlePopState = () => {
      // Rerun the logic to update the filter based on the current URL
      const filterValue = router.query.filter;
      const selectedFilter = filterValue ? (options.find((option) => option.value === filterValue) as ISearchDropDownInputDto) : null;
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

  const filterContent = (content) => {
    if (!searchQuery) {
      return content; // No search query, return all content
    }

    const lowercasedQuery = searchQuery.toLowerCase();

    // Check if the search query contains "cruiseline"
    if (lowercasedQuery.includes("cruiseline")) {
      return content.filter((item) =>
        item.attributes.title.toLowerCase().includes("cruiseline")
      );
    }

    // Default filter for other search queries
    return content.filter((item) =>
      item.attributes.title.toLowerCase().includes(lowercasedQuery)
    );
  };


  if (isLoading) return <Loading />;

  return (
    <main className="flex flex-col">
      <Head>
        <title>Search{query && ` - ${query} results`}</title>
      </Head>
      <section className="px-6  lg:px-3 mt-6 md:mt-[60px] container mx-auto pb-14">
        <PageHeading pageHeaderData={{ heading: "Search", text: "" }}></PageHeading>
        <div className="p-4  rounded-md">
          <h1 className="text-2xl font-normal  text-black">
            {searchQuery ? `Results for - “${searchQuery.charAt(0).toUpperCase()}${searchQuery.slice(1)}”` : ''}
          </h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-3/4">
          
          <div className="flex relative w-full h-10 border-cruise border items-center px-3">
            <input
              type="search"
              className="w-full transition-all duration-300 ease-in-out pl-5 lg:pl-1 bg-transparent outline-0 rounded"
              placeholder="Type here to search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
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
          filterContent(offers?.data)?.map((card) => (
            <OfferCard
              key={card.id}
              offer={card}
              setOpenLoginModal={setOpenLoginModal}
            ></OfferCard>
          ))}

        {(selectedItem as ISearchDropDownInputDto)?.id === 2 &&
          filterContent(offers?.data?.filter((e) => e?.attributes?.is_featured))?.map((card) => (
            <OfferCard
              key={card.id}
              offer={card}
              setOpenLoginModal={setOpenLoginModal}
            ></OfferCard>
          ))}
        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {(selectedItem as ISearchDropDownInputDto)?.id === 3 &&
            filterContent(inspirations?.data)?.map((card) => (
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