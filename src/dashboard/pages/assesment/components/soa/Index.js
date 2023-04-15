import axios from "axios";
import "../gap/gap.scss";
import html2pdf from "html2pdf.js";
import React, { useEffect, useRef, useState } from "react";

export default function SOA() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:8000/api/v1/control/getAllControls")
        .then((res) => {
          console.log("first", res.data);
          if (res.data.status === "success") {
            setData(res?.data?.data);
          }
        });
    };
    fetchData();
  }, []);
  const pdfRef = useRef();

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      html2pdf().from(pdfRef.current).save();
      setLoading(false);
    }, 2000);
  };
  console.log("data", data);
  return (
    <>
      <div className="container-lg container-fluid text-end mb-3 position-relative">
        <button
          className="btn btn-success position-absolute"
          style={{ background: "#00b85c", right: "0", top: "1.5rem" }}
          onClick={handleDownload}
        >
          {loading ? "Generating..." : "Generate PDF"}
        </button>
      </div>
      <div className="container-lg container-fluid anexA" ref={pdfRef}>
        <h3
          className="text-center mt-2 mb-5"
          style={{ fontWeight: "700", color: "#024264" }}
        >
          Statment Of Applicability
        </h3>
        {/* ***************Begin::Controller For A10****************** */}
        <div className="overflow-hidden">
          <div>
            <div className={`table-resposive overflow-auto bg-graye`}>
              <table>
                <thead className="text-white" style={{ background: "#01527a" }}>
                  <tr>
                    <th scope="col">Section</th>
                    <th scope="col">Infromation Security Control</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    <>
                      {data.map((el) => (
                        <tr key={el.id}>
                          {/* Begin: Sr No */}
                          <td>
                            <p style={{ width: "1.5rem" }}>{el?.srNo}</p>
                          </td>
                          {/* End: Sr No */}

                          {/* Begin: Controller Name */}
                          <td>
                            <p
                              className="overflow-hidden"
                              style={{ width: "16rem" }}
                            >
                              {el?.controller}
                            </p>
                          </td>
                          {/* End: Controller Name */}

                          {/* Begin: Condition */}
                          <td className="bg-danger">Non-Existent</td>
                          {/* End: Condition */}

                          {/* Begin: Description */}
                          <td>{el?.description}</td>
                          {/* End: Description */}
                        </tr>
                      ))}
                    </>
                  ) : (
                    <p className="text-center">No Data found</p>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* ***************End::Controller For A10********************** */}
      </div>
    </>
  );
}
