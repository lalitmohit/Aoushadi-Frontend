import React from "react";
import Logo from "../../../Assets/Logo.svg";
import "./Login.css";

const Login = () => {
  return (
    <div className="Container-Login">
      <div className="Logo-Login">
        <div className="Image-Login">
          <img src={Logo} alt="Aoushadhi" />
        </div>
        <div className="Heading-Login">
          <h1>Aoushadhi</h1>
        </div>
      </div>
      <div className="Form-Login">
        <div className="Input-Login">
          <input type="text" value="Username" />
          <input type="text" value="Password" />
          <input type="text" value="ID Number" />
          <p>Forgot Password ?</p>
        </div>
        <div className="Button-Login">
          <button type="submit">Sign In</button>
          <button type="submit">Sign Up</button>
        </div>
        <hr/>
        <div className="Authentication-Login">
          <button type="submit">Sign In By Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
