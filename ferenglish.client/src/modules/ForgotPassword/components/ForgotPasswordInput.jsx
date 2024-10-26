import React from "react"; 
import { Link } from "react-router-dom"; 
import "../styles/ForgotPassword.scss"; 

//  ForgotPasswordInput 
function ForgotPasswordInput() {
  return (
    <div className="forgot-password">
      {/* Logo and Header Section */}
      <div className="logo-container">
        <img 
          src="https://placehold.co/100x100" 
          alt="FER English logo" 
        />
        <h1>FER English</h1>

        {/* Form Container for User Input */}
        <div className="form-container">
          <h2>Forgot Password</h2>
          <p>
            Enter the email address associated with your FER English account
          </p>

          {/* Email Input Field */}
          <input 
            type="email" 
            placeholder="Enter your email address" 
          />

          {/* Confirm Button */}
          <button>Confirm</button>

          {/* Navigation Links to Sign In and Sign Up */}
          <div className="back-links">
            <p className="navigate-container">
              <span>Back to</span>&nbsp;
              <Link to="/signin">Sign in</Link>&nbsp;&nbsp;
              <span>or</span>&nbsp;&nbsp;
              <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordInput;
