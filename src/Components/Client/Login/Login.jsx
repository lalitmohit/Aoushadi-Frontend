// import React, { useEffect, useState } from "react";
// import Logo from "../../../Assets/Logo.svg";
// import "./Login.css";
// const Login = () => {
//   const [formState, setFormState] = useState("signIn");
//   const [userId, setUserId] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     // You can access form values using userId, email, mobileNumber, and password states
//   };
//   return (
//     <div className="Container-Login">
//       <div className="Logo-Login">
//         <div className="Image-Login">
//           <img src={Logo} alt="Aoushadhi" />
//         </div>
//         <div className="Heading-Login ">
//           <h1>Aoushadhi</h1>
//         </div>
//       </div>
//       <div className="Form-Login">
//       <form className="Input-Login" onSubmit={handleSubmit}>
//           {formState === "signIn" && (
//             <input
//               type="text"
//               placeholder="User ID/ Mobile Number/ Email"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//             />
//           )}
//           {formState !== "signIn" && (
//             <>
//               <input
//                 type="number"

    
          
            
    

          
//           Expand Down
    
    
  
//                 placeholder="User ID"
//                 value={userId}
//                 onChange={(e) => setUserId(e.target.value)}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="number"
//                 placeholder="Mobile Number"
//                 value={mobileNumber}
//                 onChange={(e) => setMobileNumber(e.target.value)}
//               />
//             </> 

            
//           )}
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className="Dark">
//             Submit
//           </button>
//         </form>
        
//         <div className="Para-Login">
//           <p onClick={() => setFormState(formState === "signIn" ? "signUp" : "signIn")}>
//             {formState === "signIn" ? "Create New Account?" : "Already have an account?"}
//           </p>
//           {formState === "signIn" && (
//             <p>Forgot Password?</p>
//           )}
//         </div>
//         <hr />
//         <div className="Authentication-Login">
//           <button type="submit">Sign In By Google</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;

import React, { useEffect, useState } from "react";
import Logo from "../../../Assets/Logo.svg";
import "./Login.css";
import axios from 'axios';

const Login = () => {
  const [signIn, setSignin] = useState(true);
  const [userid, setUserId] = useState("");
  const [custid, setCustId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const userInput = async (e) => {
    e.preventDefault();
    try {
      let data; 
      let response;
      if(!signIn) {
        data = {
          userid: userid,
          password: password
        };
        response = await axios.post("http://localhost:4000/login", data);
        
      } else {
        data = {
          custid: custid,
          email: email,
          mobile: mobile,
          password: password
        };
        response = await axios.post("http://localhost:4000/register", data);
      }

      if (response.status === 200 || response.data.isUserExist) {
        window.open("http://localhost:3000/home")
      }
      
    } catch (error) {

    }
  }

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
        <form onSubmit={userInput} method="Post">
          <div className="Input-Login">
            {!signIn ? (
              <input value={userid} onChange={(e) => setUserId(e.target.value)} type="text" placeholder="User ID/ Mobile Number/ Email" required />
            ) : (
              <>
                <input value={custid} onChange={(e) => setCustId(e.target.value)} type="number" placeholder="Customer ID" name="custid" required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" name="email" required />
                <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="number" placeholder="Mobile Number" name="mobile" required />
              </>
            )}
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password" required />
          </div>
          <div className="Button-Login">
            <button type="submit" className="Dark">
              Submit
            </button>
          </div>
        </form>
        <div className="Para-Login">
          <p onClick={() => signIn ? setSignin(false) : setSignin(true)}>
            {!signIn ? "Create New Account ?" : "Already have an account?"}
          </p>
          <p>
            {!signIn ? "Forgot Password ?" : ""}
          </p>
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