import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { toast } from "react-toastify";
import AssignmentDirect from "../../components/assignment-direct/AssignmentDirect";
import AddWidgetForm from "../../components/widgets/AddWidgetForm";
import "./Home.scss";
export default function Home() {
  const [show, setShow] = useState(false);
  // handleAddWidgetForm
  const handleAddWidgetForm = () => {
    setShow(!show);
    if (show) {
      toast.success('Successfully Added')
    }
  };
  return (
    <>
      <div className="home_main">
        <Tabs
          defaultActiveKey="Dashboard"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          {/* 1st tab  */}
          <Tab eventKey="Dashboard" title="My Dashboard">
            <div className="row mb-3">
              <div className="col-12 col-md-8">
                <AssignmentDirect />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <AssignmentDirect />
              </div>
            </div>
          </Tab>
          {/* 2nd tab  */}
          <Tab eventKey="Widgets" title="Custom Widgets">
            <div className="AddWidgetForm_main">
              <div className="text-end">
                <button className="addBtn" onClick={handleAddWidgetForm}>
                  {show?'save':'Add +'}
                </button>
              </div>
              {show && <AddWidgetForm />}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
