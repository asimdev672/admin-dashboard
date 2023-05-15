import axios from "axios";
import Modal from "react-bootstrap/Modal";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function DocumentInventory() {
  const [mData, setMData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    console.log(e);
    setShow(true);
    setMData(e);
  };
  const [file, setFile] = useState({});
  console.log(file);
  const [isRefresh, setIsRefresh] = useState(false);
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState([]);
  const [fileDescription, setFileDescription] = useState("");
  useEffect(() => {
    const fetchInventry = () => {
      axios.get("http://localhost:8000/api/v1/getAll").then((res) => {
        console.log(res);
        if (res?.data?.data) {
          setData(res?.data?.data);
        }
      });
    };
    fetchInventry();
  }, [isRefresh]);

  const getCurrentDate = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return date;
  };

  const getCurrentTime = () => {
    const today = new Date();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
  };
  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("name", fileName);
    formData.append("description", fileDescription);
    formData.append("date", getCurrentDate());
    formData.append("time", getCurrentTime());
    formData.append("files", file);
    if (formData) {
      axios
        .post("http://localhost:8000/api/v1/uploadFile", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success("Successfully Upload");
          setFile({});
          setFileName("");
          setFileDescription("");
          setIsRefresh(!isRefresh);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Some Thing went Wrong");
        });
    }
  };
  return (
    <>
      <div className="container">
        <h3 className="text-center my-4" style={{ color: "#01527a" }}>
          Document Inventory{" "}
        </h3>
        <div>
          <div
            className="table-responsive-md AudiltTable-main"
            style={{ height: "7rem" }}
          >
            <table className="table table-striped table-bordered  table-scroll">
              <thead>
                <tr>
                  <th scope="col">
                    <p>File Name</p>
                  </th>
                  <th scope="col">
                    <p>Choose File</p>
                  </th>
                  <th scope="col">
                    <p>File Description</p>
                  </th>
                  <th scope="col">
                    <p>Upload File</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      value={fileName}
                      onChange={(evt) => setFileName(evt.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      onChange={(evt) => setFile(evt.target.files[0])}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={fileDescription}
                      onChange={(evt) => setFileDescription(evt.target.value)}
                    />
                  </td>
                  <td>
                    <label
                      // htmlFor="fileUpload"
                      className="blueBtn"
                      onClick={() => handleFileUpload()}
                    >
                      Upload
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {data?.length > 0 && (
          <>
            {" "}
            <h3 className="text-center my-4" style={{ color: "#01527a" }}>
              Veiw Inventory{" "}
            </h3>
            <div>
              <div className="table-responsive-md AudiltTable-main">
                <table className="table table-striped table-bordered  table-scroll">
                  <thead>
                    <tr>
                      <th scope="col">
                        <p>File Name</p>
                      </th>
                      <th scope="col">
                        <p>File Description</p>
                      </th>
                      <th scope="col">
                        <p className="para">Date of Uploading</p>
                      </th>
                      <th scope="col">
                        <p className="para">Time</p>
                      </th>
                      <th scope="col">
                        <p>Veiw File</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((e, i) => (
                      <>
                        <tr key={e}>
                          <td>{e?.name}</td>
                          <td>{e?.description}</td>
                          <td>{e?.date}</td>
                          <td>{e?.time}</td>
                          <td>
                            <button
                              onClick={() => handleShow(e)}
                              className="blueBtn"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {mData?.type === "image" ? (
            <div className="text-center">
              <img
                src={`http://localhost:8000/${mData?.file}`}
                alt=""
                style={{ height: "13rem" }}
                className="img-fluid"
              />
            </div>
          ) : (
            <div className="text-center">
              <a href={`http://localhost:8000/${mData?.file}`} download>
                Download File
              </a>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
