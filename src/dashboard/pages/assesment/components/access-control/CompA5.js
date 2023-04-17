import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { BiHelpCircle } from "react-icons/bi";
export default function CompA5() {
  const A5 = [
    {
      srNo: "V.I",
      controller: "Leadership and commitment",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: "V.II",
      controller: "Policy",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: "V.III",
      controller: "Organizational roles, responsibilities and authorities",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
  ];

  const [controlerA5, setControlerA5] = useState(A5);
  console.log("controlerA5", controlerA5);
  const [show, setShow] = useState(true);

  const handleShowHide = () => {
    setShow(!show);
  };

  // handleInputForm
  const handleInputForm = (val, index) => {
    let newArr = [...controlerA5];
    let obj = newArr[index];
    obj.condition = val;
    newArr[index] = obj;
    setControlerA5(newArr);
  };
  const handleInputFormDes = (val, index) => {
    let newArr = [...controlerA5];
    let obj = newArr[index];
    obj.description = val;
    newArr[index] = obj;
    setControlerA5(newArr);
  };
  // handleFile
  const handleFile = (e, index) => {
    let fileArr = [];
    fileArr.push(...e.target.files);

    let newArr = [...controlerA5];
    let obj = newArr[index];
    obj.files = fileArr;
    newArr[index] = obj;
    setControlerA5(newArr);
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
        let copArr = [...controlerA5];
        let obj = copArr[index];
        obj.color = true;
        obj.condition = "";
        obj.description = "";
        obj.files = [];
        copArr[index] = obj;
        setControlerA5(copArr);
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
        {/* ***************Begin::Controller For A5****************** */}
        <div className="overflow-hidden">
          <div onClick={handleShowHide} className="mainHeading">
            5 Leadership
          </div>
          <div className={`${show ? "d-none" : "d-block"}`}>
            <div className={`table-resposive overflow-auto bg-graye`}>
              <table>
                {controlerA5.map((el, index) => (
                  <tr className={`${el.color ? "green" : ""}`}>
                    {/************Begin:: Sr No :***********  */}
                    <td>
                      <p style={{ width: "1.5rem" }}>{el.srNo}</p>
                    </td>
                    {/************End:: Sr No :***********  */}

                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <p
                        id="data"
                        className="overflow-hidden"
                        style={{ width: "16rem" }}
                      >
                        {el.controller}
                      </p>
                    </td>
                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <select
                        value={controlerA5[index].condition}
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
                        value={controlerA5[index].description}
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
                          {controlerA5[index].files.length}
                        </span>
                      </span>
                      <div className="upload-btn-wrapper">
                        <label
                          className="fileUpload"
                          htmlFor={`fileA5${index}`}
                        >
                          Upload a file
                          <input
                            type="file"
                            className="d-none"
                            id={`fileA5${index}`}
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
                ))}
              </table>
            </div>
          </div>
        </div>
        {/* ***************End::Controller For A5********************** */}
      </div>
    </>
  );
}
