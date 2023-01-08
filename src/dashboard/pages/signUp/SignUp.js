import React from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
    {/* <div class="background-image"></div> */}
      <div className="SignUp_main">
        <div className="container">
          <div className="row row-cols-md-2 row-cols-1">
            <div className="col mt-md-4 mt-3">
              <div>
                <div className="SignUp_card">
                  <div className="pb-4" style={{ padding: "3.3rem" }}>
                    <p>Create an account </p>
                    <div className="d-flex flex-column">
                      <label htmlFor="">* Email</label>
                      <input type="email" placeholder="Email" />
                      <label htmlFor="">* Password</label>
                      <input type="password" placeholder="password" />
                      <p className="ss-span">
                        By signing up,you confirm that you've read and accept
                        our
                        <span>Terms of Service</span> and
                        <span>Privacy Policy</span>
                      </p>
                      <Link to="/company-form">
                        <button>Sign Up</button>
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-1 align-items-center ftt">
                    <p className="mb-0">Already have an account ?</p>
                    <Link to="/login" className="text-start decroation">
                      <span>Sign In</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="left-box px-3">
                <h2>ISO27K1 Toolkit </h2>
                <li style={{listStyle:'none'}}>Get started free</li>
                <p>
                  ISO27k1 Toolkit is built for purpose to assist audit teams
                  efficiently and effectively move through the audit workflow.
                  From establishing annual plans to planning audits, from
                  fieldwork and execution to reporting, to closing the audit and
                  follow up. ISO27k1 Toolkit is an end-to-end audit management
                  and workflow solution
                </p>
                <li>PLANE</li>
                <p>
                  Collect risk and control data from third-party systems
                  Reference historical insights Develop audit plans mapped to
                  resource capacity.
                </p>
                <li>EXCUTE</li>
                <p>
                  100% sample testing Team-based workflow Project templates and
                  content libraries.
                </p>
                <li>REPORT</li>
                <p>
                  Auto-generate audit reports Connect with tools for customizing
                  reporting Status tracking for greater agility.
                </p>
                <li>FOLLOW UP</li>
                <p>
                  Auditee portal for response tracking Share issues with other
                  systems Store insights for future use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
