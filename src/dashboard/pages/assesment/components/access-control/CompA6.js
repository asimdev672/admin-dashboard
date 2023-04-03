import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
export default function CompA6() {
  const A6 = [
    // control:6.1 = Actions to address risks and opportunities
    {
      srNo: "6.1.1",
      controller: "General",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: "6.1.2",
      controller: "Information security risk assessment",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: "6.1.3",
      controller: "Information security risk treatment",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 6.2,
      controller:
        "Information security objectives and planning to achieve them",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 6.3,
      controller: "Planning of changes",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
  ];

  const [controlerA6, setControlerA6] = useState(A6);
  const [show, setShow] = useState(true);

  const handleShowHide = () => {
    setShow(!show);
  };

  // handleInputForm
  const handleInputForm = (val, index) => {
    let newArr = [...controlerA6];
    let obj = newArr[index];
    obj.condition = val;
    newArr[index] = obj;
    setControlerA6(newArr);
  };
  const handleInputFormDes = (val, index) => {
    let newArr = [...controlerA6];
    let obj = newArr[index];
    obj.description = val;
    newArr[index] = obj;
    setControlerA6(newArr);
  };
  // handleFile
  const handleFile = (e, index) => {
    let fileArr = [];
    fileArr.push(...e.target.files);

    let newArr = [...controlerA6];
    let obj = newArr[index];
    obj.files = fileArr;
    newArr[index] = obj;
    setControlerA6(newArr);
  };
  // handleSubmit
  const handleSubmit = (el, index) => {
    console.log("inputData 5", el);
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
        let copArr = [...controlerA6];
        let obj = copArr[index];
        obj.color = true;
        obj.condition = "";
        obj.description = "";
        obj.files = [];
        copArr[index] = obj;
        setControlerA6(copArr);
        toast.success("Successfully Added");
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
        {/* ***************Begin::Controller For A6****************** */}
        <div className="overflow-hidden">
          <div onClick={handleShowHide} className="mainHeading">
            Planning
          </div>
          <div className={`${show ? "d-none" : "d-block"}`}>
            <div className={`table-resposive overflow-auto bg-graye`}>
              {controlerA6.map((el, index) => (
                <table key={index}>
                  <tr className={`${el.color ? "green" : ""}`}>
                    {/************Begin:: Sr No :***********  */}
                    <td>
                      <p style={{ width: "1rem" }}>{el.srNo}</p>
                    </td>
                    {/************End:: Sr No :***********  */}

                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <p className="overflow-hidden" style={{ width: "16rem" }}>
                        {el.controller}
                      </p>
                    </td>
                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <select
                        value={controlerA6[index].condition}
                        name="condition"
                        onChange={(e) => handleInputForm(e.target.value, index)}
                      >
                        <option value="Unknown">unknown</option>
                        <option value="Non-existent">Non-existent</option>
                        <option value="Initial">Initial</option>
                        <option value="Limited">Limited</option>
                        <option value="Defined">Defined</option>
                        <option value="Managed">Managed</option>
                        <option value="Optimized">Optimized</option>
                        <option value="Not-applicable">Not applicable</option>
                      </select>
                    </td>
                    <td>
                      <textarea
                        className="mt-3"
                        style={{ height: "40px", width: "17rem" }}
                        value={controlerA6[index].description}
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
                          {controlerA6[index].files.length}
                        </span>
                      </span>
                      <div className="upload-btn-wrapper">
                        <label
                          className="fileUpload"
                          htmlFor={`fileA6${index}`}
                        >
                          Upload a file
                          <input
                            type="file"
                            className="d-none"
                            id={`fileA6${index}`}
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
                </table>
              ))}
            </div>
          </div>
        </div>
        {/* ***************End::Controller For A6********************** */}
      </div>
    </>
  );
}
