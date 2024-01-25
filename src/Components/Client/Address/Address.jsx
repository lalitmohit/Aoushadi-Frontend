import React from "react";
import "./Address.css";
export default function Address() {
  return (
    <div className="cover">
      <div className="note">
        Your detailed address will help us to reach to your doorstep easily
      </div>
      <div className="flex justify-center mt-5">
        <button className="locate">Locate on Map</button>
      </div>
      <div className="or">OR</div>
      <div className="flex-col bg-white min-h-96 rounded-xl py-5 px-10 mt-5 flex justify-between">
        <div className="block">
          <label> House/ Flat? Block No</label> <br />
          <input className="text" placeholder="E.g. IIT Bhilai"></input>
        </div>
        <div className="block">
          <label>Apartment/ Road/ Area</label> <br />
          <input className="text" placeholder="E.g. Hostel Kanhar"></input>
        </div>

        <div className="block">
          <label> Any Directions (optional)</label> <br />
          <input
            className="text"
            placeholder="E.g. Give it to the guard"
          ></input>
        </div>
      </div>
    </div>
  );
}
