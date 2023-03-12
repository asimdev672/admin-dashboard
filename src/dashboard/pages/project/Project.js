import React, { useState } from "react";
import { CgChevronDoubleRightO } from "react-icons/cg";
import {  FcDocument } from "react-icons/fc";
import {  GiStopwatch } from "react-icons/gi";
import {  BsFillBagFill } from "react-icons/bs";
import { RiDeleteBin6Line, RiFileExcel2Fill, RiGitRepositoryFill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { FaDoorClosed } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { TbTriangleInverted } from "react-icons/tb";
import { Offcanvas } from "react-bootstrap";
// import AddForm from "./components/AddForm";
export default function Project() {
  const [offCanShow, setOffCanShow] = useState(false);
  // handleAddAdultForm
  const handleClose = () => setOffCanShow(false);
  const handleShow = () => setOffCanShow(true);
  return (
    <>
      <div className="AuditPlane_main">
        <header className="AuditPlane_header px-md-3" style={{height:'9rem'}}>
          <p className="text-start mb-md-0 mb-2 pt-md-3 fs-6">Project</p>
          <div className="d-flex align-items-center gap-md-4 gap-2 flex-wrap flex--md-nowrap">
            {/* Edit  */}
            <div className="rightBrd pe-md-4 pe-1 pt-1 ">
              <div className="d-flex gap-3">
                <div className="ico--main opacity--cursor">
                  <CgChevronDoubleRightO className="icc opacity--cursor" />
                  <span>open</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <FcDocument className="icc opacity--cursor" 
                  />
                  <span>Document Request</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <BsFillBagFill className="icc opacity--cursor"
                  style={{color:'rgb(251 189 62)'}}
                  />
                  <span>Profile</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <GiStopwatch className="icc opacity--cursor" 
                  style={{color:'rgb(0 191 88)'}}
                  />
                  <span>Schedule</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <RiGitRepositoryFill className="icc opacity--cursor" 
                  style={{color:'rgb(249 0 43)'}}
                  />
                  <span>Audit Report</span>
                </div>
              </div>
            </div>

            {/* Admin  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1  ">
              <div className="d-flex align-items-center gap-md-4 gap-2">
                <div className="ico--main opacity--cursor">
                  <RiDeleteBin6Line className="icc red opacity--cursor" />
                  <span>Delete</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <FaDoorClosed className="icc opacity--cursor" />
                  <span>Closed</span>
                </div>
              </div>
              <p className="mt-md-3 mt-0">Admin</p>
            </div>
            {/* Export  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main opacity--cursor">
                <RiFileExcel2Fill
                  className="icc opacity--cursor"
                  style={{ color: "#00c057" }}
                />
                <span>Excel</span>
              </div>
              <p className="mt-md-3 mt-0">Export</p>
            </div>
          </div>
        </header>
        {/* AuditPlane_body  */}
        <div className="AuditPlane_body">
          {/* search bar */}
          <div className="search">
            <div>
              <BiSearch className="fs-4" />
              <input type="search" />
            </div>
          </div>
          {/* table  */}
          <div>
            <div className="table-responsive-md AudiltTable-main"
            style={{height:'18rem'}}
            >
              <table className="table table-striped table-bordered  table-scroll">
                <thead>
                  <tr>
                    <th scope="col">
                      <p>
                        <TbTriangleInverted className="me-1" />
                        Project Name
                      </p>
                    </th>
                    <th scope="col">
                      <p>
                        <TbTriangleInverted className="me-1" />
                        State
                      </p>
                    </th>
                    <th scope="col">
                      <p>
                        <TbTriangleInverted className="me-1" />
                        Milestone
                      </p>
                    </th>
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                        Actual Start
                      </p>
                    </th>
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                        Group
                      </p>
                    </th>
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                         Type
                      </p>
                    </th>
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                        Location
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7].map((e) => (
                    <tr>
                      <td>Shahana</td>
                      <td>closed</td>
                      <td></td>
                      <td></td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table_footer border">
              <div>
                <AiOutlineDoubleLeft className="fs-4 border me-2 py-1" />
                <IoIosArrowBack className="fs-4 border me-2 py-1" />
              </div>
              <div className="ft">
                page
                <input type="text" />
                of 1 Total: 10
              </div>
              <div>
                <IoIosArrowForward className="fs-4 border me-2 py-1" />
                <AiOutlineDoubleRight className="fs-4 border me-2 py-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========  Add AduitPlan ========== */}
      <Offcanvas
        placement="start"
        name="start"
        show={offCanShow}
        onHide={handleClose}
        className="w-100"
        style={{ height: "94vh", top: "6vh" }}
      >
        <Offcanvas.Body>
          {/* <AddForm setOffCanShow={setOffCanShow}/> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
