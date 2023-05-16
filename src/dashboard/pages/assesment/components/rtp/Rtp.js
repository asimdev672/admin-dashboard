import {
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RangeDirective,
  SpreadsheetComponent,
  ColumnDirective,
  ColumnsDirective,
  getCell,
} from "@syncfusion/ej2-react-spreadsheet";
import * as React from "react";
import "./Rtp.scss";
export default function RTP() {
  let ssObj = SpreadsheetComponent;
  const onCreated = () => {
    ssObj.cellFormat(
      { fontWeight: "bold", backgroundColor: "#ced4da" },
      "A1:O1"
    );
  };

  let data = [
    {
      Nr: "0",
      Operation_Unit: "Example Router",
      Name_Of_Asset: "TP-Link",
      At_Origin_Description: "Model tl300",
      OS_Software_Tools_Versions: "firmware 13.9",
      Threat: "Higjacking, MITM, Intercept",
      Vulnerabilities: "No encryption",
      Confidentiality: "3",
      Integrity: "2",
      availability: "4",
      Asset_Evaluation: { formula: "=Sum(H2:J2)" },
      business_Impact: "3",
      Likelihood: ".3",
      Risk: { formula: "=K2*L2*M2" },
      General_Mitigation___ISO_27001_Controls___NIST_SP_800_53_Controls___PCIDSS:
        "Apply strong login password, encrypt communication channel",
    },
  ];
  const columns = [
    { width: 30 },
    { width: 120 },
    { width: 120 },
    { width: 150 },
    { width: 190 },
    { width: 100 },
    { width: 100 },
    { width: 100 },
    { width: 100 },
    { width: 100 },
    { width: 100 },
    { width: 110 },
    { width: 70 },
    { width: 50 },
    { width: 520 },
  ];

  const setFormula = (args) => {
    if (args && args.value && args.address === "K2") {
      const formula = `=SUM(H2:J2)`;
      const eventArgs = {
        value: formula,
        address: "K2",
      };
      ssObj.setCellFormat(eventArgs);
    }
  };

  return (
    <>
      <h3
        class="text-center my-4"
        style={{ fontWeight: "700", color: "#024264" }}
      >
        RTP
      </h3>
      <div className="RTP">
        <div className="excel-container">
          <SpreadsheetComponent
            ref={(s = SpreadsheetComponent) => (ssObj = s)}
            allowOpen={true}
            created={onCreated}
            allowCellFormatting={true}
            openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
            allowSave={true}
            saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
            dataBound={() => {
              ssObj.cellFormat({ fontWeight: "bold" }, "A1:M1");
            }}
            cellSave={(args) => {
              setFormula(args);
            }}
            style={{ height: "100%", width: "100%" }}
          >
            <SheetsDirective>
              <SheetDirective>
                <RangesDirective>
                  <RangeDirective dataSource={data}></RangeDirective>
                </RangesDirective>
                <ColumnsDirective>
                  {columns.map((col, index) => (
                    <ColumnDirective
                      key={index}
                      width={col.width}
                      style={{ wrap: true }}
                    />
                  ))}
                </ColumnsDirective>
              </SheetDirective>
            </SheetsDirective>
          </SpreadsheetComponent>
        </div>
      </div>
    </>
  );
}
