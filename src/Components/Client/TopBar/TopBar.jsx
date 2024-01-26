import React from "react";
import Account from "../../../Assets/Account.svg";
import "./TopBar.css";
import { NavLink } from "react-router-dom";

import {  useLocation } from "react-router-dom";

const TopBar = ({ username }) => {
  const location = useLocation();

  const isUserActive = location.pathname === "/user";
  
  return (
    <>
      {!isUserActive && (
        <div className="TopBar">
          <div className="Image-TopBar">
            <NavLink to="/user">
              <img src={Account} alt="Account" />
            </NavLink>
            <p>{username}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
