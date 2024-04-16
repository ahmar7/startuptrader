import Google from "../../assets/img/Google.png";
import Socials from "../../assets/img/Socials.png";
import disc from "../../assets/img/disc.png";
import Vector from "../../assets/img/Vector.png";
import right from "../../assets/img/right.png";
import left from "../../assets/img/left.png";
import React, { useState } from "react";
import "./forgot.css";
import { Link } from "react-router-dom";
const Forgot = () => {
  const [isDone, setisDone] = useState(false);
  let forgotP = () => {
    setisDone(true);
  };
  return (
    <div>
      {isDone ? (
        <div className="show-confirm relative signup-main">
          <img src={left} alt="" className="left-texture" />
          <img src={right} alt="" className="righ-texture" />
          <div className="form">
            <h1 className="form-heading">An email was sent</h1>
            <p className="form-sub">
              We’ve sent you an email to Example@gmail.com, with an detailing
              instruction how to reset your password.
            </p>
            <form
              action="
        "
              className="main-form"
            >
              <div className="inputfields">
                <input
                  className="email-input"
                  placeholder="Email"
                  type="email"
                  name=""
                  id=""
                />
              </div>
            </form>

            <div className="switch">
              <Link to="/login" className="theme-color">
                Return to Login
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative signup-main">
          <img src={left} alt="" className="left-texture" />
          <img src={right} alt="" className="righ-texture" />
          <div className="form">
            <h1 className="form-heading">Forgot Password?</h1>
            <p className="form-sub">
              No worries. Enter your email address and we will send you a link
              to reset your password
            </p>
            <form
              action="
        "
              className="main-form"
            >
              <div className="inputfields">
                <input
                  className="email-input"
                  placeholder="Email"
                  type="email"
                  name=""
                  id=""
                />
              </div>
              <button type="button" onClick={forgotP} className="sign-btn">
                Send
              </button>
            </form>

            <div className="switch">
              <Link className="theme-color">Return to Login</Link>
            </div>
          </div>
        </div>
      )}
      {/* {isDone && (
        <div className="show-confirm">
          <img src={left} alt="" className="left-texture" />
          <img src={right} alt="" className="righ-texture" />
          <div className="form">
            <h1 className="form-heading">An email was sent</h1>
            <p className="form-sub">
              We’ve sent you an email to Example@gmail.com, with an detailing
              instruction how to reset your password.
            </p>
            <form
              action="
        "
              className="main-form"
            >
              <div className="inputfields">
                <input
                  className="email-input"
                  placeholder="Email"
                  type="email"
                  name=""
                  id=""
                />
              </div>
            </form>

            <div className="switch">
              <Link to="/login" className="theme-color">
                Return to Login
              </Link>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Forgot;
