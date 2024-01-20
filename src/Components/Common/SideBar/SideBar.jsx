import React from "react";
import "./SideBar.css";
import Logo from "../../../Assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="SideBar sidebar bg-sidebar-color text-white h-screen  fixed top-0 left-0 p-4">
      <div className="Logo-SideBar">
        <Link to="/">
          <img src={Logo} alt="Logo" className="Image-SideBar" />
        </Link>
      </div>
      <div className="Title-SideBar">
        <h2 className="Heading-Sidebar">Aoushadhi</h2>
      </div>
      <div className="Items-SideBar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} Items-SideBars`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} Items-SideBars`
          }
        >
          Medicines
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} Items-SideBars`
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} Items-SideBars`
          }
        >
          Offers
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ` ${isActive ? "Items-Active" : ""} Items-SideBars`
          }
        >
          Contact Us
        </NavLink>
        <span className="User-SideBar">Log Out</span>
      </div>
      <div className="Footer-SideBar">
        <p>
          Copyright Aquired By<p>@Aoushadhi</p>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
