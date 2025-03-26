import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import './Login.css';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false); // Track if signup form is active

    const toggleForm = () => {
        setIsSignup(!isSignup); // Toggle between login and signup
    };

    return (
        <div className={`wrapper ${isSignup ? 'active' : ''}`}>
            <div className={`form-box login ${isSignup ? '' : 'active'}`}>
                <form onSubmit={(e) => { e.preventDefault(); /* Handle login here */ }}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder=' Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder=' Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forget">
                        <label><input type='checkbox' /> Remember Me  </label>  
                        <a href='#'> Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? 
                            <a href='#' onClick={toggleForm}> Sign up</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className={`form-box signup ${isSignup ? 'active' : ''}`}>
                <form onSubmit={(e) => { e.preventDefault(); /* Handle signup here */ }}>
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="text" placeholder=' Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder=' Email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder=' Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forget">
                        <label><input type='checkbox' /> I agree to the Terms & Conditions</label><br /><br />
                    </div>
                    <button type="submit">Sign up</button>
                    <div className="register-link">
                        <p>Already have an account? 
                            <a href='#' onClick={toggleForm}> Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
