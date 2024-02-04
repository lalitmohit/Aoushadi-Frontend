import React, { useState } from "react";
import Account from "../../../Assets/Account.svg";
import "./Update_Details.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Update_Details() {
  const location = useLocation();
  const [details, setdetails] = useState(true);
  const [password, setpassword] = useState(false);
  const [settings, setsettings] = useState(false);

  // Now you can access the props like this:
  const { usersname, usersid, usersphone, usersemail, usersaddres } =
    location.state;
  const [username, setusername] = useState(usersname);
  // const [userid, setuserid] = useState(usersid);
  const [userphone, setuserphone] = useState(usersphone);
  const [useremail, setuseremail] = useState(usersemail);
  const [useraddres, setuseraddress] = useState(usersaddres);
  // Now you can access the props like this:
  const { userspassword } = location.state;
  // console.log(location)
  const [userpassword, setuserpassword] = useState(userspassword);
  const [confirm_password,set_confirm_password] = useState("")
  // function setvalue() {
  //   console.log(userpassword);
  // }

  // function setvalue() {
  //   console.log(username);
  // }
  const userId = localStorage.getItem('userId')
  const user_update = async(req,res)=>{
    const response = await axios.put("http://localhost:4000/user_update", {
        userId:userId,mobile:userphone,email:useremail
    });
    // const data = response.data;
    console.log(response.data);

  }

  const password_update = async(req,res)=>{
    if (userpassword=== confirm_password){
      const response = await axios.put("http://localhost:4000/password_update", {
      userId:userId,new_password:userpassword
    });
    console.log(response.data)
    }
    // const data = response.data;
    // console.log(response.data);

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
                  {/* <div className="Update">
                    <label>Id:</label>
                    <input
                      className="Id-User"
                      value={userid}
                      onChange={(event) => setuserid(event.target.value)}
                    />
                  </div> */} 

                  {/* We can't update User_Id */}
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
                  <button onClick={user_update}>Update Detail</button>
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
                      value={confirm_password}
                      onChange={(event) => set_confirm_password(event.target.value)}
                    />
                  </div>
                </div>
                <div className="Button-Users">
                  <button onClick={password_update}>Update Pasword</button>
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
