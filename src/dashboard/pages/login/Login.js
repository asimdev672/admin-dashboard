import React from "react";
import { Link } from "react-router-dom";

import "./Login.scss";
const Login = () => {
  return (
    <>
    <div class="background-image"></div>
      <div className="login_main">
        <h1>ISO27K1 Toolkit </h1>
        <div className="login_card">
          <p>Sign in to you account:</p>
          <div className="d-flex flex-column">
            <input type="text" placeholder="Email or Username" />
            <input type="password" placeholder="password" />
            <Link to="/forgot-password" className="text-start decroation mb-3">
              <span>forgot password?</span>
            </Link>
            <Link to="/dashboard">
              <button>Sign In</button>
            </Link>
          </div>
        </div>
        <div className="d-flex hustify-content-center gap-4 mt-3 ftt">
          <p>Don't have an account yet?</p>
          <Link to="/sign-up" className="text-start decroation mb-3">
              <span>Sign Up?</span>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
