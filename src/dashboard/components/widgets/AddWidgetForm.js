import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
export default function AddWidgetForm() {
  const [options, setOptions] = useState([
    { name: "Administrators", id: 1 },
    { name: "Manager Reviewers", id: 2 },
    { name: "DefaultAICGroup_TMR9", id: 3 },
  ]);
  const [selectedValue, setSelectedValue] = useState({});
  const onSelect = (selectedList, selectedItem) => {
  };
  const onRemove = (selectedList, removedItem) => {};
  return (
    <>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              * Title
            </label>
            <input type="text" className="form-control" id="titleInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="urlInput" className="form-label">
              * URL
            </label>
            <input
              type="text"
              className="form-control"
              id="urlInput"
              aria-describedby="urlHelp"
            />
            <div id="urlHelp" className="form-text">
              Please make sure this is a trusted site. TeamMate is not
              responsible for any errors or malicious content exposed by the
              source.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="urlInput" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div className="mb-3">
            <div className="row row-cols-md-3 row-cols-1">
              <div className="col">
                <label className="form-label">* Group</label>
                {/* multi select dropdown  */}
                <Multiselect
                  options={options}
                  selectedValues={selectedValue}
                  onSelect={onSelect}
                  onRemove={onRemove}
                  displayValue="name"
                  showCheckbox={true}
                />
              </div>
              <div className="col">
                <label className="form-label">* Width</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="25">25%</option>
                  <option value="2">50%</option>
                  <option value="3">75%</option>
                  <option value="3">100%</option>
                </select>
              </div>
              <div className="col">
                <label className="form-label">* Width</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="25">1.1</option>
                  <option value="2">4.3</option>
                  <option value="3" selected>
                    16.9
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Active
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
