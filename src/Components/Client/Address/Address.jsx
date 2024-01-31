import React from "react";
import "./Address.css";
import MapComponent from "./MapApplied";
import { useState } from "react";
export default function Address() {
  const [locationused, setlocationused] = useState(false);
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  function locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setlatitude(latitude);
      setlongitude(longitude);
      alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
      setlocationused(true);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }
  return (
    <div className="cover">
      <div className="note">
        Your detailed address will help us to reach to your doorstep easily
      </div>
      <div className="flex justify-center mt-5">
        <button className="locate" onClick={locate}>
          Locate on Map
        </button>
      </div>
      {locationused ? (
        <div
          style={{
            height: 500,
            width: 500,
            overflow: "hidden",
            margin: "auto",
          }}
        >
          <MapComponent latitude={latitude} longitude={longitude} />
        </div>
      ) : (
        <div>
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
      )}
      <div className="button-below">
        <button>Back</button>
        <button>Proceed</button>
      </div>
    </div>
  );
}
