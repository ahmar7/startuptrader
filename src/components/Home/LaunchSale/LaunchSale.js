import React from "react";
import "./LaunchSale.css";

const LaunchSale = () => {
  return (
    <div className="services">
      <div className="launch_section centerText borderTop borderBottom">
        <div className="middleEl max-width">
          {" "}
          <img
            src="https://scaleswap.io/wp-content/themes/html5/img/icons/rocket_icon.svg"
            alt="rocket IDO"
          />
          <h2 className="titleBox">
            <span className="orange">Launch on Stacknova</span>
            <br /> <span className="apply-subheading">Empower Your Vision</span>
          </h2>
          <p>
            {" "}
            Elevate your DeFi project with Stacknova's incubation, providing end-to-end support and robust vetting. Leverage our community-driven platform for lasting success in Bitcoin DeFi.
          </p>{" "}
          <a
            className="showmore effect btn_launch_iel"
            href="javascript:void(0)"
          >
            Apply for IDO
          </a>
        </div>
        <div className="bck_back" />
      </div>
    </div>
  );
};

export default LaunchSale;
