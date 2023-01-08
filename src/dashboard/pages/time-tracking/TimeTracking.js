import React from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { SlReload } from "react-icons/sl";
import { FcDocument } from "react-icons/fc";
import { VscFileSubmodule } from "react-icons/vsc";
import "./TimeTracking.scss";
export default function TimeTracking() {
  return (
    <>
      <div className="TimeTracking_main">
        <div className="AuditPlane_main">
          <header
            className="AuditPlane_header px-md-3"
            style={{ height: "9rem" }}
          >
            <p className="text-start mb-md-0 mb-2 pt-md-3 fs-6">
              Time Tracking
            </p>
            <div className="d-flex align-items-center gap-md-4 gap-2 flex-wrap flex--md-nowrap">
              {/* Edit  */}
              <div className="rightBrd pe-md-4 pe-1 pt-1 ">
                <div className="d-flex gap-3">
                  <div className="ico--main opacity--cursor">
                    <BsFillCloudArrowDownFill className="icc opacity--cursor" />
                    <span>Save</span>
                  </div>
                  <div className="ico--main opacity--cursor">
                    <FcDocument className="icc opacity--cursor" />
                    <span>Copy</span>
                  </div>
                </div>
                <p className="mt-md-3 mt-0">Edit</p>
              </div>

              {/* Adtion  */}
              <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1  ">
                <div className="d-flex align-items-center gap-md-4 gap-2">
                  <div className="ico--main opacity--cursor">
                    <VscFileSubmodule className="icc opacity--cursor" />
                    <span>Submit</span>
                  </div>
                  <div className="ico--main opacity--cursor">
                    <SlReload className="icc  red opacity--cursor" />
                    <span>Un Submit</span>
                  </div>
                </div>
                <p className="mt-md-3 mt-0">Admin</p>
              </div>
            </div>
          </header>
          {/* AuditPlane_body  */}
          <div className="AuditPlane_body">
            <div className="container">
              <div className="d-md-flex justify-content-between align-items-center pt-3 border-bottom">
                <p className="time--head">Timesheet</p>
                <div className="d-flex">
                  <button className="blueBtn">Previous</button>
                  <input type="date" style={{ outline: "none" }} />
                  <button className="blueBtn">Previous</button>
                </div>
              </div>
            </div>
            {/* ==================== */}
            <div className="container">
            <div className="d-flex flex-wrap align-items-center gap-2">
              <div>
                <lable className="labl">Resource :</lable>
                <span className="fw-light" style={{ fontSize: "10px" }}>
                  Ch Champian
                </span>
              </div>
              <div>
                <lable className="labl">Open Timesheets :</lable>
                <span className="fw-light circle" style={{ fontSize: "10px" }}>
                  3
                </span>
              </div>
              <div>
                <lable className="labl">Workflow State :</lable>
                <span className="fw-light" style={{ fontSize: "10px" }}>
                  In Progress
                </span>
              </div>
              <div>
                <lable className="labl">Due Date :</lable>
                <span className="fw-light" style={{ fontSize: "10px" }}>
                  1/16/23
                </span>
              </div>
              <div>
                <lable className="labl">Weekly Total Our :</lable>
                <span className="fw-light" style={{ fontSize: "10px" }}>
                  1
                </span>
              </div>
              <div>
                <lable className="labl">Show Comment </lable>
                <input className="ms-2 mt-1" type="checkbox" />
              </div>
            </div>
            <section className="time--add-section">
              <div className="d-flex gap-md-5">
                <div>
                  <label htmlFor="">Time Category</label>
                  <br />
                  <select
                    name=""
                    id=""
                  >
                    <option value="">Project</option>
                    <option value="">Admin</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Time Category</label>
                  <br />
                  <div className="d-flex">
                  <input type="search" />
                  <button className="blueBtn">Add</button>
                  </div>
                </div>
              </div>
            </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
