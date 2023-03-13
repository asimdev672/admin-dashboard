import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./Dashboard.scss";
const Home = () => {
  const [wUiStyle, setWUiStyle] = useState(true);
  const handleOutlet=()=>{
    alert('hello')
  }
  return (
    <>
      <div className="dashboard_main">
        {/* ========begin::sidebar=========  */}
        <Sidebar setWUiStyle={setWUiStyle} wUiStyle={wUiStyle}  />
        {/* ========begin:: masterContainer=========  */}
        <div className="masterContainer mainMasterContainer">
          <div className=" ">
            <Navbar />
          </div>
          <div className={wUiStyle ? "masterContainer px-3" : "masterContainer px-3 w2"}>
            <Outlet onClick={handleOutlet}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
