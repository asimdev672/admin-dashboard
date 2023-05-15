import React from "react";
import { FaFileExcel } from "react-icons/fa";
// import sampleExcelFile from "./sample_excel_file.xlsx";
import "./Asset_inventory.scss";

export default function AssetInventory() {
  // const handleExportExcel = () => {
  //   window.open(sampleExcelFile)
  // };
  return (
    <div className="audit-plane-body">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center pt-3 border-bottom">
          <p className="asset-head">Asset Inventory</p>
          <button className="btn btn-primary mr-2">
            <i className="fa fa-file-excel-o"></i> Export to Excel
          </button>
          {/* <button className="export-excel-btn" onClick={handleExportExcel}>
            <FaFileExcel />
          </button> */}
        </div>
        <div className="row pt-4">
          <div className="col-md-12">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h6 className="mb-3">Asset Name</h6>
                <p className="mb-3">Asset ID</p>
                <p className="mb-3">Category</p>
                <p className="mb-3">Quantity</p>
                <p className="mb-3">Description</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="blueBtn">View Details</button>
                  <button className="blueBtn">Edit</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h6 className="mb-3">Asset Name</h6>
                <p className="mb-3">Asset ID</p>
                <p className="mb-3">Category</p>
                <p className="mb-3">Quantity</p>
                <p className="mb-3">Description</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="blueBtn">View Details</button>
                  <button className="blueBtn">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="attractive-design">
          <p>
            An up-to-date asset inventory is essential for effective risk
            management and RTP. It helps identify, categorize, and prioritize
            assets for risk assessment, ensuring the implementation of
            appropriate security controls and mitigation measures. Asset
            inventory plays a critical role in the overall risk management
            process for an organization following the ISO 27001 standard, which
            is the focus of the ISO 27001 Toolkit project.
          </p>
        </div>
      </div>
    </div>
  );
}
