import React, { useState } from "react";
import {
  BsFillFileSpreadsheetFill,
  BsGrid3X2GapFill,
  BsLayerForward,
} from "react-icons/bs";
import { GiLiquidSoap } from "react-icons/gi";
import SOA from "../assesment/components/soa/Index";
import GAP from "../assesment/components/gap";
export default function Project() {
  const [fileName, setFileName] = useState("");
  const [fileDescription, setFileDescription] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [anexA, setAnexA] = useState("Gap");
  const handleSOAButtonClick = () => {
    // Code to generate SOA
    console.log("SOA generated successfully!");
  };

  const handleGAPButtonClick = () => {
    // Code to generate GAP
    console.log("GAP generated successfully!");
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleFileDescriptionChange = (e) => {
    setFileDescription(e.target.value);
  };

  const handleCompletionDateChange = (e) => {
    setCompletionDate(e.target.value);
  };

  return (
    <>
      <div className="AuditPlane_main">
        <header className="AuditPlane_header px-md-3">
          <p
            className="text-start mb-md-0 mb-2 pt-md-3 fs-6"
            style={{ cursor: "pointer" }}
          >
            Report
          </p>
          <div className="d-flex align-items-center gap-md-4 gap-2 flex-wrap flex--md-nowrap">
            {/* SOA  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main ">
                <GiLiquidSoap
                  className="icc"
                  style={{ color: "#2482ba" }}
                  onClick={() => setAnexA("soa")}
                />
                <span>SOA</span>
              </div>
              <p className="mt-md-3 mt-0">SOA</p>
            </div>
            {/* Gap  */}
            <div className="rightBrd pe-md-4 pe-1 pt-md-3 pt-1 ">
              <div className="ico--main ">
                <BsGrid3X2GapFill
                  className="icc"
                  style={{ color: "red" }}
                  onClick={() => setAnexA("Gap")}
                />
                <span>Gap</span>
              </div>
              <p className="mt-md-3 mt-0">Gap</p>
            </div>
          </div>
        </header>
        <div className="AuditPlane_body">
          {anexA === "soa" ? (
            <div className="">
              <SOA />
            </div>
          ) : (
            ""
          )}
          {anexA === "Gap" ? (
            <div className="">
              <GAP />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
