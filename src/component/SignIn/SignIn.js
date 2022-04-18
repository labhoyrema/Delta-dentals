import React, { useState } from "react";
import "./SignIn.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase-init";

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(email);
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
  const handleEmail = (event) => {
    setEmail(event);
  };
  const handlePassword = (event) => {
    setPassword(event);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="container-fm ">
      <div className="signin-container">
        <h1>Longin</h1>
        <div>
          <form className="form-container">
            <input
              onChange={(event) => handleEmail(event.target.value)}
              className="input-email"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              onChange={(event) => {
                handlePassword(event.target.value);
              }}
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
