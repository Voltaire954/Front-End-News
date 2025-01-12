import React from "react";
import { useState } from "react";

const Searchbar = ({ query, setQuery}) => {


  return (
    <div
      className="search-bar"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "",
      }}
    >
      <input
        style={{
          borderWidth: "1px 1px 1px 1px",
          borderRadius: "10px",
          width: "30%",
          fontSize: "20px",
          padding: "1%",
        }}
        placeholder="Search"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;

// <div>
// <TextField
//   style={{
//     padding: "40px",
//     width: "100%",
//     display: "flex",
//     justifyContent:"center",
//   }}
//   required
//   id="outlined-required"
//   label="search"
//   value={query}
//   onChange={(e) => setQuery(e.target.value)}
// />
// </div>
