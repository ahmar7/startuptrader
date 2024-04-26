import Google from "../../assets/img/Google.png";
import Socials from "../../assets/img/Socials.png";
import disc from "../../assets/img/disc.png";
import Vector from "../../assets/img/Vector.png";
import right from "../../assets/img/right.png";
import left from "../../assets/img/left.png";
import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="relative signup-main">
      <img src={left} alt="" className="left-texture" />
      <img src={right} alt="" className="righ-texture" />
      <div className="form">
        <h1 className="form-heading">Welcome back</h1>
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

              <button className="sign-btn">Log in</button>
            </div>
          </div>
        </form>
        <div className="divider">or log in with</div>
        <div className="social-login">
          <button>
            <img src={Google} alt="" /> Google
          </button>
          <button>
            <img src={Socials} alt="" /> Facebook
          </button>
        </div>
        <div className="switch">
          Don't have an account?{" "}
          <Link to="/signup" className="theme-color">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
