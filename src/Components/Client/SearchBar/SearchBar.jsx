import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="Box-SearchBar">
      <div className="SearchBar">
        <input type="text" placeholder="Search Your Medicine" />
        <div className="Search-Icon">
          <IoSearchSharp />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
