import React from "react";
import NavbarClient from "../../components/Navbar/NavbarClient";
import Footer from "../../components/Footer/Footer";
const Press = () => {
  return (
    <div className="privacy-pg min-e">
      <NavbarClient />
      <div className="bg-[#171F38]">
        <div className=" lg:pt-[150px] sm:pt-[100px] section-width">
          <div className="flex  w-full  flex-col justify-center items-center ">
            <p className="text-[#FFFFFF] text-[32px]  font-manrope font-bold">
              StartupTrader Press
            </p>
            <p className="text-[#666D81] text-[16px] font-manrope">
              Press materials
            </p>
          </div>
          <div className="flex  w-full  flex-col   ">
            <div className="py-5">
              <p className="text-[#FFFFFF] text-[24px] font-bold font-manrope">
                Press materials
              </p>
              <p className="text-[#CCCED5] lg:w-[600px] pt-4 text-[16px] font-manrope">
                StartupTrader delivers a simple interface that makes building a
                website easy.In just three clicks, you can have a beautiful
                website thats ready to publish.
              </p>
            </div>

            <div className="py-5">
              <p className="text-[#FFFFFF] text-[24px] font-bold font-manrope">
                Want to talk to us?
              </p>
              <p className="text-[#CCCED5] lg:w-[600px] pt-4 text-[16px] font-manrope">
                Please contact us if you have any questions.
              </p>
              <p className="text-[#CCCED5] text-[16px] font-manrope">
                You can also find us on{" "}
                <a
                  href="https://www.facebook.com/yourFacebookPage"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>{" "}
                and{" "}
                <a
                  href="https://www.twitter.com/yourTwitterHandle"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Press;
