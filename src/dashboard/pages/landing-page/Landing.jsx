import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
export default function Landing() {
  return (
    <>
      <div className="background-image--b"></div>
      <div className="Landing_main">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              ISO27K1 Toolkit
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Abt">
                    Our Software
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-up">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="landing--body">
          <div className="container">
            <div className="row row-cols-md-2 row-cols-1 mt-5">
              <div className="col ">
                <div className=" pt-md-5  pt-2 px-5 content">
                  <h1 className="mb-5">Manage Tomorrow’s Surprises Today</h1>
                  <p>
                    ISO27K1 Toolkit audit management software system automates
                    tasks so that companies can successfully pass regulatory
                    audits.
                  </p>

                  <button></button>
                </div>
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <img src="\img\Invoicing.jpg" alt="" />
              </div>
            </div>
            {/* about ======================= */}
            <div id='Abt' className="about">
              {/* <h3 className="text-center">About us</h3>
             <div className="row row-cols-md-2 row-cols-1">
              <div className="col mb-3">
                <h1>Better Auditing Experience with ISO27K1 Toolkit, We built ISO27k1 Toolkit for you.</h1>

              </div>
              <div className="col mb-3">
              <div>
                <img src="\img\about.jpg" alt="" className="img-fluid" />
              </div>
              </div>
             </div> */}
              <div className="container-fluid">
                <p className="About__heading mb-0 text-center">About Me</p>
                <small className=" d-block text-center small--text">
                  Our mission is to make your professional life easier :)
                </small>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-12">
                      <img
                        src="\img\about.jpg"
                        className="img-fluid h-100"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8 col-12">
                      <p className="About__logo-heading mt-3">
                        WHY ISO27K1 TOOLKIT
                      </p>
                      <h5 className="about_h">
                        <span className="pe-2" style={{ color: "#236a94" }}>
                          ISO27k1 Toolkit
                        </span>
                        is about more than just file sharing. Our software
                        solutions are an operating system purpose-built to help
                        you, your team, and your clients increase productivity.
                      </h5>
                      <p className="About__para">
                        An integrated audit management software system helps you
                        comply with the standards of a wide range of internal
                        and external audits.
                        <br />
                         ISO27k1 Toolkit has all the major features other audit
                        tools don’t have and also fully automated the process of
                        security audit against the standard ISO27001. This
                        toolkit generates an automated security audit report by
                        following the standard “ISO27001” and the toolkit has
                        all the necessary features that are needed to perform a
                        security audit.
                        <br /> ISO27k1 Toolkit helps regulated companies
                        automate core document and data quality management
                        processes across the product life cycle to promote
                        collaboration, improve decision-making, and ensure
                        compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* our Software  */}
              {/* <div className="software">
              <p className="About__heading mt-5 mb-0 text-center">Our Software</p>
              <p>
              The Cyber threats are increasing day by day due to lack of implementation of cyber security standards and companies allow auditors to perform audit in order to maintain a check and balance over the security of the organization. A security audit is the evaluation of the security posture of the organization against an audit checklist of the standards like ISO27001, etc.  
The security auditors use the automated tools for the audit process as there are a lot of security audit tools present in the market that automate the process of auditing but none of them is considered being the complete package for security audit, so the security auditors have to use more than one tool to perform the audit for the organizations. We build a toolkit that would have all the necessary features for a comprehensive security audit.
ISO27k1 Toolkit has all the major features other audit tools don’t have and also fully automated the process of security audit against the standard ISO27001. This toolkit generates an automated security audit report by following the standard “ISO27001” and the toolkit has all the necessary features that are needed to perform a security audit.

              </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
