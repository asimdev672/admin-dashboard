import clsx from "clsx";
import { useFormik } from "formik";
import React, { useState } from "react";
import { TbTriangleInverted } from "react-icons/tb";
import { toast } from "react-toastify";
// import "../../adult_plane/AuditPlane.scss";
import * as Yup from "yup";
export default function AddForm({ setOffCanShow }) {
  const [file, setFile] = useState();
  const AddSchema = Yup.object().shape({
    description: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required field"),
    title: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required field"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      start_date: "",
      end_date: "",
      primay_dimension: "",
      audit_plan: "",
    },
    enableReinitialize: true,
    validationSchema: AddSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("formik Values ", values);
      console.log(formik.errors.title);
    },
  });
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
                          <input type="date" className="form-control" />
                        </div>
                        <div className="col">
                          <label className="form-label">End Date</label>
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
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
                    </div>
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
                      <p className="llbh ms-2 me-5">Project</p>
                    </div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((el) => (
                      <div className="d-flex justify-content-between w-85">
                        <div className="b2">
                          <label className="form-label  llb">
                            Control Perspectives
                          </label>
                        </div>
                        <div className="b2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked
                          />
                        </div>
                        <div className="b2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/*======== 3rd col============  */}
              <div className="col mb-2">
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
              </div>
              {/*======== 4th col============  */}
              <div className="col mb-2">
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
              </div>
            </div>
            {/* <div className="row row-cols-1">
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
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  {file && (
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
                              <p className="para">Last Modified User</p>
                            </th>
                            <th scope="col">
                              <p className="para">Replace</p>
                            </th>
                            <th scope="col">
                              <p className="para">Delete</p>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://cdn.dribbble.com/users/3853254/screenshots/13896095/art-gallery-logo-design_4x.jpg"
                                alt=""
                                style={{ width: "2.5rem" }}
                              />
                            </td>
                            <td>Mark</td>
                            <td>13/12</td>
                            <td>24-0-10</td>
                            <td>Shahana</td>
                            <td>Mark</td>
                            <td>Otto</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="Attachment b1">
                <p className="form--heading">Assignment</p>
                <div className="px-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  neque libero alias porro accusamus totam quidem voluptate et.
                  Aliquid aliquam sunt tenetur laborum ipsa magnam laboriosam
                  totam sint, id architecto.
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </form>
        {/* {formik.isSubmitting} */}
      </div>
    </>
  );
}
