import React from 'react'
import { Link } from 'react-router-dom'
import './Forgot.scss'
export default function Forgot() {
  return (
    <>
    <div class="background-image"></div>
        <div className="login_main">
        <h1>ISO27K1 Toolkit </h1>
        <div className="login_card">
          <p>Forgot Password ?</p>
          <div className="d-flex flex-column">
            <label htmlFor="">
              Enter you username or email adress
            </label>
            <input type="text" placeholder="Email or Username" />
            <span className='ign'>Ignore</span>
            <Link to="/dashboard">
              <button>Request</button>
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
  )
}
