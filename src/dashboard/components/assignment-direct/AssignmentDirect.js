import React, { useState } from "react";
import "./AssignmentDirect.scss";
import { AiFillSetting } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { MdOutlineSyncAlt } from "react-icons/md";
import { TbTriangleInverted } from "react-icons/tb";
import Setting from "../../drawer/Setting";
import Expand from "../../drawer/Expand";
import Filter from "../../drawer/Filter";
import { Offcanvas } from "react-bootstrap";
export default function AssignmentDirect() {
  const [offCanShow, setOffCanShow] = useState(false);
  const [settingDrawer, setSettingDrawer] = useState(false);
  const [expandDrawer, setExpandDrawer] = useState(false);
  // handleSettingDrawer
  const handleSettingDrawer = () => {
    setSettingDrawer(!settingDrawer);
  };
  // handleExpandDrawer
  const handleExpandDrawer = () => {
    setExpandDrawer(!expandDrawer);
  };
  // handleFilterDrawer
  const handleClose = () => setOffCanShow(false);
  const handleShow = () => setOffCanShow(true);
  return (
    <>
      <div className="assignmentDirect_main">
        <div className="assign_card">
          <header>
            <div className="d-flex justify-content-between align-items-center py-2 px-1">
              <h5>My Assignments: Direct</h5>
              <div className="d-flex gap-md-3 gap-2 ">
                {/* expand icons  */}
                <MdOutlineSyncAlt
                  className="pointer"
                  onClick={handleExpandDrawer}
                />
                <div className="position-relative">
                  <div className={expandDrawer ? "d-block" : "d-none"}>
                    <Expand
                      expandDrawer={expandDrawer}
                      setExpandDrawer={setExpandDrawer}
                    />
                  </div>
                </div>
                {/* filter icons  */}
                <FaFilter className="pointer" onClick={handleShow} />
                {/* setting icons  */}
                <AiFillSetting
                  className="me-2 pointer"
                  onClick={handleSettingDrawer}
                />
                <div className="position-relative">
                  <div className={settingDrawer ? "d-block" : "d-none"}>
                    <Setting />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="table-responsive-md table-main">
            <table className="table table-borderless  table-scroll">
              <thead>
                <tr>
                  <th scope="col">
                    <p>
                      <TbTriangleInverted className="me-1" />
                      Title
                    </p>
                  </th>
                  <th scope="col">
                    <p>
                      <TbTriangleInverted className="me-1" />
                      Area
                    </p>
                  </th>
                  <th scope="col">
                    <p>
                      <TbTriangleInverted className="me-1" />
                      State
                    </p>
                  </th>
                  <th scope="col">
                    <p className="para">
                      <TbTriangleInverted className="me-1" />
                      Due Date
                    </p>
                  </th>
                  <th scope="col">
                    <p className="para">
                      <TbTriangleInverted className="me-1" />
                      Review Due Date
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shahana</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ==========  Filter ========== */}

      <Offcanvas
        placement="top"
        name="top"
        show={offCanShow}
        onHide={handleClose}
      >
        <Offcanvas.Body className="bg-white">
          <Filter setOffCanShow={setOffCanShow} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
