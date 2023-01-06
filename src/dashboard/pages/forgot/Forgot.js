import React from 'react'
import { Link } from 'react-router-dom'
import './Forgot.scss'
export default function Forgot() {
  return (
    <>
     <div className="login_main" >
        <div className="login_card">
          <h1>TeamMate+</h1>
          <p>please enter your username or email to rest your password :</p>
          <div className="d-flex flex-column">
            <input type="text" placeholder="username Or Email" />
            <Link to='/forgot-password'>
            <button>Forgot Password</button>
            </Link>
            <Link to='/login' className="text-end decroation">
            <span className="white ss">Login?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
