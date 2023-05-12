import React, { useState } from "react";
import "./AuditPlane.scss";
import { CgChevronDoubleRightO } from "react-icons/cg";
import { MdTableView } from "react-icons/md";
import { FcApproval, FcPlus } from "react-icons/fc";
import { RiDeleteBin6Line, RiFileExcel2Fill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoFolderOpenSharp } from "react-icons/io5";

import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineMobile,
} from "react-icons/ai";
import { FaDoorClosed } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { TbTriangleInverted } from "react-icons/tb";
import { Dropdown, Offcanvas } from "react-bootstrap";
import AddForm from "./components/AddForm";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function AuditPlane() {
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(false);
  const [data, setData] = useState([]);
  const [offCanShow, setOffCanShow] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  console.log("selectedItems=======>", selectedItems);
  const [checkbox, setCheckbox] = useState({});
  // handleAddAdultForm
  const handleClose = () => setOffCanShow(false);
  const handleShow = () => setOffCanShow(true);

  useEffect(() => {
    const fetchProject = () => {
      axios
        .get("http://localhost:8000/api/v1/getProject")
        .then((res) => {
          console.log("res", res.data);
          if (res?.data?.status === "success") {
            setData(res?.data?.data);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    fetchProject();
  }, [isRefresh]);
  console.log("data", data);

  // handleAssessmentRout
  const handleAssessmentRout = (e) => {
    if (e.status) {
      navigate("/dashboard/assesment", { state: e });
    } else {
      toast.error("Project Not Approved");
    }
  };

  // handleCheckBox
  const handleCheckBox = (evt, e, i) => {
    setIsCheck(evt.target.checked);
    setCheckbox((prvState) => {
      return {
        ...prvState,
        [i]: evt.target.checked,
      };
    });
    if (evt.target.checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, e]);
    } else {
      selectedItems.filter((items) => items !== e);
    }
  };
  // handleDeleteRow
  const handleDeleteRow = () => {
    console.log("selectedItems", selectedItems);
    let lstIndx = selectedItems.length;
    selectedItems.forEach((el, i) => {
      axios
        .delete(`http://localhost:8000/api/v1/deleteProject?id=${el?._id}`)
        .then((res) => {
          if (lstIndx - 1 === i) {
            toast.success("Delete Successfully");
            setIsRefresh(!isRefresh);
            setIsCheck(false);
            setCheckbox({});
            setSelectedItems([]);
          }
        })
        .catch((err) => {
          console.log("err", err);
          toast.error("Something went wrong");
        });
    });
  };
  // handleApproved
  const handleApproved = () => {
    let copArray = selectedItems.filter((el) => el.status === false);
    let lstIndx = copArray.length;
    if (copArray) {
      copArray.forEach((el, i) => {
        axios
          .patch(`http://localhost:8000/api/v1/updateProject?id=${el?._id}`, {
            status: true,
          })
          .then((res) => {
            if (lstIndx - 1 === i) {
              toast.success("Updated Successfully");
              setIsRefresh(!isRefresh);
              setIsCheck(false);
              setCheckbox({});
              setSelectedItems([]);
            }
          })
          .catch((err) => {
            console.log("err", err);
            toast.error("Something went wrong");
          });
      });
    }
  };
  // handleUnapproved
  const handleUnapproved = () => {
    let copArray = selectedItems.filter((el) => el.status === true);
    console.log("copArray", copArray);

    let lstIndx = copArray.length;
    if (copArray) {
      copArray.forEach((el, i) => {
        axios
          .patch(`http://localhost:8000/api/v1/updateProject?id=${el?._id}`, {
            status: false,
          })
          .then((res) => {
            if (lstIndx - 1 === i) {
              toast.success("Updated Successfully");
              setIsRefresh(!isRefresh);
              setIsCheck(false);
              setCheckbox({});
              setSelectedItems([]);
            }
          })
          .catch((err) => {
            console.log("err", err);
            toast.error("Something went wrong");
          });
      });
    }
  };
  console.log(checkbox, "checkbox");
  return (
    <>
      <div className="AuditPlane_main">
        <header className="AuditPlane_header px-md-3">
          <p className="text-start mb-md-0 mb-2 pt-md-3 fs-6">AuditPlane</p>
          <div className="d-flex align-items-center gap-md-4 gap-2 flex-wrap flex--md-nowrap">
            {/* Edit  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="d-flex gap-3">
                <div className="ico--main opacity--cursor">
                  <CgChevronDoubleRightO className="icc opacity--cursor" />
                  <span>open</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <MdTableView className="icc opacity--cursor" />
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
                <div className="ico--main ">
                  <RiDeleteBin6Line
                    className={`icc red ${!isCheck ? "opacity--cursor" : ""}`}
                    onClick={handleDeleteRow}
                  />
                  <span>Delete</span>
                </div>
                <div className="ico--main opacity--cursor">
                  <IoFolderOpenSharp className="icc opacity--cursor" />
                  <span>open</span>
                </div>
                <div className="ico--main ">
                  <AiOutlineMobile
                    onClick={handleUnapproved}
                    className={`icc red ${!isCheck ? "opacity--cursor" : ""}`}
                  />
                  <span>Unapproved</span>
                </div>
                <div className="ico--main ">
                  <FcApproval
                    onClick={handleApproved}
                    className={`icc ${!isCheck ? "opacity--cursor" : ""}`}
                  />
                  <span>Approved</span>
                </div>
                <div className="ico--main">
                  <FaDoorClosed
                    className={`icc ${!isCheck ? "opacity--cursor" : ""}`}
                  />
                  <span>Closed</span>
                </div>
              </div>
              <p className="mt-md-3 mt-0">Admin</p>
            </div>
            {/* Export  */}
            {/* <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main opacity--cursor">
                <RiFileExcel2Fill
                  className="icc opacity--cursor"
                  style={{ color: "#00c057" }}
                />
                <span>Excel</span>
              </div>
              <p className="mt-md-3 mt-0">Export</p>
            </div> */}
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
                      </p>
                    </th>
                    <th scope="col">
                      <p>
                        <TbTriangleInverted className="me-1" />
                        Audit Plan Title
                      </p>
                    </th>
                    <th scope="col">
                      <p>
                        <TbTriangleInverted className="me-1" />
                        description
                      </p>
                    </th>
                    <th scope="col">
                      <p>
                        <TbTriangleInverted className="me-1" />
                        Status
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
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                        Estimated Time
                      </p>
                    </th>
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                        Actual Time
                      </p>
                    </th>
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                        Estimated Resource Costs
                      </p>
                    </th>
                    <th scope="col">
                      <p className="para">
                        <TbTriangleInverted className="me-1" />
                        Action
                      </p>
                    </th>
                  </tr>
                </thead>
                {data.length > 0 ? (
                  <tbody>
                    {data.map((e, i) => (
                      <>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                onChange={(evt) => handleCheckBox(evt, e, i)}
                                // onChange={(evt) => setIsCheck(!isCheck)
                                checked={checkbox[i]}
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                            </div>
                          </td>
                          <td>{e?.title}</td>
                          <td>{e?.description}</td>
                          <td>{e.status ? "Approved" : "Unapproved"}</td>
                          <td>
                            {new Date(e?.start_date).toLocaleDateString()}
                          </td>
                          <td>{new Date(e?.end_date).toLocaleDateString()}</td>
                          <td>{e?.estimate_time}</td>
                          <td>{e?.actual_time}</td>
                          <td>{e?.estimate_cost}</td>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="secondary"
                                size="sm"
                                id="dropdown-basic"
                                style={{
                                  background: "#236a94",
                                  border: "none",
                                  outline: "none",
                                }}
                              >
                                Actions.
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                className="shadow-sm py-2"
                                style={{ fontSize: "small" }}
                              >
                                <Dropdown.Item
                                  onClick={() => handleAssessmentRout(e)}
                                >
                                  Assessment
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                ) : (
                  <p
                    className="text-center text-dark"
                    style={{ width: "100%" }}
                  >
                    No Data Found
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
                of 1 Total: 6
              </div>
              <div>
                <IoIosArrowForward className="fs-4 border me-2 py-1" />
                <AiOutlineDoubleRight className="fs-4 border me-2 py-1" />
              </div>
            </div> */}
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
          <AddForm
            setOffCanShow={setOffCanShow}
            setIsRefresh={setIsRefresh}
            isRefresh={isRefresh}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
