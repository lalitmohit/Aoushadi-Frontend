import React from "react";
import "./HomeCard.css";

import Rect from "../../../../Assets/Rectangle.svg";
import { NavLink } from "react-router-dom";

const HomeCard = ({title,whereToGo,img}) => {
  return (
    <>
      <NavLink to={whereToGo}>
        <div className="Display-Card">
          <div className="Title-Card">
            <img src={Rect} alt="Rect" />
            <h1>{title}</h1>
          </div>
          <div className="Image-Card">
            <img src={img} alt="image" />
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default HomeCard;
