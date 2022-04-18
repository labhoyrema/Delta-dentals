import React, { useState } from "react";
import "./SignUp.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../firebase-init";
import toast from "react-hot-toast";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });
  // input error handleling *****************************************
  const handleEmail = (event) => {
    if (/\S+@\S+\.\S+/.test(event)) {
      setEmail({ value: event, error: "" });
    } else {
      setEmail({ value: "", error: "Invalid Email" });
    }
  };
  const handlePassword = (event) => {
    if (event.length < 7) {
      setPassword({ value: "", error: "password too short" });
    } else {
      setPassword({ value: event, error: "" });
    }
  };
  const handleConfirmPassword = (event) => {
    if (event === password.value) {
      setConfirmPassword({ value: event, error: "" });
    } else {
      setConfirmPassword({ value: "", error: "Password doesn't match" });
    }
  };
  // Google Loging *****************************************

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

  //******************************* */ submit form function
  const handleSignup = (event) => {
    event.preventDefault();

    if (email.value === "") {
      setEmail({ value: "", error: "Email is required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is required" });
    }

    if (
      email.value &&
      password.value &&
      confirmPassword.value === password.value
    ) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          verifyEmail();
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
          if (errorMessage.includes("email-already-in-use")) {
            toast.error("Already Exist", { id: "error" });
          } else {
            toast.error(errorMessage, { id: "error" });
          }
        });
      console.log("Signup");
    }
  };
  //***************************** */ Email veryfication send
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
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
              required
            />

            {email?.error ? <p className="errors">{email.error}</p> : ""}
            <input
              onBlur={(event) => handlePassword(event.target.value)}
              className="input-password"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            {password?.error ? <p className="errors">{password.error}</p> : ""}
            <input
              onBlur={(event) => handleConfirmPassword(event.target.value)}
              className="input-email"
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="confirm password"
            />
            {confirmPassword?.error ? (
              <p className="errors">{confirmPassword.error}</p>
            ) : (
              ""
            )}
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
