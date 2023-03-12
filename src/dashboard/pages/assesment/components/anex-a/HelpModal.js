import React from "react";

export default function HelpModal({ data }) {
  console.log("data");
  const handleFont = {
    fontSize: "15px",
    fontWeight: "600",
    width: "max-content",
  };
  const handlebodyFont = {
    fontSize: "small",
    // fontWeight: "600",
    width: "max-content",
  };
  return (
    <>
      <div className={`table-resposive overflow-auto bg-graye`}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <p style={handleFont}>Control type</p>
              </th>
              <th scope="col">
                <p style={handleFont}>
                  Information security properties
                </p>
              </th>
              <th scope="col">
                <p style={handleFont}>Cybersecurity concept</p>
              </th>
              <th scope="col">
                <p style={handleFont}>Operational capabilities</p>
              </th>
              <th scope="col">
                <p style={handleFont}>Security domain</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {data?.td_a?.map((el) => (
                  <p style={handlebodyFont}>{el?.point_a}</p>
                ))}
              </td>
              <td>
                {data?.td_b?.map((el) => (
                  <p style={handlebodyFont}>{el?.point_a}</p>
                ))}
              </td>
              <td>
                {data?.td_c?.map((el) => (
                  <p style={handlebodyFont}>{el?.point_a}</p>
                ))}
              </td>
              <td>
                {data?.td_d?.map((el) => (
                  <p style={handlebodyFont}>{el?.point_a}</p>
                ))}
              </td>
              <td>
                {data?.td_e?.map((el) => (
                  <p style={handlebodyFont}>{el?.point_a}</p>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
