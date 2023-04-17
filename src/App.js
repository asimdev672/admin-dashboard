import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./dashboard/pages/login/Login";
import Home from "./dashboard/pages/home/Home";
import Dashboard from "./dashboard/Dashboard";
import Assesment from "./dashboard/pages/assesment/Assesment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuditPlane from "./dashboard/pages/audit_plane/AuditPlane";
import Project from "./dashboard/pages/project/Project";
import Forgot from "./dashboard/pages/forgot/Forgot";
import Landing from "./dashboard/pages/landing-page/Landing";
import SignUp from "./dashboard/pages/signUp/SignUp";
import CompanyForm from "./dashboard/pages/company-form/CompanyForm";
import TimeTracking from "./dashboard/pages/time-tracking/TimeTracking";
import DocumentInventory from "./dashboard/pages/document_inventory/documentInventory";
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="company-form" element={<CompanyForm />} />
            <Route path="forgot-password" element={<Forgot />} />
            {/*===============Begin:: dashboard ========== */}
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Home />} />
              <Route path="assesment" element={<Assesment />} />
              <Route
                path="document-inventory"
                element={<DocumentInventory />}
              />
              <Route path="audit-plane" element={<AuditPlane />} />
              <Route path="time-tracking" element={<TimeTracking />} />
              <Route path="project" element={<Project />} />
              {/*===============End:: dashboard ========== */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
