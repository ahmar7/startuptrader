import React from "react";
import ClientLayout from "../../layout/ClientLayout/ClientLayout";
import NavbarClient from "../../components/Navbar/NavbarClient";
import Footer from "../../components/Footer/Footer";
const Conatct = () => {
  return (
    <div className="privacy-pg mn-e">
      <NavbarClient />
      <div className="bg-[#171F38]">
        <div className=" lg:pt-[80px] sm:pt-[100px] section-width">
          <div className="flex  w-full h-screen flex-col justify-center items-center   ">
            <div className="border border-[#4C546C] p-8 w-full md:w-[60%] flex flex-col justify-center text-center items-center rounded-2xl">
              <p className="text-[#FFFFFF] text-[32px]  font-manrope font-bold">
                Contact us
              </p>
              <p className="text-[#CCCED5] text-[16px] w-[300px] font-manrope">
                Send us a message and we will get back to you as soon as we can.
              </p>
              <div className="flex w-full gap-4 py-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-10 border border-[#4C546C] bg-transparent outline-none focus:outline-none pl-4 text-white placeholder:text-[12px] rounded-full w-full placeholder:text-[#CCCED5] placeholder:font-manrope "
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-10 border border-[#4C546C] bg-transparent outline-none focus:outline-none pl-4 text-white placeholder:text-[12px] rounded-full w-full placeholder:text-[#CCCED5] placeholder:font-manrope "
                />
              </div>
              <input
                type="text"
                placeholder="Email"
                className="h-10 border  border-[#4C546C] bg-transparent outline-none focus:outline-none pl-4 text-white placeholder:text-[12px] rounded-full w-full placeholder:text-[#CCCED5] placeholder:font-manrope "
              />
              <input
                type="text"
                placeholder="Message"
                className="h-28 border mt-5 border-[#4C546C] bg-transparent outline-none focus:outline-none pl-4 text-white placeholder:text-[12px] rounded-xl w-full placeholder:text-[#CCCED5] placeholder:font-manrope "
              />

              <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-manrope text-white text-sm h-[44px] mt-8 w-full px-1 rounded-full shadow-md transition-all duration-300 ease-in-out">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Conatct;
