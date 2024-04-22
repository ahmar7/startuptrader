import dark_logo from "../../assets/img/dark-logo.png";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className=" navbar">
      <div className="section-width flex-sp">
        <Link to="/">
          <img src={dark_logo} className="logo" alt="" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link className="active">Home</Link>
          </li>
          <li>
            <Link>Exchange</Link>
          </li>
          <li>
            <Link>For Companies</Link>
          </li>
          <li>
            <Link>Founder Page</Link>
          </li>
          <li>
            <Link>For Investors</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
        <div className="account-btns">
          <button className="login-btn">Log in</button>
          <button className="exchange-btn">Exchange</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
