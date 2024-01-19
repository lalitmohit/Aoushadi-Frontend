import React from "react";
import "./User.css";
import Account from "../../../Assets/Account.svg";

const User = () => {
  return (
    <div className="User">
      <div className="User-Box">
        <div className="Image-User">
          <img src={Account} alt="Account" />
        </div>
        <div className="Details-User">
          <div className="Detail-Div">
            <div className="Name-User">Kunal Singla</div>
            <div className="Id-User">12140960</div>
          </div>
          <div className="Detail-User"> +91 79732-03702</div>
          <div className="Detail-User">kunalsingla@iitbhilai.ac.in</div>
          <div className="Detail-User">G-326,Hostel Kanhar, IIT Bhilai</div>
        </div>
        <div className="Button-User">
          <button>Update Details</button>
          <button>Update Password</button>
        </div>
      </div>
    </div>
  );
};

export default User;
