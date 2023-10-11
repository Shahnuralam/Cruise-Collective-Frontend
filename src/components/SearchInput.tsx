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
      <div className="flex relative w-full h-full">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-full transition-all duration-300 ease-in-out py-4 xl:py-3 pl-6 lg:pl-12 bg-transparent  outline-0 rounded"
          placeholder="Type here to search..."
        />
        <button className="bg-cruise h-full py-4 px-8 text-white uppercase">Search</button>
      </div>
    </form>
  );
};

export default SearchInput;
