import React, { useState } from "react";
import "./SignUp.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase-init";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  const handleEmail = (event) => {
    setEmail(event);
  };
  const handlePassword = (event) => {
    setPassword(event);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event);
  };

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // ...
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;
        // The email of the user's account used.
      });
  };
  const handleSignup = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    console.log("Signup");
  };

  return (
    <div className="container-f">
      <div className="signin-container">
        <h1>SignUp</h1>
        <div>
          <form className="form-container" onSubmit={handleSignup}>
            <input
              onBlur={(event) => handleEmail(event.target.value)}
              className="input-email"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              onBlur={(event) => handlePassword(event.target.value)}
              className="input-password"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              onBlur={(event) => handleConfirmPassword(event.target.value)}
              className="input-email"
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="confirm password"
            />
            <button type="submit" className="form-submit">
              SignUp
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
