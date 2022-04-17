import React from "react";
import "./SignIn.css";
import GoogleLogo from "../../images/google.svg";

const SignIn = () => {
  return (
    <div className="signin-container">
      <h1>Longin</h1>
      <div>
        <form className="form-container">
          <input
            className="input-email"
            type="text"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            className="input-password"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit" className="form-submit">
            Login
          </button>
        </form>

        <div className="divider">
          <div className="line-left"></div>
          <p>or</p>

          <div className="line-right"></div>
        </div>
        <div className="google-logo">
          <button className="btn-google">
            <img src={GoogleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
