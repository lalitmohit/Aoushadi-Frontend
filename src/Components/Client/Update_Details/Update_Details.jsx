import React, { useState } from "react";
import Account from "../../../Assets/Account.svg";
import "./Update_Details.css";
import { useLocation } from "react-router-dom";
export default function Update_Details() {
  const location = useLocation();
  const [details, setdetails] = useState(true);
  const [password, setpassword] = useState(false);
  const [settings, setsettings] = useState(false);

  // Now you can access the props like this:
  const { usersname, usersid, usersphone, usersemail, usersaddres } =
    location.state;
  const [username, setusername] = useState(usersname);
  const [userid, setuserid] = useState(usersid);
  const [userphone, setuserphone] = useState(usersphone);
  const [useremail, setuseremail] = useState(usersemail);
  const [useraddres, setuseraddress] = useState(usersaddres);
  // Now you can access the props like this:
  const { userspassword } = location.state;
  const [userpassword, setuserpassword] = useState(userspassword);
  function setvalue() {
    console.log(userpassword);
  }

  function setvalue() {
    console.log(username);
  }
  return (
    <>
      <div className="User">
        <div class="radio-inputs">
          <label class="radio">
            <input type="radio" name="radio" defaultChecked />
            <span
              class="name"
              onClick={() => (
                setdetails(true), setpassword(false), setsettings(false)
              )}
            >
              Update Details
            </span>
          </label>
          <label class="radio">
            <input type="radio" name="radio" />
            <span
              class="name"
              onClick={() => (
                setdetails(false), setpassword(true), setsettings(false)
              )}
            >
              Update Password
            </span>
          </label>

          <label class="radio">
            <input type="radio" name="radio" />
            <span
              class="name"
              onClick={() => (
                setdetails(false), setpassword(false), setsettings(true)
              )}
            >
              Settings
            </span>
          </label>
        </div>
        <div className="user-box-container">
          <div className="User-Box">
            <div className="Image-User">
              <img src={Account} alt="Account" />
            </div>
            {details && (
              <div>
                <div className="Details-User">
                  <div className="Update">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="Name-User"
                      value={username}
                      onChange={(event) => setusername(event.target.value)}
                    />
                  </div>
                  <div className="Update">
                    <label>Id:</label>
                    <input
                      className="Id-User"
                      value={userid}
                      onChange={(event) => setuserid(event.target.value)}
                    />
                  </div>
                  <div className="Update">
                    <label>Phone:</label>
                    <input
                      className="Detail-User"
                      value={userphone}
                      onChange={(event) => setuserphone(event.target.value)}
                    />
                  </div>
                  <div className="Update">
                    <label>Email:</label>
                    <input
                      className="Detail-User"
                      value={useremail}
                      onChange={(event) => setuseremail(event.target.value)}
                    />
                  </div>
                  <div className="Update">
                    <label>Address:</label>
                    <input
                      className="Detail-User"
                      value={useraddres}
                      onChange={(event) => setuseraddress(event.target.value)}
                    />
                  </div>
                </div>
                <div className="Button-Users">
                  <button onClick={setvalue}>Update Detail</button>
                  <button>Discard</button>
                </div>
              </div>
            )}
            {password && (
              <div>
                <div className="Details-User">
                  <div className="Update">
                    <label>Password</label>
                    <input
                      type="text"
                      className="Name-User"
                      value={userpassword}
                      onChange={(event) => setuserpassword(event.target.value)}
                    />
                  </div>
                  <div className="Update">
                    <label>Confirm Password</label>
                    <input
                      type="text"
                      className="Name-User"
                      value={userpassword}
                      onChange={(event) => setuserpassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className="Button-Users">
                  <button onClick={setvalue}>Update Pasword</button>
                  <button>Discard</button>
                </div>
              </div>
            )}
            {settings && (
              <div className="Button-Users">
                <button>Log Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
