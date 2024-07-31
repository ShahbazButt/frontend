import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
       <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="login"?<></>: <input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>BY continuing. i agree to the the terms of use & privacy policy.</p>
            </div>
            {currState==="login"?<p>Create a new account?<span onClick={()=>setCurrState("Sign up")}>Cick here</span></p>:<p>Already have ana account? <span onClick={()=>setCurrState("login")}>Login here</span></p>}
        </div>
       </form>
    </div>
  )
}

export default LoginPopup
