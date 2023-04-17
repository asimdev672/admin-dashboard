import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
export default function CompA7() {
  const A7 = [
    {
      srNo: "VII.I",
      controller: "Resources",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: "VII.II",
      controller: "Competence",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: "VII.III",
      controller: "Awareness",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: "VII.IV",
      controller: "Communication",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    // control: 7.5 = Documented information
    {
      srNo: "VII.V",
      heading: "Documented information",
      tr_color: "#c3ffff",
    },
    {
      srNo: "VII.V.I",
      controller: "General",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: "VII.V.II",
      controller: "Creating and updating",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: "VII.V.III",
      controller: "Control of documented information",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
  ];

  const [controlerA7, setControlerA7] = useState(A7);
  const [show, setShow] = useState(true);

  const handleShowHide = () => {
    setShow(!show);
  };

  // handleInputForm
  const handleInputForm = (val, index) => {
    let newArr = [...controlerA7];
    let obj = newArr[index];
    obj.condition = val;
    newArr[index] = obj;
    setControlerA7(newArr);
  };
  const handleInputFormDes = (val, index) => {
    let newArr = [...controlerA7];
    let obj = newArr[index];
    obj.description = val;
    newArr[index] = obj;
    setControlerA7(newArr);
  };
  // handleFile
  const handleFile = (e, index) => {
    let fileArr = [];
    fileArr.push(...e.target.files);

    let newArr = [...controlerA7];
    let obj = newArr[index];
    obj.files = fileArr;
    newArr[index] = obj;
    setControlerA7(newArr);
  };
  // handleSubmit
  const handleSubmit = (el, index) => {
    console.log("inputData 5", el);
    const updatedData = {
      condition: el.condition,
      description: el.description,
    };
    const newFormData = new FormData();
    newFormData.append("srNo", el.srNo);
    newFormData.append("condition", el.condition);
    newFormData.append("description", el.description);
    newFormData.append("controller", el.controller);
    el?.files?.map((el) => newFormData.append("files", el));
    console.log("newFormData", newFormData);
    axios
      .post("http://localhost:8000/api/v1/iso", newFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("res", res);
        let copArr = [...controlerA7];
        let obj = copArr[index];
        obj.color = true;
        obj.condition = "";
        obj.description = "";
        obj.files = [];
        copArr[index] = obj;
        setControlerA7(copArr);
        toast.success("Successfully Added");
        axios.patch(
          `http://localhost:8000/api/v1/control/updateControl/${el.srNo}`,
          updatedData
        );
        console.log(
          "res",
          ` http://localhost:8000/api/v1/iso/${res.data.data.files}`
        );
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("Something went wrong");
      });
  };
  return (
    <>
      <div className="container-lg container-fluid anexA">
        {/* ***************Begin::Controller For A7****************** */}
        <div className="overflow-hidden">
          <div onClick={handleShowHide} className="mainHeading">
            7 Support
          </div>
          <div className={`${show ? "d-none" : "d-block"}`}>
            <div className={`table-resposive overflow-auto bg-graye`}>
              <table>
                {controlerA7.map((el, index) => (
                  <>
                    {el?.heading ? (
                      <tr style={{ background: el?.tr_color }}>
                        <td>
                          <p style={{ width: "1.5rem" }}>{el.srNo}</p>
                        </td>
                        <td colspan="5">
                          <p className="fw-bold">{el.heading}</p>
                        </td>
                      </tr>
                    ) : (
                      <tr className={`${el.color ? "green" : ""}`}>
                        {/************Begin:: Sr No :***********  */}
                        <td>
                          <p style={{ width: "1.5rem" }}>{el.srNo}</p>
                        </td>
                        {/************End:: Sr No :***********  */}

                        {/************Begin::Controller Name :***********  */}
                        <td>
                          <p
                            className="overflow-hidden"
                            style={{ width: "16rem" }}
                          >
                            {el.controller}
                          </p>
                        </td>
                        {/************Begin::Controller Name :***********  */}
                        <td>
                          <select
                            value={controlerA7[index].condition}
                            name="condition"
                            onChange={(e) =>
                              handleInputForm(e.target.value, index)
                            }
                          >
                            <option value="Unknown">unknown</option>
                            <option value="Non-existent">Non-existent</option>
                            <option value="Initial">Initial</option>
                            <option value="Limited">Limited</option>
                            <option value="Defined">Defined</option>
                            <option value="Managed">Managed</option>
                            <option value="Optimized">Optimized</option>
                            <option value="Not-applicable">
                              Not applicable
                            </option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="mt-3"
                            style={{ height: "40px", width: "17rem" }}
                            value={controlerA7[index].description}
                            name="description"
                            form="usrform"
                            onChange={(e) =>
                              handleInputFormDes(e.target.value, index)
                            }
                          ></textarea>
                        </td>
                        <td>
                          <span className="position-relative d-block">
                            <span className="ico">
                              {controlerA7[index].files.length}
                            </span>
                          </span>
                          <div className="upload-btn-wrapper">
                            <label
                              className="fileUpload"
                              htmlFor={`fileA7${index}`}
                            >
                              Upload a file
                              <input
                                type="file"
                                className="d-none"
                                id={`fileA7${index}`}
                                onChange={(e) => handleFile(e, index)}
                                multiple
                                //  accept='.png, .jpg, .jpeg'
                              />
                            </label>
                          </div>
                        </td>
                        <td>
                          <button
                            className="submitBtn"
                            onClick={() => handleSubmit(el, index)}
                          >
                            Submit
                          </button>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </table>
            </div>
          </div>
        </div>
        {/* ***************End::Controller For A7********************** */}
      </div>
    </>
  );
}
