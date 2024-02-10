import React from "react";
import "./Payment_Gateway.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Payment_Gateway() {
  const navigate = useNavigate();

  function uporder() {}
  const location = useLocation();
  const { item, address } = location.state;
  console.log(item);
  return (
    <div className="body">
      <div className="flex-col flex justify-between h-full rounded-2xl mt-10 mr-20">
        <div className="flex justify-center">
          <div className="pay">To Pay: {item.price + item.charge}</div>
        </div>
        <div className="flex justify-center">
          <div className="pay_method" onClick={uporder}>
            Pay via UPI
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pay_method">Pay via UPI</div>
        </div>
        <div className="flex justify-center">
          <div className="pay_method">Pay via UPI</div>
        </div>
        <div className="flex justify-center">
          <button className="back" onClick={() => navigate(-1)}>
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}
