import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./SearchBar.css";
import {  useLocation } from "react-router-dom";

const SearchBar = () => {
  const location = useLocation();

  const isUserActive = location.pathname === "/user";

  return (
    <>
      {!isUserActive && (
        <div className="Box-SearchBar">
          <div className="SearchBar">
            <input type="text" placeholder="Search Your Medicine" />
            <div className="Search-Icon">
              <IoSearchSharp />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
