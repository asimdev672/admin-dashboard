import React, { useEffect, useState } from "react";
import "./Assesment.scss";
import { CgChevronDoubleRightO } from "react-icons/cg";
import { MdAdsClick, MdTableView } from "react-icons/md";
import { FcPlus } from "react-icons/fc";
import { RiDeleteBin6Line, RiFileExcel2Fill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiLevelEndFlag, GiLiquidSoap, GiSolarPower } from "react-icons/gi";
import {
  BsFillFileSpreadsheetFill,
  BsGrid3X2GapFill,
  BsLayerForward,
} from "react-icons/bs";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { TbTriangleInverted } from "react-icons/tb";
import { Offcanvas } from "react-bootstrap";
import AddForm from "./components/AddForm";
import MainAnex from "./components/anex-a/Index";
import MainAccessControl from "./components/access-control/Index";
import SOA from "./components/soa/Index";
import GAP from "./components/gap";
import RTP from "./components/rtp/Rtp";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
export default function AuditPlane() {
  const location = useLocation();
  console.log("loation", location.state);
  const locationData = location.state;
  const [offCanShow, setOffCanShow] = useState(false);
  const [anexA, setAnexA] = useState("Assesment");
  const [isRefresh, setIsRefresh] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  console.log("isCheck", isCheck);
  const [assesmentData, setAssesmentData] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  // handleAddAdultForm
  const handleClose = () => setOffCanShow(false);
  const handleShow = () => {
    if (assesmentData.length > 0) {
      toast.warning("Already Assessment Exist");
    } else {
      setOffCanShow(true);
    }
  };
  useEffect(() => {
    const fetchAssesment = () => {
      axios
        .get(
          `http://localhost:8000/api/v1/getAssesment?id=${locationData?._id}`
        )
        .then((res) => {
          console.log("getAssesmentgetAssesment", res?.data);
          if (res?.data?.status === "success") {
            setAssesmentData(res?.data?.data);
          }
        });
    };
    fetchAssesment();
  }, [isRefresh]);
  // handleCheck
  const handleCheck = (evt, e) => {
    setIsCheck(evt.target.checked);
    if (evt.target.checked) {
      setSelectedItems(e);
    } else {
      selectedItems({});
    }
  };
  // handleDeleteRow
  const handleDeleteRow = () => {
    if (isCheck) {
      axios
        .delete(
          `http://localhost:8000/api/v1/deleteAssesment?id=${selectedItems?._id}`
        )
        .then((res) => {
          toast.success("Delete Successfully");
          setIsRefresh(!isRefresh);
          setIsCheck(false);
        })
        .catch((err) => {
          console.log("err", err);
          toast.error("Something went wrong");
        });
    }
  };
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
                <div
                  className={`ico--main ${!isCheck ? "opacity--cursor" : ""}`}
                >
                  <RiDeleteBin6Line
                    onClick={handleDeleteRow}
                    className={`icc red ${!isCheck ? "opacity--cursor" : ""}`}
                  />
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
            {/* RTP  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main ">
                <BsFillFileSpreadsheetFill
                  className="icc"
                  style={{ color: "#024264" }}
                  onClick={() => setAnexA("RTP")}
                />
                <span>RTP</span>
              </div>
              <p className="mt-md-3 mt-0">RTP</p>
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
                          </p>
                        </th>
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
                            Assesment Featured
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
                    {assesmentData.length > 0 ? (
                      <tbody>
                        {assesmentData?.map((e) => (
                          <tr>
                            <td>
                              <input
                                onChange={(evt) => handleCheck(evt, e)}
                                checked={isCheck}
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                            </td>
                            <td>{e?.title}</td>
                            <td>{e?.description}</td>
                            <td>
                              <select className="form-select py-0 slAs">
                                {e?.assesment_featured?.soa ? (
                                  <option>SOA</option>
                                ) : (
                                  ""
                                )}
                                {e?.assesment_featured?.gap ? (
                                  <option>GAP</option>
                                ) : (
                                  ""
                                )}
                                {e?.assesment_featured?.rtp ? (
                                  <option>RTP</option>
                                ) : (
                                  ""
                                )}
                                {e?.assesment_featured?.asset_Inventory ? (
                                  <option>aSSET_INVENTORY</option>
                                ) : (
                                  ""
                                )}
                                {e?.assesment_featured?.document_Inventory ? (
                                  <option>DOCUMENT_INVENTORY</option>
                                ) : (
                                  ""
                                )}
                                {e?.assesment_featured
                                  ?.vulnerability_Assessment ? (
                                  <option>VULNERABILITY_ASSESSMENT</option>
                                ) : (
                                  ""
                                )}
                              </select>
                            </td>
                            <td>
                              {new Date(e?.start_date).toLocaleDateString()}
                            </td>
                            <td>
                              {new Date(e?.end_date).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ) : (
                      <p
                        className="text-center text-dark"
                        style={{ width: "100%" }}
                      >
                        No Assessment Found
                      </p>
                    )}
                  </table>
                </div>
                {/* <div className="table_footer border">
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
                </div> */}
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
          {anexA === "RTP" ? (
            <div className="">
              <RTP />
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
          <AddForm
            setOffCanShow={setOffCanShow}
            setIsRefresh={setIsRefresh}
            isRefresh={isRefresh}
            locationData={locationData}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
