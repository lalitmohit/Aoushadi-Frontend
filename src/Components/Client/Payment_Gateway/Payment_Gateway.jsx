import React from "react";
import "./Payment_Gateway.css";
export default function Payment_Gateway() {
  return (
    <div className="body">
      <div className="flex-col flex justify-between h-full rounded-2xl mt-10 mr-20">
        <div className="flex justify-center">
          <div className="pay">To Pay: 1000</div>
        </div>
        <div className="flex justify-center">
          <div className="pay_method">Pay via UPI</div>
        </div>
        <div className="flex justify-center">
          <div className="pay_method">Pay via UPI</div>
        </div>
        <div className="flex justify-center">
          <div className="pay_method">Pay via UPI</div>
        </div>
        <div className="flex justify-center">
          <button className="back">Back</button>
        </div>
      </div>
    </div>
  );
}
