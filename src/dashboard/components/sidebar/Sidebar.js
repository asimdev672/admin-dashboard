import React from "react";
import "./Sidebar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdDashboard, MdDelete } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FcAlarmClock } from "react-icons/fc";
import { IoDocumentsSharp } from "react-icons/io5";
const Sidebar = ({ setWUiStyle, wUiStyle }) => {
  const handleWidth = () => {
    setWUiStyle(!wUiStyle);
  };
  return (
    <div
      className="Sidebar__main"
      onMouseEnter={() => setWUiStyle(false)}
      onMouseLeave={() => setWUiStyle(true)}
    >
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
            <li className={wUiStyle ? "d-none" : "d-block"}>Assessment</li>
          </Link>
          <Link to="document-inventory">
            <span className="d-flex align-items-center">
              <IoDocumentsSharp className="side_iconC" />
            </span>
            <li className={wUiStyle ? "d-none" : "d-block"}>
              Document Inventory
            </li>
          </Link>
          <Link to="audit-plane">
            <span className="d-flex align-items-center">
              <GiSandsOfTime className="side_iconD" />
            </span>
            <li className={wUiStyle ? "d-none" : "d-block"}>Audit Plane</li>
          </Link>
          <Link to="time-tracking">
            <span className="d-flex align-items-center">
              <FcAlarmClock className="side_clock--ico" />
            </span>
            <li className={wUiStyle ? "d-none" : "d-block"}>Time Tracking</li>
          </Link>
          <Link to="project">
            <span className="d-flex align-items-center">
              <AiFillProject className="side_project--ico" />
            </span>
            <li className={wUiStyle ? "d-none" : "d-block"}>Project</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
