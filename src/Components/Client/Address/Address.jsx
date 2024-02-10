import React, { useEffect } from "react";
import "./Address.css";
import MapComponent from "./MapApplied";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Address() {
  const location = useLocation();
  const item = location.state;
  const navigate = useNavigate();
  console.log(item);
  const [address_saved, set_address_saved] = useState(false);
  const [address, setaddress] = useState([]);
  const [locationused, setlocationused] = useState(false);
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [HouseNo, setHouseNo] = useState("IIT Bhilai");
  const [Road, setRoad] = useState("Hostel Kanhar");
  const [Directions, setDirections] = useState("");
  function locate() {
    console.log("adafsdf");
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
      setlocationused(true);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }
  useEffect(() => {
    setaddress({ HouseNo, Road, Directions });
  }, [HouseNo, Road, Directions]);
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
              <input
                className="text"
                placeholder="E.g. IIT Bhilai"
                defaultValue={HouseNo}
              ></input>
            </div>
            <div className="block">
              <label>Apartment/ Road/ Area</label> <br />
              <input
                className="text"
                placeholder="E.g. Hostel Kanhar"
                defaultValue={Road}
              ></input>
            </div>

            <div className="block">
              <label> Any Directions (optional)</label> <br />
              <input
                className="text"
                placeholder="E.g. Give it to the guard"
                defaultValue={Directions}
              ></input>
            </div>
          </div>
        </div>
      )}
      <div className="button-below">
        {!address_saved && (
          <button onClick={() => set_address_saved(true)}>Save as Home</button>
        )}
        <NavLink to="/payment" state={{ item, address }}>
          <button>Proceed</button>
        </NavLink>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
