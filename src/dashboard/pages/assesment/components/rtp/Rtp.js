import {
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RangeDirective,
  SpreadsheetComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-spreadsheet";
import * as React from "react";
import "./Rtp.scss";
export default function RTP() {
  let ssObj = SpreadsheetComponent;
  const onCreated = () => {
    ssObj.cellFormat(
      {
        fontWeight: "bold",
        backgroundColor: "#ced4da",
        fontsize: "18pt",
        rowheight: "",
      },
      "A1:H1"
    );
  };

  let data = [
    {
      Nr: "",
      Operation_Unit: "",
      Name_Of_Asset: "",
      At_Origin_Description: "",
      OS_Software_Tools_Versions: "",
      Threat: "",
      Vulnerabilities: "",
      General_Mitigation___ISO_27001_Controls___NIST_SP_800_53_Controls___PCIDSS:
        { value: "Google", hyperlink: "https://www.google.com/" },
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
    { width: 520 },
  ];

  return (
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
          style={{ height: "100%", width: "100%" }}
        >
          <SheetsDirective>
            <SheetDirective>
              <RangesDirective>
                <RangeDirective
                  dataSource={data}
                  startCell="A1"
                  endCell="K2"
                  rowHeight={30}
                ></RangeDirective>
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
  );
}
