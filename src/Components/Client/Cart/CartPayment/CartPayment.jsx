import React from "react";
import "./CartPayment.css";

const CartPayment = () => {
  return (
    <div className="Payment-Box">
      <div className="Total-Cart">
        <h1>Cart Total: 1500</h1>
      </div>
      <div className="detail-box">
        <h1>Bill Summary</h1>
        <div className="amount-box">
          <h2>Total Amount</h2>
          <p>Rs. 1500</p>
        </div>
        <div className="amount-box">
          <h2>Discount on MRP.</h2>
          <p>Rs. 500</p>
        </div>
        <div className="amount-box">
          <h2>Delivery Charges</h2>
          <p>Rs. 50</p>
        </div>
        <hr />
        <div className="amount-box-2">
          <h2>Amount to be Paid</h2>
          <p>Rs. 1050</p>
        </div>
        <hr />
      </div>
      <div className="adress-box">
        <button>Add Delivery Address</button>
      </div>
    </div>
  );
};

export default CartPayment;
