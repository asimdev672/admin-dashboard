import React, { useState } from "react";
import "./Assesment.scss";
import { CgChevronDoubleRightO } from "react-icons/cg";
import { MdAdsClick, MdTableView } from "react-icons/md";
import { FcPlus } from "react-icons/fc";
import { RiDeleteBin6Line, RiFileExcel2Fill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiLevelEndFlag, GiLiquidSoap, GiSolarPower } from "react-icons/gi";
import { BsGrid3X2GapFill, BsLayerForward } from "react-icons/bs";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { TbTriangleInverted } from "react-icons/tb";
import { Offcanvas } from "react-bootstrap";
import AddForm from "./components/AddForm";
import MainAnex from "./components/anex-a/Index";
import MainAccessControl from "./components/access-control/Index";
import SOA from "./components/soa/Index";
import GAP from "./components/gap";
export default function AuditPlane() {
  const [offCanShow, setOffCanShow] = useState(false);
  const [anexA, setAnexA] = useState("Assesment");
  // handleAddAdultForm
  const handleClose = () => setOffCanShow(false);
  const handleShow = () => setOffCanShow(true);
  return (
    <>
      <div className="AuditPlane_main">
        <header className="AuditPlane_header px-md-3">
          <p
            className="text-start mb-md-0 mb-2 pt-md-3 fs-6"
            onClick={() => setAnexA("Assesment")}
            style={{ cursor: "pointer" }}
          >
            Assesment
          </p>
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
            {/* Anex A  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main ">
                <GiSolarPower
                  className="icc"
                  style={{ color: "#00c057" }}
                  onClick={() => setAnexA("mainAnex")}
                />
                <span>Annex A</span>
              </div>
              <p className="mt-md-3 mt-0">Annex A</p>
            </div>
            {/* Access Control  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main ">
                <MdAdsClick
                  className="icc"
                  style={{ color: "#2482ba" }}
                  onClick={() => setAnexA("access_control")}
                />
                <span>Access Control</span>
              </div>
              <p className="mt-md-3 mt-0">Access Control</p>
            </div>
            {/* SOA  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main ">
                <GiLiquidSoap
                  className="icc"
                  style={{ color: "#2482ba" }}
                  onClick={() => setAnexA("soa")}
                />
                <span>SOA</span>
              </div>
              <p className="mt-md-3 mt-0">SOA</p>
            </div>
            {/* Gap  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main ">
                <BsGrid3X2GapFill
                  className="icc"
                  style={{ color: "red" }}
                  onClick={() => setAnexA("Gap")}
                />
                <span>Gap</span>
              </div>
              <p className="mt-md-3 mt-0">Gap</p>
            </div>
          </div>
        </header>
        {/* AuditPlane_body  */}
        <div className="AuditPlane_body">
          {anexA === "Assesment" ? (
            <div>
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
                          <td>Shahana</td>
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
          ) : (
            ""
          )}
          {anexA === "mainAnex" ? (
            <div className="">
              <MainAnex />
            </div>
          ) : (
            ""
          )}
          {anexA === "access_control" ? (
            <div className="">
              <MainAccessControl />
            </div>
          ) : (
            ""
          )}
          {anexA === "soa" ? (
            <div className="">
              <SOA />
            </div>
          ) : (
            ""
          )}
          {anexA === "Gap" ? (
            <div className="">
              <GAP />
            </div>
          ) : (
            ""
          )}
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
          <AddForm setOffCanShow={setOffCanShow} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
