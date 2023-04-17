import React from "react";

export default function DocumentInventory() {
  return (
    <>
      <div className="container">
        <h3 className="text-center my-4" style={{ color: "#01527a" }}>
          Document Inventory{" "}
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
                    <p>Upload File</p>
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
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((e) => (
                  <tr>
                    <td>Shahana</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>24-0-10</td>
                    <td>3:17</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
