import React from "react";
import "./SignUp.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-init";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;
        // The email of the user's account used.
      });
  };

  return (
    <div className="container-f">
      <div className="signin-container">
        <h1>SignUp</h1>
        <div>
          <form className="form-container">
            <input
              className="input-email"
              type="text"
              name="text"
              id="text"
              placeholder="Your Name"
            />
            <input
              className="input-email"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="input-password"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button type="submit" className="form-submit">
              Login
            </button>
            <p>
              Already have an account?
              <span className="toggle" onClick={() => navigate("/SignIn")}>
                Login
              </span>
            </p>
          </form>

          <div className="divider">
            <div className="line-left"></div>
            <p>or</p>

            <div className="line-right"></div>
          </div>
          <div className="google-logo">
            <button className="btn-google" onClick={googleAuth}>
              <img src={GoogleLogo} alt="" />
              <p> Continue with Google </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
