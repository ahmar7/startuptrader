import left_bg_referral from "../../../assets/img/left-bg-referral.webp";
import right_bg_referral from "../../../assets/img/right-bg-referral.webp";
import React from "react";
import "./Background.css";
const Background = () => {
  return (
    <div>
      <div className="shadow-bottom  absolute inset-[0] max-h-[100vh] flex overflow-hidden">
        <img
          className="h-full flex-[0_0_50%] opacity-[0.2] object-contain"
          src={left_bg_referral}
          alt="[]"
        />
        <img
          className="h-full flex-[0_0_50%] opacity-[0.2] object-contain hidden laptop:block"
          src={right_bg_referral}
          alt="[]"
        />
      </div>
    </div>
  );
};

export default Background;
