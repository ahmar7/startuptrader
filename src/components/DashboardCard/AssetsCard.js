import React, { useState } from "react";
import UnfoldMoreIcon from "../Icons/UnfoldMoreIcon";
import DownIcon from "../Icons/DownIcon";
import { AreaChart } from "../Chart/Areachart";
import UpValueIcon from "../Icons/UpValueIcon";

const AssetsCard = () => {
  const [searchDay, setSearchDay] = useState("24H");
  const [investSearch, setInvestSearch] = useState("Investments");

  return (
    <div className="bg-[#1C2642] font-manrope flex flex-col mt-5 rounded-2xl  w-full p-24px">
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 md:justify-between">
        <p className="font-bold text-lg text-white">Assets</p>
        <div className="flex gap-2">
          {["24H", "5D", "1M", "YTP", "1Y", "2Y", "5Y", "ALL"].map((v) => (
            <p
              key={v}
              onClick={() => setSearchDay(v)}
              className={`text-sm px-2 py-1 cursor-pointer ${
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
      <div className="flex flex-wrap gap-4 my-4">
        {["Investments", "Recent investments", "Watchlist"].map((v) => (
          <p
            key={v}
            onClick={() => setInvestSearch(v)}
            className={`text-sm px-2 py-2 cursor-pointer ${
              investSearch === v
                ? "bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-center text-white"
                : "text-[#CCCED5]"
            }`}
          >
            {v}
          </p>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="h-12">
            <tr>
              <th className="text-sm font-normal text-[#CCCED5] text-left px-4">
                Startup Name
              </th>
              <th className="text-sm font-normal text-[#CCCED5] text-left px-4">
                <div className="flex items-center gap-2">
                  <p>Industry</p>
                  <UnfoldMoreIcon />
                </div>
              </th>
              <th className="text-sm font-normal text-[#CCCED5] text-left px-4">
                <div className="flex items-center gap-2">
                  <p>Total Value</p>
                  <UnfoldMoreIcon />
                </div>
              </th>
              <th className="text-sm font-normal text-[#CCCED5] text-left px-4">
                <p>Price chart</p>
              </th>
              <th className="text-sm font-normal text-[#CCCED5] text-left px-4">
                <div className="flex items-center gap-2">
                  <p>Change</p>
                  <DownIcon />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="border-t border-[#333C57]">
            {[...Array(6)].map((_, i) => (
              <tr key={i} className="border-b border-b-[#333C57]">
                <td className="py-3  px-4">
                  <div className="flex gap-2 w-40 items-center">
                    <img
                      src={`/images/c${i}.png`}
                      alt=""
                      className=" w-6 h-6 md:w-10 md:h-10 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-sm text-white">
                        Company name
                      </p>
                      <p className="text-xs font-normal text-[#CCCED5]">
                        2 shares
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-sm text-white font-medium px-4">
                  Public administration
                </td>
                <td className="text-sm text-white font-bold px-4">
                  $23,447.64
                </td>
                <td className="px-4">
                  <AreaChart
                    height={28}
                    width={100}
                    color1={"#0F9663"}
                    color2={"#0F9663"}
                  />
                </td>
                <td className="px-4">
                  <div className="flex items-center">
                    <UpValueIcon />
                    <p className="text-[#3DCC43] pl-1 text-sm font-normal">
                      2.56%
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetsCard;
