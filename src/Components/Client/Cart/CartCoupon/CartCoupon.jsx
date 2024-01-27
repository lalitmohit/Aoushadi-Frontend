import React from "react";
import { NavLink } from "react-router-dom";
import "./CartCoupon.css"

const CartCoupon = () => {
  return (
    <div className="Coupon-Card">
      <NavLink to="/offers">
        <h1>APPLY COUPON</h1>
      </NavLink>
      <div className="Apply-Card">
        <input type="text" placeholder="Enter your Code" />
        <button>APPLY</button>
      </div>
    </div>
  );
};

export default CartCoupon;
