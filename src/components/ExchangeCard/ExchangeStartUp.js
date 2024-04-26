import React from "react";
import StarIcon from "../Icons/StarIcon";
import UpValueIcon from "../Icons/UpValueIcon";

const ExchangeStartUp = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 ">
      <div className="bg-[#1C2642] md:w-[70%]   rounded-2xl  p-24px mt-5 ">
        <div className="flex  md:gap-0 md:flex-row flex-col gap-4 md:justify-between">
          <div className="flex gap-4">
            <div>
              <img src="/images/google.png" alt="" className="" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[24px] font-bold font-manrope text-[#FFFFFF]">
                Startup Name
              </p>
              <div>
                <div className="flex ">
                  <p className="text-[#CCCED5] font-manrope text-[12px]">
                    Sector(s):
                  </p>
                  <p className="text-[#FFFFFF] font-manrope font-semibold text-[12px]">
                    Consumer Cyclical
                  </p>
                </div>
                <div className="flex ">
                  <p className="text-[#CCCED5] font-manrope text-[12px]">
                    Industry:
                  </p>
                  <p className="text-[#FFFFFF] font-manrope font-semibold text-[12px]">
                    Auto Manufacturers
                  </p>
                </div>
                <div className="flex ">
                  <p className="text-[#CCCED5] font-manrope  text-[12px]">
                    Location:
                  </p>
                  <p className="text-[#FFFFFF] font-manrope font-semibold text-[12px]">
                    United States
                  </p>
                </div>
              </div>
              <p className="text-[#439CFF] font-manrope font-semibold text-[14px]">
                https://www.website.com
              </p>
              <div className="flex items-center gap-2 rounded-full border border-[#4C546C] px-3  w-[200px] h-10 justify-center">
                <StarIcon />
                <p className="text-[#E5E7EA] text-[12px] font-manrope font-semibold">
                  Add to Watchlist
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#FF4045] font-manrope font-semibold text-[12px]">
            Claim Company
          </p>
        </div>
        <div className="flex md:flex-row w-full  flex-col pt-24px gap-6">
          {[...Array(3)].map((_, i) => (
            <div className="flex gap-6">
              <div className="flex flex-col w-full items-center border-b pb-5 md:pb-0 md:border-none gap-4">
                <p className="text-[#CCCED5] text-[14px] font-manrope">
                  Market Capitalization
                </p>
                <p className="text-[#FFFFFF] font-manrope text-[24px] font-bold">
                  9,000.00
                </p>
              </div>
              {i !== 2 && (
                <div className="border-l-2 md:block hidden border-[#FFFFFF]" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#1C2642]  rounded-2xl  md:w-[30%] p-24px mt-5 ">
        <p className="text-[18px] text-[#FFFFFF] font-manrope font-bold">
          Order Books
        </p>
        <div className="flex justify-between border-b py-3">
          {["Shares", "Price", "Symbol", "Status"].map((v) => (
            <p className="text-[#CCCED5] text-[12px] font-manrope">{v}</p>
          ))}
        </div>
        <div className="h-[200px] overflow-y-auto">
          {[...Array(12)].map((_, i) => (
            <div className="flex justify-between border-b border-[#333C57] py-2">
              <div className="flex items-center text-center ">
                <UpValueIcon />
                <p className="text-[#3DCC43] pl-1 text-sm">+2.22%</p>
              </div>
              <p className="text-[12px] font-manrope font-medium text-[#FFFFFF]">
                $1.00
              </p>
              <p className="text-[12px] font-manrope font-medium text-[#FFFFFF]">
                $1.00
              </p>
              <p className="text-[12px] font-manrope font-medium text-[#FFFFFF]">
                $1.00
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeStartUp;
