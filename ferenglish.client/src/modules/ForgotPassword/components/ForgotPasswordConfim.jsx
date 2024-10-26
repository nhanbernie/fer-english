import React from "react";
import { Link } from "react-router-dom"; 
import Email_Illustration from "./Email_Illustration.png";
import "../styles/ForgotPassword.scss"; 

//  ForgotPasswordConfirm
function ForgotPasswordConfirm() {
  return (
    <div className="forgot-password">
      {/* Logo and Title Section */}
      <div className="logo-container">
        <img 
          src="https://placehold.co/100x100" 
          alt="FER English logo" 
        />
        <h1>FER English</h1>

        {/* Form Container for Forgot Password */}
        <div className="form-container">
          <h2>Forgot Password</h2>
          <p>Enter the email address associated with your FER English account</p>

          {/* Illustration and Description Box */}
          <div>
            <div className="forgot-password-box--img">
              <img 
                src={Email_Illustration} 
                alt="Email Illustration" 
              />
            </div>
            <p className="forgot-password-box--desc">
              Please check your email account for further instructions.
            </p>
          </div>

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

export default ForgotPasswordConfirm;
