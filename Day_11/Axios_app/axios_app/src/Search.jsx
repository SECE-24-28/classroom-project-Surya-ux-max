import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="searchBox">
      <input
        type="text"
        value={search}
        placeholder="Search feedback..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
