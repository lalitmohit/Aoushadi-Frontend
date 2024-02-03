import React, { useEffect, useState } from "react";
import Logo from "../../../Assets/Logo.svg";
import "./Login.css";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const [formState, setFormState] = useState("signIn");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/login", data);
      return response.data;
    } catch (err) {
      console.error('Login Error:', err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      let response;
      if (formState === "signIn") {
        data = {
          userId: userId,
          password: password
        };
        const response = await loginUser(data);
        if (response.status) {
          console.log('login success');
          onLoginSuccess();
          return;
        }
      } else {
        data = {
          userId: userId,
          email: email,
          mobile: mobileNumber,
          password: password
        };
        response = await axios.post("http://localhost:4000/register", data);
        console.log(response);
        console.log(response.statusText, response.data.status);
        if (response.data.status) {
          data = {
            userId: userId,
            password: password
          };
          const response = await loginUser(data);
          if (response.status) {
            console.log('login success');
            onLoginSuccess();
            return;
          }
        }
      }

    } catch (err) {

    }
    // Add your form submission logic here
    // You can access form values using userId, email, mobileNumber, and password states
  };
  return (
    <div className="Container-Login">
      <div className="Logo-Login">
        <div className="Image-Login">
          <img src={Logo} alt="Aoushadhi" />
        </div>
        <div className="Heading-Login ">
          <h1>Aoushadhi</h1>
        </div>
      </div>
      <div className="Form-Login">
        <form className="Input-Login" onSubmit={handleSubmit}>
          {formState === "signIn" && (
            <input
              type="text"
              placeholder="User ID/ Mobile Number/ Email"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          )}
          {formState !== "signIn" && (
            <>
              <input
                type="number"
                Expand Down
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </>
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="Dark">
            Submit
          </button>
        </form>

        <div className="Para-Login">
          <p onClick={() => setFormState(formState === "signIn" ? "signUp" : "signIn")}>
            {formState === "signIn" ? "Create New Account?" : "Already have an account?"}
          </p>
          {formState === "signIn" && (
            <p>Forgot Password?</p>
          )}
        </div>
        <hr />
        <div className="Authentication-Login">
          <button type="submit">Sign In By Google</button>
        </div>
      </div>
    </div>
  );
};
export default Login;