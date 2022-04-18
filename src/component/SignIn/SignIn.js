import React, { useState } from "react";
import "./SignIn.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase-init";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  //Google Login signin *******************************************************
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;
        // The email of the user's account used.
      });
  };
  /// erroor handleling *******************************************************
  const handleEmail = (event) => {
    setEmail({ value: event, error: "" });
  };
  const handlePassword = (event) => {
    setPassword({ value: event, error: "" });
  };

  // Login *********************************** Function**********************

  const handleLogin = (event) => {
    event.preventDefault();

    if (email.value && password.value) {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };
  // Forget password reset
  const handlePasswordreset = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("email send");
    });
  };
  return (
    <div className="container-fm ">
      <div className="signin-container">
        <h1>Longin</h1>
        <div>
          <form className="form-container" onSubmit={handleLogin}>
            <input
              onBlur={(event) => handleEmail(event.target.value)}
              className="input-email"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              onBlur={(event) => {
                handlePassword(event.target.value);
              }}
              className="input-password"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <span className="reset" onClick={handlePasswordreset}>
              Forget Password
            </span>
            <button type="submit" className="form-submit">
              Login
            </button>

            <p>
              Dalta Dental ?
              <span className="toggle" onClick={() => navigate("/SignUp")}>
                Create New Account
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

export default SignIn;
