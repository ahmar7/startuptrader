import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CrossIcon from "../Icons/CrossIcon";
import LockIcon from "../Icons/LockIcon";
import { PlusIcon } from "../Icons/PlusIcon";

export default function BuyMoreModal() {
  const [isOpen, setIsModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsModal(true)}
        className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-manrope text-white text-sm h-[32px] w-[86px] px-1 rounded-full shadow-md transition-all duration-300 ease-in-out"
      >
        Buy more
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          onClose={() => setIsModal(true)}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block w-[400px]  px-6 py-7 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#171F38] border border-[#4C546C] shadow-xl rounded-2xl sm:my-5 sm:align-middle sm:max-w-7xl">
                <div className="flex justify-between items-center">
                  <div></div>
                  <h1 className="text-[#FFFFFF] font-manrope text-[24px]">
                    Buy more funds
                  </h1>
                  {/* <Image
                    src="/images/cross-gray.png"
                    alt=""
                    width={34}
                    height={34}
                    onClick={() => setIsModal(false)}
                    className=" top-5 right-5 cursor-pointer"
                  /> */}
                  <CrossIcon onClick={() => setIsModal(false)} />
                </div>
                <div className="flex justify-center items-center gap-2 pt-2">
                  <LockIcon />
                  <p className="text-[#FFFFFF] font-manrope text-[12px]">
                    100% secure
                  </p>
                </div>
                <p className="flex justify-center items-center gap-2 pt-2 text-[#0062FF] font-manrope font-bold text-[24px]">
                  8:56
                </p>
                <p className="flex justify-center items-center gap-2 pt-2 text-[#FFFFFF] border-b  pb-4 font-manrope  text-[12px]">
                  Limited Time Offer
                </p>
                <input
                  type="text"
                  placeholder="Select currency amount"
                  className="h-10 mt-5 border border-[#4C546C] bg-transparent outline-none pl-4 text-white placeholder:text-sm rounded-full w-full placeholder:text-[#CCCED5]"
                />

                <div className="flex gap-4 items-center mt-5 border-b pb-4 ">
                  <input type="radio" className="w-4 h-4" />
                  <img src="/images/v0.png" alt="" className="" />
                  <div className="font-manrope  text-[#FFFFFF] text-[10px]">
                    <p>**** **** **** 0101</p>
                    <p>*Expiration Date: 01/2025</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center mt-5 border-b pb-4 ">
                  <input type="radio" className="w-4 h-4" />
                  <img src="/images/v1.png" alt="" className="" />
                  <div className="font-manrope  text-[#FFFFFF] text-[10px]">
                    <p>**** **** **** 0101</p>
                    <p>*Expiration Date: 01/2025</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2 mt-5">
                  <PlusIcon />
                  <p className="text-[12px] font-manrope text-[#439CFF] font-semibold">
                    Add Payment Method
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="h-10 mt-5 border border-[#4C546C] bg-transparent outline-none pl-4 text-white placeholder:text-sm rounded-full w-full placeholder:text-[#CCCED5]"
                />
                <input
                  type="text"
                  placeholder="Card Number*"
                  className="h-10 mt-5 border border-[#4C546C] bg-transparent outline-none pl-4 text-white placeholder:text-sm rounded-full w-full placeholder:text-[#CCCED5]"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="CVV*"
                    className="h-10 mt-5 border border-[#4C546C] bg-transparent outline-none pl-4 text-white placeholder:text-sm rounded-full w-full placeholder:text-[#CCCED5]"
                  />
                  <input
                    type="text"
                    placeholder="MM / YY*"
                    className="h-10 mt-5 border border-[#4C546C] bg-transparent outline-none pl-4 text-white placeholder:text-sm rounded-full w-full placeholder:text-[#CCCED5]"
                  />
                </div>
                <button
                  onClick={() => setIsModal(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-manrope text-white text-sm h-[40px] w-full mt-5 px-1 rounded-full shadow-md transition-all duration-300 ease-in-out"
                >
                  Purchase
                </button>
                <div className="flex justify-center items-center gap-1 mt-5">
                  {[...Array(5)].map((_, i) => (
                    <img src={`/images/b${i}.png`} alt="" className="" />
                  ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
