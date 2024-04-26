import React from "react";
import Shadow from "../../assets/img/shadow.png";
const TopTrading = () => {
  return (
    <div className="relatvie">
      <img
        src="/images/shadowtop.svg"
        alt="Hero Image"
        className=" absolute left-0   "
      />

      <div className="flex justify-center flex-col text-center items-center px-8 section-width lg:pt-[150px] md:pt-[100px]  sm:pt-[50px]  py-16">
        <p className="text-xl lg:text-[42px]  md:text-[32px]   smtext-28px   text-[#FFFFFF] font-sora">
          Top trading startups
        </p>
        <p className="text-[14px] md:w-[500px] lg:text-[18px] pt-6 text-[#F3F3FF] font-sora">
          Explore innovative trading startups revolutionizing investments for
          tomorrow
        </p>
        <div className=" flex justify-center relative items-center py-16 ">
          <img
            src="/images/top.svg"
            alt="Hero Image"
            className="w-auto max-w-full mx-auto  h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TopTrading;
