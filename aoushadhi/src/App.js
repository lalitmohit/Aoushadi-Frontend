import SideBar from "./Components/Common/SideBar/SideBar"
import "./App.css"
import Login from "./Components/Client/Login/Login";
function App() {
  return (
    <div className="App flex">
      <Login />
      {/* <div className="sideb">
      <SideBar />
      </div>
      <div className="content ">
        <h2>Main Content</h2>
      </div> */}
    </div>
  );
}

export default App;
