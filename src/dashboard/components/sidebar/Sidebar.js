import React from "react";
import "./Sidebar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdDashboard, MdDelete } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { Link } from "react-router-dom";
const Sidebar = ({ setWUiStyle, wUiStyle }) => {
  const handleWidth = () => {
    setWUiStyle(!wUiStyle);
  };
  return (
    <div className="Sidebar__main">
      {/* =========top section=========  */}
      <div
        className="top d-flex justify-content-center align-items-center"
        onClick={handleWidth}
      >
        <span className="logo">
          <GiHamburgerMenu />
        </span>
      </div>
      {/* =======center section========= */}
      <div
        className={
          wUiStyle ? "Sidebar__main center" : "center Sidebar__main w1"
        }
      >
        <ul className="m-0 p-0">
          <Link to="/dashboard">
            <span className="d-flex align-items-center">
              <AiFillHome className="side_iconA" />
            </span>
            <li className={wUiStyle ? "d-none" : "d-block"}>My Home</li>
          </Link>
          <Link to="/dashboard">
            <span className="d-flex align-items-center">
              <MdDashboard className="side_iconA" />
            </span>
            <li className={wUiStyle ? "d-none" : "d-block"}>My Dashboard</li>
          </Link>
          <Link to="assesment">
            <span className="d-flex align-items-center">
              <MdDelete className="side_iconC" />
            </span>
            <li className={wUiStyle ? "d-none" : "d-block"}>Assesment</li>
          </Link>
          <Link to="audit-plane">
            <span className="d-flex align-items-center">
              <GiSandsOfTime className="side_iconD" />
            </span>
            <li className={wUiStyle ? "d-none" : "d-block"}>Adult Plane</li>
          </Link>
          <Link to="project">
            <span className="d-flex align-items-center">
              <AiFillProject className="side_project" />
            </span>
            <li className={wUiStyle ? "d-none" : "d-block"}>Project</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;