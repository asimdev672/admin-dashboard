import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
export default function CompA10() {
  const A10 = [
    {
      srNo: 7.1,
      controller: "Physical security perimeters",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.2,
      controller: "Physical entry",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
          { point_a: "#Identity_and_Access_Management" },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.3,
      controller: "Securing offices, rooms and facilities",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
          { point_a: "#Asset_management" },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.4,
      controller: "Physical security monitoring",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
          { point_a: "#Detective" },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
          { point_a: "#Detect" },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
          { point_a: "Defence" },
        ],
      },
    },
    {
      srNo: 7.5,
      controller: "Protecting against physical and environmental threats",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.6,
      controller: "Working in secure areas",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.7,
      controller: "Clear desk and clear screen",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.8,
      controller: "Equipment siting and protection",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
          { point_a: "#Asset_management" },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.9,
      controller: "Security of assets off-premises",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
          { point_a: "#Asset_management" },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.1,
      controller: "Storage media",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
          { point_a: "#Asset_management" },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.11,
      controller: "Supporting utilities",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
          { point_a: "#Detective" },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
          { point_a: "#Detect" },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.12,
      controller: "Cabling security",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
    {
      srNo: 7.13,
      controller: "Equipment maintenance",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
          { point_a: "#Asset_management" },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
          { point_a: "Resilience" },
        ],
      },
    },
    {
      srNo: 7.14,
      controller: "Secure disposal or re-use of equipment",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
          { point_a: "#Asset_management" },
        ],
        td_e: [
          {
            point_a: "Protection",
          },
        ],
      },
    },
  ];

  const [controlerA10, setControlerA10] = useState(A10);
  const [show, setShow] = useState(true);

  const handleShowHide = () => {
    setShow(!show);
  };

  // handleInputForm
  const handleInputForm = (val, index) => {
    let newArr = [...controlerA10];
    let obj = newArr[index];
    obj.condition = val;
    newArr[index] = obj;
    setControlerA10(newArr);
  };
  const handleInputFormDes = (val, index) => {
    let newArr = [...controlerA10];
    let obj = newArr[index];
    obj.description = val;
    newArr[index] = obj;
    setControlerA10(newArr);
  };
  // handleFile
  const handleFile = (e, index) => {
    let fileArr = [];
    fileArr.push(...e.target.files);

    let newArr = [...controlerA10];
    let obj = newArr[index];
    obj.files = fileArr;
    newArr[index] = obj;
    setControlerA10(newArr);
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
        let copArr = [...controlerA10];
        let obj = copArr[index];
        obj.color = true;
        obj.condition = "";
        obj.description = "";
        obj.files = [];
        copArr[index] = obj;
        setControlerA10(copArr);
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
        {/* ***************Begin::Controller For A10****************** */}
        <div className="overflow-hidden">
          <div onClick={handleShowHide} className="mainHeading">
            10 Context of the organisation
          </div>
          <div className={`${show ? "d-none" : "d-block"}`}>
            <div className={`table-resposive overflow-auto bg-graye`}>
              {controlerA10.map((el, index) => (
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
                        value={controlerA10[index].condition}
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
                        value={controlerA10[index].description}
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
                          {controlerA10[index].files.length}
                        </span>
                      </span>
                      <div className="upload-btn-wrapper">
                        <label
                          className="fileUpload"
                          htmlFor={`fileA10${index}`}
                        >
                          Upload a file
                          <input
                            type="file"
                            className="d-none"
                            id={`fileA10${index}`}
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
        {/* ***************End::Controller For A10********************** */}
      </div>
    </>
  );
}
