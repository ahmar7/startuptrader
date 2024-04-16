import Google from "../../assets/img/Google.png";
import Socials from "../../assets/img/Socials.png";
import disc from "../../assets/img/disc.png";
import Vector from "../../assets/img/Vector.png";
import right from "../../assets/img/right.png";
import left from "../../assets/img/left.png";
import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="relative signup-main">
      <img src={left} alt="" className="left-texture" />
      <img src={right} alt="" className="righ-texture" />
      <div className="form">
        <h1 className="form-heading">Create your account</h1>
        <p className="form-sub">Enter your email to continue</p>
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
            <div className="password-field">
              <input type="password" placeholder="Password" name="" id="" />
              <img src={Vector} className="eye" alt="" />
              <div className="password-terms">
                <p>Password must include:</p>
                <ul className="flex-t">
                  <li>
                    <img src={disc} alt="" /> Minimum 8 characters
                  </li>
                  <li>
                    <img src={disc} alt="" />1 special character
                  </li>
                </ul>
                <ul className="flex-t">
                  <li>
                    <img src={disc} alt="" />1 upper & lowercase letter
                  </li>
                  <li>
                    <img src={disc} alt="" />1 number
                  </li>
                </ul>
              </div>
              <div className="terms">
                <input type="checkbox" />
                <p>
                  I accept the{" "}
                  <span className="theme-color">Terms of Service</span> &{" "}
                  <span className="theme-color">Privacy Policy</span>
                </p>
              </div>
              <button className="sign-btn">Sign up</button>
            </div>
          </div>
        </form>
        <div className="divider">or continue with</div>
        <div className="social-login">
          <button>
            <img src={Google} alt="" /> Google
          </button>
          <button>
            <img src={Socials} alt="" /> Facebook
          </button>
        </div>
        <div className="switch">
          Already have an account?{" "}
          <Link to="/login" className="theme-color">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
