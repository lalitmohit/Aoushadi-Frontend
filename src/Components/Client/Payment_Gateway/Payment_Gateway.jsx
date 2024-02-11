import React from "react";
import "./Payment_Gateway.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Payment_Gateway() {
  const navigate = useNavigate();

  async function uporder(e) {
    e.preventDefault();
    const baseurl = "https://stirred-simply-stud.ngrok-free.app";
    try {
      const userId = localStorage.getItem("userId");
      const dt = new Date();
      const txnid = 'TX' + dt.getFullYear() + (dt.getMonth() + 1) + dt.getDate() + Date.now();
      // Temporary need to generate from user
      const muid = 'MUID' + Math.floor(Math.random(3) * 1000) + Date.now();
      const data = {
        amount: item.price + item.charge,
        transactionId: txnid,
        merchantUserId: muid,
        userId: userId
      };
      const response = await axios.post(`${baseurl}/pay`, data);
      console.log(response);
      if (response.status === 200 && response.data.success) {
        window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
        // navigate(response.data.data.instrumentResponse.redirectInfo.url)
        //window.open(response.data.data.instrumentResponse.redirectInfo.url);
      } else {
        //window.open(response);
      }
    } catch (err) {
      return;
    }
  }

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
            Pay
          </div>
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
