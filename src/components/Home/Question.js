import React from "react";
import DisclosureComp from "../Disclosure/Disclosure";
import { DisclosureData } from "../Constant/index";
const Question = () => {
  return (
    <div className="flex gap-6 md:justify-between w-full md:flex-row flex-col py-12 px-8 lg:px-40 ">
      <div className="flex flex-col gap-2 ">
        <p className="text-[#FFFFFF] text-[42px] font-sora">
          Have Any Questions?
        </p>
        <p className="text-[18px] text-[#F3F3FF] font-sora">
          Haven't found your question?
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-manrope text-[14px] text-white text-sm h-[40px] w-[174px] mt-7 px-1 rounded-full shadow-md transition-all duration-300 ease-in-out">
          Contact us
        </button>
      </div>
      <div className="w-full flex flex-col gap-5">
        {DisclosureData.map((v) => (
          <DisclosureComp title={v.title} para={v.para} />
        ))}
      </div>
    </div>
  );
};

export default Question;
