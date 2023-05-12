import clsx from "clsx";
import { useFormik } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
// import "../../adult_plane/AuditPlane.scss";
import * as Yup from "yup";
import AssesmentFeatured from "./AssesmentFeatured";
import axios from "axios";
export default function AddForm({
  setOffCanShow,
  isRefresh,
  setIsRefresh,
  locationData,
}) {
  const [file, setFile] = useState([]);
  const [assesmentFeatured, setAssesmentFeatured] = useState({
    soa: false,
    gap: false,
    rtp: false,
    asset_Inventory: false,
    document_Inventory: false,
    vulnerability_Assessment: false,
  });
  const AddSchema = Yup.object().shape({
    description: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required field"),
    title: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required field"),
    end_date: Yup.date()
      .min(new Date(), "End date must be greater than current date")
      .required("End date is required"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      start_date: new Date().toISOString().substr(0, 10),
      end_date: "",
      // primay_dimension: "",
      // audit_plan: "",
    },
    enableReinitialize: true,
    validationSchema: AddSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(assesmentFeatured);
      const newFormData = new FormData();
      newFormData.append("title", values?.title);
      newFormData.append("description", values?.description);
      newFormData.append("start_date", values?.start_date);
      newFormData.append("end_date", values?.end_date);
      newFormData.append(
        "assesment_featured",
        JSON.stringify(assesmentFeatured)
      );
      newFormData.append("project_id", locationData?._id);
      file?.map((el) => newFormData.append("files", el));

      axios
        .post(
          "http://localhost:8000/api/v1/createAssesment?id=${el?._id}",
          newFormData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((res) => {
          console.log("res", res);
          toast.success("Successfully Added");
          setOffCanShow(false);
          setIsRefresh(!isRefresh);
          setFile([]);
        })
        .catch((err) => {
          console.log("err", err);
          toast.error("Something went wrong");
        });
    },
  });
  // handleAssesmentFeatured
  const handleAssesmentFeatured = (e) => {
    let { name } = e.target;
    let arr = [];
    if (name) {
      console.log(assesmentFeatured, "assesmentFeatured");
      setAssesmentFeatured({ ...assesmentFeatured, [name]: e.target.checked });
      // arr.push({ ...assesmentFeatured, [name]: e.target.checked });
    }
    // setFeature(arr);
  };
  // handleFile
  const handleFile = (e) => {
    const files = e.target.files;
    if (file.length + files.length <= 12) {
      const fileArr = [...file, ...files];
      setFile(fileArr);
    } else {
      toast.error("You are only allowed to upload a maximum of 12 files.");
    }
  };
  // handleDeleteFile
  const handleDeleteFile = (i) => {
    console.log(i);
    setFile(file.filter((el, index) => index !== i));
  };
  console.log("fileArr", file);
  return (
    <>
      <div className="AddForm--assesment">
        <form onSubmit={formik.handleSubmit} noValidate>
          <header className=" hdr d-flex justify-content-between align-items-center">
            <p>Add Assesment</p>
            <div>
              <button type="submit">Save</button>
              <button onClick={() => setOffCanShow(false)}>Cancel</button>
            </div>
          </header>
          <div className="container-fluid">
            <div className="row row-cols-md-2 row-cols-1">
              {/*======== 1st col============  */}
              <div className="col mb-2">
                {/* ====General ==== */}
                <div className="General b1">
                  <p className="form--heading">General</p>
                  <div className="px-3">
                    <div className="mb-3">
                      <label className="form-label">* Assessment Title</label>
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
                      <label className="form-label">Description</label>
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
                      <div className="row">
                        <div className="col">
                          <label className="form-label">Start Date</label>
                          <input
                            type="date"
                            readOnly
                            value={formik.values.start_date}
                            className="form-control"
                          />
                        </div>
                        <div className="col">
                          <label className="form-label">End Date</label>
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
                          {formik.touched.end_date &&
                            formik.errors.end_date && (
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
                    </div>
                    {/* <div className="mb-3">
                      <label className="form-label">Aduit Plane</label>
                      <select
                        {...formik.getFieldProps("audit_plan")}
                        name="audit_plan"
                        aria-label=".form-select-sm example"
                        className="form-select form-select-sm"
                      >
                        <option value="2016-2017">2016-2017 Audit Plan</option>
                        <option value="2018-2019">2018-2019 Audit Plan</option>
                        <option value="2020-2021">2020-2021 Audit Plan</option>
                        <option value="2022-2023">2022-2023 Audit Plan</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Primary Dimension</label>
                      <select
                        {...formik.getFieldProps("primay_dimension")}
                        name="primay_dimension"
                        aria-label=".form-select-sm example"
                        className="form-select form-select-sm"
                      >
                        <option value="CCCD">CCCD</option>
                        <option value="IT">IT Application</option>
                        <option value="COSO">COSO</option>
                        <option value="Foundations">Foundations</option>
                      </select>
                    </div> */}
                  </div>
                </div>
              </div>
              {/*======== 2nd col============  */}
              <div className="col mb-2">
                {/* ====Assesment Featured===== */}
                <div className="Assesment--featured b1">
                  <p className="form--heading">Assesment Featured</p>
                  <div className="p-3">
                    <div className="w-85 d-flex justify-content-end gap=5">
                      <p className="llbh me-5">Assesment</p>
                      {/* <p className="llbh ms-2 me-5">Project</p> */}
                    </div>
                    <AssesmentFeatured
                      label={"SOA"}
                      name={"soa"}
                      handleAssesmentFeatured={handleAssesmentFeatured}
                    />
                    <AssesmentFeatured
                      label={"GAP"}
                      name={"gap"}
                      handleAssesmentFeatured={handleAssesmentFeatured}
                    />
                    <AssesmentFeatured
                      label={"RTP"}
                      name={"rtp"}
                      handleAssesmentFeatured={handleAssesmentFeatured}
                    />
                    <AssesmentFeatured
                      label={"Asset Inventory"}
                      name={"asset_Inventory"}
                      handleAssesmentFeatured={handleAssesmentFeatured}
                    />
                    <AssesmentFeatured
                      label={"Document Inventory"}
                      name={"document_Inventory"}
                      handleAssesmentFeatured={handleAssesmentFeatured}
                    />
                    <AssesmentFeatured
                      label={"Vulnerability Assessment"}
                      name={"vulnerability_Assessment"}
                      handleAssesmentFeatured={handleAssesmentFeatured}
                    />
                  </div>
                </div>
              </div>
              {/*======== 3rd col============  */}
              {/* <div className="col mb-2">
                <div className="Risk--scoring b1">
                  <p className="form--heading">Risk Scoring</p>
                  <div className="p-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label class="form-check-label">
                        Default Project Scores equal to Assessment Scores
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*======== 4th col============  */}
              {/* <div className="col mb-2">
                <div className="Risk--scoring b1">
                  <p className="form--heading">Risk Scoring</p>
                  <div className="p-3">
                    <label class="form-label">
                      Automatically send to TeamStore Unapproved Cabinet
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option>Risk</option>
                      <option>Control</option>
                      <option>Proceed</option>
                    </select>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="row row-cols-1">
              <div className="col mb-2">
                <div className="Attachment b1">
                  <p className="form--heading">Attachment</p>
                  <div className="px-3">
                    <label htmlFor="uploadFile" className="upload my-2">
                      Upload
                    </label>
                    <input
                      type="file"
                      class="form-control d-none"
                      id="uploadFile"
                      onChange={(e) => handleFile(e)}
                      multiple
                    />
                    {file.length > 0 && (
                      <div className="details--pic">
                        <table className="table table-striped table-bordered  table-scroll">
                          <thead>
                            <tr>
                              <th scope="col">
                                <p>Type</p>
                              </th>
                              <th scope="col">
                                <p>Document</p>
                              </th>
                              <th scope="col">
                                <p>Size</p>
                              </th>
                              <th scope="col">
                                <p className="para">Last Modifed Date</p>
                              </th>
                              <th scope="col">
                                <p className="para">Delete</p>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {file.map((el, i) => (
                              <tr>
                                <td>{el?.type}</td>
                                <td>{el?.name}</td>
                                <td>{el?.size}</td>
                                <td>{el?.lastModifiedDate.toLocaleString()}</td>
                                <td className="text-center">
                                  <ImCross
                                    className="red"
                                    onClick={() => handleDeleteFile(i)}
                                    style={{ cursor: "pointer" }}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {formik.isSubmitting}
      </div>
    </>
  );
}
