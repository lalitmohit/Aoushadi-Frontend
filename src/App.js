import React, { useState, useEffect } from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import {
  Login,
  TopBar,
  SearchBar,
  User,
  Contact,
  Home,
  SideBar,
  Offer,
} from "./Import.jsx";

function App() {
  const [logined, setLogined] = useState(true);

  useEffect(() => {
  }, []);

  return (
    <Router>
      <div className="App flex">
        {logined ? (
          <>
            <div className="sideb">
              <SideBar />
            </div>
            <div className="content ">
              <TopBar username={`${logined ? "Kunal Singla" : "Sign In"}`} />
              <SearchBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="user" element={<User />} />
                <Route path="contact" element={<Contact />} />
                <Route path="offers" element={<Offer />} />
                {/* Add a default route for unmatched paths */}
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="login" element={<Login />} />
            {/* Add a default route for unmatched paths */}
            <Route path="*" element={<Login />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
