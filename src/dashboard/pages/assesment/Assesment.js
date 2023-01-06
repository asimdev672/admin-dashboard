import React, { useState } from "react";
import "./Assesment.scss";
import { CgChevronDoubleRightO } from "react-icons/cg";
import { MdTableView } from "react-icons/md";
import { FcPlus } from "react-icons/fc";
import { RiDeleteBin6Line, RiFileExcel2Fill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiLevelEndFlag } from "react-icons/gi";
import { BsLayerForward } from "react-icons/bs";

import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { TbTriangleInverted } from "react-icons/tb";
import { Offcanvas } from "react-bootstrap";
import AddForm from "./components/AddForm";
export default function AuditPlane() {
  const [offCanShow, setOffCanShow] = useState(false);
  // handleAddAdultForm
  const handleClose = () => setOffCanShow(false);
  const handleShow = () => setOffCanShow(true);
  return (
    <>
      <div className="AuditPlane_main">
        <header className="AuditPlane_header px-md-3">
          <p className="text-start mb-md-0 mb-2 pt-md-3 fs-6">Assesment</p>
          <div className="d-flex align-items-center gap-md-4 gap-2 flex-wrap flex--md-nowrap">
            {/* Edit  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="d-flex gap-3">
                <div className="ico--main opacity--cursor">
                  <CgChevronDoubleRightO className="icc" />
                  <span>open</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <MdTableView className="icc" />
                  <span>properties</span>
                </div>
              </div>
              <p className="mt-md-3 mt-0">Edit</p>
            </div>

            {/* Add  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main">
                <FcPlus className="icc" onClick={handleShow} />
                <span>Audit plane</span>
              </div>
              <p className="mt-md-3 mt-0">Add</p>
            </div>
            {/* Admin  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1  ">
              <div className="d-flex align-items-center gap-md-4 gap-2">
                <div className="ico--main opacity--cursor">
                  <RiDeleteBin6Line className="icc red opacity--cursor" />
                  <span>Delete</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <GiLevelEndFlag className="icc opacity--cursor" />
                  <span>Finalized</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <BsLayerForward className="icc opacity--cursor" />
                  <span>Forword</span>
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
            <div className="table-responsive-md AudiltTable-main">
              <table className="table table-striped table-bordered  table-scroll">
                <thead>
                  <tr>
                    <th scope="col">
                      <p>
                        <TbTriangleInverted className="me-1" />
                        Assesment Title
                      </p>
                    </th>
                    <th scope="col">
                      <p>
                        <TbTriangleInverted className="me-1" />
                        Description
                      </p>
                    </th>
                    <th scope="col">
                      <p>
                        <TbTriangleInverted className="me-1" />
                        State
                      </p>
                    </th>
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                        Start Date
                      </p>
                    </th>
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                        End Date
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((e) => (
                    <tr>
                      <td>Asim</td>
                      <td>Mark</td>
                      <td>@mdo</td>
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
                of 1 Total: 5
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
          <AddForm setOffCanShow={setOffCanShow}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
