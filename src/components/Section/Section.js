import React from "react";

const Section = ({ title, shadow, img }) => {
  return (
    <div className="flex lg:pt-[100px] pb-16 justify-center flex-col text-center relative items-center px-8  ">
      {shadow && (
        <img
          src="/images/leftshadow.svg"
          alt="Hero Image"
          className=" -top-24px6 absolute -z-1 right-0"
        />
      )}
      <p className="text-xl lg:text-4xl lg:w-[600px]  text-[#FFFFFF] font-sora">
        {title}
      </p>

      <div className=" flex justify-center  items-center py-16 ">
        <img
          src={img}
          alt="Hero Image"
          className="w-auto max-w-full mx-auto  h-auto"
        />
      </div>
    </div>
  );
};

export default Section;
