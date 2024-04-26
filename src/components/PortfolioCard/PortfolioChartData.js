import React, { useState } from "react";
import UpValueIcon from "../Icons/UpValueIcon";
import { PortfolioChart } from "../Chart/PortfolioChart";
import SendIcon from "../Icons/SendIcon";

const PortfolioChartData = () => {
  const [searchDay, setSearchDay] = useState("24H");

  return (
    <div className="flex flex-col lg:flex-row gap-4 ">
      <div className="bg-[#1C2642] flex-grow rounded-2xl  mt-5 p-24px">
        <div className="flex md:justify-between md:gap-0 gap-4 md:flex-row flex-col  md:tems-center">
          <p className="font-bold text-xl lg:text-2xl text-white">$12.5</p>
          <div className="flex items-center md:mb-0 mb-5 md:gap-2">
            {["24H", "5D", "1M", "YTP", "1Y", "2Y", "5Y", "ALL"].map((v) => (
              <p
                key={v}
                onClick={() => setSearchDay(v)}
                className={`text-xs lg:text-sm px-2 py-1 cursor-pointer ${
                  searchDay === v
                    ? "text-[#439CFF] border border-[#439CFF] rounded-full text-center"
                    : "text-[#CCCED5]"
                }`}
              >
                {v}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center my-3">
          <UpValueIcon />
          <p className="text-[#3DCC43] pl-1 text-sm font-normal">2.56%</p>
        </div>
        <PortfolioChart />
      </div>
      <div className="bg-[#1C2642] rounded-2xl  flex-grow lg:flex-grow-0 lg:w-1/3 mt-5 p-24px">
        <p className="text-white font-bold text-lg pb-5">User Submitted News</p>
        <div
          className="flex flex-col gap-24px overflow-y-auto"
          style={{ maxHeight: "400px" }}
        >
          {[...Array(5)].map((_, i) => (
            <div key={i}>
              <div className="flex gap-3">
                <img
                  src="/images/Avatar.png"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-white font-semibold text-sm">John Doe</p>
                  <p className="text-[#CCCED5] text-xs">8:17 AM</p>
                </div>
              </div>
              <p className="text-[#CCCED5] text-sm py-3 border-b">
                Apple stocks seem to be holding steady despite the market
                fluctuations. Their recent product launches might have a
                positive impact on the stock performance.
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-3 pt-24px items-center">
          <input
            type="text"
            placeholder="Add Post"
            className="h-10 border border-[#4C546C] bg-transparent outline-none pl-4 text-white placeholder:text-sm rounded-full w-full placeholder:text-[#CCCED5]"
          />
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 font-manrope text-white text-sm h-10 w-12 flex justify-center items-center rounded-full shadow-md transition-all duration-300 ease-in-out">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioChartData;
