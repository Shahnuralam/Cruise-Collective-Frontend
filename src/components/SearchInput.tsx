import React from "react";
import SearchIcon from "@/assets/svg/search.svg";

const SearchInput = () => {
  const [search, setSearch] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/search?query=${search}`;
  };

  return (
    <form
      className="flex w-full h-full justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex relative w-full">
        {/* <div className="absolute top-1/2 -translate-y-1/2">
          <SearchIcon viewBox="0 0 48 48" width={24} height={24} />
        </div> */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-full transition-all duration-300 ease-in-out py-4 xl:py-3 pl-12 bg-transparent  outline-0 rounded"
          placeholder="Type here to search..."
        />
        <button className="bg-cruise py-3 px-8 text-white">Search</button>
      </div>
    </form>
  );
};

export default SearchInput;
