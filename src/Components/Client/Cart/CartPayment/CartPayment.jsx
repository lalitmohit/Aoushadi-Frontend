import React from "react";
import "./CartPayment.css";
import { NavLink } from "react-router-dom";

const CartPayment = ({ price, coupon, delivery }) => {
  console.log(price, coupon, delivery, "price distribution");
  let charge = 100;
  if (price == 0) {
    charge = 0;
  }
  return (
    <div className="Payment-Box">
      <div className="Total-Cart">
        <h1>{`Cart Total: ${price}`}</h1>
      </div>
      <div className="detail-box">
        <h1>Bill Summary</h1>
        <div className="amount-box">
          <h2>Total Amount</h2>
          <p>Rs. {price}</p>
        </div>
        <div className="amount-box">
          <h2>Discount on MRP.</h2>
          <p>Rs. {coupon}</p>
        </div>
        {price > 0 && (
          <div className="amount-box">
            <h2>Delivery Charges</h2>
            <p>Rs. {delivery}</p>
          </div>
        )}
        <hr />
        <div className="amount-box-2">
          <h2>Amount to be Paid</h2>
          <p>Rs. {price - coupon + charge}</p>
        </div>
        <hr />
      </div>
      {
        <div className="adress-box">
          <NavLink to="/address" state={{ price, coupon, charge }}>
            {/* <div>Add Delivery Address</div> */}
            Add Deliver Address
          </NavLink>
        </div>
      }
    </div>
  );
};

export default CartPayment;
