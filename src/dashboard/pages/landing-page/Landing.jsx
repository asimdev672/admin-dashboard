import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
export default function Landing() {
  return (
    <>
      {/* <div className="background-image--b"></div> */}
      <div className="Landing_main">
        {/* section 1  */}
        <section className="section--A">
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
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#software">
                      Our Software
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item ">
                    <Link className=" nav-link " to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className=" landing-btn mb-0" to="/sign-up">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="landing--body">
            <div id="home" className="container">
              <div className="row row-cols-md-2 row-cols-1 mt-5">
                <div className="col ">
                  <div className=" pt-md-5  pt-2 ps-3 content">
                    <h1 className="mb-5">Manage Tomorrow’s Surprises Today</h1>
                    <p>
                      ISO27K1 Toolkit audit management software system automates
                      tasks so that companies can successfully pass regulatory
                      audits
                    </p>

                    <p>
                      ISO27k1 Toolkit has all the major features other audit
                      tools don’t have and also fully automated the process of
                      security audit against the standard ISO27001. This toolkit
                      generates an automated security audit report by following
                      the standard “ISO27001” and the toolkit has all the
                      necessary features that are needed to perform a security
                      audit.
                    </p>

                    <button className="landing-btn">Get Started</button>
                  </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                  <img src="\img\hero--1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 2  */}
        <section id="software" className="section--B mt-md-5 mt-2 pt-md-5">
          <div className="container">
            <div className="row row-cols-md-2 row-cols-1">
              <div className="col">
                <h1>Our Software</h1>
                <p>
                  The Cyber threats are increasing day by day due to lack of
                  implementation of cyber security standards and companies allow
                  auditors to perform audit in order to maintain a check and
                  balance over the security of the organization. A security
                  audit is the evaluation of the security posture of the
                  organization against an audit checklist of the standards like
                  ISO27001, etc.
                </p>
                <p>
                  The security auditors use the automated tools for the audit
                  process as there are a lot of security audit tools present in
                  the market that automate the process of auditing but none of
                  them is considered being the complete package for security
                  audit, so the security auditors have to use more than one tool
                  to perform the audit for the organizations. We build a toolkit
                  that would have all the necessary features for a comprehensive
                  security audit.
                </p>
              </div>
              <div className="col">
                <div>
                  <h1 className=" ps-4 pp">ISO27k1 Toolkit built</h1>

                  <ul>
                    <li> Full two-way API capability</li>
                    <li> Real time synchronization</li>
                    <li> Fully encrypted working environment</li>
                    <li> Using only ISO27001 as standard </li>
                    <li> Best-in-class data security protocols</li>
                    <li>SMART offline working</li>
                    <li>• A Web based interface (i.e. Nessus)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 3  */}
        <section className="section--C mt-md-5 mt-2 py-3 pt-md-5">
          <div className="container">
            <h1 className="text-center">Want to get started?</h1>
            <button className="landing-btn mt-3">Go TO Dashboard</button>
          </div>
        </section>
        {/* section 4  */}
        <section id="about" className="section--B mt-md-5 mt-2 pt-md-5">
          <div className="container">
            <div className="row row-cols-md-2 row-cols-1">
              <div className="col">
                <h1>About Us</h1>
                <p>
                  ISO27k1 Toolkit is about more than just file sharing. Our
                  software solutions are an operating system purpose-built to
                  help you, your team, and your clients increase productivity.
                </p>
                <p>
                  Better Auditing Experience with ISO27K1 Toolkit, We built
                  ISO27k1 Toolkit for you. Our mission is to make your
                  professional life easier.
                </p>
                <p>
                  An integrated audit management software system helps you
                  comply with the standards of a wide range of internal and
                  external audits.
                </p>
              </div>
              <div className="col">
                <img src="\img\hero--2.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <footer className="landing--footer">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-12">
                <ul>
                  <a className="nav-link" href="#home">
                    <li>Home</li>
                  </a>
                  <a className="nav-link" href="#software">
                    <li>Our Software</li>
                  </a>
                  <a className="nav-link" href="#about">
                    <li>About Us</li>
                  </a>
                  <Link className="nav-link" to="/login">
                    <li>Login</li>
                  </Link>
                  <Link className="nav-link" to="/sign-up">
                    <li>Sign Up</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center mt-4">
            Copyright 2023. All Rights Reserved
          </p>
        </footer>
      </div>
    </>
  );
}
