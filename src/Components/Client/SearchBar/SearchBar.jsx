import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./SearchBar.css";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  function search() {
    navigate("medicine", { state: item });
    console.log(item);
  }
  const location = useLocation();

  const [item, setitem] = useState("");
  const isUserActive = location.pathname === "/user";
  const isCartActive = location.pathname === "/cart";

  return (
    <>
      {!(isUserActive || isCartActive) && (
        <div className="Box-SearchBar">
          <div className="SearchBar">
            <input
              type="text"
              placeholder="Search Your Medicine"
              onChange={(event) => setitem(event.target.value)}
            />
            <div className="Search-Icon">
              <IoSearchSharp onClick={search} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
