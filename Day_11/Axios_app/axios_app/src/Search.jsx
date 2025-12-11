import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div style={{ padding: "20px 0", display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "350px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default Search;
