import React from "react";
import "./SideBar.css";
import Logo from "../../../Assets/Logo.svg";

const SideBar = () => {
  return (
    <div className="SideBar sidebar bg-sidebar-color text-white h-screen  fixed top-0 left-0 p-4">
      <div className="Logo-SideBar">
        <img src={Logo} alt="Logo" className="Image-SideBar" />
      </div>
      <div className="Title-SideBar">
        <h2 className="Heading-Sidebar">Aoushadhi</h2>
      </div>
      <div className="Items-SideBar">
        <a>Home</a>
        <a>Medicines</a>
        <a>Cart</a>
        <a>Offers</a>
        <a>Contact Us</a>
        <span className="User-SideBar">Sign In /Sign Up</span>
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
