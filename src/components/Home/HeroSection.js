import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="xbg-[#050511] relative flex h-[600aapx] lg:pt-[200px] sm:pt-[100px]  justify-center items-center py-14 ">
        <img
          src="/images/hero.png"
          alt="Hero Image"
          className="hidden md:block absolute top-206 -z-1 left-0"
        />
        <div className="text-center lg:w-full px-8 md:px-0 xl:w-[50%]  relative space-y-4">
          <img
            src="/images/shadowcc.png"
            alt="Hero Image"
            className=" absolute  -top-44 -left-56 "
          />
          <h1 className="textColor custom-text  font-sora leading-tight">
            Buy, Sell and Trade your favorite startups
          </h1>
          <div className=" mt-0 flex justify-center items-center">
            <p className="text-[#F3F3FF] mt-20 w-[280px] text-base md:text-lg">
              Invest in startups because value is not just currency
            </p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-manrope  text-white text-sm h-[40px] w-[174px] px-1 rounded-full shadow-md transition-all duration-300 ease-in-out btn-ext">
            Get started
          </button>
        </div>
        <img
          src="/images/hero1.png"
          alt="Hero Image"
          className="hidden md:block absolute right-0 top-206"
        />
      </div>
      <div className=" flex justify-center items-center lg:pt-[100px] pb-16 ">
        <img
          src="/images/Exchange.svg"
          alt="Hero Image"
          className="w-auto max-w-full px-8  mx-auto  h-auto"
        />
      </div>
    </>
  );
};

export default HeroSection;
