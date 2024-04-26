import React from "react";

const HeroSection = ({ title, para }) => {
  return (
    <div className="xbg-[#050511] relative flex h-[600aapx] lg:pt-[200px] sm:pt-[100px]  justify-center items-center py-14 ">
      <div className="text-center lg:w-full px-8 md:px-0 xl:w-[50%]  relative space-y-4">
        <img
          src="/images/shadowcc.png"
          alt="Hero Image"
          className=" absolute  -top-44 -left-56 "
        />
        <h1 className="textColor custom-text   font-sora leading-tight">
          {title}
        </h1>
        <div className=" pb-6 pt-2 flex justify-center items-center">
          <p className="text-[#F3F3FF] w-[320px] text-base md:text-lg">
            {para}
          </p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-manrope  text-white text-sm h-[40px] w-[174px] px-1 rounded-full shadow-md transition-all duration-300 ease-in-out btn-ext">
          Get started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
