import React from "react";
import "./Adver.css";
import Family from "../../../Assets/Family.svg";
// import {Link} from 'react-router-dom'
import { Link, NavLink } from "react-router-dom";

const Adver = () => {
  return (
    <>
      <div className="Adv-Box">
        <div className="Content-Box">
          <p>#For First order only</p>
          <h1>Mega Welcome Deal</h1>
        </div>
        <div className="Announcment-Box">
          <div className="Deal-Box">
            {/* <p>Place Your First Order</p> */}
            <h1>Flat 25% off on Aoushadhi </h1>
          </div>
          <div className="Button-Box">
            <NavLink to="/offers">See More Offers</NavLink>
          </div>
        </div>
        <div className="Image-Box">
          <img src={Family} alt="Advertisment" />
        </div>
      </div>
    </>
  );
};

export default Adver;
