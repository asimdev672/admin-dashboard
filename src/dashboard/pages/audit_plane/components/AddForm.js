import React, { useState } from "react";
import { TbTriangleInverted } from "react-icons/tb";
import { toast } from "react-toastify";
import "../AuditPlane.scss";
export default function AddForm({ setOffCanShow }) {
  const DateArr = [
    "Estimated Resource Costs",
    "Actual Resource Costs",
    "Estimated External Costs",
    "Actual External Costs",
    "Estimated Expenses",
    "Actual Expenses",
  ];
  return (
    <>
      <div className="AddForm--assesment">
        <header className=" hdr d-flex justify-content-between align-items-center">
          <p>Add Aduit Plane</p>
          <div>
            <button onClick={() => toast.success("successfully added aduit form")}>
              Save
            </button>
            <button  onClick={() => setOffCanShow(false)}>Cancel</button>
          </div>
        </header>
        <div className="container-fluid">
          <div className="row row-cols-1">
            {/*======== 1st col============  */}
            <div className="col mb-2">
              {/* ====General ==== */}
              <div className="General b1">
                <p className="form--heading">General</p>
                <div className="px-3">
                  <div className="mb-3">
                    <label className="form-label">* Aduit Plan Title</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Aduit Plan Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-3">
                        <label className="form-label">Approved</label>
                        <div className="d-flex gap-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <input
                            type="date"
                            className="form-control datInp dsh"
                            style={{ background: "#f5f5f5" }}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <label className="form-label">Closed</label>
                        <div className="d-flex gap-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <input
                            type="date"
                            className="form-control datInp dsh "
                            style={{ background: "#f5f5f5" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1">
            {/*====1st col=======*/}
            <div className="col mb-2">
              <div className="Attachment b1">
                <p className="form--heading">Schedule</p>
                <div className="row row-cols-md-5 row-cols-2">
                  <div className="col  mb-3">
                    <div className="px-3">
                      <label className="my-2 dlab">Start Date</label>
                      <input type="date" className="form-control datInp" />
                    </div>
                  </div>
                  <div className="col mb-3">
                    <div className="px-3">
                      <label className="my-2 dlab">End Date</label>
                      <input type="date" className="form-control datInp" />
                    </div>
                  </div>
                  <div className="col mb-3">
                    <div className="px-3">
                      <label className="my-2 dlab">Estimated Time</label>
                      <input type="number" className="form-control datInp" />
                    </div>
                  </div>
                  <div className="col mb-3">
                    <div className="px-3">
                      <label className="my-2 dlab">Actual Time</label>
                      <input
                        type="number"
                        className="form-control datInp dsh"
                      />
                    </div>
                  </div>

                  {DateArr.map((el) => (
                    <div className="col mb-3">
                      <div className="px-3">
                        <label className="my-2 dlab">{el}</label>
                        <input type="text" className="form-control datInp" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="Attachment b1">
                <p className="form--heading">Resource Managment</p>
                <div className="px-3 my-3">
                <label className="my-2 dlab">Scheduling Level</label>

                  <select
                    className="form-select w-50 w-md-25"
                    aria-label="Default select example"
                  >
                    <option disabled>Project</option>
                    <option value="2">Project</option>
                    <option value="3">Phase</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="Assignment b1">
                <p className="form--heading">Assignment</p>
                <div className="px-3 my-3">
               <button className="blueBtn">Get</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
