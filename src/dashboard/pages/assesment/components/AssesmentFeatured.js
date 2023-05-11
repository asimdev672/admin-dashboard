import React from "react";

export default function AssesmentFeatured({
  label,
  name,
  handleAssesmentFeatured,
  assesmentFeatured,
  setAssesmentFeatured,
}) {
  return (
    <>
      <div className="d-flex justify-content-between w-85">
        <div className="b2">
          <label className="form-label  llb">{label}</label>
        </div>
        <div className="b2">
          <input
            className="form-check-input"
            name={name}
            onChange={(e) => handleAssesmentFeatured(e)}
            type="checkbox"
          />
        </div>
        {/* <div className="b2">
          <input className="form-check-input" type="checkbox" />
        </div> */}
      </div>
    </>
  );
}
