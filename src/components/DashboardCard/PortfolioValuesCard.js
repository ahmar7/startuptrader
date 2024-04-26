import React from "react";
import UpValueIcon from "../Icons/UpValueIcon";
import { AreaChart } from "../Chart/Areachart";
import { AreachartLoss } from "../Chart/AreachartLoss";

const PortfolioValuesCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-24px font-manrope">
      <div className="bg-[#1C2642] flex flex-col rounded-2xl  mt-5 p-24px w-full ">
        <p className="text-lg font-bold text-white">Portfolio Value</p>
        <h1 className="font-bold text-3xl text-white mt-6">$214.65</h1>
        <div className="flex items-center text-center mt-3">
          <UpValueIcon />
          <p className="text-[#3DCC43] pl-1 text-sm">4.67 (+2.22%)</p>
          <p className="text-[#CCCED5] text-sm pl-2">past 24 hours</p>
        </div>
      </div>

      <div className="bg-[#1C2642] flex flex-col rounded-2xl  mt-5 p-24px w-full ">
        <p className="text-lg font-bold text-white">Total Income</p>
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="font-bold text-3xl text-white mt-6">$214.65</h1>
            <div className="flex items-center text-center mt-3">
              <UpValueIcon />
              <p className="text-[#3DCC43] pl-1 text-sm">4.67 (+2.22%)</p>
              <p className="text-[#CCCED5] text-sm pl-2">past 24 hours</p>
            </div>
          </div>
          <AreaChart
            height={28}
            width={100}
            color1={"#0F9663"}
            color2={"#0F9663"}
          />
        </div>
      </div>

      <div className="bg-[#1C2642] flex flex-col rounded-2xl  mt-5 p-24px w-full ">
        <p className="text-lg font-bold text-white">Total Income</p>
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="font-bold text-3xl text-white mt-6">$214.65</h1>
            <div className="flex items-center text-center mt-3">
              <UpValueIcon />
              <p className="text-[#3DCC43] pl-1 text-sm">4.67 (+2.22%)</p>
              <p className="text-[#CCCED5] text-sm pl-2">past 24 hours</p>
            </div>
          </div>
          <AreachartLoss height={28} width={100} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioValuesCard;
