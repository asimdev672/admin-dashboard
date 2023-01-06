import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./dashboard/pages/login/Login";
import Home from "./dashboard/pages/home/Home";
import Dashboard from "./dashboard/Dashboard";
import Assesment from "./dashboard/pages/assesment/Assesment";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuditPlane from "./dashboard/pages/adult_plane/AuditPlane";
import Project from "./dashboard/pages/project/Project";
import Forgot from "./dashboard/pages/forgot/Forgot";
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path='login' element={<Login />} />
            <Route path="forgot-password" element={<Forgot />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Home />} />
              <Route path="assesment" element={<Assesment />} />
              <Route path="audit-plane" element={<AuditPlane />} />
              <Route path="project" element={<Project />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
