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
      className="flex w-full xl:w-fit h-full justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex relative w-full xl:w-fit">
        <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#36453b]">
          <SearchIcon viewBox="0 0 48 48" width={16} height={16} />
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-full transition-all duration-300 ease-in-out placeholder:text-[#36453b] text-[#36453b] py-4 xl:py-3 px-4 pl-10 bg-transparent hover:bg-[#c7d1a3] focus:bg-[#c7d1a3] border hover:border-[#c7d1a3] hover:border-opacity-[15%] xl:border-[#c7d1a3] xl:border-opacity-[15%] hover:bg-opacity-[15%] focus:bg-opacity-[15%] outline-0 rounded"
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default SearchInput;
