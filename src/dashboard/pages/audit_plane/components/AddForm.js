import React, { useState } from "react";
import { TbTriangleInverted } from "react-icons/tb";
import { toast } from "react-toastify";
import "../AuditPlane.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import axios from "axios";
export default function AddForm({ setOffCanShow, setIsRefresh, isRefresh }) {
  const AddSchema = Yup.object().shape({
    description: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required field"),
    title: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required field"),
    // end_date: Yup.string().required("Required field"),
    end_date: Yup.date()
      .min(new Date(), "End date must be greater than current date")
      .required("End date is required"),

    actual_time: Yup.string().required("Required field"),
    estimate_time: Yup.string().required("Required field"),
    estimate_cost: Yup.string().required("Required field"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      status: false,
      start_date: new Date().toISOString().substr(0, 10),
      end_date: "",
      estimate_time: "",
      actual_time: "",
      estimate_cost: "",
    },
    enableReinitialize: true,
    validationSchema: AddSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("formik Values ", values);
      if (finalTeam.length >= 2) {
        axios
          .post("http://localhost:8000/api/v1/createProject", {
            ...values,
            teamMember: finalTeam,
          })
          .then((res) => {
            console.log("res", res);
            setIsRefresh(!isRefresh);
            toast.success("Successfully Create");
            setOffCanShow(false);
            resetForm();
          })
          .catch((err) => {
            console.log("err", err);
            toast.error("Something went wrong");
          });
      } else {
        toast.error("Team Member at least 2");
      }
    },
  });
  const [teamMember, setTeamMember] = useState([]);
  const [finalTeam, setFinalTeam] = useState([{ name: "", role: "" }]);
  const handleAddMoreTeam = () => {
    setTeamMember([...teamMember, { name: "", role: "" }]);
  };
  const handleInpTeam = (evt, i) => {
    const { value, name } = evt.target;
    console.log("value,name", value, name);
    const updatedTeamMember = [...teamMember];
    updatedTeamMember[i][name] = value;
    setTeamMember(updatedTeamMember);
    setFinalTeam(updatedTeamMember);
  };
  return (
    <>
      <div className="AddForm--assesment">
        <form onSubmit={formik.handleSubmit} noValidate>
          <header className=" hdr d-flex justify-content-between align-items-center">
            <p>Add Aduit Plane</p>
            <div>
              <button type="submit">Save</button>
              <button onClick={() => setOffCanShow(false)}>Cancel</button>
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
                      <input
                        type="text"
                        {...formik.getFieldProps("title")}
                        name="title"
                        className={clsx(
                          "form-control form-control-solid",
                          {
                            "is-invalid":
                              formik.touched.title && formik.errors.title,
                          },
                          {
                            "is-valid":
                              formik.touched.title && !formik.errors.title,
                          }
                        )}
                        autoComplete="off"
                        disabled={formik.isSubmitting}
                      />
                      {formik.touched.title && formik.errors.title && (
                        <div>
                          <div>
                            <span
                              className="text-danger"
                              style={{ fontSize: "small" }}
                              role="alert"
                            >
                              {formik.errors.title}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Aduit Plan Description
                      </label>
                      <textarea
                        type="text"
                        {...formik.getFieldProps("description")}
                        name="description"
                        style={{ height: "100px" }}
                        className={clsx(
                          "form-control form-control-solid",
                          {
                            "is-invalid":
                              formik.touched.description &&
                              formik.errors.description,
                          },
                          {
                            "is-valid":
                              formik.touched.description &&
                              !formik.errors.description,
                          }
                        )}
                        autoComplete="off"
                        disabled={formik.isSubmitting}
                      />
                      {formik.touched.description &&
                        formik.errors.description && (
                          <div>
                            <div>
                              <span
                                className="text-danger"
                                style={{ fontSize: "small" }}
                                role="alert"
                              >
                                {formik.errors.description}
                              </span>
                            </div>
                          </div>
                        )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Approved</label>
                      <input
                        {...formik.getFieldProps("status")}
                        name="status"
                        className="form-check-input ms-3 mt-1"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
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
                        <input
                          type="date"
                          {...formik.getFieldProps("start_date")}
                          defaultValue={formik.values.start_date}
                          name="start_date"
                          readOnly
                          className="form-control datInp"
                        />
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="px-3">
                        <label className="my-2 dlab">End Date</label>
                        <input
                          type="date"
                          {...formik.getFieldProps("end_date")}
                          name="end_date"
                          className={clsx(
                            "form-control form-control-solid datInp",
                            {
                              "is-invalid":
                                formik.touched.end_date &&
                                formik.errors.end_date,
                            },
                            {
                              "is-valid":
                                formik.touched.end_date &&
                                !formik.errors.end_date,
                            }
                          )}
                          autoComplete="off"
                          disabled={formik.isSubmitting}
                        />
                        {formik.touched.end_date && formik.errors.end_date && (
                          <div>
                            <div>
                              <span
                                className="text-danger"
                                style={{ fontSize: "small" }}
                                role="alert"
                              >
                                {formik.errors.end_date}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="px-3">
                        <label className="my-2 dlab">Estimated Time</label>
                        <input
                          type="number"
                          {...formik.getFieldProps("estimate_time")}
                          name="estimate_time"
                          className={clsx(
                            "form-control form-control-solid datInp",
                            {
                              "is-invalid":
                                formik.touched.estimate_time &&
                                formik.errors.estimate_time,
                            },
                            {
                              "is-valid":
                                formik.touched.estimate_time &&
                                !formik.errors.estimate_time,
                            }
                          )}
                          autoComplete="off"
                          disabled={formik.isSubmitting}
                        />
                        {formik.touched.estimate_time &&
                          formik.errors.estimate_time && (
                            <div>
                              <div>
                                <span
                                  className="text-danger"
                                  style={{ fontSize: "small" }}
                                  role="alert"
                                >
                                  {formik.errors.estimate_time}
                                </span>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="px-3">
                        <label className="my-2 dlab">Actual Time</label>
                        <input
                          {...formik.getFieldProps("actual_time")}
                          name="actual_time"
                          type="number"
                          className={clsx(
                            "form-control form-control-solid datInp dsh",
                            {
                              "is-invalid":
                                formik.touched.actual_time &&
                                formik.errors.actual_time,
                            },
                            {
                              "is-valid":
                                formik.touched.actual_time &&
                                !formik.errors.actual_time,
                            }
                          )}
                          autoComplete="off"
                          disabled={formik.isSubmitting}
                        />
                        {formik.touched.actual_time &&
                          formik.errors.actual_time && (
                            <div>
                              <div>
                                <span
                                  className="text-danger"
                                  style={{ fontSize: "small" }}
                                  role="alert"
                                >
                                  {formik.errors.actual_time}
                                </span>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="px-3">
                        <label className="my-2 dlab">
                          Estimate Resource Costs
                        </label>
                        <input
                          {...formik.getFieldProps("estimate_cost")}
                          name="estimate_cost"
                          type="number"
                          className={clsx(
                            "form-control form-control-solid datInp dsh",
                            {
                              "is-invalid":
                                formik.touched.estimate_cost &&
                                formik.errors.estimate_cost,
                            },
                            {
                              "is-valid":
                                formik.touched.estimate_cost &&
                                !formik.errors.estimate_cost,
                            }
                          )}
                          autoComplete="off"
                          disabled={formik.isSubmitting}
                        />
                        {formik.touched.estimate_cost &&
                          formik.errors.estimate_cost && (
                            <div>
                              <div>
                                <span
                                  className="text-danger"
                                  style={{ fontSize: "small" }}
                                  role="alert"
                                >
                                  {formik.errors.estimate_cost}
                                </span>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col mb-2">
                <div className="Attachment b1">
                  <p className="form--heading">Team Management </p>
                  <div className="px-3 my-3">
                    <div className="mb-3">
                      <label className="form-label">Project Name</label>
                      <input
                        type="text"
                        {...formik.getFieldProps("project_name")}
                        name="project_name"
                        className={clsx(
                          "form-control form-control-solid",
                          {
                            "is-invalid":
                              formik.touched.project_name &&
                              formik.errors.project_name,
                          },
                          {
                            "is-valid":
                              formik.touched.project_name &&
                              !formik.errors.project_name,
                          }
                        )}
                        autoComplete="off"
                        disabled={formik.isSubmitting}
                      />
                      {formik.touched.project_name &&
                        formik.errors.project_name && (
                          <div>
                            <div>
                              <span
                                className="text-danger"
                                style={{ fontSize: "small" }}
                                role="alert"
                              >
                                {formik.errors.project_name}
                              </span>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col mb-2">
                <div className="Attachment b1">
                  <p className="form--heading">Team Management </p>
                  <div className="px-3 my-3">
                    <div className="row">
                      <div className="col-1"></div>
                      <div className="col-5">
                        <label className="form-label">Name</label>
                      </div>
                      <div className="col-5">
                        <label className="form-label">Role</label>
                      </div>
                      <div className="col-1">
                        <span className="blueBtn" onClick={handleAddMoreTeam}>
                          Add
                        </span>
                      </div>
                    </div>
                    {teamMember.map((el, i) => (
                      <>
                        <div className="row mb-3">
                          <div className="col-1">
                            <span>{i + 1}.</span>
                          </div>
                          <div className="col-5">
                            <input
                              type="text"
                              onChange={(evn) => handleInpTeam(evn, i)}
                              name="name"
                              className="form-control"
                            />
                          </div>
                          <div className="col-5">
                            <input
                              type="text"
                              onChange={(evn) => handleInpTeam(evn, i)}
                              name="role"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="col mb-2">
                <div className="Assignment b1">
                  <p className="form--heading">Assignment</p>
                  <div className="px-3 my-3">
                    <button className="blueBtn">Get</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </form>
        {formik.isSubmitting}
      </div>
    </>
  );
}
