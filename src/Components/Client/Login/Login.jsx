import React, { useState } from "react";
import Logo from "../../../Assets/Logo.svg";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState("Sign In");

  const inputFields = (
    <>
      <input type="text" placeholder="Username" />
      <input type="number" placeholder="ID Number" />
      <input type="password" placeholder="Password" />
      {login === "Sign Up" && <input type="email" placeholder="Email" />}
    </>
  );

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
        <div className="Input-Login">
          {inputFields}
          <p>Forgot Password ?</p>
        </div>

        <div className="Button-Login">
          <button
            type="submit"
            className={`${login === "Sign In" ? "Dark" : "Light"}`}
            onClick={() => setLogin("Sign In")}
          >
            Sign In
          </button>
          <button
            type="submit"
            className={`${login === "Sign In" ? "Light" : "Dark"}`}
            onClick={() => setLogin("Sign Up")}
          >
            Sign Up
          </button>
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
