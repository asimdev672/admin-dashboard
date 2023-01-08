import React from "react";
import { ImTelegram } from "react-icons/im";
import { BsFillBellFill } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import "./Navbar.scss";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="Navbar_main container-fluid ">
        <div className="d-flex justify-content-between align-items-center h-100">
         <Link to='/dashboard' style={{textDecoration:'none'}}>
         <div className="nav_brand">ISO27K1 Toolkit</div>
         </Link>
          <div className="right d-flex ">
            <div className="nav_icon">
              <ImTelegram />
            </div>
            <div className="nav_icon position-relative">
              <span className="notification">1</span>
              <BsFillBellFill />
            </div>
            <div className="nav_icon">
              <MdOpenInNew />
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                CM Champion
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Edit User Settings
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Set as My Home</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Support Page</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="nav_icon">
              <AiFillQuestionCircle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
