import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import HelpModal from "./HelpModal";
import { BiHelpCircle } from "react-icons/bi";
export default function CompA6() {
  const A6 = [
    {
      srNo: 6.1,
      controller: "Screening",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "Preventive",
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
            point_a: "#Human_resource_security",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
        ],
      },
    },
    {
      srNo: 6.2,
      controller: "Terms and conditions of employment",
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
        td_d: [{ point_a: "#Defence" }],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
        ],
      },
    },
    {
      srNo: 6.3,
      controller: "Information security awareness, Education and training",
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
            point_a: "#Human_resource_security",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
        ],
      },
    },
    {
      srNo: 6.4,
      controller: "Disciplinary process",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
          { point_a: "#corrective" },
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
          { point_a: "#Respond" },
        ],
        td_d: [
          {
            point_a: "#Human_resource_security",
          },
        ],
        td_e: [{ point_a: "#Defence" }],
      },
    },
    {
      srNo: 6.5,
      controller: "Responsibilities after termination or change of employment",
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
            point_a: "Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Human_resource_security",
          },
          { point_a: "#Asset_management" },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
        ],
      },
    },
    {
      srNo: 6.6,
      controller: "Confidentiality or non-disclosure agreements",
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
            point_a: "Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Human_resource_security",
          },
          { point_a: " #Information_protection" },
          { point_a: " #Supplier_relationships" },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
        ],
      },
    },
    {
      srNo: 6.7,
      controller: "Remote working",
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
            point_a: "#Asset_management",
          },
          { point_a: "#Information_protection" },
          { point_a: "#Physical_security" },
          { point_a: "#System_and_network_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 6.8,
      controller: "Information security event reporting",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Detective",
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
            point_a: "#Detect",
          },
        ],
        td_d: [
          {
            point_a: "#Information_security_event_managementProtection",
          },
        ],
        td_e: [
          {
            point_a: "#Defence",
          },
        ],
      },
    },
  ];

  const [controlerA6, setControlerA6] = useState(A6);
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(true);
  const [data, setdata] = useState({});

  const handleClose = () => setModalShow(false);
  const handleShow = (el) => {
    setModalShow(true);
    setdata(el);
  };

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
            6 Context of the organisation
          </div>
          <div className={`${show ? "d-none" : "d-block"}`}>
            <div className={`table-resposive overflow-auto bg-graye`}>
              <table>
                {controlerA6.map((el, index) => (
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
                    <td>
                      <span onClick={() => handleShow(el?.help_data)}>
                        <BiHelpCircle title="help" className="ico2" />
                      </span>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
        {/* ***************End::Controller For A6********************** */}
      </div>
      {/******************* Help Modal ************************** */}
      <Modal show={modalShow} size="lg" onHide={handleClose} animation={false}>
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <HelpModal data={data} />
        </Modal.Body>
      </Modal>
    </>
  );
}
