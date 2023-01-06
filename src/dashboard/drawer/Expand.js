import React from "react";

export default function Expand({ expandDrawer, setExpandDrawer }) {
  return (
    <>
      <div className="ExpandDrawer_main">
        <div className="d-flex gap-4">
          <div>Width</div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              25%
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              50%
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              75%
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              100%
            </label>
          </div>
        </div>
        <div className="btnBox d-flex justify-content-end gap-3 px-3">
          <button onClick={() => setExpandDrawer(!expandDrawer)}>ok</button>
          <button onClick={() => setExpandDrawer(!expandDrawer)}>cancel</button>
        </div>
      </div>
    </>
  );
}
