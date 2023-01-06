import React from "react";
import { Link } from "react-router-dom";
// import logBg from '../../../../public/img/login.jpg'
// style={{ backgroundImage: `url(${logBg})` }}
import "./Login.scss";
const Login = () => {
  return (
    <>
      <div className="login_main" >
        <div className="login_card">
          <h1>TeamMate+</h1>
          <p>please login with your TeamMate condition below:</p>
          <div className="d-flex flex-column">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <Link to='/dashboard'>
            <button>Login</button>
            </Link>
            <Link to='/forgot-password' className="text-end decroation">
            <span className="white ss">forgot password?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
