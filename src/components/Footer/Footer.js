import React from "react";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import BrowserStartUpIcon from "../Icons/BrowserStartUpIcon";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col element items-center px-8    main-footer pt-8">
      <div className="grid grid-cols-1 section-width md:grid-cols-2 lg:grid-cols-4 gap-8  px-0sm py-4 bg-[#050511]">
        <div className="">
          <img
            src="/images/dark.png"
            alt="Logo"
            className="w-[200px] h-auto mb-2"
          />
          <p className="text-[14px] font-manrope text-BrowserStartUpIcon text-[#CCCED5]">
            Startup Trader: Invest in startups because value is not just
            currency. Let your investments shape the future.
          </p>
          <div className="flex gap-4 mt-12">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </div>
        <div className="lg:pl-16 flex flex-col gap-3">
          <p className="text-[14px] font-sora font-semibold text-[#FFFFFF]">
            About
          </p>
          {["About us", "Career", "Blog"].map((v) => (
            <p key={v} className="text-[14px] font-manrope text-[#FFFFFF]">
              {v}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[14px] font-sora font-semibold text-[#FFFFFF]">
            Services
          </p>
          {["Exchange", "Career", "Blog"].map((v) => (
            <p key={v} className="text-[14px] font-manrope text-[#FFFFFF]">
              {v}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[14px] font-sora font-semibold text-[#FFFFFF]">
            Contact
          </p>
          {["Help center", "Career", "Blog"].map((v) => (
            <p key={v} className="text-[14px] font-manrope text-[#FFFFFF]">
              {v}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-between py-12 items-center w-full">
        <p className="text-[#CCCED5] text-[12px] font-sora">
          StartupTrader 2022. All rights reserved
        </p>

        <div className="flex  gap-3">
          {["Privacy Polisy", "Terms & conditions", "Cookies"].map((v) => (
            <p className="text-[#CCCED5] text-[12px] font-sora">{v}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
