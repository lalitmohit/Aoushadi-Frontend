import SideBar from "./Components/Common/SideBar/SideBar";
import { useState } from "react";
import Login from "./Components/Client/Login/Login";
import TopBar from "./Components/Client/TopBar/TopBar";
import SearchBar from "./Components/Client/SearchBar/SearchBar";
import "./App.css";

function App() {
  const [logined, setLogined] = useState(true);
  return (
    <div className="App flex">
      {logined ? (
        <>
          <div className="sideb">
            <SideBar />
          </div>
          <div className="content ">
            <TopBar username={`${logined?"Kunal Singla":"Sign In"}`}/>
            <SearchBar/>
            {/* <h2>Main Content</h2> */}
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
