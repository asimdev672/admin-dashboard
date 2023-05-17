import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { toast } from "react-toastify";
import AssignmentDirect from "../../components/assignment-direct/AssignmentDirect";
import AddWidgetForm from "../../components/widgets/AddWidgetForm";
import "./Home.scss";
import StackedColumn from "../../widgets/Chart";
import CirculeChart from "../../widgets/CirculeChart";
import BarChart from "../../widgets/BarChart";
import BoxChart from "../../widgets/BoxChart";
import DonutChart from "../../widgets/DonutChart";
import Monochrome from "../../widgets/PiesChartB";
export default function Home() {
  const [show, setShow] = useState(false);
  // handleAddWidgetForm
  const handleAddWidgetForm = () => {
    setShow(!show);
    if (show) {
      toast.success("Successfully Added");
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
            <div className="row">
              <div className="col-12 mb-3">
                <AssignmentDirect />
              </div>
              <div>
                <div className="row row-cols-md-2 row-cols-1">
                  <div className=" mb-3">
                    <div className="chart_card">
                      <StackedColumn />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="chart_card px-2">
                      <CirculeChart />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="chart_card px-2">
                      <BarChart />
                    </div>
                  </div>
                  <div className=" mb-3">
                    <div className="chart_card px-2">
                      <BoxChart />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="chart_card px-2">
                      <DonutChart />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="chart_card px-2">
                      <Monochrome />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2nd tab  */}
          <Tab eventKey="Widgets" title="Custom Widgets">
            <div className="AddWidgetForm_main">
              <div className="text-end">
                <button className="addBtn" onClick={handleAddWidgetForm}>
                  {show ? "save" : "Add +"}
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
