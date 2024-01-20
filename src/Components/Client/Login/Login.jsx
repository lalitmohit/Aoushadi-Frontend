import React, { useEffect, useState } from "react";
import Logo from "../../../Assets/Logo.svg";
import "./Login.css";

const Login = () => {
  const [signIn, setSignin] = useState(true);

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
          {!signIn ? (
            <input type="text" placeholder="User ID/ Mobile Number/ Email" />
          ) : (
            <>
              <input type="number" placeholder="User ID" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Mobile Number" />
            </>
          )}
          <input type="password" placeholder="Password" />
          <p onClick={() => setSignin(!signIn)}>
            {!signIn ? "Create New Account ?" : "Already have an account?"}
          </p>
        </div>
        <div className="Button-Login">
          <button type="submit" className="Dark">
            Submit
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
