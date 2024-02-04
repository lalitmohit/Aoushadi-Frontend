import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CartCoupon.css";

const CartCoupon = ({ price, changecoupon }) => {
  const [coupontext, setcoupontext] = useState("");
  const check_coupon = () => {
    console.log(coupontext, "haha");

    if (coupontext == "Aditya") {
      var a = price / 10;
      changecoupon(a);
    }
  };
  return (
    <div className="Coupon-Card">
      <NavLink to="/offers">
        <h1>APPLY COUPON</h1>
      </NavLink>
      <div className="Apply-Card">
        <input
          type="text"
          placeholder="Enter your Code"
          onChange={(event) => setcoupontext(event.target.value)}
        />
        <button onClick={check_coupon}>APPLY</button>
      </div>
    </div>
  );
};

export default CartCoupon;
