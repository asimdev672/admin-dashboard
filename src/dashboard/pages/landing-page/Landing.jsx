import React from "react";
import "./Landing.scss";
export default function Landing() {
  return (
    <>
      <div className="Landing_main">
        <nav className="d-flex justify-content-between">
          <div>TeamMate</div>
          <div>
            <button className="blueBtn">Login</button>
            <button className="blueBtn">Demo</button>
          </div>
        </nav>
        <div className="body">
          <div className="row">
            <div className="col border">asim</div>
            <div className="col border">asim</div>
          </div>
        </div>
      </div>
    </>
  );
}
