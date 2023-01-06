import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { ImCross } from "react-icons/im";

export default function Filter({ setOffCanShow }) {
  const [type, setType] = useState([
    { name: "Administrators", id: 1 },
    { name: "Manager Reviewers", id: 2 },
    { name: "DefaultAICGroup_TMR9", id: 3 },
  ]);
  const [state, setState] = useState([
    { name: "Not Started", id: 1 },
    { name: "In Progress", id: 2 },
    { name: "Issued", id: 3 },
  ]);
  const [selectedValue, setSelectedValue] = useState({});
  const onSelect = (selectedList, selectedItem) => {};
  const onRemove = (selectedList, removedItem) => {};
  return (
    <>
      <div className="container-fluid">
        <div className=" filterDrawer_main">
          <header className="fhm d-flex justify-content-between py-2 ps-3">
            <div onClick={() => setOffCanShow(false)}>
              <ImCross className="pointer" />
            </div>
            <div>
              <button className="me-3" style={{ background: "#287cac" }}>Apply</button>
              <button style={{ background: "red" }}>Clear All</button>
            </div>
          </header>
          <div className="flter_body py-3">
            <div className="container">
              <form>
                <div className="mb-3">
                  <div className="row row-cols-md-3 row-cols-1">
                    <div className="col">
                      <label className="form-label">Object Type</label>
                      {/* multi select dropdown  */}
                      <Multiselect
                        options={type}
                        selectedValues={selectedValue}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        showCheckbox={true}
                      />
                    </div>
                    <div className="col">
                      <label className="form-label">State</label>
                      {/* multi select dropdown  */}
                      <Multiselect
                        options={state}
                        selectedValues={selectedValue}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        showCheckbox={true}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="filter_footer d-flex justify-content-center">
            <button>
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
