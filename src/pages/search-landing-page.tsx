import HomePageCruiseCard from "@/components/Card/HomePageCruiseCard";
import { homeCruiseData } from "@/components/Interface/CruiseHomeDto";
import { SearchLandingData } from "@/components/Interface/FilterDto";
import PageHeading from "@/components/PageHeading";
import SearchIcon from "@/components/SearchIcon";
import { useEffect, useState } from "react";
import Select from "react-select";

const SearchLandingPage = () => {
  const options = SearchLandingData;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleStatusChange = (e) => {
    const selectedValue = e?.value;
    if (selectedValue) {
      setSelectedItem(e.value);
    } else {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    console.log("onChanged");
  }, [selectedItem]);

  return (
    <>
      <section className="p-3 lg:p-12">
        <PageHeading
          pageHeaderData={{ heading: "Search", text: "" }}
        ></PageHeading>
        <div className="text-lg mb-5">Results for - “Cruises in africa”</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-3/4">
          <div className="flex relative w-full h-10 border-cruise border items-center px-3">
            <input
              type="text"
              className="w-full transition-all duration-300 ease-in-out pl-5 lg:pl-1 bg-transparent  outline-0 rounded"
              placeholder="Type here to search..."
            />
            <div className="cursor-pointer">
              <SearchIcon />
            </div>
          </div>
          <div className="flex h-full">
            <div className="text-2xl w-32">Filter by:</div>
            <Select className="w-full"
              defaultValue={selectedItem}
              onChange={(e) => handleStatusChange(e)}
              options={options}
              isClearable={true}
              placeholder="Please select"
            />
          </div>
        </div>
      </section>
      <section className="p-4 lg:py-[10px] container mx-auto">
        <div className="card-container my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 md:gap-y-14">
          {homeCruiseData.map((cruiseElement) => (
            <HomePageCruiseCard key={cruiseElement.id} cruise={cruiseElement} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SearchLandingPage;
